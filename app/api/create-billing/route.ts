import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { auth } from "@clerk/nextjs/server";

export const POST = async () => {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  if (!convex) return NextResponse.json("Database Error");
  const { userId } = await auth();
  if (!userId) return NextResponse.json("Unathorized User");

  try {
    const user = await convex.query(api.users.getUserWithClerkId, {
      clerkId: userId as string,
    });
    if (!user) return NextResponse.json("Clerk User not Found");

    const session = await stripe.billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: `${process.env.NEXT_PUBLIC_URL}/billing`,
    });
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Server error", { status: 500 });
  }
};
