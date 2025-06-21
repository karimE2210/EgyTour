'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MessageSquare, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Review = {
  id: string;
  place_id: string;
  place_name: string;
  place_location: string;
  rating: number;
  comment: string;
  created_at: string;
  user_name: string;
};

interface ReviewsDisplayProps {
  className?: string;
  maxReviews?: number;
  showHeader?: boolean;
  location?: string;
}

export default function ReviewsDisplay({ 
  className = '', 
  maxReviews = 5, 
  showHeader = true,
  location
}: ReviewsDisplayProps) {
  const { data: session } = useSession();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const url = location 
          ? `/api/reviews?location=${encodeURIComponent(location)}`
          : '/api/reviews';
        
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setReviews(data.reviews || []);
        } else {
          setError('Failed to load reviews');
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError('Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [session, location]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    if (diffDays <= 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays <= 365) return `${Math.floor(diffDays / 30)} months ago`;
    return date.toLocaleDateString();
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-1 text-xs text-gray-600 font-medium">
          {rating}/5
        </span>
      </div>
    );
  };

  if (loading) {
    return (
      <Card className={className}>
        <CardContent className="p-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={className}>
        <CardContent className="p-4">
          <div className="text-center text-red-500">
            <p className="text-sm">{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const displayReviews = reviews.slice(0, maxReviews);

  return (
    <Card className={className}>
      {showHeader && (
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Traveler Reviews
            {reviews.length > 0 && (
              <Badge variant="secondary" className="ml-auto">
                {reviews.length}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className="p-4 pt-0">
        {displayReviews.length > 0 ? (
          <div className="space-y-3">
            {displayReviews.map((review) => (
              <div
                key={review.id}
                className="border rounded-lg p-3 bg-gray-50/50 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-gray-900 line-clamp-1">
                      {review.place_name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      by {review.user_name}
                    </p>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(review.created_at)}
                  </div>
                </div>
                
                <div className="mb-2">
                  {renderStars(review.rating)}
                </div>
                
                {review.comment && (
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    "{review.comment}"
                  </p>
                )}
              </div>
            ))}
            
            {reviews.length > maxReviews && (
              <div className="text-center pt-2">
                <p className="text-xs text-gray-500">
                  +{reviews.length - maxReviews} more reviews
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-6">
            <MessageSquare className="w-8 h-8 mx-auto mb-2 text-gray-300" />
            <p className="text-sm text-gray-500 mb-2">No reviews yet</p>
            <p className="text-xs text-gray-400">
              Start exploring places and leave reviews!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 