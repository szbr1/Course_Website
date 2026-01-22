"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbf8ef] px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto space-y-28">

        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-nunito text-[#243447]">
            Built for Learners.
            <span className="block">Trusted by Professionals.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
            We create modern learning experiences and transparent certifications
            designed to help you grow real, job-ready skills with confidence.
          </p>
        </section>

        {/* Mission / Vision */}
        <section className="grid lg:grid-cols-2 gap-12">
          <div className="bg-[#fffdf6] rounded-3xl p-10 border-2 border-blue/80 shadow-[6px_6px_0px_#243447]">
            <h2 className="text-2xl font-bold text-[#243447] mb-4">Our Mission</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Our mission is to empower learners with practical, industry-ready
              skills through thoughtfully designed courses and clear,
              honest certification systems.
            </p>
          </div>

          <div className="bg-[#fffdf6] rounded-3xl border-2 border-blue/80 p-10 shadow-[6px_6px_0px_#243447]">
            <h2 className="text-2xl font-bold  text-[#243447] mb-4">Our Vision</h2>
            <p className="text-[#6b7280] leading-relaxed">
              We envision a world where skills matter more than titles, and
              learning is accessible, transparent, and respected globally.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="space-y-14">
          <h2 className="text-3xl font-bold text-center text-[#243447]">
            What We Stand For
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                desc: "Every course is built with depth, clarity, and purpose."
              },
              {
                title: "Radical Transparency",
                desc: "No misleading claims. No fake verifications. Ever."
              },
              {
                title: "Learner-Centric",
                desc: "Our platform is shaped around how people actually learn."
              },
              {
                title: "Modern Tech",
                desc: "We teach what the industry uses today — not yesterday."
              },
              {
                title: "Trust & Integrity",
                desc: "Certifications should earn trust, not demand it."
              },
              {
                title: "Continuous Growth",
                desc: "Learning doesn’t stop — and neither do we."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#fffdf6] border-2 border-blue/80 rounded-2xl p-8 shadow-[6px_6px_0px_#243447] hover:-translate-y-1 transition-transform"
              >
                <h3 className="text-lg font-semibold text-[#243447] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certificate Trust */}
        <section className="bg-[#fff7ed] border-2 border-blue/80 rounded-3xl p-12 text-center shadow-[6px_6px_0px_#243447]">
          <h2 className="text-2xl font-bold text-[#243447] mb-4">
            Certificate Transparency
          </h2>
          <p className="text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
            Every certificate issued can be checked using a unique Course ID.
            If a certificate is not verified, it simply means no matching
            record exists — ensuring clarity, honesty, and trust.
          </p>
        </section>

      </div>
    </main>
  );
}
