import { ConvexError, v } from "convex/values";
import { action } from "./_generated/server";
import { api } from "./_generated/api";
import { stripe } from "@/lib/stripe";

export const createCheckout = action({
  args: {
    courseId: v.id("courses"),
  },
  handler: async (ctx, args): Promise<{ checkoutUrl: string | null }> => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unathorized");
    const course = await ctx.runQuery(api.course.getCourseById, {
      courseId: args.courseId,
    });
    if (!course) throw new Error("Course is not vaild");
    const user = await ctx.runQuery(api.users.getUserWithClerkId, {
      clerkId: identity.subject,
    });
    if (!user) throw new Error("User not verified");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer: user.stripeCustomerId,
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: course.title,
              images: [`${process.env.NEXT_PUBLIC_URL}${course.image}`],
              description: course.description,
            },
            unit_amount: Math.round(course.price * 100),
          },
          quantity: 1,
        },
      ],
      metadata: {
        courseId: args.courseId,
      },
      success_url: `${process.env.NEXT_PUBLIC_URL}/course/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/course/failed`,
    });

    return { checkoutUrl: session.url };
  },
});

export const createSubscriptionCheckout = action({
  args: {
    type: v.union(v.literal("month"), v.literal("year")),
  },
  handler: async (ctx, args):Promise<{checkoutUrl: string | null}> => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new ConvexError("Unathorized");
    const user = await ctx.runQuery(api.users.getUserWithClerkId, {
      clerkId: identity.subject,
    });
    if (!user) throw new ConvexError("Invalid Credentials Can't Subscribe");
    
    let priceId;
   if(args.type === "month"){
     priceId = process.env.STRIPE_MONTH_SECRET;
   }else if(args.type === "year"){
     priceId = process.env.STRIPE_YEAR_SECRET
   }

    if(!priceId){
        throw new ConvexError("Subscription plan type is invalid")
    }

    if(!user.stripeCustomerId){
        throw new ConvexError("Invalid Config Account")
    }

    const session = await stripe.checkout.sessions.create({
        customer: user.stripeCustomerId,
        mode: "subscription",
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
        subscription_data: {
          metadata: {
            user_id: user._id,
            type: args.type
        },
        },
        success_url: `${process.env.NEXT_PUBLIC_URL}/pro/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/pro/failed`,
    });

    return {checkoutUrl: session.url}
  },
});
