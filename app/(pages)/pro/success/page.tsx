"use client";

import Link from "next/link";

export default function SubscriptionSuccessPage() {
  return (
    <main className="min-h-screen bg-[#fbf8ef] flex items-center justify-center px-4 py-20">
      <div className="max-w-xl w-full bg-[#fffdf6] rounded-3xl border-2 border-[#243447] shadow-[6px_6px_0px_#243447] p-12 text-center space-y-6">
        <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-3xl font-bold">
          ✓
        </div>

        <h1 className="text-3xl font-extrabold text-[#243447]">
          Subscription Successful
        </h1>

        <p className="text-[#6b7280] leading-relaxed">
          Your subscription has been activated successfully. You now have
          full access to your selected plan and features.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/billing"
            className="rounded-xl bg-[#243447] text-white px-6 py-3 font-medium hover:opacity-90"
          >
            Go to Billing
          </Link>
          <Link
            href="/"
            className="rounded-xl border-2 border-[#243447] text-[#243447] px-6 py-3 font-medium hover:bg-[#243447]/5"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
