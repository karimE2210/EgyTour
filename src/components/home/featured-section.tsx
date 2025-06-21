"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent } from "@/components/ui/card";

export function FeaturedSection() {
  const { t } = useTranslation();

  const featuredItems = [
    {
      id: "art-culture",
      title: t('home.featured.artCulture.title'),
      description: t('home.featured.artCulture.description'),
      image: "/images/mypics/Antiguo Egipto.jpeg",
      link: "/art-culture",
    },
    {
      id: "family-adventures",
      title: t('home.featured.familyAdventures.title'),
      description: t('home.featured.familyAdventures.description'),
      image: "/images/mypics/family-adventures.jpeg",
      link: "/things-to-do/family-adventures",
    },
    {
      id: "local-experiences",
      title: t('home.featured.localExperiences.title'),
      description: t('home.featured.localExperiences.description'),
      image: "/images/mypics/nile-cruise.jpeg",
      link: "/things-to-do/local-experiences",
    },
  ];

  return (
    /* 🎯 FEATURED SECTION CONTAINER */
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      {/* 
        ⬆️ EDIT HERE TO CHANGE SECTION STYLE:
        - py-20 = vertical padding
        - bg-gray-50 = background color
      */}
      
      <div className="container-custom">
        {/* 📝 SECTION HEADER */}
        <div className="text-center mb-12">
          {/* 
            ⬆️ EDIT HERE TO CHANGE HEADER STYLE:
            - text-center = text alignment
            - mb-12 = bottom margin
          */}
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {/* 
              ⬆️ EDIT HERE TO CHANGE HEADING STYLE:
              - text-3xl = font size on mobile
              - md:text-4xl = font size on desktop
              - font-bold = font weight
              - mb-4 = bottom margin
            */}
            {t('home.featured.title')}
            {/* ⬆️ EDIT HERE TO CHANGE HEADING TEXT */}
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {/* 
              ⬆️ EDIT HERE TO CHANGE SUBTITLE STYLE:
              - text-lg = font size
              - text-gray-600 = text color
              - max-w-2xl = maximum width
              - mx-auto = center horizontally
            */}
            {t('home.featured.subtitle')}
            {/* ⬆️ EDIT HERE TO CHANGE SUBTITLE TEXT */}
          </p>
        </div>

        {/* 🎨 FEATURED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 
            ⬆️ EDIT HERE TO CHANGE GRID LAYOUT:
            - grid-cols-1 = 1 column on mobile
            - md:grid-cols-3 = 3 columns on desktop
            - gap-8 = gap between items
          */}
          
          {featuredItems.map((item) => (
            <Link key={item.id} href={item.link} className="group">
              {/* 
                ⬆️ EDIT HERE TO CHANGE CARD LINK:
                - group = enable hover effects
                - Change href to desired route
              */}
              
              <Card className="overflow-hidden border-none shadow-lg dark:shadow-gray-800/50 h-[400px] relative">
                {/* 
                  ⬆️ EDIT HERE TO CHANGE CARD STYLE:
                  - overflow-hidden = clip content
                  - border-none = remove border
                  - shadow-lg = large shadow
                  - h-[400px] = fixed height
                */}
                
                <CardContent className="p-0 h-full">
                  {/* 
                    ⬆️ EDIT HERE TO CHANGE CONTENT STYLE:
                    - p-0 = remove padding
                    - h-full = full height
                  */}
                  
                  <div className="absolute inset-0">
                    {/* 
                      ⬆️ EDIT HERE TO CHANGE IMAGE CONTAINER:
                      - absolute inset-0 = fill container
                    */}
                    
                    <Image
                      src={item.image}
                      /* ⬆️ EDIT HERE TO CHANGE IMAGE:
                           - Change the src path
                           - Update alt text
                      */
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      /* 
                        ⬆️ EDIT HERE TO CHANGE IMAGE STYLE:
                        - object-cover = fills container
                        - transition-transform = enable animations
                        - duration-700 = animation speed
                        - group-hover:scale-105 = hover zoom effect
                      */
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    {/* 
                      ⬆️ EDIT HERE TO CHANGE OVERLAY:
                      - from-black/70 = start color opacity
                      - to-transparent = end color
                    */}
                  </div>
                  
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    {/* 
                      ⬆️ EDIT HERE TO CHANGE CONTENT POSITIONING:
                      - bottom-0 left-0 = position at bottom left
                      - p-6 = padding
                    */}
                    
                    <h3 className="text-xl font-semibold group-hover:underline">
                      {/* 
                        ⬆️ EDIT HERE TO CHANGE TITLE STYLE:
                        - text-xl = font size
                        - font-semibold = font weight
                        - group-hover:underline = hover effect
                      */}
                      {item.title}
                      {/* ⬆️ EDIT HERE TO CHANGE TITLE TEXT */}
                    </h3>
                    
                    <p className="mt-2 text-sm text-white/90">
                      {/* 
                        ⬆️ EDIT HERE TO CHANGE DESCRIPTION STYLE:
                        - mt-2 = top margin
                        - text-sm = font size
                        - text-white/90 = text color with opacity
                      */}
                      {item.description}
                      {/* ⬆️ EDIT HERE TO CHANGE DESCRIPTION TEXT */}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
