import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

function Promo() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 md:gap-9 lg:gap-12 max-w-[1220px] mx-auto">
      <h1 className="text-center font-nunito font-bold text-xl md:text-2xl lg:text-3xl">
        Watch our promo video
      </h1>
      <p className="text-center font-nunito font-light text-xs md:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing{" "}
      </p>

      <div className="w-full group h-40 md:h-70 lg:h-96 rounded-lg border-2 border-blue overflow-hidden shadow-[6px_6px_0_#334456]  relative">
        <img
          src={"/courses/1.png"}
          alt=""
          height={20}
          width={20}
          className="size-full object-cover"
        />
        <div className="size-full absolute top-0 right-0 group-hover:bg-black/50 flex justify-center items-center"></div>
        <div className="absolute top-1/2 left-1/2 -translate-1/2 rounded-full size-12 md:size-18 border-2 border-white flex items-center justify-center cursor-pointer">
          <Play  className="text-white size-6 md:size-10" />
        </div>
      </div>
    </div>
  );
}

export default Promo;
