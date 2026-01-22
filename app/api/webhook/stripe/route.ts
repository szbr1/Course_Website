import {stripe} from "@/lib/stripe";
import Stripe from "stripe";
import {api} from "@/convex/_generated/api";
import { NextResponse, NextRequest } from "next/server";
import { Id } from "@/convex/_generated/dataModel";
import { ConvexHttpClient } from "convex/browser";


const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
export async function POST(req:NextRequest){
    try {

        // Get Details 
        const body = await req.text();
        const signature = req.headers.get("Stripe-Signature")

        if(!body || !signature) {
            return NextResponse.json({message: "hook credentials are missign"},{status:400})
        };


        let evt: Stripe.Event;

        try {
            evt =  stripe.webhooks.constructEvent(body,signature,process.env.STRIPE_WEBHOOK_SECRET!)
        } catch (error) {
            console.error(error)
            return NextResponse.json({message: "Hook Verification Failed"})
        }
       
        switch (evt.type) {
            case "checkout.session.completed": await handleCheckoutSession(evt.data.object)
                break;
            case "customer.subscription.created": 
            case "customer.subscription.updated":
                 await handleSubscriptionCheckout(evt.data.object as Stripe.Subscription)
                 break;
                  
        
            default: console.log(`Unhandled event type: ${evt.type}`);
                break;
        }

      return  NextResponse.json({message: "success"})

        
    } catch (error) {
        console.error(error)
        return NextResponse.json({message: "Server error"})
    }
} 




const handleCheckoutSession = async (session: Stripe.Checkout.Session)=>{

    const courseId = session.metadata?.courseId
    const stripeCustmerPaymentId = session.customer;

    if(!courseId || !stripeCustmerPaymentId){
        return null
    }

    const user = await convex.query(api.users.getUserWithStripeId, {stripeCustomerId: stripeCustmerPaymentId as string});
    await convex.mutation(api.purchase.createPurchase, {
        amount: session.amount_total as number,
        courseId: courseId,
        stripeCustomerId: stripeCustmerPaymentId.toString(),
        userId: user._id as Id<"users">
    })
    

}


const handleSubscriptionCheckout = async(subscription: Stripe.Subscription)=>{

    if (subscription.status !== "active" || !subscription.latest_invoice) {
		console.log(`Skipping subscription ${subscription.id} - Status: ${subscription.status}`);
		return;
	}
    
  const userId = subscription.metadata?.user_id;
  const type = subscription.metadata?.type;

  if(!userId || !type){
    console.error("Error occured")
    return
  }
  
  const item = subscription.items.data[0];
  if (!item) throw new Error("Subscription item missing");
  const startAt = item.current_period_start;
  const endAt=item.current_period_end;

  await convex.mutation(api.subscription.createSubscriptionCheckout, {
    amount: item.price.unit_amount as number,
    endAt: endAt * 1000,
    startAt: startAt * 1000,
    planType: type as "month" | "year",
    subscriptionId: subscription.id,
    userId: userId as Id<"users">
  })
}