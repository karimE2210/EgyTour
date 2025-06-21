"use client";

import { useTranslation } from '@/hooks/use-translation';
import Image from "next/image";
import Script from 'next/script';
import { useRef, useEffect, useState } from 'react';

// This declares the YouTube types on the global window object.
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function LocalExperiencesPage() {
  const { t } = useTranslation();
  const playerRef = useRef<any>(null);
  const [isApiReady, setIsApiReady] = useState(false);
  const [playerError, setPlayerError] = useState(false);

  const handleApiReady = () => {
    console.log('YouTube API script loaded');
    setIsApiReady(true);
  };

  useEffect(() => {
    // This effect runs only when the API is ready.
    if (!isApiReady) {
      return;
    }

    // Wait a bit more to ensure the API is fully initialized
    const timer = setTimeout(() => {
      if (!window.YT || !window.YT.Player) {
        console.error('YouTube API not available');
        setPlayerError(true);
        return;
      }

      // Prevents creating a new player if one already exists (e.g., during hot-reloads)
      if (playerRef.current) {
        return;
      }

      const videoIds = ['CVrJG1rWnws', '8LD7yAppDkA'];
      let currentVideoIndex = 0;
      
      const createPlayer = () => {
        // The API is ready, but we also need to ensure the target div exists.
        if (!document.getElementById('youtube-player')) {
          console.error('YouTube player container not found');
          return;
        }

        try {
          playerRef.current = new window.YT.Player('youtube-player', {
            height: '100%',
            width: '100%',
            videoId: videoIds[currentVideoIndex],
            playerVars: {
              playsinline: 1, // Ensures inline playback on iOS
              autoplay: 0, // Disable autoplay by default
            },
            events: {
              onStateChange: (event: any) => {
                // When the current video finishes playing
                if (event.data === window.YT.PlayerState.ENDED) {
                  currentVideoIndex++;
                  // If there's a next video in the list, load and play it
                  if (currentVideoIndex < videoIds.length) {
                    playerRef.current.loadVideoById(videoIds[currentVideoIndex]);
                  }
                }
              },
              onError: (event: any) => {
                console.error('YouTube player error:', event);
                setPlayerError(true);
              },
            },
          });
          console.log('YouTube player created successfully');
        } catch (error) {
          console.error('Error creating YouTube player:', error);
          setPlayerError(true);
        }
      };
      
      createPlayer();
    }, 1000); // Wait 1 second after API loads

    // Cleanup function to destroy the player instance when the component unmounts
    return () => {
      clearTimeout(timer);
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [isApiReady]); // The dependency array ensures this effect runs only when the API becomes ready.

  return (
    <>
      <Script 
        src="https://www.youtube.com/iframe_api" 
        strategy="lazyOnload"
        onLoad={handleApiReady}
        onError={() => {
          console.error('Failed to load YouTube API script');
          setPlayerError(true);
        }}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-12 md:py-16">
          
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('localExperiences.title')}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('localExperiences.intro')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Local Markets & Bazaars */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                    🛍️ {t('localExperiences.markets.title')}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t('localExperiences.markets.description')}
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/mypics/souk.jpeg"
                      alt={t('localExperiences.markets.imageAlt')}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Cultural Immersions */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                🏠 {t('localExperiences.cultural.title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {t('localExperiences.cultural.description')}
              </p>
            </section>

            {/* Embedded Video Section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                📹 {t('localExperiences.video.title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t('localExperiences.video.description')}
              </p>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                {playerError ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-gray-600 dark:text-gray-400">
                      <p className="mb-4">Video temporarily unavailable</p>
                      <a 
                        href="https://www.youtube.com/watch?v=CVrJG1rWnws" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                ) : (
                  <div id="youtube-player" className="w-full h-full" />
                )}
              </div>
            </section>

            {/* Egyptian Coffeehouse Culture */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
              <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
                <div className="lg:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                    ☕ {t('localExperiences.coffeehouse.title')}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t('localExperiences.coffeehouse.description')}
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/mypics/kahwa.jpeg"
                      alt={t('localExperiences.coffeehouse.imageAlt')}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Tips Section */}
            <section className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-sm p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                💡 {t('localExperiences.tips.title')}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('localExperiences.tips.greetings')}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('localExperiences.tips.photography')}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('localExperiences.tips.artisans')}
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
} 