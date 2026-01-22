export function CourseSkeleton() {
  return (
    <div className="min-h-screen bg-[#FDF8F3] py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Skeleton */}
            <div className="bg-white border-2 border-[#1E293B] rounded-lg p-6">
              <div className="w-full aspect-video bg-gray-200 rounded-lg mb-6 animate-pulse" />
              <div className="space-y-4">
                <div className="h-10 bg-gray-200 rounded w-3/4 animate-pulse" />
                <div className="flex gap-4">
                  <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
                  <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="h-20 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>

            {/* What You'll Learn Skeleton */}
            <div className="bg-white border-2 border-[#1E293B] rounded-lg p-6">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-4 animate-pulse" />
              <div className="grid md:grid-cols-2 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse" />
                    <div className="flex-1 h-5 bg-gray-200 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            {/* Course Includes Skeleton */}
            <div className="bg-white border-2 border-[#1E293B] rounded-lg p-6">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-4 animate-pulse" />
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-gray-200 rounded-lg animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <div className="h-5 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content Skeleton */}
            <div className="bg-white border-2 border-[#1E293B] rounded-lg p-6">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-4 animate-pulse" />
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 border border-[#1E293B] rounded-md"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
                      <div className="flex-1 space-y-2">
                        <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4" />
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Card Skeleton */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white border-2 border-[#1E293B] rounded-lg p-6">
                <div className="h-12 bg-gray-200 rounded mb-6 animate-pulse" />
                <div className="h-12 bg-gray-200 rounded mb-4 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded mb-4 animate-pulse" />

                <div className="space-y-3 pt-4 border-t-2 border-[#1E293B]">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="h-5 bg-gray-200 rounded w-1/3 animate-pulse" />
                      <div className="h-5 bg-gray-200 rounded w-1/4 animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}