"use client";

import ReviewsDisplay from '@/components/shared/reviews-display';
import { useTranslation } from '@/hooks/use-translation';

export default function ReviewsDemoPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {t("reviewsDemo.title")}
          </h1>
          <p className="text-gray-600">
            {t("reviewsDemo.subtitle")}
          </p>
        </div>

        {/* Compact version - 3 reviews max */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            {t("reviewsDemo.compact.title")}
          </h2>
          <ReviewsDisplay 
            maxReviews={3} 
            className="shadow-sm"
          />
        </div>

        {/* Standard version - 5 reviews max */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            {t("reviewsDemo.standard.title")}
          </h2>
          <ReviewsDisplay 
            maxReviews={5} 
            className="shadow-sm"
          />
        </div>

        {/* Without header */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            {t("reviewsDemo.withoutHeader.title")}
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
            {t("reviewsDemo.minimal.title")}
          </h2>
          <ReviewsDisplay 
            maxReviews={2} 
            className="shadow-sm"
          />
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
          <h3 className="font-semibold text-blue-900 mb-2">{t("reviewsDemo.instructions.title")}</h3>
          <div className="text-sm text-blue-800 space-y-1">
            <p>• <code>{t("reviewsDemo.instructions.maxReviews")}</code></p>
            <p>• <code>{t("reviewsDemo.instructions.showHeader")}</code></p>
            <p>• <code>{t("reviewsDemo.instructions.className")}</code></p>
            <p>• {t("reviewsDemo.instructions.authentication")}</p>
            <p>• {t("reviewsDemo.instructions.states")}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 