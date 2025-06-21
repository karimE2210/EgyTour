"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from '@/hooks/use-translation';
import { MapPin } from "lucide-react";

const locations = [
  {
    id: "fayoum",
    title: "Fayoum Oasis",
    description: "Ancient lakes, waterfalls, and pottery villages surrounded by desert dunes.",
    image: "/images/oases/fayoum.jpg",
    coordinates: { x: 40, y: 45 },
    href: "/where-to-go/oases-and-villages/fayoum"
  },
  {
    id: "dakhla",
    title: "Dakhla Oasis",
    description: "Medieval Islamic architecture meets natural hot springs in this remote paradise.",
    image: "/images/oases/dakhla.jpg",
    coordinates: { x: 30, y: 60 },
    href: "/where-to-go/oases-and-villages/dakhla"
  },
  {
    id: "siwa",
    title: "Siwa Oasis",
    description: "Crystal-clear springs and mud-brick fortresses in Alexander's ancient oracle town.",
    image: "/images/oases/siwa.jpg",
    coordinates: { x: 20, y: 35 },
    href: "/where-to-go/oases-and-villages/siwa"
  },
  {
    id: "nubian",
    title: "Nubian Villages",
    description: "Colorful houses and ancient traditions along the banks of Lake Nasser.",
    image: "/images/oases/nubian-villages.jpg",
    coordinates: { x: 60, y: 80 },
    href: "/where-to-go/oases-and-villages/nubian-villages"
  }
];

const travelerTips = [
  {
    title: "Best Time to Visit",
    tips: [
      "October to April for comfortable temperatures",
      "Early morning or late afternoon for desert activities",
      "Avoid summer months (May-September) due to extreme heat"
    ]
  },
  {
    title: "Packing Essentials",
    tips: [
      "Light, breathable clothing with sun protection",
      "Sturdy walking shoes for desert terrain",
      "Reusable water bottle and sun protection gear",
      "Basic first aid kit and medications"
    ]
  },
  {
    title: "Local Guide Tips",
    tips: [
      "Hire local guides for authentic experiences",
      "Book accommodations through community tourism initiatives",
      "Learn basic Arabic greetings",
      "Respect local customs and dress codes"
    ]
  }
];

export default function OasesAndVillages() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/oases/hero.jpg"
          alt="Egyptian Oasis"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hidden Villages & Oases</h1>
            <p className="text-xl md:text-2xl">
              Discover Egypt's secret havens beyond the crowded pyramids.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-12">
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-muted-foreground">
          Journey to remote desert lakes where palm groves meet crystal-clear springs, 
          and traditional mud-brick villages preserve centuries-old Egyptian ways of life. 
          These hidden gems offer an authentic glimpse into Egypt's timeless soul.
        </p>
      </section>

      {/* Locations Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Hidden Treasures</h2>
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
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Interactive Map */}
      <section className="container mx-auto px-4 py-12 bg-muted/30">
        <h2 className="text-3xl font-bold mb-8 text-center">Find Your Oasis</h2>
        <div className="relative w-full h-[400px] bg-background rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/oases/egypt-map.svg"
            alt="Map of Egyptian Oases"
            fill
            className="object-contain p-4"
          />
          {locations.map((location) => (
            <Link
              key={location.id}
              href={location.href}
              className="absolute group"
              style={{ left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%` }}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                <MapPin className="h-6 w-6 text-primary animate-bounce" />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background text-foreground rounded px-2 py-1 text-sm whitespace-nowrap shadow-lg">
                  {location.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Traveler Tips */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Traveler Tips</h2>
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

      {/* CTA Banner */}
      <section className="relative h-[300px] mt-12">
        <Image
          src="/images/oases/cta-banner.jpg"
          alt="Oasis Sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to explore Egypt's hidden gems?
            </h2>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/plan-your-trip">Plan Your Oasis Escape</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 