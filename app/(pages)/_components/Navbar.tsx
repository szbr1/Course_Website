"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { WebButton } from "@/components/ui/webButton";
import { SignedOut, SignInButton, SignUp, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function Navbar() {
  const { showToast } = useToast();
  return (
    <div className="h-12 flex justify-between items-center max-w-[1280px] bg-[#FCF9F0] w-full mx-auto h-20 px-2 pr-4">
      {/* LOGO  */}
      <div className="flex items-center rounded-md p-2 font-semibold text-xl">
        <h1 className="text-blue">Cour</h1>
        <span className="font-bold text-yellow">saas</span>
      </div>

      {/* LINKS  */}
      <ul className=" items-center justify-center md:gap-6 lg:gap-8 hidden md:flex">
        <Link href={"/"}>Consultant</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Find Your new Career</Link>
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

          <UserButton />
      </div>
    </div>
  );
}

export default Navbar;
