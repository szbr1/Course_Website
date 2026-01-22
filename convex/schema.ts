import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({

   users: defineTable({
      name: v.string(),
      email: v.string(),
      clerkId: v.string(),
      stripeCustomerId: v.string(),
      imageUrl: v.string(),
      subscriptionId: v.optional(v.string())
   }).index("by_clerkId", ["clerkId"]).index("by_stripeCustomerId", ["stripeCustomerId"]).index("by_subscriptionId",["subscriptionId"]),

   courses :   defineTable({
      image: v.string(),
      rating: v.number(),
      title: v.string(),
      description: v.string(),
      price: v.number(),
      enrolledCount: v.number()
    }),

    purchase: defineTable({
      user_id: v.id("users"),
      amount: v.number(),
      courseId: v.string(),
      purchaseDate: v.number()
    }).index("by_userId", ["user_id"]),

    subscription: defineTable({
      startAt: v.number(),
      endAt: v.number(),
      planType: v.union(v.literal("month"), v.literal("year")),
      userId: v.id("users"),
      amount:v.number(),
      subscriptionId: v.string()
    }).index("by_subscriptionId", ["subscriptionId"])
    
})