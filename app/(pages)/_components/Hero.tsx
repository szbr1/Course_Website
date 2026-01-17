import { WebButton } from "@/components/ui/webButton";
import {
  HERO_CARD,
  HERO_CONTENT,
  PARTNERS,
  STATISTICS,
} from "@/constants/hero";

function Hero() {
  return (
    <div className="mx-auto flex flex-col gap-12 max-w-[1240px] p-3">
      <div className="grid grid-cols-1 md:grid-cols-6 relative z-20">
        <div className="flex flex-col gap-4 md:gap-8 items-start col-span-2">
          <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-nunito font-bold">
            {HERO_CONTENT.title}
          </h1>
          <p className="text-xs md:text-sm opacity-50">
            {HERO_CONTENT.description}
          </p>
          <WebButton
            variant="outline"
            className="bg-blue rounded-sm px-6 text-sm md:text-lg md:text-2xl "
          >
            {HERO_CONTENT.buttonText}
          </WebButton>

          {/* ICONS  */}

          <div className="flex  items-center justify-center relative z-10">
            {PARTNERS.map((img, index) => (
              <div key={index} className="size-25 md:size-30 lg:size-40">
                <img
                  src={img.logoUrl}
                  height={20}
                  width={20}
                  className="object-cover size-full"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex items-start col-span-3">
          <div className="w-full">
            <img
              src={"/person.png"}
              height={20}
              width={20}
              alt=""
              className="size-full object-contain"
            />
          </div>
        </div>

        <div className="flex justify-end flex-col  md:items-end ">
          {STATISTICS.map((item, index) => {
            return (
              <div
                className="flex flex-col gap-2 border-b w-50  border-blue"
                key={index}
              >
                <h1 className="text-xl font-nunito sm:text-2xl md:text-2xl lg:text-3xl font-bold">
                  {item.value}
                </h1>
                <p className="font-nunito">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full justify-center items-center text-center">
        {HERO_CONTENT.footerNote}
      </div>

      <div className="rounded-md border-2  justify-between gap-3 border-blue p-5 h-auto shadow-[6px_6px_0_#334456] hidden md:flex">
        {HERO_CARD.map((item, index) => (
          <div
            key={index}
            className="flex gap-2 border-r-2 border-blue/80 items-start justify-start"
          >
            <div>
              <item.icon className="size-8" />
            </div>
            <div className="flex-col flex gap-2">
              <h3 className="text-xs md:text-sm font-bold">{item.title}</h3>
              <p className="text-xs opacity-80"> {item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
