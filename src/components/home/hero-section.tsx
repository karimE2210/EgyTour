"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslation } from '@/hooks/use-translation';
import { useState } from 'react';
import Link from 'next/link';

// An array of video sources, ordered from smallest to largest file size for performance.
const videos = [
  "/images/mypics/4174152-hd_1920_1080_30fps.mp4",
  "/images/mypics/11276525-uhd_4096_1720_25fps.mp4",
  "/images/mypics/5976697-uhd_3840_2160_25fps.mp4",
];

export function HeroSection() {
  const { t } = useTranslation();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  // The status determines the video's opacity to create fade effects.
  // Can be: 'LOADING', 'PLAYING', 'FADING_OUT'
  const [videoStatus, setVideoStatus] = useState('LOADING');
  const [videoError, setVideoError] = useState(false);

  const handleVideoEnded = () => {
    // When the video ends, start the fade-out process.
    setVideoStatus('FADING_OUT');
  };

  const handleCanPlay = () => {
    // When the browser can play the video, start the fade-in.
    setVideoStatus('PLAYING');
  };
  
  const handleError = () => {
    setVideoError(true);
  };

  const handleTransitionEnd = () => {
    // This event fires after the fade-out CSS transition is complete.
    if (videoStatus === 'FADING_OUT') {
      // Now that it's faded out, load the next video.
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      // Set status to loading, ready for the next fade-in.
      setVideoStatus('LOADING');
    }
  };

  // Determine the opacity class based on the current status.
  const videoOpacityClass = videoStatus === 'PLAYING' ? 'opacity-100' : 'opacity-0';

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      {/* Container for background elements */}
      <div className="absolute inset-0 z-0">

        {/* Fallback Image: Always present, layered beneath the video */}
        <Image
          src="/images/mypics/dendera.jpeg"
          alt="Egyptian Temple"
          fill
          priority
          className="object-cover"
        />
        
        {/* Video Background: Renders if no errors have occurred */}
        {!videoError && (
          <video
            key={currentVideoIndex} // Changing the key remounts the component for the new video
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            onCanPlay={handleCanPlay}
            onError={handleError}
            onTransitionEnd={handleTransitionEnd} // Hook into the end of the fade-out
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoOpacityClass}`}
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {t('home.hero.subtitle')}
          </p>
          <Link href="/things-to-do">
            <Button 
              className="btn-primary py-6 px-8 text-lg mt-8 hover:scale-105 transition-transform"
            >
              {t('home.hero.cta')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
