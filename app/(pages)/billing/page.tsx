"use client";

import { useToast } from "@/components/ui/toast";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Link from "next/link";
import { FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaClock } from "react-icons/fa";

export default function BillingPage() {
  const subscription = useQuery(api.subscription.getSubscription);
  const {showToast} = useToast()

  const handleManageSubscription = async() => {
   const billing = await fetch("/api/create-billing", {method: "POST"});
   if(billing){
    const {url} = await billing.json();
    window.location.href = url
   }else{
     showToast("Invalid", "error")
   }
  
  };

  const handleViewPlans = () => {
    // Logic to be added later
  };

  return (
    <main className="min-h-screen bg-[#fbf8ef] flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full bg-[#fffdf6] rounded-3xl border-2 border-[#243447] shadow-[6px_6px_0px_#243447] p-12 space-y-8">
        
        <h1 className="text-4xl font-extrabold text-[#243447] text-center">
          Billing & Subscription
        </h1>

        {subscription ? (
          <div className="space-y-6">
            {/* Status */}
            <div className="flex items-center gap-3 text-lg">
              {subscription.isActive ? (
                <FaCheckCircle className="text-green-500 text-2xl" />
              ) : (
                <FaTimesCircle className="text-red-500 text-2xl" />
              )}
              <span className="font-semibold text-[#243447]">
                {subscription.isActive ? "Active Subscription" : "Inactive Subscription"}
              </span>
            </div>

            {/* Plan Type */}
            <div className="flex items-center gap-3 text-lg">
              <FaClock className="text-[#243447] text-xl" />
              <span className="text-[#243447] font-medium">
                Plan: {subscription.planType === "month" ? "Monthly" : "Yearly"}
              </span>
            </div>

            {/* Start & End Dates */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex items-center gap-2 text-[#6b7280]">
                <FaCalendarAlt /> 
                <span>Start: {new Date(subscription.startAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-[#6b7280]">
                <FaCalendarAlt /> 
                <span>End: {new Date(subscription.endAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button
                onClick={handleManageSubscription}
                className="rounded-xl bg-[#243447] cursor-pointer text-white px-8 py-3 font-medium hover:opacity-90 transition"
              >
                Manage Subscription
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-center">
            <p className="text-[#243447] text-lg font-medium">
              You currently do not have an active subscription.
            </p>
            <p className="text-[#6b7280]">
              Explore our plans and choose the one that fits your needs.
            </p>
            <div className="flex justify-center pt-4">
              <Link href="/subscription"
                onClick={handleViewPlans}
                className="rounded-xl bg-[#243447] text-white px-8 py-3 font-medium hover:opacity-90 transition"
              >
                View Plans
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
