"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ExploreSection() {
  return (
    /* 🎯 EXPLORE SECTION - Secondary hero section below main hero */
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
        
        <div className="relative mt-10">
          {/* 
            ⬆️ EDIT HERE TO CHANGE MARGIN:
            - mt-10 = top margin (try mt-8, mt-12)
            - Add mb-10 for bottom margin
          */}
          
          {/* 🖼️ MAP BAC'KGROUND CONTAINER */}
          <div className="rounded-lg overflow-hidden relative h-[500px] w-full">
            {/* 
              ⬆️ EDIT HERE TO CHANGE CONTAINER STYLE:
              - rounded-lg = border radius (try rounded-xl, rounded-2xl)
              - h-[500px] = fixed height (try h-[400px], h-[600px])
              - Add shadow-lg for elevation
            */}
            
            {/* 📸 BACKGROUND IMAGE */}
            <Image
              src="/images/mypics/skyline.jpeg"
              /* ⬆️ EDIT HERE TO CHANGE BACKGROUND IMAGE:
                   - Change the src path to your desired image
                   - Example: src="/images/mypics/egypt.jpeg"
              */
              alt="Map of Egypt"
              /* ⬆️ EDIT HERE TO CHANGE ALT TEXT for accessibility */
              fill
              className="object-cover"
              /* ⬆️ EDIT HERE TO CHANGE IMAGE FIT:
                   - object-cover = fills container (may crop)
                   - object-contain = shows full image
                   - object-center = centers image
              */
            />
            
            {/* 🌑 DARK OVERLAY - Makes text more readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            {/* 
              ⬆️ EDIT HERE TO CHANGE OVERLAY:
              - from-black/60 = start color opacity (try from-black/40, from-black/80)
              - to-transparent = end color
              - Try: from-blue/50, from-red/40, etc.
            */}
            
            {/* 📝 CONTENT OVERLAY - Button container */}
            <div className="absolute top-0 left-0 p-8 md:p-12 w-full md:max-w-xl text-white z-10">
              {/* 
                ⬆️ EDIT HERE TO CHANGE CONTENT POSITIONING:
                - top-0 left-0 = position (try top-1/2 left-1/2 for center)
                - p-8 = padding (try p-4, p-12)
                - md:max-w-xl = max width on medium screens
              */}
              
              {/* 🔘 EXPLORE BUTTON */}
              <Button className="btn-primary">
                {/* 
                  ⬆️ EDIT HERE TO CHANGE BUTTON STYLE:
                  - btn-primary = primary button style
                  - Add py-4 px-8 for custom padding
                  - Add text-lg for larger text
                */}
                Explore Egypt
                {/* ⬆️ EDIT HERE TO CHANGE BUTTON TEXT */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
