"use client";

/* 📚 IMPORTS */
import { useTranslation } from "@/hooks/use-translation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedSection } from "@/components/home/featured-section";
import { FamilyAdventures } from "@/components/home/family-adventures";
import { PopularDestinations } from "@/components/home/popular-destinations";

import { FAQSection } from "@/components/shared/faq-section";

/* 📋 FAQ DATA - Sample FAQ items for the homepage */
const homeFAQs = (t: any) => [
  {
    question: t("home.faq.funThings.question"),
    answer: <p>{t("home.faq.funThings.answer")}</p>,
  },
  {
    question: t("home.faq.topAttractions.question"),
    answer: <p>{t("home.faq.topAttractions.answer")}</p>,
  },
  {
    question: t("home.faq.safety.question"),
    answer: <p>{t("home.faq.safety.answer")}</p>,
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

      {/* 🔟 INTERACTIVE MAP PREVIEW SECTION */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
            {t("home.interactiveMap.title")}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {t("home.interactiveMap.subtitle")}
          </p>
          <div className="relative w-full max-w-2xl mx-auto">
            <Image
              src="/images/mypics/vecteezy_vector-illustration-of-the-black-map-of-egypt-on-white_.jpg"
              alt="Map of Egypt"
              width={1200}
              height={800}
              className="w-full rounded-lg shadow-lg object-contain mix-blend-multiply"
              style={{
                filter: "contrast(1.2) brightness(0.9)",
                backgroundColor: "transparent",
              }}
            />

            {/* Interactive Hotspots */}
            {[
              // Alexandria region (Mediterranean coast)
              {
                name: "Alexandria",
                description: "Mediterranean coast & ancient library",
                top: "21%",
                left: "43%",
                link: "/where-to-go/cities/alexandria",
              },
              // Cairo region (Nile Delta area)
              {
                name: "Cairo",
                description: "Ancient pyramids & bustling markets",
                top: "31.5%",
                left: "50%",
                link: "/where-to-go/cities/cairo",
              },
              // Sinai region (Eastern peninsula)
              {
                name: "Sinai",
                description: "Desert adventures & Red Sea",
                top: "30%",
                left: "67.5%",
                link: "/things-to-do/sinai",
              },
              // Luxor region (Upper Egypt)
              {
                name: "Luxor",
                description: "Valley of Kings & ancient temples",
                top: "58.5%",
                left: "58%",
                link: "/where-to-go/cities/luxor",
              },
              // Aswan region (Far south)
              {
                name: "Aswan",
                description: "Nubian culture & Nile beauty",
                top: "70.25%",
                left: "58.25%",
                link: "/where-to-go/cities/aswan",
              },
            ].map((region) => (
              <Link
                key={region.name}
                href={region.link}
                className="absolute group cursor-pointer"
                style={{ top: region.top, left: region.left }}
              >
                {/* Hotspot indicator */}
                <div className="relative">
                  <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300 shadow-lg"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-amber-400 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Tooltip on hover */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-black/90 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl">
                    <div className="font-semibold">{region.name}</div>
                    <div className="text-xs text-gray-300">
                      {region.description}
                    </div>
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            {t("home.interactiveMap.clickInstructions")}
          </p>
        </div>
      </section>

      {/* 8️⃣ EXPLORE BY MOOD SECTION */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            {t("home.exploreByMood.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10">
            {t("home.exploreByMood.subtitle")}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {[
              {
                label: t("home.exploreByMood.moods.relax"),
                icon: "🧘",
                link: "/things-to-do/wellness-and-relaxation",
              },
              {
                label: t("home.exploreByMood.moods.historyBuff"),
                icon: "🏛️",
                link: "/things-to-do/historical-sites",
              },
              {
                label: t("home.exploreByMood.moods.offTheGrid"),
                icon: "🌍",
                link: "/things-to-do/desert-and-outdoor-activities",
              },
            ].map(({ label, icon, link }) => (
              <Link
                key={label}
                href={link}
                className="group flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl hover:bg-amber-100 dark:hover:bg-amber-900 transition"
              >
                <span className="text-4xl mb-2 group-hover:scale-125 transition-transform">
                  {icon}
                </span>
                <span className="font-medium text-gray-800 dark:text-gray-100">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9️⃣ HIDDEN EGYPT SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#fdf6e3] to-[#fff9f1] dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            {t("home.hiddenEgypt.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10">
            {t("home.hiddenEgypt.subtitle")}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "El-Minya",
                img: "/images/mypics/elminya.jpeg",
                link: "/where-to-go/hidden-egypt",
              },
              {
                name: "Dakhla Oasis",
                img: "/images/mypics/Dakhla Oasis.jpeg",
                link: "/where-to-go/hidden-egypt",
              },
              {
                name: "Tanis",
                img: "/images/mypics/Tanis.jpeg",
                link: "/where-to-go/hidden-egypt",
              },
            ].map(({ name, img, link }) => (
              <Link
                key={name}
                href={link}
                className="relative group overflow-hidden rounded-xl shadow-md block"
              >
                <Image
                  src={img}
                  alt={name}
                  width={300}
                  height={224}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-lg">{name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Button
              asChild
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              <Link href="/where-to-go/hidden-egypt">
                {t("home.hiddenEgypt.exploreAll")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 🔟 FAQ SECTION */}
      <FAQSection faqs={homeFAQs(t)} title={t("home.faq.title")} />
    </main>
  );
}
