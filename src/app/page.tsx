"use client";

/* 📚 IMPORTS */
import { useTranslation } from '@/hooks/use-translation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedSection } from "@/components/home/featured-section";
import { PopularDestinations } from "@/components/home/popular-destinations";
import { PlanTrip } from "@/components/home/plan-trip";
import { CTASection } from "@/components/home/cta-section";
import { FAQSection } from "@/components/shared/faq-section";

/* 📋 FAQ DATA - Sample FAQ items for the homepage */
const homeFAQs = [
  {
    question: "What are the best fun things to do in Egypt?",
    answer: (
      <div>
        <p></p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    ),
  },
  {
    question: "What are the top attractions in Egypt?",
    answer: (
      <div>
        <p></p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    ),
  },
  {
    question: "Is Egypt safe for tourists?",
    answer: (
      <p></p>
    ),
  },
];

/* 🎯 HOME PAGE COMPONENT */
export default function Home() {
  /* 🌍 TRANSLATION HOOK */
  const { t } = useTranslation();
  /* 
    ⬆️ EDIT HERE TO CHANGE TRANSLATION:
    - t("key") = get translation for key
    - Add more translation keys as needed
  */

  return (
    <main>
      {/* 🎯 HERO SECTION */}
      <HeroSection />
      
      {/* 🎨 FEATURED HIGHLIGHTS */}
      <FeaturedSection />
      
      {/* 🗺️ POPULAR DESTINATIONS */}
      <PopularDestinations />
      
      {/* 📝 PLAN YOUR TRIP */}
      <PlanTrip />
      
      {/* 📢 CTA SECTION */}
      <CTASection />

      {/* ❓ FAQ SECTION - Frequently asked questions */}
      <FAQSection 
        faqs={homeFAQs} 
        title={t("home.faq.title")} 
      />
      {/* 
        ⬆️ EDIT HERE TO CHANGE FAQ:
        - Add more questions
        - Change section title
        - Modify answer format
      */}
    </main>
  );
}
