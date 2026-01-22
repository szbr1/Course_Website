import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createSubscriptionCheckout = mutation({
  args: {
    startAt: v.number(),
    endAt: v.number(),
    planType: v.union(v.literal("month"), v.literal("year")),
    userId: v.id("users"),
    amount: v.number(),
    subscriptionId: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.userId);
    if (!user) throw new Error("User not found");
    const subscription = await ctx.db
      .query("subscription")
      .withIndex("by_subscriptionId", (q) =>
        q.eq("subscriptionId", args.subscriptionId),
      )
      .unique();

    if (subscription) {
      await ctx.db.patch(subscription._id, args);
    } else {
      await ctx.db.patch(user._id, {
        subscriptionId: args.subscriptionId,
      });
      await ctx.db.insert("subscription", args);
    }

    return { success: true };
  },
});

export const getSubscription = query({
  args: {},
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
      .unique();

    if (!user) return null;

    if (!user.subscriptionId)
      return null;

    const subscripton = await ctx.db
      .query("subscription")
      .withIndex("by_subscriptionId", (q) =>
        q.eq("subscriptionId", user.subscriptionId as string),
      )
      .unique();

    if (!subscripton) return null;
    return {
      isActive: subscripton.endAt > Date.now(),
      planType: subscripton.planType,
      startAt: subscripton.startAt,
      endAt: subscripton.endAt,
    };
  },
});
