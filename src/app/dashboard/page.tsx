'use client';

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Trash2, Heart, Star, MessageSquare } from 'lucide-react';
import ReviewsDisplay from '@/components/shared/reviews-display';

type UserProfile = {
  id: string;
  email: string;
  name: string;
  phone: string | null;
  country: string | null;
  created_at: string;
};

type Favorite = {
  id: string;
  place_id: string;
  place_name: string;
  place_image: string;
  place_location: string;
  created_at: string;
};

type Review = {
  id: string;
  place_id: string;
  place_name: string;
  place_location: string;
  rating: number;
  comment: string;
  created_at: string;
};

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [removingFavorites, setRemovingFavorites] = useState<Set<string>>(new Set());
  
  // Review modal state
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<Favorite | null>(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submittingReview, setSubmittingReview] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user?.id) {
      const fetchData = async () => {
        try {
          const [profileRes, favoritesRes, reviewsRes] = await Promise.all([
            fetch('/api/user/profile'),
            fetch('/api/user/favorites'),
            fetch('/api/user/reviews'),
          ]);

          if (!profileRes.ok) {
            const errorData = await profileRes.json();
            throw new Error(errorData.error || 'Failed to fetch profile data');
          }

          if (!favoritesRes.ok) {
            const errorData = await favoritesRes.json();
            throw new Error(errorData.error || 'Failed to fetch favorites data');
          }

          if (!reviewsRes.ok) {
            const errorData = await reviewsRes.json();
            throw new Error(errorData.error || 'Failed to fetch reviews data');
          }

          const [profileData, favoritesData, reviewsData] = await Promise.all([
            profileRes.json(),
            favoritesRes.json(),
            reviewsRes.json(),
          ]);

          console.log('Profile data:', profileData);
          console.log('Favorites data:', favoritesData);
          console.log('Reviews data:', reviewsData);
          
          setProfile(profileData);
          setFavorites(favoritesData.favorites || []);
          setReviews(reviewsData.reviews || []);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [session]);

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  const handleRemoveFavorite = async (favorite: Favorite) => {
    if (!session?.user?.email) return;

    setRemovingFavorites(prev => new Set(prev).add(favorite.place_id));

    try {
      const response = await fetch('/api/user/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId: favorite.place_id,
          itemType: 'place',
          action: 'remove',
          itemName: favorite.place_name,
          itemImage: favorite.place_image,
          itemLocation: favorite.place_location,
        }),
      });

      if (response.ok) {
        // Remove from local state
        setFavorites(prev => prev.filter(fav => fav.place_id !== favorite.place_id));
      } else {
        const errorData = await response.json();
        console.error('Error removing favorite:', errorData);
        alert('Failed to remove favorite. Please try again.');
      }
    } catch (error) {
      console.error('Error removing favorite:', error);
      alert('Failed to remove favorite. Please try again.');
    } finally {
      setRemovingFavorites(prev => {
        const newSet = new Set(prev);
        newSet.delete(favorite.place_id);
        return newSet;
      });
    }
  };

  const openReviewModal = (favorite: Favorite) => {
    setSelectedPlace(favorite);
    setRating(5);
    setComment('');
    setReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setReviewModalOpen(false);
    setSelectedPlace(null);
    setRating(5);
    setComment('');
  };

  const handleSubmitReview = async () => {
    if (!selectedPlace || !session?.user?.email) return;

    setSubmittingReview(true);

    try {
      const response = await fetch('/api/user/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          place_id: selectedPlace.place_id,
          place_name: selectedPlace.place_name,
          place_location: selectedPlace.place_location,
          rating: rating,
          comment: comment.trim(),
        }),
      });

      if (response.ok) {
        const newReview = await response.json();
        setReviews(prev => [newReview, ...prev]);
        closeReviewModal();
        alert('Review submitted successfully!');
      } else {
        const errorData = await response.json();
        console.error('Error submitting review:', errorData);
        alert('Failed to submit review. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    } finally {
      setSubmittingReview(false);
    }
  };

  const getExistingReview = (placeId: string) => {
    return reviews.find(review => review.place_id === placeId);
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-red-600 mb-4">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Sign Out
        </button>
      </div>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent>
              {profile ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="mt-1">{profile.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="mt-1">{profile.email}</p>
                  </div>
                  {profile.phone && (
                    <div>
                      <p className="text-sm font-medium text-gray-500">Phone</p>
                      <p className="mt-1">{profile.phone}</p>
                    </div>
                  )}
                  {profile.country && (
                    <div>
                      <p className="text-sm font-medium text-gray-500">Country</p>
                    <p className="mt-1">{profile.country}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-500">Member Since</p>
                    <p className="mt-1">{new Date(profile.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
              ) : (
                <p>No profile data available</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favorites">
          <Card>
            <CardHeader>
              <CardTitle>Favorite Places ({favorites.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {favorites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {favorites.map((favorite) => {
                    const existingReview = getExistingReview(favorite.place_id);
                    return (
                      <div key={favorite.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow relative group">
                        {/* Remove Button */}
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleRemoveFavorite(favorite)}
                          disabled={removingFavorites.has(favorite.place_id)}
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        >
                          {removingFavorites.has(favorite.place_id) ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                        </Button>

                        {/* Favorite Icon */}
                        <div className="absolute top-2 left-2 z-10">
                          <Heart className="h-5 w-5 text-red-500 fill-current" />
                        </div>

                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-lg mb-1">{favorite.place_name}</h3>
                            {favorite.place_location && (
                              <p className="text-sm text-gray-600 mb-2">{favorite.place_location}</p>
                            )}
                            <p className="text-xs text-gray-500">
                              Added on {new Date(favorite.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>

                        {/* Review Section */}
                        <div className="mt-3 pt-3 border-t">
                          {existingReview ? (
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < existingReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="ml-2 text-sm text-gray-600">Your review</span>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => openReviewModal(favorite)}
                                className="text-xs"
                              >
                                Edit
                              </Button>
                            </div>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => openReviewModal(favorite)}
                              className="w-full"
                            >
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Leave a Review
                            </Button>
                          )}
                        </div>

                        {favorite.place_image && (
                          <div className="mt-3">
                            <img 
                              src={favorite.place_image} 
                              alt={favorite.place_name}
                              className="w-full h-32 object-cover rounded-md"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">No favorite places yet</p>
                  <p className="text-sm text-gray-400">
                    Start exploring and add places to your favorites!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Your Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <ReviewsDisplay maxReviews={10} showHeader={false} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Review Modal */}
      <Dialog open={reviewModalOpen} onOpenChange={setReviewModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {selectedPlace ? `Review: ${selectedPlace.place_name}` : 'Leave a Review'}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="rating">Rating</Label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      } hover:text-yellow-400 transition-colors`}
                    />
                  </button>
                ))}
                <span className="ml-2 text-sm text-gray-600">{rating}/5</span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="comment">Comment (optional)</Label>
              <Textarea
                id="comment"
                placeholder="Share your experience with this place..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={closeReviewModal}>
              Cancel
            </Button>
            <Button 
              onClick={handleSubmitReview} 
              disabled={submittingReview}
            >
              {submittingReview ? 'Submitting...' : 'Submit Review'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 