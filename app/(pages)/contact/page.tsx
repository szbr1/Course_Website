"use client"
import { WebButton } from "@/components/ui/webButton";
import React, { useState } from "react";
import z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  subject: z.string(),
  description: z.string(),
})

export const CONTACT_CARDS = [
  {
    title: "Support",
    description:
      "Questions about courses, access, or your account? We're here to help you resolve issues quickly.",
  },
  {
    title: "Feedback",
    description:
      "Suggestions and feedback help improve the platform and future courses.",
  },
  {
    title: "Business inquiries",
    description:
      "Interested in partnerships, collaborations, or enterprise access? Let's talk.",
  },
  {
    title: "Response time",
    description: "We typically respond within 24–48 hours during working days.",
  },
];

function Contact() {

      
        const formAction = (data: FormData)=>{
            const value = Object.fromEntries(data)
            const actualData = formSchema.safeParse(value)
            console.log(actualData)
        }
  return (
    <div className="max-w-[900px] mx-auto flex flex-col gap-12 justify-center md:mb-20 py-12 font-nunito p-3 ">
      <div className="flex flex-col gap-4 font-nunito md:gap-6">
        <h1 className="text-4xl text-center sm:text-5xl font-extrabold tracking-tight font-nunito text-blue">
            Contact us
          </h1>
        <p className="text-xs md:text-base max-w-[600px] mx-auto text-center opacity-80">
          {" "}
          Have a project in mind or need technical assistance with your web application? Reach out and let’s discuss the details.
        </p>
      </div>

      <div className="w-full rounded-lg border-2 border-blue shadow-[6px_6px_0px_#334456] p-3 md:p-6 lg:p-9 relative z-20 bg-white">
        <form action={formAction} className="flex flex-col gap-3 md:gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-start">
              <label className="text-xs md:text-sm font-bold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded-md border border-blue px-3 text-sm py-1 md:py-2 font-light"
              />
            </div>
            <div className="flex flex-col justify-start">
              <label className="text-xs md:text-sm font-bold">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email address"
                className="rounded-md border border-blue px-3 text-sm py-1 md:py-2 font-light "
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <label className="text-xs md:text-sm font-bold">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="What is it about?"
              className="rounded-md border border-blue px-3 text-sm py-1 md:py-2 font-light "
            />
          </div>
          <div className="flex flex-col justify-start">
            <label className="text-xs md:text-sm font-bold">Description</label>
            <textarea
               placeholder="What is it about?"
              name="description"
              className="rounded-md border border-blue px-3 text-sm py-1 md:py-2 font-light min-h-30 md:min-h-50"
            />
          </div>

          <WebButton  variant="outline" className="w-30 md:w-35 h-8 md:h-10">
            Sumbit
          </WebButton>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
        {CONTACT_CARDS.map((card, index) => (
          <div
            key={index}
            className="border-2 p-2 relative z-20 bg-white border-blue/40 px-4 shadow-[4px_4px_0px_#334456] rounded-md flex flex-col gap-3"
          >
            <h1 className=" font-bold">{card.title}</h1>
            <p className="text-xs font-light md:text-sm ">
                {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
