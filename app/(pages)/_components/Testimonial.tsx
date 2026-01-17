import { testimonials } from "@/constants/testimonial";
import { Star } from "lucide-react";
import React from "react";

function Testimonial() {
  return (
    <div className="max-w-[800px] mx-auto p-3 flex flex-col gap-12 md:gap-15 pb-20">
      <div className="w-full md:flex justify-center items-center gap-12 max-w-[700px] mx-auto">
        <h5 className="text-2xl whitespace-nowrap md:text-4xl font-bold font-nunito">
          Featured Courses
        </h5>
        <p className="text-xs md:text-sm font-nunito font-light opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nobis,
          dignissimos voluptatibus non aliquid autem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
        {testimonials.map((t, index) => (
          <div
            className=" rounded-md max-h-[300px] relative p-3 py-9 w-full border-2 border-blue"
            key={index}
          >
            <div className="absolute size-16 bg-pink-400 rounded-full -top-8 translate-x-1/2 right-1/2">
            <img src="/person.png" className="size-full object-cover" alt="" />
            </div>
            <div className="w-full gap-3 flex-col flex justify-center items-center">
              <h5 className="font-nunito font-bold text-lg md:text-2xl lg:text-3xl">
                {t.name}
              </h5>
              <p className="text-xs text-center md:text-sm font-nunito font-light opacity-80">
                {t.role}
              </p>
              <p className="text-xs text-center md:text-sm font-nunito font-light ">
                {t.message}
              </p>

              <div className="flex items-center gap-2">
                {Array.from({ length: t.rating }).map((_, index) => (
                  <React.Fragment key={index}>
                    <Star className="text-yellow" />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
