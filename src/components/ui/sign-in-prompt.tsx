"use client";

import { useState } from 'react';
import { X, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

interface SignInPromptProps {
  isOpen: boolean;
  onClose: () => void;
  position?: { x: number; y: number };
}

export function SignInPrompt({ isOpen, onClose, position }: SignInPromptProps) {
  const pathname = usePathname();
  
  if (!isOpen) return null;

  // Create callback URL for returning to current page
  const callbackUrl = encodeURIComponent(pathname);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div 
        className="absolute z-10"
        style={{
          left: position?.x || '50%',
          top: position?.y || '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Card className="w-80 shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Save to Favorites</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-gray-600 mb-6">
              Sign in to save your favorite destinations and experiences for later.
            </p>
            
            <div className="space-y-3">
              <Link href={`/login?callbackUrl=${callbackUrl}`} className="block">
                <Button 
                  className="w-full flex items-center gap-2"
                  onClick={onClose}
                >
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Button>
              </Link>
              
              <Link href={`/signup?callbackUrl=${callbackUrl}`} className="block">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center gap-2"
                  onClick={onClose}
                >
                  <UserPlus className="h-4 w-4" />
                  Create Account
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 z-0" 
        onClick={onClose}
      />
    </div>
  );
} 