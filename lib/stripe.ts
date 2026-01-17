import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET!,{
    apiVersion: "2025-12-15.clover"
})