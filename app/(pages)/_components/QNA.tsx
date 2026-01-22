
"use client"
import { FAQ_DATA } from "@/constants/faq";

import React, { useState } from "react";

function QNA() {
      const [hasAnyQuestion, setHasAnyQuestion] = useState<number | null>(0) 
  
  return (
    <div className=" flex flex-col gap-20">

      <section className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold font-nunito text-blue">
            Questions & Answers
          </h1>
          <p className="text-[#6b7280] max-w-2xl mx-auto">
            Find quick answers to common questions about courses, certificates,
            and verification.
          </p>
        </section>
          <section className="space-y-6 max-w-[900px] w-full mb-40 mx-auto px-3">
          {FAQ_DATA.map((item, index) => {
            const open = hasAnyQuestion === index;
            return (
              <div
                key={index}
                className="bg-[#fffdf6] border-2 rounded-2xl shadow-[6px_6px_0px_#243447] overflow-hidden"
              >
                <button
                  onClick={() => setHasAnyQuestion(open ? null : index)}
                  className="w-full cursor-pointer text-left px-8 py-6 flex items-center justify-between"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#243447]">
                    {item.question}
                  </span>
                  <span className="text-2xl font-bold text-[#243447]">
                    {open ? "−" : "+"}
                  </span>
                </button>

                {open && (
                  <div className="px-8 pb-6 text-[#6b7280] leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </section>
    </div>


  );
}

export default QNA;
