import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/constants/testimonial";

// Testimonial section component
function Testimonial() {
  return (
    <div className="max-w-[800px] mx-auto p-3 pb-20 flex flex-col gap-12 md:gap-15">
      {/* Section heading */}
      <div className="w-full max-w-[700px] mx-auto md:flex justify-center items-center gap-12">
        <h5 className="text-2xl md:text-4xl font-bold font-nunito whitespace-nowrap">
          Testimonials
        </h5>
        <p className="text-xs md:text-sm font-nunito font-light opacity-80">
          See what our students have to say about their learning experience
        </p>
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="relative w-full max-h-[300px] rounded-md border-2 border-blue p-3 py-9"
          >
            {/* Avatar */}
            <div className="absolute -top-8 right-1/2 translate-x-1/2 size-16 rounded-full bg-pink-400">
              <img
                src="/person.png"
                alt=""
                className="size-full object-cover rounded-full"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center gap-3 w-full">
              <h5 className="font-nunito font-bold text-lg md:text-2xl lg:text-3xl">
                {t.name}
              </h5>

              <p className="text-xs md:text-sm text-center font-nunito font-light opacity-80">
                {t.role}
              </p>

              <p className="text-xs md:text-sm text-center font-nunito font-light">
                {t.message}
              </p>

              {/* Rating stars */}
              <div className="flex items-center gap-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow fill-yellow" />
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
