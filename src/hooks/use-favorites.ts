import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface FavoriteItem {
  id: string;
  place_id: string;
  place_name: string;
  place_image: string;
  place_location: string;
  created_at: string;
}

export function useFavorites() {
  const { data: session } = useSession();
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch user's favorites
  const fetchFavorites = async () => {
    if (!session?.user?.email) return;

    try {
      setLoading(true);
      const response = await fetch('/api/user/favorites');
      if (response.ok) {
        const data = await response.json();
        setFavorites(data.favorites || []);
      }
    } catch (error) {
      console.error('Error fetching favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  // Check if an item is favorited
  const isFavorited = (itemId: string) => {
    return favorites.some(fav => fav.place_id === itemId);
  };

  // Toggle favorite status
  const toggleFavorite = async (itemId: string, itemType: string, itemName?: string, itemImage?: string, itemLocation?: string) => {
    if (!session?.user?.email) {
      // Redirect to login or show login modal
      return;
    }

    const isCurrentlyFavorited = isFavorited(itemId);
    const action = isCurrentlyFavorited ? 'remove' : 'add';

    try {
      console.log('Sending favorite request:', {
        itemId,
        itemType,
        action,
        itemName,
        itemImage,
        itemLocation,
      });

      const response = await fetch('/api/user/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId,
          itemType,
          action,
          itemName,
          itemImage,
          itemLocation,
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        const data = await response.json();
        console.log('Response data:', data);
        
        // Update local state
        if (action === 'add') {
          setFavorites(prev => [...prev, {
            id: Date.now().toString(), // Temporary ID
            place_id: itemId,
            place_name: itemName || itemId,
            place_image: itemImage || '',
            place_location: itemLocation || '',
            created_at: new Date().toISOString(),
          }]);
        } else {
          setFavorites(prev => prev.filter(fav => fav.place_id !== itemId));
        }
      } else {
        // Handle error response
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        
        try {
          const errorData = await response.json();
          if (errorData && errorData.error) {
            errorMessage = errorData.error;
          }
        } catch (parseError) {
          // If we can't parse the error response, use the default message
          console.log('Could not parse error response as JSON');
        }
        
        console.error('API Error:', errorMessage);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Network Error:', error);
      throw error;
    }
  };

  // Fetch favorites on mount and when session changes
  useEffect(() => {
    fetchFavorites();
  }, [session]);

  return {
    favorites,
    loading,
    isFavorited,
    toggleFavorite,
    fetchFavorites,
  };
} 