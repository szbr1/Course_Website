"use client";

import React from "react";

/* =============================
   BLUE SHADOW BUTTON COMPONENT
   ============================= */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export function WebButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center  px-6 py-3 font-medium transition active:translate-y-[1px] focus:outline-none cursor-pointer";

  const variants = {
    primary:
      "bg-blue text-white shadow-[6px_6px_0_##334452] hover:shadow-[4px_4px_0_#000000]",
    outline:
      "bg-white text-blue border-2 border-blue shadow-[6px_6px_0_#334456] hover:bg-blue hover:text-white hover:shadow-[4px_4px_0_#fffff]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}