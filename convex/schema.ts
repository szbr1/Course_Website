import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
   users: defineTable({
      name: v.string(),
      email: v.string(),
      clerkId: v.string(),
      imageUrl: v.string(),
   }).index("by_clerkId", ["clerkId"]),
   courses :   defineTable({
      image: v.string(),
      rating: v.number(),
      title: v.string(),
      description: v.string(),
      enrolledCount: v.number()
    })
})