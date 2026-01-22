"use client";
import { WebButton } from "@/components/ui/webButton";
import { BLOGS } from "@/constants/blogs";
import { useParams, useRouter } from "next/navigation";
import {
  FaCalendar,
  FaClock,
  FaUser,
  FaArrowLeft,
  FaTag,
  FaShare,
} from "react-icons/fa";

function BlogDetailPage() {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();

  const blog = BLOGS.find((b) => b.id === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#FDF8F3] flex items-center justify-center px-4">
        <div className="bg-white border-2 border-[#1E293B] rounded-lg p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-4">
            Blog Not Found
          </h2>
          <p className="text-[#1E293B] opacity-70 mb-6">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <WebButton
            onClick={() => router.push("/blogs")}
            variant="primary"
            className="rounded-sm"
          >
            <span className="flex items-center gap-2">
              <FaArrowLeft /> Back to Blogs
            </span>
          </WebButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF8F3] py-8 px-4">
      <div className="max-w-[900px] mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <WebButton
            onClick={() => router.push("/blogs")}
            variant="outline"
            className="rounded-sm"
          >
            <span className="flex items-center gap-2">
              <FaArrowLeft /> Back to Blogs
            </span>
          </WebButton>
        </div>

        {/* Blog Content */}
        <article className="bg-white border-2 border-[#1E293B] rounded-lg overflow-hidden">
          {/* Hero Image */}
          <div className="aspect-video bg-gray-200 overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Category Badge */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-400 px-4 py-2 rounded-md">
                <FaTag />
                <span className="text-sm font-bold text-[#1E293B]">
                  {blog.category}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#1E293B] opacity-70 pb-6 mb-6 border-b-2 border-[#1E293B]/20">
              <div className="flex items-center gap-2">
                <FaUser />
                <span className="font-semibold">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose max-w-none">
              <div className="text-[#1E293B] space-y-6 leading-relaxed">
                {blog.content.map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t-2 border-[#1E293B]/20">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#FDF8F3] border border-[#1E293B] px-3 py-1 rounded-md text-xs font-semibold text-[#1E293B]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-8 pt-6 border-t-2 border-[#1E293B]/20">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#1E293B]">
                  Share this article
                </span>
                <WebButton variant="outline" className="rounded-sm text-sm">
                  <span className="flex items-center gap-2">
                    <FaShare /> Share
                  </span>
                </WebButton>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">
            More Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {BLOGS.filter((b) => b.id !== slug)
              .slice(0, 2)
              .map((relatedBlog) => (
                <div
                  key={relatedBlog.id}
                  className="bg-white border-2 border-[#1E293B] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => router.push(`/blogs/${relatedBlog.id}`)}
                >
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#1E293B] mb-2 line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-[#1E293B] opacity-70 line-clamp-2 mb-3">
                      {relatedBlog.excerpt}
                    </p>
                    <div className="text-xs text-[#1E293B] opacity-60">
                      {relatedBlog.readTime}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailPage;