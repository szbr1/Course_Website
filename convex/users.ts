import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    clerkUserId: v.string(),
    email: v.string(),
    name: v.string(),
    imageUrl: v.string(),
    stripeCustomerId: v.string()
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) =>
        q.eq("clerkId", args.clerkUserId)
      )
      .unique();

    if (existingUser) {
      return existingUser._id;
    }

    // Create new user
    const userId = await ctx.db.insert("users", {
      clerkId: args.clerkUserId,
      email: args.email,
      name: args.name,
      imageUrl: args.imageUrl,
      stripeCustomerId: args.stripeCustomerId
    });

    return userId;
  },
});

export const getUserWithClerkId = query({
  args: {
    clerkId: v.string()
  },
  handler: async(ctx,args)=>{
    const user = await ctx.db.query("users").withIndex("by_clerkId", q => q.eq("clerkId", args.clerkId)).unique();

    if(!user) throw new Error ("Unathorized Clerk User");
    return user
  }
})


export const getUserWithStripeId = query({
  args: {
    stripeCustomerId: v.string()
  },
  handler: async(ctx,args)=>{
    const user = await ctx.db.query("users").withIndex("by_stripeCustomerId", q => q.eq("stripeCustomerId", args.stripeCustomerId)).unique();

    if(!user) throw new Error ("Unathorized Stripe Customer Id");
    return user
  }
})

export const getUserWithSubscriptionId = query({
  args: {
    subscriptionId: v.string()
  },
  handler: async(ctx,args)=>{
    const user = await ctx.db.query("users").withIndex("by_subscriptionId", q => q.eq("subscriptionId", args.subscriptionId)).unique();

    if(!user) throw new Error ("Unathorized Stripe Customer Id");
    return user
  }
})