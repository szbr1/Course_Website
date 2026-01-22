"use client";
import { WebButton } from "@/components/ui/webButton";
import { BLOGS } from "@/constants/blogs";
import { useRouter } from "next/navigation";
import {
  FaCalendar,
  FaClock,
  FaUser,
  FaArrowRight,
  FaTag,
} from "react-icons/fa";

function BlogsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FDF8F3] py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
            Our Blog
          </h1>
          <p className="text-[#1E293B] opacity-70 max-w-2xl mx-auto">
            Discover insights, tips, and stories about learning, technology, and
            personal development from our team of experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOGS.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border-2 border-[#1E293B] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => router.push(`blogs/${blog.id}`)}
            >
              {/* Blog Image */}
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="p-5 space-y-4">
                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <div className="bg-yellow-100 border border-yellow-400 px-3 py-1 rounded-md">
                    <span className="text-xs font-bold text-[#1E293B] flex items-center gap-1">
                      <FaTag className="text-xs" />
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-[#1E293B] line-clamp-2 hover:opacity-70 transition-opacity">
                  {blog.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-[#1E293B] opacity-70 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#1E293B] opacity-60 pt-2 border-t border-[#1E293B]/20">
                  <div className="flex items-center gap-1">
                    <FaUser />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendar />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <WebButton
                  variant="outline"
                  className="w-full rounded-sm text-sm mt-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/blogs/${blog.id}`);
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Read More <FaArrowRight className="text-xs" />
                  </span>
                </WebButton>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {BLOGS.length === 0 && (
          <div className="bg-white border-2 border-[#1E293B] rounded-lg p-12 text-center">
            <h3 className="text-2xl font-bold text-[#1E293B] mb-2">
              No Blogs Yet
            </h3>
            <p className="text-[#1E293B] opacity-70">
              Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogsPage;