"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FAQSection } from "@/components/shared/faq-section";
import { useTranslation } from '@/hooks/use-translation'

const attractionsCategories = [
  {
    id: "iconic-landmarks",
    title: "Iconic Landmarks",
    image: "/images/desert-activities.jpg",
    href: "/what-to-see/iconic-landmarks",
  },
  {
    id: "cultural-attractions",
    title: "Historical & Cultural Attractions",
    image: "/images/ferrari-world.jpg",
    href: "/what-to-see/historical-and-cultural-attractions",
  },
  {
    id: "national-attractions",
    title: "National Attractions",
    image: "/images/desert-activities.jpg",
    href: "/what-to-see/national-attractions",
  },
  {
    id: "wellness-relaxation",
    title: "Need a Break from the World",
    image: "/images/wellness-hero.jpg",
    href: "/things-to-do/wellness-and-relaxation",
    description: "Discover tranquil retreats, natural healing spots, and peaceful hideaways from Sinai to Siwa."
  },
];

const featuredAttractions = [
  {
    id: "grand-mosque",
    title: "",
    image: "/images/desert-activities.jpg",
    href: "/what-to-see/national-attractions/sheikh-zayed-grand-mosque",
  },
  {
    id: "louvre",
    title: "",
    image: "/images/ferrari-world.jpg",
    href: "/what-to-see/historical-and-cultural-attractions/louvre-abu-dhabi",
  },
  {
    id: "qasr-al-watan",
    title: "",
    image: "/images/yas-waterworld.jpg",
    href: "/what-to-see/iconic-landmarks/qasr-al-watan",
  },
  {
    id: "teamlab",
    title: "",
    image: "/images/teamlab.jpg",
    href: "/what-to-see/historical-and-cultural-attractions/teamlab",
  },
];

const whatToSeeFAQs = [
  {
    question: "What are the top 5 tourist attractions in Egypt?",
    answer: (
      <div>
        <p>Egypt offers a wealth of incredible attractions, but the top 5 most popular include:</p>
        <ol className="list-decimal pl-5 mt-2 space-y-2">
          <li></li>
         
          <li></li>
        </ol>
      </div>
    ),
  },
  {
    question: "Is the Grand Mosque in Egypt worth visiting?",
    answer: (
      <p>
        
      </p>
    ),
  },
  {
    question: "How much does it cost to visit attractions in Egypt?",
    answer: (
      <div>
        <p>Attraction costs in Egypt vary widely:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li></li>
        </ul>
        <p className="mt-2"></p>
      </div>
    ),
  },
];

const attractions = [
  {
    id: "pyramids",
    title: "Pyramids of Giza",
    image: "/images/pyramids.jpg",
    href: "/what-to-see/landmarks/pyramids-of-giza",
  },
  {
    id: "museum",
    title: "Grand Egyptian Museum",
    image: "/images/museum.jpg",
    href: "/what-to-see/museums/grand-egyptian-museum",
  },
  {
    id: "temple",
    title: "Karnak Temple",
    image: "/images/karnak.jpg",
    href: "/what-to-see/landmarks/karnak-temple",
  },
];

export default function WhatToSee() {
  const { t } = useTranslation()

  const categories = [
    {
      id: 'historical',
      title: t('whatToSee.categories.historical'),
      description: t('whatToSee.categories.historical'),
      image: '/images/historical.jpg',
      href: '/what-to-see/historical'
    },
    {
      id: 'museums',
      title: t('whatToSee.categories.museums'),
      description: t('whatToSee.categories.museums'),
      image: '/images/museums.jpg',
      href: '/what-to-see/museums'
    },
    {
      id: 'natural',
      title: t('whatToSee.categories.natural'),
      description: t('whatToSee.categories.natural'),
      image: '/images/natural.jpg',
      href: '/what-to-see/natural'
    },
    {
      id: 'modern',
      title: t('whatToSee.categories.modern'),
      description: t('whatToSee.categories.modern'),
      image: '/images/modern.jpg',
      href: '/what-to-see/modern'
    }
  ]

  return (
    <div className="pb-12">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/teamlab.jpg"
            alt="What to see in Egypt"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
        </div>

        <div className="container-custom relative z-10 h-full flex flex-col justify-center text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('whatToSee.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {t('whatToSee.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <p className="text-lg mb-12">
          Egypt is home to some of the world's most remarkable landmarks and attractions. Discover the legacy of one of the oldest civilizations on Earth as you explore the majestic temples of Luxor and Karnak, sail along the timeless Nile River, or wander through the vibrant streets of Cairo. Whether you're fascinated by ancient history, rich culture, or architectural marvels, Egypt offers an unforgettable experience at every turn.
        </p>

        {/* Categories Grid */}
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-8">Discover Attractions by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={category.href} className="group">
                <Card className="h-full overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-xl font-semibold group-hover:underline">{category.title}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      {category.description && (
                        <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                      )}
                      <Button asChild variant="link" className="mt-3 pl-0 text-primary">
                        <span>Explore <span aria-hidden="true">→</span></span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Attractions */}
        <div className="my-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8">Must-See Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredAttractions.map((attraction) => (
              <Link key={attraction.id} href={attraction.href} className="group">
                <Card className="overflow-hidden border-none shadow-sm h-full">
                  <CardContent className="p-0 flex flex-col md:flex-row h-full">
                    <div className="md:w-2/5 h-48 md:h-auto relative">
                      <Image
                        src={attraction.image}
                        alt={attraction.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 md:w-3/5 flex flex-col">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {attraction.title}
                      </h3>
                      <div className="mt-4 text-primary text-sm font-medium">
                        Learn more <span aria-hidden="true">→</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/10 p-8 rounded-lg my-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to explore Egypt?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Plan your itinerary now and discover the perfect attractions for your visit.
          </p>
          <Button className="btn-primary">
            View All Attractions
          </Button>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={whatToSeeFAQs} title="Frequently Asked Questions" />
    </div>
  );
}
