import { v } from "convex/values";
import {mutation, query} from "./_generated/server";
import { Id } from "./_generated/dataModel";

export const createPurchase = mutation({
    args: {
        userId: v.id("users"),
        stripeCustomerId: v.string(),
        amount: v.number(),
        courseId: v.string()
    },
    handler: async(ctx,args)=>{
       const purchase = await ctx.db.insert("purchase", {
        amount: args.amount,
        courseId: args.courseId,
        purchaseDate: Date.now(),
        user_id: args.userId
       })
    }
})

export const getPurchase = query({
    args: {},
    handler: async(ctx,args)=>{
        const identity = await ctx.auth.getUserIdentity();
        if(!identity) return null
        const user = await ctx.db.query("users").withIndex("by_clerkId", q=>q.eq("clerkId",identity.subject)).unique()
        if(!user) return null;

        const purchase = await ctx.db.query("purchase").withIndex("by_userId", q => q.eq("user_id",user._id )).collect()

        if(!purchase) return;

        return purchase.map(i => i.courseId)

    }
})