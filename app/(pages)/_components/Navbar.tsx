"use client";
import { WebButton } from "@/components/ui/webButton";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { TextAlignJustify, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const isSubscriptionExist = useQuery(api.subscription.getSubscription);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="h-12 flex justify-between items-center max-w-[1280px] bg-[#FCF9F0] w-full mx-auto h-20 px-2 pr-4">
      {/* LOGO  */}
      <Link
        href="/"
        className="flex items-center rounded-md p-2 font-semibold text-xl"
      >
        <h1 className="text-blue">Cour</h1>
        <span className="font-bold text-yellow">saas</span>
      </Link>

      {/* LINKS  */}
      <ul className=" items-center justify-center md:gap-6 lg:gap-8 hidden md:flex">
        <Link href={"/about"}>About us</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/blogs"}>Blog</Link>
        <Link href={"/verify"}>Verify Certificates</Link>
      </ul>

      {/* CTA BUTTONS  */}
      <div className="gap-3 flex items-center ">
        <SignedOut>
          <SignInButton>
            <button className="cursor-pointer">Login</button>
          </SignInButton>
        </SignedOut>
        <SignedOut>
          <SignUpButton>
            <WebButton
              variant={"outline"}
              className="border-blue px-6 max-md:text-xs h-6   md:h-8"
            >
              <div>SignUp</div>
            </WebButton>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          {/* IF HAVE SUBSCRITPION THEN SHOW BILLING AREA */}
          {isSubscriptionExist?.isActive ? (
            <Link
              href={"/billing"}
              className="px-2 text-sm  md:px-3 py-1 text-blue  rounded-md border"
            >
              Billing
            </Link>
          ) : null}

        <Link
            href={"/pro"}
            className="px-2 md:px-3 py-1 text-sm hidden sm:block  text-blue  rounded-md border"
          >
            Subscriptions
          </Link>
        </SignedIn>

        <UserButton />
        <TextAlignJustify className="cursor-pointer sm:hidden" onClick={()=> setSidebarOpen(true)}/>
      </div>


      {/* SIDEBAR  */}
      <aside className={cn("absolute sm:hidden  top-0 left-0 w-[70%] pt-5 px-4 h-screen bg-white z-50 p-3 transition-all duration-300", sidebarOpen ? "translate-x-0" : "-translate-x-100" )}>
         <div className="flex justify-end items-center mt-4">
           <X className="cursor-pointer"onClick={()=> setSidebarOpen(false)} />
         </div>
         <div className="flex flex-col gap-4 mt-12 ">
          <Link onClick={()=> setSidebarOpen(false)} href={"/"} className="text-2xl font-nunito font-bold hover:text-yellow">Home</Link>
          <Link onClick={()=> setSidebarOpen(false)} href={"/about"} className="text-2xl font-nunito font-bold hover:text-yellow ">About</Link>
          <Link onClick={()=> setSidebarOpen(false)} href={"/contact"} className="text-2xl font-nunito font-bold hover:text-yellow ">Contact us</Link>
          <Link onClick={()=> setSidebarOpen(false)} href={"/verify"} className="text-2xl font-nunito font-bold hover:text-yellow ">Verify Certificate</Link>
         </div>
      </aside>
    </div>
  );
}

export default Navbar;
