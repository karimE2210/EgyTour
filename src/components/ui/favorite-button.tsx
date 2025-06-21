"use client";

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/use-favorites';
import { useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { SignInPrompt } from './sign-in-prompt';

interface FavoriteButtonProps {
  itemId: string;
  itemType: string;
  itemName?: string;
  itemImage?: string;
  itemLocation?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function FavoriteButton({ 
  itemId, 
  itemType, 
  itemName,
  itemImage,
  itemLocation,
  className,
  size = 'md' 
}: FavoriteButtonProps) {
  const { data: session } = useSession();
  const { isFavorited, toggleFavorite } = useFavorites();
  const [isLoading, setIsLoading] = useState(false);
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);
  const [promptPosition, setPromptPosition] = useState({ x: 0, y: 0 });

  const favorited = isFavorited(itemId);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!session?.user?.email) {
      // Show sign in prompt at the click position
      const rect = e.currentTarget.getBoundingClientRect();
      setPromptPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      });
      setShowSignInPrompt(true);
      return;
    }

    setIsLoading(true);
    try {
      await toggleFavorite(itemId, itemType, itemName, itemImage, itemLocation);
    } catch (error) {
      console.error('Error toggling favorite:', error);
      // You could show a toast notification here
    } finally {
      setIsLoading(false);
    }
  };

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleClick}
        disabled={isLoading}
        className={cn(
          'absolute top-2 right-2 z-10 rounded-full bg-white/80 hover:bg-white/90 transition-all duration-200',
          sizeClasses[size],
          favorited && 'text-red-500',
          !favorited && 'text-gray-600 hover:text-red-500',
          className
        )}
      >
        <Heart
          className={cn(
            'transition-all duration-200',
            favorited ? 'fill-current' : 'fill-none',
            isLoading && 'animate-pulse'
          )}
          size={size === 'sm' ? 16 : size === 'md' ? 20 : 24}
        />
      </Button>

      <SignInPrompt
        isOpen={showSignInPrompt}
        onClose={() => setShowSignInPrompt(false)}
        position={promptPosition}
      />
    </>
  );
} 