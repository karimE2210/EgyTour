"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FAQSection } from "@/components/shared/faq-section";
import { useTranslation } from "@/hooks/use-translation";
import { ArrowRight, MapPin } from "lucide-react";

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
    description:
      "Discover tranquil retreats, natural healing spots, and peaceful hideaways from Sinai to Siwa.",
  },
];

const featuredAttractions = [
  {
    id: "great-pyramid",
    title: "Great Pyramid of Giza",
    description:
      "The last remaining Wonder of the Ancient World, standing as humanity's greatest architectural achievement for over 4,500 years.",
    image: "/images/mypics/pyramid1.jpeg",
    href: "/what-to-see/great-pyramid",
    category: "Ancient Wonder",
    highlights: [
      "UNESCO World Heritage",
      "Last Ancient Wonder",
      "4,500+ Years Old",
    ],
  },
  {
    id: "karnak-temple",
    title: "Karnak Temple Complex",
    description:
      "The largest religious complex ever built, featuring over 100 temples spanning 2,000 years of construction.",
    image: "/images/mypics/karnak.jpeg",
    href: "/what-to-see/karnak-temple",
    category: "Sacred Site",
    highlights: [
      "Largest Temple Complex",
      "2,000 Years of History",
      "Sound & Light Show",
    ],
  },
  {
    id: "valley-of-kings",
    title: "Valley of the Kings",
    description:
      "The royal necropolis where pharaohs were laid to rest with treasures for the afterlife, including Tutankhamun's tomb.",
    image: "/images/mypics/valley.jpeg",
    href: "/what-to-see/valley-of-kings",
    category: "Royal Tombs",
    highlights: [
      "Tutankhamun's Tomb",
      "62 Discovered Tombs",
      "Ancient Paintings",
    ],
  },
  {
    id: "abu-simbel",
    title: "Abu Simbel Temples",
    description:
      "Ramses II's magnificent temples carved into rock cliffs, relocated stone by stone to save them from flooding.",
    image: "/images/mypics/tempele.jpeg",
    href: "/what-to-see/abu-simbel",
    category: "Engineering Marvel",
    highlights: [
      "UNESCO Rescue Project",
      "Solar Alignment",
      "Colossal Statues",
    ],
  },
];

const whatToSeeFAQs = (t: any) => [
  {
    question: t("whatToSee.faq.topAttractions.question"),
    answer: <p>{t("whatToSee.faq.topAttractions.answer")}</p>,
  },
  {
    question: t("whatToSee.faq.grandMosque.question"),
    answer: <p>{t("whatToSee.faq.grandMosque.answer")}</p>,
  },
  {
    question: t("whatToSee.faq.attractionCosts.question"),
    answer: <p>{t("whatToSee.faq.attractionCosts.answer")}</p>,
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
  const { t } = useTranslation();

  const categories = [
    {
      id: "historical",
      title: "Historical Landmarks",
      description:
        "Explore ancient pyramids, temples, and archaeological wonders that have stood for millennia",
      image: "/images/mypics/pyramidsZoomOut.jpeg",
      href: "/what-to-see/historical",
    },
    {
      id: "museums",
      title: "Museums & Cultural Sites",
      description:
        "Discover Egypt's rich heritage through world-class museums and cultural attractions",
      image: "/images/mypics/meuseum.jpeg",
      href: "/what-to-see/museums",
    },
    {
      id: "natural",
      title: "Natural Wonders",
      description:
        "Experience breathtaking landscapes from the Sahara to the Red Sea",
      image: "/images/mypics/redss.jpeg",
      href: "/what-to-see/natural",
    },
    {
      id: "modern",
      title: "Modern Marvels",
      description:
        "Witness contemporary Egypt through architectural achievements and urban developments",
      image: "/images/mypics/cairoTower.jpeg",
      href: "/what-to-see/modern",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Immersive Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/mypics/ancient_tour.jpg"
            alt="Ancient wonders of Egypt"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Custom SVG Overlay for Visual Impact */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="none"
          >
            <path
              d="M1200,0 C1400,300 1600,400 1920,400 L1920,1080 C1600,800 1200,1000 800,1080 C400,1000 200,800 0,1080 L0,0 Z"
              fill="rgba(217, 119, 6, 0.15)"
              className="dark:opacity-60"
            />
          </svg>
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 dark:from-black/80 dark:via-black/50 dark:to-black/90" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-3xl">
              <p className="text-white text-sm font-medium mb-4 tracking-widest uppercase opacity-90">
                Ancient Wonders
              </p>
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Treasures of
                <span className="block text-amber-400 dark:text-amber-300">
                  Eternity
                </span>
              </h1>
              <p className="text-white text-xl mb-8 leading-relaxed opacity-90 max-w-2xl">
                Journey through 5,000 years of history. From the awe-inspiring
                Pyramids of Giza to the magnificent temples of Luxor, discover
                the monuments that have captivated travelers for centuries and
                continue to unlock the secrets of ancient civilization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105">
                  Explore Wonders
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 dark:bg-gray-800/50 dark:border-gray-600 dark:hover:bg-gray-700/50 rounded-full px-8 py-4 text-lg"
                >
                  Plan Your Visit
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Map Button */}
        <div className="absolute top-4 right-4 z-20">
          <Button
            variant="outline"
            className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800/90 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700/90"
          >
            <MapPin className="w-4 h-4 mr-2" />
            View Map
          </Button>
        </div>
      </section>

      {/* Main Content with Rich Storytelling */}
      <section className="relative min-h-screen py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white dark:from-gray-800 dark:to-gray-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm mb-12">
            <Link
              href="/"
              className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <span className="text-gray-600 dark:text-gray-300">
              What to see
            </span>
          </div>

          {/* Content Box with Enhanced Design */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 lg:p-16 shadow-2xl border border-amber-100 dark:border-gray-700 mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              What to see in Egypt
            </h2>

            <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-6">
              <p className="text-xl font-medium text-amber-700 dark:text-amber-400 mb-6">
                Wondering what to see in Egypt? Your options are endless and
                extraordinary.
              </p>

              <p>
                In the heart of the desert and along the life-giving Nile,
                you'll discover majestic buildings and awe-inspiring landscapes
                filled with experiences that you won't encounter anywhere else
                in the world. Egypt is not just a destination—it's a journey
                through time itself.
              </p>

              <p>
                Celebrate the pinnacle of ancient achievement on the{" "}
                <Link
                  href="/what-to-see/giza-plateau"
                  className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 underline font-medium"
                >
                  Giza Plateau
                </Link>
                , home to the last remaining Wonder of the Ancient World, the{" "}
                <Link
                  href="/what-to-see/great-pyramid"
                  className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 underline font-medium"
                >
                  Great Pyramid of Giza
                </Link>
                . Further south, the{" "}
                <Link
                  href="/what-to-see/karnak-temple"
                  className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 underline font-medium"
                >
                  Karnak Temple Complex
                </Link>{" "}
                stands as humanity's greatest architectural achievement, while
                the{" "}
                <Link
                  href="/what-to-see/valley-of-kings"
                  className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 underline font-medium"
                >
                  Valley of the Kings
                </Link>{" "}
                reveals the eternal resting places of pharaohs in tombs filled
                with treasures and mysteries.
              </p>

              <p>
                Venture into the Western Desert to discover{" "}
                <Link
                  href="/what-to-see/siwa-oasis"
                  className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 underline font-medium"
                >
                  Siwa Oasis
                </Link>
                , a verdant paradise where Alexander the Great once sought
                divine guidance. Scale{" "}
                <Link
                  href="/what-to-see/mount-sinai"
                  className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 underline font-medium"
                >
                  Mount Sinai
                </Link>
                , where Moses received the Ten Commandments, and explore ancient
                monasteries that have preserved Christian heritage for over
                1,500 years.
              </p>

              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 pt-4">
                Begin your exploration of this timeless land where every stone
                tells a story, and every sunset illuminates the grandeur of
                human achievement.
              </p>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Discover Attractions by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link key={category.id} href={category.href} className="group">
                  <Card className="h-full overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-md dark:hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
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
                          <h3 className="text-xl font-semibold group-hover:underline">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-5">
                        {category.description && (
                          <p className="text-sm text-muted-foreground dark:text-gray-400 mb-3">
                            {category.description}
                          </p>
                        )}
                        <Button
                          asChild
                          variant="link"
                          className="mt-3 pl-0 text-primary dark:text-amber-400"
                        >
                          <span>
                            Explore <span aria-hidden="true">→</span>
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Featured Attractions Section */}
          <div className="my-20">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                  Must-See Destinations
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Egypt's Crown Jewels
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                These legendary sites represent the pinnacle of human
                achievement and continue to inspire wonder in millions of
                visitors from around the world.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredAttractions.map((attraction, index) => (
                <Link
                  key={attraction.id}
                  href={attraction.href}
                  className="group"
                >
                  <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-black/50 transition-all duration-500 group-hover:scale-105 bg-white dark:bg-gray-800">
                    <CardContent className="p-0">
                      <div className="relative h-64 lg:h-72">
                        <Image
                          src={attraction.image}
                          alt={attraction.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                            {attraction.category}
                          </span>
                        </div>

                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-amber-300 dark:group-hover:text-amber-200 transition-colors">
                            {attraction.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-6 lg:p-8">
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                          {attraction.description}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {attraction.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-medium border border-amber-200 dark:border-amber-700"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-amber-600 dark:text-amber-400 font-semibold text-lg group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                            Discover More
                          </div>
                          <ArrowRight className="w-6 h-6 text-amber-600 dark:text-amber-400 group-hover:text-amber-700 dark:group-hover:text-amber-300 group-hover:translate-x-2 transition-all duration-300" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/10 dark:bg-gray-800/50 p-8 rounded-lg my-12 text-center border dark:border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to explore Egypt?
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              Plan your itinerary now and discover the perfect attractions for
              your visit.
            </p>
            <Button className="btn-primary bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600">
              View All Attractions
            </Button>
          </div>
        </div>
      </section>

      {/* Legendary Landmarks Section - Inspired by Reference */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 dark:from-amber-600/30 dark:to-orange-600/30 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl dark:shadow-gray-900/50">
                <Image
                  src="/images/mypics/pyramidsH.jpeg"
                  alt="Ancient Egyptian Landmarks"
                  width={600}
                  height={500}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute bottom-6 right-6">
                  <span className="bg-black/70 dark:bg-gray-900/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    Iconic Monuments
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl dark:shadow-gray-900/50 border border-amber-200 dark:border-gray-700">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                    Timeless Wonders
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Legendary
                  <span className="text-amber-600 dark:text-amber-400">
                    {" "}
                    Landmarks
                  </span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Egypt's monuments stand as eternal testaments to human
                  achievement. From the precision engineering of the Great
                  Pyramid to the artistic mastery of Karnak Temple, each
                  landmark tells the story of a civilization that reached
                  heights of knowledge and artistry that continue to inspire the
                  world today.
                </p>
                <div className="pt-4">
                  <Button className="bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white rounded-full px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105">
                    Discover Ancient Secrets
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step Back in Time Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-96 lg:h-[600px]">
          <Image
            src="/images/mypics/tempele.jpeg"
            alt="Ancient Egyptian Temple"
            fill
            className="object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

          <div className="absolute bottom-6 left-6">
            <span className="bg-white/20 dark:bg-gray-800/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30 dark:border-gray-600/50">
              Sacred Heritage
            </span>
          </div>

          {/* Content box positioned on the right */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 max-w-md lg:max-w-lg">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-l-3xl p-8 lg:p-12 shadow-2xl dark:shadow-gray-900/50 border-l-4 border-amber-500 dark:border-amber-400 mr-0">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                    Ancient Wisdom
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  Step back in
                  <span className="text-purple-600 dark:text-purple-400">
                    time
                  </span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Egypt's sacred sites and cultural landmarks preserve wisdom
                  spanning over 5,000 years. Ancient hieroglyphs reveal
                  mathematical and astronomical knowledge that predates modern
                  discoveries, while architectural marvels demonstrate
                  engineering capabilities that challenge our understanding of
                  ancient civilizations.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Begin Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Bottom Hero Section */}
      <section className="relative h-96 lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/mypics/redss.jpeg"
            alt="Egyptian Wonders and Natural Beauty"
            fill
            className="object-cover"
          />
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-600/40 to-transparent dark:from-teal-950/90 dark:via-teal-800/50 dark:to-transparent" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-white text-sm font-medium mb-4 tracking-widest uppercase opacity-90">
                Natural Marvels
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Beyond Ancient
                <span className="text-teal-300 dark:text-teal-200">
                  Wonders
                </span>
              </h2>
              <p className="text-white text-xl leading-relaxed opacity-90 max-w-2xl mb-8">
                From the crystalline waters of the Red Sea to the vast expanse
                of the Sahara, Egypt's natural beauty provides the perfect
                complement to its historical treasures.
              </p>
              <Button className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105">
                Explore Natural Egypt
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Teal Footer Accent */}
      <div className="h-24 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-500 dark:from-teal-700 dark:via-teal-800 dark:to-cyan-700"></div>

      {/* FAQs */}
      <FAQSection faqs={whatToSeeFAQs(t)} title="Frequently Asked Questions" />
    </div>
  );
}
