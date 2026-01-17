"use client"
import { FAQ_DATA } from "@/constants/faq";
import { cn } from "@/lib/utils";
import { Cross } from "lucide-react";
import React, { useState } from "react";

function Faq() {
    const [hasAnyQuestion, setHasAnyQuestion] = useState<number | null>(0) 
  return (
    <div className="flex justify-center items-center font-nunito flex-col gap-12 my-12 mb-18 p-3 sm:p-6 max-w-[1000px] mx-auto w-full">
      <div className="max-w-[900px] mx-auto flex flex-col gap-3 ">
        <h1 className="text 2xl md:text-3xl lg:text-4xl font-bold text-center">
          Frequently asked questions
        </h1>
        <p className="text-xs md:text-sm text-center">
          We have answered all the most frequently asked question of our
          comunity our here.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:gap-6 w-full">
        {FAQ_DATA.map((f, i) => {
            let id = i === hasAnyQuestion
         return <div
            className="rounded-md select-none  bg-white relative z-40 border-2 border-blue flex flex-col gap-2 shadow-[6px_6px_0px_#334456] transition-all duration-300 px-2 p-3 md:px-3 lg:px-4"
            key={i}
          >
            <div onClick={()=> {
                id ?  setHasAnyQuestion(null) : setHasAnyQuestion(i)
            }} className="flex cursor-pointer justify-between items-center ">
              <h1 className="text-lg md:text-2xl font-bold">{f.question}</h1>
              <Cross size={23} />
            </div>
            <p className={cn("text-sm md:text-base " , id ? "block": "hidden")}>{f.answer}</p>
          </div>
})}
      </div>
    </div>
  );
}

export default Faq;
