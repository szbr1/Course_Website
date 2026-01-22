export function SubscriptionSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-200 rounded-lg w-2/3 mx-auto mb-4 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded-lg w-1/2 mx-auto animate-pulse" />
        </div>

        {/* Pricing Cards Skeleton */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Badge Skeleton */}
              {i === 2 && (
                <div className="absolute top-0 right-0 bg-gray-200 w-32 h-10 rounded-bl-2xl animate-pulse" />
              )}

              <div className="p-8">
                {/* Plan Header Skeleton */}
                <div className="mb-6">
                  <div className="h-8 bg-gray-200 rounded-lg w-1/2 mb-2 animate-pulse" />
                  <div className="h-5 bg-gray-200 rounded-lg w-3/4 animate-pulse" />
                </div>

                {/* Pricing Skeleton */}
                <div className="mb-8">
                  <div className="h-14 bg-gray-200 rounded-lg w-1/3 mb-2 animate-pulse" />
                  {i === 2 && (
                    <div className="h-4 bg-gray-200 rounded-lg w-1/2 animate-pulse" />
                  )}
                </div>

                {/* Features List Skeleton */}
                <div className="space-y-4 mb-8">
                  {[1, 2, 3, 4, 5, i === 2 ? 6 : null].filter(Boolean).map((j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse" />
                      <div className="flex-1 h-5 bg-gray-200 rounded-lg animate-pulse" />
                    </div>
                  ))}
                </div>

                {/* Button Skeleton */}
                <div className="w-full h-14 bg-gray-200 rounded-xl animate-pulse" />
              </div>

              {/* Bottom Accent Skeleton */}
              <div className="h-2 bg-gray-200 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Trust Section Skeleton */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="grid grid-cols-3 gap-8 py-8 border-t border-gray-200">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="h-10 bg-gray-200 rounded-lg w-24 mx-auto mb-2 animate-pulse" />
                <div className="h-5 bg-gray-200 rounded-lg w-32 mx-auto animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}