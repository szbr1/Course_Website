import { WebButton } from "@/components/ui/webButton";
import React from "react";

function Pro() {
  return (
    <div className="flex justify-center w-full items-center h-screen font-nunito w-full flex-col gap-6 md:gap-10">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Simple Pricing
        </h1>
        <p className="text-center max-w-[600px] text-xs md:text-sm font-light">
          {" "}
          Star for free upgrade only when you need more.
        </p>
      </div>
      <div className="max-w-[900px] gap-5 md:gap-8 w-full mx-auto grid grid-cols-1 md:grid-cols-3">

        <div className="border-2 border-blue shadow-[6px_6px_0px_#334456] h-98 rounded-lg gap-2 bg-g w-full p-2 md:p-3 lg:p-5 flex flex-col">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Basic</h1>
          <p>For everyone</p>
          <div className="px-2 bg-green-100 rounded-full text-xs md:text-sm text-green-800">
            <p>You already have this</p>
          </div>
          <div className="text-xl md:text-2xl font-arimo lg:text-3xl font-bold">
            $0{" "}
            <span className="text-xs md:text-sm font-light opacity-80">
              / month
            </span>
          </div>

          <li className="flex flex-col gap-2 ">
            <ul>-Access free courses</ul>
            <ul>-Access free courses</ul>
            <ul>-Access free courses</ul>
            <ul>-Access free courses</ul>
            <ul>-Access free courses</ul>
          </li>
          <WebButton variant="outline"  className="rounded-md bg-blue/60 shadow-none">Activated</WebButton>
        </div>

        <div className="border-2 border-blue shadow-[6px_6px_0px_#334456] h-98 rounded-lg gap-2 bg-g w-full p-2 md:p-3 lg:p-5 flex flex-col">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Basic</h1>
          <p>For everyone</p>
          <div className="px-2 bg-green-100 rounded-full text-xs md:text-sm text-green-800">
            <p>You already have this</p>
          </div>
          <div className="text-xl md:text-2xl font-arimo lg:text-3xl font-bold">
            $0{" "}
            <span className="text-xs md:text-sm font-light opacity-80">
              / month
            </span>
          </div>

          <li className="flex flex-col gap-2 ">
            <ul>-Access free courses</ul>
            <ul>-Access free courses</ul>
            <ul>-Access free courses</ul>
            <ul>-Access free courses</ul>
            <ul>-Access free courses</ul>
          </li>
          <WebButton className="rounded-md">Subscribe</WebButton>

        </div>

        <div className="border-2 border-blue shadow-[6px_6px_0px_#334456] h-98 rounded-lg gap-2 bg-g w-full p-2 md:p-3 lg:p-5 flex flex-col">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Basic</h1>
          <p>For everyone</p>
          <div className="px-2 bg-green-100 rounded-full text-xs md:text-sm text-green-800">
            <p>You already have this</p>
          </div>
          <div className="text-xl md:text-2xl font-arimo lg:text-3xl font-bold">
            $0{" "}
            <span className="text-xs md:text-sm font-light opacity-80">
              / month
            </span>
          </div>

          <li className="flex flex-col gap-2 ">
            <ul>-Access free courses</ul>
            <ul>-Access free courses</ul>
            <ul>-Access free courses</ul>
            <ul>-Access free courses</ul>
            <ul>-Access free courses</ul>
          </li>

          <WebButton className="rounded-md">Subscribe</WebButton>
        </div>

        
      </div>
    </div>
  );
}

export default Pro;
