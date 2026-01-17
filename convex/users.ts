import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    clerkUserId: v.string(),
    email: v.string(),
    name: v.string(),
    imageUrl: v.string(),
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
    });

    return userId;
  },
});
