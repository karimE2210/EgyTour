"use client";

/* 📚 IMPORTS */
import { useTranslation } from '@/hooks/use-translation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedSection } from "@/components/home/featured-section";
import { FamilyAdventures } from "@/components/home/family-adventures";
import { PopularDestinations } from "@/components/home/popular-destinations";
import { PlanTrip } from "@/components/home/plan-trip";
import { CTASection } from "@/components/home/cta-section";
import { FAQSection } from "@/components/shared/faq-section";

/* 📋 FAQ DATA - Sample FAQ items for the homepage */
const homeFAQs = (t: any) => [
  {
    question: t("home.faq.funThings.question"),
    answer: (
      <p>{t("home.faq.funThings.answer")}</p>
    ),
  },
  {
    question: t("home.faq.topAttractions.question"),
    answer: (
      <p>{t("home.faq.topAttractions.answer")}</p>
    ),
  },
  {
    question: t("home.faq.safety.question"),
    answer: (
      <p>{t("home.faq.safety.answer")}</p>
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
      
      {/* 👨‍👩‍👧‍👦 FAMILY ADVENTURES SECTION */}
      <FamilyAdventures />
      
      {/* 🗺️ POPULAR DESTINATIONS */}
      <PopularDestinations />
      
      {/* 📝 PLAN YOUR TRIP */}
      <PlanTrip />
      
      {/* 📢 CTA SECTION */}
      <CTASection />

      {/* ❓ FAQ SECTION - Frequently asked questions */}
      <FAQSection 
        faqs={homeFAQs(t)} 
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
