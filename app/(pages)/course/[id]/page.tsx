"use client";
import { WebButton } from "@/components/ui/webButton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useAction, useQuery } from "convex/react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import {
  FaStar,
  FaUserGraduate,
  FaCheckCircle,
  FaVideo,
  FaCertificate,
  FaDownload,
  FaInfinity,
  FaPlay,
} from "react-icons/fa";
import { CourseSkeleton } from "../../_components/skeletons/CourseSkelton";
import { isEnrolled } from "@/utils/courses";
import { useToast } from "@/components/ui/toast";

function Dynamic() {
  const router = useRouter();
  const { showToast } = useToast();
  const { id: courseId } = useParams<{ id: string }>();

  const course = useQuery(api.course.getCourseById, {
    courseId: courseId as Id<"courses">,
  });
  const subscription = useQuery(api.subscription.getSubscription);
  const purchasedCourses = useQuery(api.purchase.getPurchase);
  const createCheckout = useAction(api.stripe.createCheckout);

  const handleCheckout = async () => {
    try {
      const checkout = await createCheckout({
        courseId: courseId as Id<"courses">,
      });
      if (checkout.checkoutUrl) {
        window.location.href = checkout.checkoutUrl;
      }
    } catch (error) {
      showToast("Login Please Or Check Your Network", "error")
    }
  };

  if (
    course === undefined ||
    subscription === undefined ||
    purchasedCourses === undefined
  ) {
    return <CourseSkeleton />;
  }

  if (course === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDF8F3]">
        <div className="text-center bg-white border-2 border-[#1E293B] rounded-lg p-8 max-w-md">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-4">
            Course Not Found
          </h2>
          <p className="text-[#1E293B] opacity-70 mb-6">
            The course you&apos;re looking for doesn&apos;t exist.
          </p>
          <WebButton
            onClick={() => router.push("/courses")}
            variant="primary"
            className="rounded-sm"
          >
            Browse Courses
          </WebButton>
        </div>
      </div>
    );
  }

  const enrolled = isEnrolled({ courseId, subscription, purchasedCourses });
  const hasSubscription = subscription?.isActive ?? false;

  return (
    <div className="min-h-screen bg-[#FDF8F3] py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Enrollment Status Banner */}
        {enrolled && (
          <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-lg p-4">
            <div className="flex items-center gap-3 text-green-700">
              <FaCheckCircle className="text-xl" />
              <span className="font-bold">
                You&apos;re enrolled in this course
              </span>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Hero */}
            <div className="bg-white border-2 border-[#1E293B] rounded-lg p-6">
              {/* Course Image */}
              <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6 relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                {enrolled && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="bg-white text-[#1E293B] p-4 rounded-full hover:scale-110 transition-transform">
                      <FaPlay className="text-2xl ml-1" />
                    </button>
                  </div>
                )}
              </div>

              {/* Course Title & Meta */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
                  {course.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-[#FDF8F3] px-3 py-1.5 rounded-md border border-[#1E293B]">
                    <FaStar className="text-yellow-500" />
                    <span className="font-bold text-[#1E293B]">
                      {course.rating}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-[#FDF8F3] px-3 py-1.5 rounded-md border border-[#1E293B]">
                    <FaUserGraduate className="text-[#1E293B]" />
                    <span className="font-bold text-[#1E293B]">
                      {course.enrolledCount.toLocaleString()} students
                    </span>
                  </div>
                </div>

                <p className="text-[#1E293B] opacity-80 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white border-2 border-[#1E293B] rounded-lg p-6">
              <h2 className="text-2xl font-bold text-[#1E293B] mb-4">
                What You&apos;ll Learn
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Master the fundamentals",
                  "Build real-world projects",
                  "Industry best practices",
                  "Advanced techniques",
                  "Hands-on exercises",
                  "Certificate of completion",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-[#1E293B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Includes */}
            <div className="bg-white border-2 border-[#1E293B] rounded-lg p-6">
              <h2 className="text-2xl font-bold text-[#1E293B] mb-4">
                This Course Includes
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: FaVideo,
                    title: "20+ Hours Video",
                    desc: "On-demand",
                  },
                  {
                    icon: FaDownload,
                    title: "Resources",
                    desc: "Downloadable",
                  },
                  {
                    icon: FaCertificate,
                    title: "Certificate",
                    desc: "On completion",
                  },
                  {
                    icon: FaInfinity,
                    title: "Lifetime Access",
                    desc: "Learn anytime",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-[#FDF8F3] p-3 rounded-lg border border-[#1E293B]">
                      <item.icon className="text-[#1E293B] text-xl" />
                    </div>
                    <div>
                      <div className="font-bold text-[#1E293B]">
                        {item.title}
                      </div>
                      <div className="text-sm text-[#1E293B] opacity-70">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            <div className="bg-white border-2 border-[#1E293B] rounded-lg p-6">
              <h2 className="text-2xl font-bold text-[#1E293B] mb-4">
                Course Content
              </h2>
              <div className="space-y-3">
                {[
                  {
                    title: "Introduction to the Course",
                    duration: "10 min",
                    free: true,
                  },
                  {
                    title: "Setting Up Environment",
                    duration: "15 min",
                    free: false,
                  },
                  { title: "Core Concepts", duration: "25 min", free: false },
                  {
                    title: "Practical Projects",
                    duration: "45 min",
                    free: false,
                  },
                  {
                    title: "Advanced Techniques",
                    duration: "30 min",
                    free: false,
                  },
                ].map((lesson, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-[#1E293B] rounded-md hover:bg-[#FDF8F3] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FDF8F3] border border-[#1E293B] flex items-center justify-center font-bold text-[#1E293B]">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-[#1E293B]">
                          {lesson.title}
                        </div>
                        <div className="text-sm text-[#1E293B] opacity-70">
                          {lesson.duration}
                        </div>
                      </div>
                    </div>
                    {lesson.free || enrolled ? (
                      <FaPlay className="text-[#1E293B]" />
                    ) : (
                      <span className="text-xs font-bold text-[#1E293B] opacity-50">
                        LOCKED
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Card - Right Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white border-2 border-[#1E293B] rounded-lg p-6">
                {/* Price Section */}
                <div className="mb-6">
                  {hasSubscription ? (
                    <div className="bg-green-50 border-2 border-green-500 rounded-md p-4 text-center">
                      <div className="font-bold text-lg text-green-700 mb-1">
                        Included in Pro
                      </div>
                      <div className="text-sm text-green-600">
                        All courses free for you
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-5xl font-bold text-[#1E293B]">
                          ${course.price}
                        </span>
                      </div>
                      <p className="text-sm text-[#1E293B] opacity-70">
                        One-time payment • Lifetime access
                      </p>
                    </>
                  )}
                </div>

                {/* CTA Button */}
                <WebButton
                  onClick={
                    enrolled
                      ? () => router.push(`/learn/${courseId}`)
                      : handleCheckout
                  }
                  variant={enrolled ? "outline" : "primary"}
                  disabled={!enrolled && hasSubscription}
                  className="w-full py-3 rounded-sm mb-4"
                >
                  {enrolled ? (
                    <span className="flex items-center justify-center gap-2">
                      <FaPlay /> Start Learning
                    </span>
                  ) : hasSubscription ? (
                    "Included in Subscription"
                  ) : (
                    "Enroll Now"
                  )}
                </WebButton>

                {!enrolled && !hasSubscription && (
                  <p className="text-center text-xs text-[#1E293B] opacity-70 mb-4">
                    30-day money-back guarantee
                  </p>
                )}

                {/* Stats */}
                <div className="space-y-3 pt-4 border-t-2 border-[#1E293B]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#1E293B] opacity-70">
                      Students
                    </span>
                    <span className="font-bold text-[#1E293B]">
                      {course.enrolledCount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#1E293B] opacity-70">
                      Rating
                    </span>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500 text-sm" />
                      <span className="font-bold text-[#1E293B]">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#1E293B] opacity-70">
                      Language
                    </span>
                    <span className="font-bold text-[#1E293B]">English</span>
                  </div>
                </div>

                {/* Upsell */}
                {!hasSubscription && !enrolled && (
                  <div className="mt-4 p-4 bg-yellow-50 border-2 border-yellow-400 rounded-md">
                    <div className="text-sm font-bold text-[#1E293B] mb-2">
                      💡 Get All Courses
                    </div>
                    <p className="text-xs text-[#1E293B] opacity-80 mb-3">
                      Subscribe to Pro and unlock all premium courses
                    </p>
                    <WebButton
                      onClick={() => router.push("/subscriptions")}
                      variant="outline"
                      className="w-full text-sm rounded-sm"
                    >
                      View Plans
                    </WebButton>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dynamic;
