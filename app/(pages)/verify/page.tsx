"use client";

import { useEffect, useState } from "react";

export default function VerifyCertificatePage() {
  const [courseId, setCourseId] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState<null | false>(null);

  const handleVerify = () => {
    if (!courseId.trim()) return;

    setLoading(true);
    setVerified(null);

    setTimeout(() => {
      // No database connected → always unverified
      setLoading(false);
      setVerified(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#fbf8ef]/40 relative z-10 flex items-center justify-center px-4">
      <div className="w-full max-w-xl border-2 border-[#243447] shadow-[6px_6px_0px_#243447] rounded-2xl bg-[#fffdf6] p-8 ">
        <h1 className="text-2xl font-semibold text-[#243447] mb-2 text-center">
          Certificate Verification
        </h1>
        <p className="text-sm text-[#6b7280] text-center mb-6">
          Enter your Course / Certificate ID below to verify authenticity.
        </p>

        {/* Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#243447] mb-1">
            Course ID
          </label>
          <input
            type="text"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            placeholder="e.g. CERT-2026-AX92"
            className="w-full rounded-lg border border-[#243447]/40 bg-transparent px-4 py-2 text-sm outline-none focus:border-[#243447]"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleVerify}
          className="w-full rounded-lg border-2 border-[#243447] bg-[#243447] text-white py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Verify Certificate
        </button>

        {/* Loader */}
        {loading && (
          <div className="flex flex-col items-center gap-3 mt-6">
            <div className="h-8 w-8 border-4 border-[#243447] border-t-transparent rounded-full animate-spin" />
            <p className="text-xs text-[#6b7280]">Verifying certificate…</p>
          </div>
        )}

        {/* Result */}
        {verified === false && !loading && (
          <div className="mt-6 text-center">
            <h2 className="text-lg font-semibold text-[#243447] mb-1">
              Certificate Not Verified
            </h2>
            <p className="text-sm text-[#6b7280] mb-4">
              This certificate ID could not be verified. Since this system is not
              connected to a database, all certificates are shown as unverified.
            </p>

            <div className="border border-dashed border-[#b45309] rounded-lg p-4 bg-[#fff7ed]">
              <p className="text-sm text-[#b45309] font-medium">⚠️ Verification Failed</p>
              <p className="text-xs text-[#6b7280] mt-1">
                Entered Course ID: <span className="font-mono">{courseId}</span>
              </p>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-sm font-semibold text-[#243447] mb-2">
            How to find your Course ID?
          </h3>
          <ul className="text-xs text-[#6b7280] space-y-1 list-disc list-inside">
            <li>Check your certificate — the Certificate ID is printed at the bottom.</li>
            <li>Search your email inbox for the course completion email.</li>
            <li>
              Still having trouble? Contact us at
              <span className="font-medium text-[#243447]"> support@yourdomain.com</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
