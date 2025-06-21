import ReviewsDisplay from '@/components/shared/reviews-display';

export default function ReviewsDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Reviews Display Demo
          </h1>
          <p className="text-gray-600">
            Different configurations for small screens
          </p>
        </div>

        {/* Compact version - 3 reviews max */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Compact (3 reviews)
          </h2>
          <ReviewsDisplay 
            maxReviews={3} 
            className="shadow-sm"
          />
        </div>

        {/* Standard version - 5 reviews max */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Standard (5 reviews)
          </h2>
          <ReviewsDisplay 
            maxReviews={5} 
            className="shadow-sm"
          />
        </div>

        {/* Without header */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Without Header
          </h2>
          <ReviewsDisplay 
            maxReviews={3} 
            showHeader={false}
            className="shadow-sm"
          />
        </div>

        {/* Minimal version */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Minimal (2 reviews)
          </h2>
          <ReviewsDisplay 
            maxReviews={2} 
            className="shadow-sm"
          />
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
          <h3 className="font-semibold text-blue-900 mb-2">Usage Instructions</h3>
          <div className="text-sm text-blue-800 space-y-1">
            <p>• <code>maxReviews</code>: Limit number of reviews shown</p>
            <p>• <code>showHeader</code>: Show/hide the header with title</p>
            <p>• <code>className</code>: Add custom styling</p>
            <p>• Component automatically handles authentication state</p>
            <p>• Shows loading, error, and empty states</p>
          </div>
        </div>
      </div>
    </div>
  );
} 