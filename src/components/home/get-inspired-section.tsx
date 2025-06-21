"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const inspirationArticles = [
  {
    id: "article-1",
    title: "12 hidden gems for families in Egypt",
    image: "/images/egypt-inspired.jpg",
    href: "/plan-your-trip/article-hub/hidden-family-gems",
  },
  {
    id: "article-2",
    title: "12 things to do for free in Egypt",
    image: "/images/desert-activities.jpg",
    href: "/plan-your-trip/article-hub/12-things-to-do-for-free-in-abu-dhabi",
  },
  {
    id: "article-3",
    title: "9 ways to get your heart pumping in Egypt",
    image: "/images/yas-waterworld.jpg",
    href: "/plan-your-trip/article-hub/9-adrenaline-fueled-activites-in-abu-dhabi",
  },
];

export function GetInspiredSection() {
  return (
    /* 🎯 GET INSPIRED SECTION - Inspirational content and call-to-action */
    <section className="py-16 bg-gray-50">
      {/* 
        ⬆️ EDIT HERE TO CHANGE SECTION SPACING/BACKGROUND:
        - py-16 = vertical padding (try py-8, py-24)
        - bg-gray-50 = light gray background (try bg-white, bg-gray-100)
      */}
      
      <div className="container-custom">
        {/* 
          ⬆️ EDIT HERE TO CHANGE CONTAINER:
          - container-custom = custom container class (defined in globals.css)
          - Add mx-auto for center alignment
        */}
        
        {/* 📝 SECTION HEADER */}
        <div className="text-center mb-12">
          {/* 
            ⬆️ EDIT HERE TO CHANGE HEADER SPACING:
            - mb-12 = bottom margin (try mb-8, mb-16)
            - Add mt-12 for top margin
          */}
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {/* 
              ⬆️ EDIT HERE TO CHANGE HEADING STYLE:
              - text-3xl = font size (try text-2xl, text-5xl)
              - font-bold = font weight (try font-semibold, font-extrabold)
              - mb-4 = bottom margin
            */}
            Get Inspired
            {/* ⬆️ EDIT HERE TO CHANGE HEADING TEXT */}
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            {/* 
              ⬆️ EDIT HERE TO CHANGE DESCRIPTION STYLE:
              - text-gray-600 = text color (try text-gray-500, text-gray-700)
              - max-w-2xl = max width (try max-w-xl, max-w-3xl)
            */}
            Discover unique experiences and hidden gems in Egypt
            {/* ⬆️ EDIT HERE TO CHANGE DESCRIPTION TEXT */}
          </p>
        </div>

        {/* 🎨 INSPIRATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 
            ⬆️ EDIT HERE TO CHANGE GRID LAYOUT:
            - grid-cols-1 = 1 column on mobile
            - md:grid-cols-2 = 2 columns on medium screens
            - gap-8 = gap between items (try gap-4, gap-12)
          */}
          
          {/* 🏛️ INSPIRATION ITEM 1 */}
          <div className="group relative rounded-lg overflow-hidden shadow-lg">
            {/* 
              ⬆️ EDIT HERE TO CHANGE CARD STYLE:
              - rounded-lg = border radius (try rounded-xl, rounded-2xl)
              - shadow-lg = shadow size (try shadow-md, shadow-xl)
              - Add hover:shadow-xl for hover effect
            */}
            
            <Image
              src="/images/mypics/luxor.jpeg"
              /* ⬆️ EDIT HERE TO CHANGE IMAGE:
                   - Change the src path to your desired image
                   - Example: src="/images/mypics/aswan.jpeg"
              */
              alt="Luxor Temple"
              /* ⬆️ EDIT HERE TO CHANGE ALT TEXT for accessibility */
              width={600}
              height={400}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
              /* 
                ⬆️ EDIT HERE TO CHANGE IMAGE STYLE:
                - h-[400px] = height (try h-[300px], h-[500px])
                - object-cover = image fit (try object-contain)
                - group-hover:scale-105 = hover zoom effect
                - duration-300 = animation speed
              */
            />
            
            {/* 🌑 DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            {/* 
              ⬆️ EDIT HERE TO CHANGE OVERLAY:
              - from-black/60 = start color opacity
              - to-transparent = end color
              - Try: from-blue/50, from-red/40, etc.
            */}
            
            {/* 📝 CARD CONTENT */}
            <div className="absolute bottom-0 left-0 p-6 text-white">
              {/* 
                ⬆️ EDIT HERE TO CHANGE CONTENT POSITIONING:
                - p-6 = padding (try p-4, p-8)
                - Add w-full for full width
              */}
              
              <h3 className="text-2xl font-semibold mb-2">
                {/* 
                  ⬆️ EDIT HERE TO CHANGE TITLE STYLE:
                  - text-2xl = font size (try text-xl, text-3xl)
                  - font-semibold = font weight
                  - mb-2 = bottom margin
                */}
                Ancient Temples
                {/* ⬆️ EDIT HERE TO CHANGE TITLE TEXT */}
              </h3>
              
              <p className="text-base text-gray-200 mb-4">
                {/* 
                  ⬆️ EDIT HERE TO CHANGE DESCRIPTION STYLE:
                  - text-base = font size (try text-sm, text-lg)
                  - text-gray-200 = text color
                  - mb-4 = bottom margin
                */}
                Explore the magnificent temples of Luxor and Karnak
                {/* ⬆️ EDIT HERE TO CHANGE DESCRIPTION TEXT */}
              </p>
              
              <Button className="btn-primary text-base">
                {/* 
                  ⬆️ EDIT HERE TO CHANGE BUTTON STYLE:
                  - btn-primary = primary button style
                  - text-base = font size
                  - Add py-3 px-6 for custom padding
                */}
                Discover More
                {/* ⬆️ EDIT HERE TO CHANGE BUTTON TEXT */}
              </Button>
            </div>
          </div>

          {/* Add more inspiration items here with the same structure */}
        </div>
      </div>
    </section>
  );
}
