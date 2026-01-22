"use client";
import { WebButton } from "@/components/ui/webButton";
import {
  HERO_CARD,
  HERO_CONTENT,
  PARTNERS,
  STATISTICS,
} from "@/constants/hero";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Hero section component
function Hero() {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-[1240px]  p-3 flex flex-col gap-12 mt-12 md:mt-20">
      {/* Main hero layout */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-6">
        {/* Left content */}
        <div className="col-span-2 flex flex-col items-start gap-4 md:gap-8">
          <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-nunito font-bold">
            {HERO_CONTENT.title}
          </h1>

          <p className="text-xs md:text-sm opacity-50">
            {HERO_CONTENT.description}
          </p>
          <Link href={""}>
            <Link href="#courses" className="transition-all duration-300">
              <WebButton
                variant="outline"
                onClick={() => router.push("#courses")}
                className="bg-blue rounded-sm px-6 text-sm md:text-lg md:text-2xl"
              >
                {HERO_CONTENT.buttonText}
              </WebButton>
            </Link>
          </Link>
          {/* Partner logos */}
          <div className="relative z-10 flex items-center justify-center">
            {PARTNERS.map((img, index) => (
              <div key={index} className="size-25 md:size-30 lg:size-40">
                <img
                  src={img.logoUrl}
                  alt=""
                  height={20}
                  width={20}
                  className="size-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center image */}
        <div className="col-span-3 flex items-start w-full">
          <div className="w-full">
            <img
              src="/person.png"
              alt=""
              height={20}
              width={20}
              className="size-full object-contain"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className=" flex-col justify-end md:items-end hidden md:flex">
          {STATISTICS.map((item, index) => (
            <div
              key={index}
              className="w-50 flex flex-col gap-2 border-b border-blue"
            >
              <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-nunito font-bold">
                {item.value}
              </h1>
              <p className="font-nunito">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature cards (desktop only) */}
      <div className="hidden md:flex h-auto gap-3 justify-between rounded-md border-2 border-blue p-5 shadow-[6px_6px_0_#334456]">
        {HERO_CARD.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-2 border-r-2 border-blue/80"
          >
            <div>
              <item.icon className="size-8" />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xs md:text-sm font-bold">{item.title}</h3>
              <p className="text-xs opacity-80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
