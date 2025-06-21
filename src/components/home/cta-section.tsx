"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from '@/hooks/use-translation';
import { Button } from "@/components/ui/button";

export function CTASection() {
  const { t } = useTranslation();

  return (
    /* 🎯 CTA SECTION */
    <section className="relative h-[500px]">
      {/* 
        ⬆️ EDIT HERE TO CHANGE SECTION STYLE:
        - h-[500px] = height
      */}
      
      {/* 🖼️ BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        {/* 
          ⬆️ EDIT HERE TO CHANGE IMAGE CONTAINER:
          - absolute inset-0 = fill container
        */}
        
        <Image
          src="/images/mypics/cta-background.jpeg"
          /* ⬆️ EDIT HERE TO CHANGE IMAGE:
               - Change the src path
               - Update alt text
          */
          alt="Experience Egypt"
          fill
          className="object-cover"
          /* 
            ⬆️ EDIT HERE TO CHANGE IMAGE STYLE:
            - object-cover = fills container
          */
        />
        
        {/* 🌑 DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        {/* 
          ⬆️ EDIT HERE TO CHANGE OVERLAY:
          - bg-black/50 = black with 50% opacity
        */}
      </div>

      {/* 📝 CONTENT */}
      <div className="container-custom relative z-20 h-full flex items-center justify-center text-center">
        {/* 
          ⬆️ EDIT HERE TO CHANGE CONTENT CONTAINER:
          - h-full = full height
          - flex = enable flexbox
          - items-center = vertical alignment
          - justify-center = horizontal alignment
          - text-center = text alignment
        */}
        
        <div className="max-w-3xl px-4">
          {/* 
            ⬆️ EDIT HERE TO CHANGE CONTENT WIDTH:
            - max-w-3xl = maximum width
            - px-4 = horizontal padding
          */}
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {/* 
              ⬆️ EDIT HERE TO CHANGE HEADING STYLE:
              - text-4xl = font size on mobile
              - md:text-5xl = font size on desktop
              - font-bold = font weight
              - text-white = text color
              - mb-6 = bottom margin
            */}
            {t('home.cta.title')}
            {/* ⬆️ EDIT HERE TO CHANGE HEADING TEXT */}
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8">
            {/* 
              ⬆️ EDIT HERE TO CHANGE SUBTITLE STYLE:
              - text-lg = font size on mobile
              - md:text-xl = font size on desktop
              - text-white/90 = text color with opacity
              - mb-8 = bottom margin
            */}
            {t('home.cta.subtitle')}
            {/* ⬆️ EDIT HERE TO CHANGE SUBTITLE TEXT */}
          </p>
          
          <Link href="/plan-your-trip">
            {/* 
              ⬆️ EDIT HERE TO CHANGE LINK:
              - Change href to desired route
            */}
            
            <Button className="bg-white dark:bg-gray-800 text-primary dark:text-white hover:bg-white/90 dark:hover:bg-gray-700 text-lg px-8 py-6 transition-colors">
              {/* 
                ⬆️ EDIT HERE TO CHANGE BUTTON STYLE:
                - bg-white = white background
                - text-primary = primary text color
                - hover:bg-white/90 = hover effect
                - text-lg = font size
                - px-8 = horizontal padding
                - py-6 = vertical padding
              */}
              {t('home.cta.button')}
              {/* ⬆️ EDIT HERE TO CHANGE BUTTON TEXT */}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 