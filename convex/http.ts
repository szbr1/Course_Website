import { WebhookEvent } from "@clerk/nextjs/server";
import {stripe} from "../lib/stripe"
import { httpAction } from "./_generated/server";
import {httpRouter} from "convex/server"
import {Webhook} from "svix"
import { api } from "./_generated/api";

const webhooksecret = process.env.WEB_HOOK_SECRET as string;

const ClerkWebHook =  httpAction(async (ctx,request)=>{
    if(!webhooksecret){
        return new Response("Web hook secret is required");
    }

    // Clerk uses svix 
    
    const svix_id = request.headers.get("svix-id");
    const svix_timestamp = request.headers.get("svix-timestamp");
    const svix_signature = request.headers.get("svix-signature");

    if(!svix_id || !svix_timestamp || !svix_signature){
       return new Response("Headers are required for verification.")
    }

    const payload = await request.json();
    const body = JSON.stringify(payload);

    // lets verify the data of request;

    const wh = new Webhook(webhooksecret);
    let evt: WebhookEvent

    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-signature": svix_signature,
            "svix-timestamp": svix_timestamp
        }) as WebhookEvent
    } catch (error) {
        console.error(error)
        return new Response("Unoffical User entery")
    }

    // know lets get the data and save it into database
    if(evt.type === "user.created"){
        const name = `${evt.data.first_name} ${evt.data.last_name}`;
        const email = evt.data.email_addresses[0].email_address;
        const imageUrl = evt.data.image_url
        const clerkId = evt.data.id
    try {
        const customer = await stripe.customers.create({
            name,
            email,
            metadata: {clerkId}
        })

        await ctx.runMutation(api.users.createUser,{
            name,
            email,
            imageUrl,
            clerkUserId: clerkId,
            stripeCustomerId: customer.id
        } )
    } catch (error) {
        console.error(error)
        new Response("Server error")
    }
        
    }
      return new Response("successfully user created", {status:200})

})

// Create Http 

const http = httpRouter()

http.route({
    method: "POST",
    path: "/my-webhooks",
    handler: ClerkWebHook
})

export default http