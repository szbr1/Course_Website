"use client";
import { WebButton } from "@/components/ui/webButton";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";
import { useAction, useQuery } from "convex/react";
import React from "react";
import {
  FaCheck,
  FaInfinity,
  FaVideo,
  FaCertificate,
  FaHeadset,
  FaDownload,
  FaCrown,
  FaStar,
} from "react-icons/fa";
import { SubscriptionSkeleton } from "../_components/skeletons/SubscriptionSkeleton"
import { useRouter } from "next/navigation";
// Subscription Plans Constants
const SUBSCRIPTION_PLANS = [
  {
    id: "monthly",
    name: "Monthly Pro",
    description: "Perfect for short-term learning",
    price: 19,
    currency: "USD",
    period: "month",
    badge: null,
    popular: false,
    features: [
      { text: "Access to all premium courses", icon: FaVideo },
      { text: "Unlimited course enrollments", icon: FaInfinity },
      { text: "Download course materials", icon: FaDownload },
      { text: "Course completion certificates", icon: FaCertificate },
      { text: "Priority email support", icon: FaHeadset },
    ],
    buttonText: "Subscribe Monthly",
  },
  {
    id: "yearly",
    name: "Yearly Pro",
    description: "Best value for committed learners",
    price: 249,
    currency: "USD",
    period: "year",
    badge: "Save 30%",
    popular: true,
    features: [
      { text: "Access to all premium courses", icon: FaVideo },
      { text: "Unlimited course enrollments", icon: FaInfinity },
      { text: "Download course materials", icon: FaDownload },
      { text: "Course completion certificates", icon: FaCertificate },
      { text: "24/7 priority support", icon: FaHeadset },
      { text: "Early access to new courses", icon: FaStar },
    ],
    buttonText: "Subscribe Yearly",
  },
];

function Page() {
  const createSubscription = useAction(api.stripe.createSubscriptionCheckout);
  const subscription = useQuery(api.subscription.getSubscription);
  const router = useRouter()

  const handleSubscribe = async (plan: "month" | "year") => {
    const { checkoutUrl } = await createSubscription({ type: plan });
    if (checkoutUrl) {
      router.push(checkoutUrl);
    } else {
      alert("Something went wrong");
    }
  };

  if (subscription === undefined) {
    return <SubscriptionSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Learning Journey
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock unlimited access to premium courses and take your skills to
            the next level
          </p>
        </div>

        {/* Current Subscription Status */}
        {subscription?.isActive && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 text-white">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaCrown className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Active Subscription</h3>
                  <p className="text-green-50">
                    You&apos;re on the{" "}
                    <span className="font-semibold">
                      {subscription.planType === "month" ? "Monthly" : "Yearly"}
                    </span>{" "}
                    Pro plan
                  </p>
                  <p className="text-sm text-green-100 mt-1">
                    Renews on{" "}
                    {new Date(subscription.endAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {SUBSCRIPTION_PLANS.map((plan) => {
            const isCurrentPlan = subscription?.planType === plan.period;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={cn(
                  "relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
                  isPopular && "ring-2 ring-indigo-600",
                )}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl shadow-lg">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-300" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Save Badge */}
                {plan.badge && (
                  <div className="absolute top-4 left-4 bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h2>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-gray-500 text-lg">
                        /{plan.period}
                      </span>
                    </div>
                    {plan.period === "year" && (
                      <p className="text-sm text-green-600 font-medium mt-2">
                        That&apos;s just $20.75/month
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 group"
                      >
                        <div
                          className={cn(
                            "mt-0.5 p-2 rounded-lg transition-colors",
                            isPopular
                              ? "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200"
                              : "bg-gray-100 text-gray-600 group-hover:bg-gray-200",
                          )}
                        >
                          <feature.icon className="text-sm" />
                        </div>
                        <p className="text-gray-700 flex-1 leading-relaxed">
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <WebButton
                    onClick={() =>
                      handleSubscribe(plan.period as "month" | "year")
                    }
                    disabled={subscription?.isActive && isCurrentPlan}
                    variant={isPopular ? "primary" : "outline"}
                    className={cn(
                      "w-full py-4 text-lg font-semibold rounded-xl border border-zinc-300 transition-all duration-300",
                      isPopular &&
                        !isCurrentPlan &&
                        "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl",
                      isCurrentPlan &&
                        "bg-gray-100 text-gray-500 cursor-not-allowed",
                    )}
                  >
                    {isCurrentPlan ? (
                      <span className="flex items-center text-gray-500 justify-center gap-2">
                        <FaCheck /> Current Plan
                      </span>
                    ) : (
                      plan.buttonText
                    )}
                  </WebButton>
                </div>

                {/* Bottom Accent */}
                <div
                  className={cn(
                    "h-2",
                    isPopular
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                      : "bg-gray-200",
                  )}
                />
              </div>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="grid grid-cols-3 gap-8 py-8 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Premium Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                4.9/5
              </div>
              <div className="text-gray-600">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;