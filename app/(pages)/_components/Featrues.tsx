"use client";

import { WebButton } from "@/components/ui/webButton";
import { api } from "@/convex/_generated/api";
import { isEnrolled } from "@/utils/courses";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";

function Featrues() {
  const courses = useQuery(api.course.getAllCourses);
  const subscription = useQuery(api.subscription.getSubscription);
  const purchase = useQuery(api.purchase.getPurchase);
  const router = useRouter();

  if (courses === undefined) {
    console.log("undefined is comming");
  } else if (courses === null) {
    return <div>Courses Are not Available for next one hour.</div>;
  } else {
    console.log(courses);
  }

  return (
    <div
      id="courses"
      className="p-3 scroll-mt-30 max-w-[1220px] mx-auto flex flex-col gap-8 md:gap-12 lg:gap-15"
    >
      <div className="w-full md:flex justify-center items-center gap-12 max-w-[700px] mx-auto">
        <h5 className="text-2xl whitespace-nowrap md:text-4xl font-bold font-nunito">
          Featured Courses
        </h5>
        <p className="text-xs md:text-sm font-nunito font-light opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nobis,
          dignissimos voluptatibus non aliquid autem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6" id="courses">
        {courses &&
          courses.map((course, index) => (
            <div
              key={index}
              className="max-h-[400px] rounded-xl p-4 border-2 border-blue flex flex-col gap-4 md:gap-6"
            >
              <div className="w-full bg-red-300 overflow-hidden h-4/9 rounded-lg">
                <img
                  src={course.image}
                  height={20}
                  width={20}
                  alt=""
                  className="size-full object-cover"
                />
              </div>

              <h1 className="font-bold font-nunito md:text-2xl">
                {course.title}
              </h1>

              <p className="text-xs md:text-sm font-light font-nunito opacity-80">
                {course.description}
              </p>
              <div className="flex justify-between items-center">
                <WebButton
                  variant={subscription ? "outline" : "primary"}
                  className="h-8 rounded-md"
                  onClick={() => router.push(`/course/${course._id}`)}
                >
                  {subscription ||
                  (purchase &&
                    isEnrolled({
                      courseId: course._id,
                      subscription,
                      purchasedCourses: purchase,
                    }))
                    ? "Enrolled"
                    : "Join"}
                </WebButton>
                <p className="font-bold text-xs">
                  {course.enrolledCount}{" "}
                  <span className="opacity-70 font-nunito font-light">
                    Enrolled
                  </span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Featrues;