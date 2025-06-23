'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Star, MessageSquare, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ReviewFormProps {
  placeId: string;
  placeName: string;
  placeLocation: string;
  onReviewSubmitted?: () => void;
  className?: string;
}

export default function ReviewForm({
  placeId,
  placeName,
  placeLocation,
  onReviewSubmitted,
  className = ''
}: ReviewFormProps) {
  const { data: session } = useSession();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!session?.user?.email) {
      setError('Please sign in to leave a review');
      return;
    }

    if (rating === 0) {
      setError('Please select a rating');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/user/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          place_id: placeId,
          place_name: placeName,
          place_location: placeLocation,
          rating,
          comment: comment.trim() || null,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setRating(0);
        setComment('');
        onReviewSubmitted?.();
        
        // Hide success message after 3 seconds
        setTimeout(() => setSuccess(false), 3000);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setError('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!session?.user?.email) {
    return (
      <Card className={className}>
        <CardContent className="p-4">
          <div className="text-center">
            <MessageSquare className="w-8 h-8 mx-auto mb-2 text-gray-300" />
            <p className="text-sm text-gray-500 mb-2">Sign in to leave a review</p>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (success) {
    return (
      <Card className={className}>
        <CardContent className="p-4">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-green-600 fill-current" />
            </div>
            <p className="text-sm text-green-600 font-medium">Review submitted successfully!</p>
            <p className="text-xs text-gray-500 mt-1">Thank you for sharing your experience</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Write a Review
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Rating Selection */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Your Rating
            </label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Star
                    className={`w-6 h-6 transition-colors ${
                      star <= (hoveredRating || rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
              {rating > 0 && (
                <span className="ml-2 text-sm text-gray-600">
                  {rating}/5 stars
                </span>
              )}
            </div>
          </div>

          {/* Comment */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Your Review (Optional)
            </label>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience visiting this place..."
              className="min-h-[80px] resize-none"
              maxLength={500}
            />
            <div className="text-xs text-gray-500 mt-1">
              {comment.length}/500 characters
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-2">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || rating === 0}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit Review
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 