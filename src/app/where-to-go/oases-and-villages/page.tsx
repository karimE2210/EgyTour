"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from '@/hooks/use-translation';
import { MapPin } from "lucide-react";

export default function OasesAndVillages() {
  const { t } = useTranslation();

  const locations = [
    {
      id: "fayoum",
      title: t("oasesVillages.fayoum.title"),
      description: t("oasesVillages.fayoum.description"),
      image: "/images/oases/fayoum.jpg",
      coordinates: { x: 40, y: 45 },
      href: "/where-to-go/oases-and-villages/fayoum"
    },
    {
      id: "dakhla",
      title: t("oasesVillages.dakhla.title"),
      description: t("oasesVillages.dakhla.description"),
      image: "/images/oases/dakhla.jpg",
      coordinates: { x: 30, y: 60 },
      href: "/where-to-go/oases-and-villages/dakhla"
    },
    {
      id: "siwa",
      title: t("oasesVillages.siwa.title"),
      description: t("oasesVillages.siwa.description"),
      image: "/images/oases/siwa.jpg",
      coordinates: { x: 20, y: 35 },
      href: "/where-to-go/oases-and-villages/siwa"
    }
  ];

  const travelerTips = [
    {
      title: t("oasesVillages.tips.bestTime.title"),
      tips: [
        t("oasesVillages.tips.bestTime.octToApr"),
        t("oasesVillages.tips.bestTime.earlyLate"),
        t("oasesVillages.tips.bestTime.avoidSummer")
      ]
    },
    {
      title: t("oasesVillages.tips.packing.title"),
      tips: [
        t("oasesVillages.tips.packing.clothing"),
        t("oasesVillages.tips.packing.shoes"),
        t("oasesVillages.tips.packing.water"),
        t("oasesVillages.tips.packing.firstAid")
      ]
    },
    {
      title: t("oasesVillages.tips.localGuide.title"),
      tips: [
        t("oasesVillages.tips.localGuide.hire"),
        t("oasesVillages.tips.localGuide.book"),
        t("oasesVillages.tips.localGuide.arabic"),
        t("oasesVillages.tips.localGuide.respect")
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/oases/hero.jpg"
          alt={t("oasesVillages.hero.title")}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("oasesVillages.hero.title")}</h1>
            <p className="text-xl md:text-2xl">
              {t("oasesVillages.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-12">
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-muted-foreground">
          {t("oasesVillages.intro")}
        </p>
      </section>

      {/* Locations Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("oasesVillages.exploreTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Link key={location.id} href={location.href}>
              <Card className="group h-full transition-transform duration-300 hover:scale-105">
                <CardContent className="p-0 h-full">
                  <div className="relative h-48">
                    <Image
                      src={location.image}
                      alt={location.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{location.title}</h3>
                    <p className="text-muted-foreground mb-4">{location.description}</p>
                    <Button variant="outline" className="w-full">
                      {t("oasesVillages.learnMore")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Traveler Tips */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("oasesVillages.travelerTips.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {travelerTips.map((section) => (
            <div key={section.title} className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 