"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Landmark, Ship, ShoppingBag, BedDouble, Compass } from "lucide-react";
import { useTranslation } from '@/hooks/use-translation';
import { FavoriteButton } from '@/components/ui/favorite-button';
import ReviewsDisplay from '@/components/shared/reviews-display';

export default function HigherEgypt() {
  const { t } = useTranslation();

  const templesAndTombs = [
    {
      id: "karnak",
      title: t('higherEgypt.content.karnak.title'),
      description: t('higherEgypt.content.karnak.description'),
      image: "/images/mypics/karnak.jpeg",
      coordinates: { lat: 25.7189, lng: 32.6575 },
      type: t('higherEgypt.data.templeComplex'),
      bestTime: t('higherEgypt.data.octoberToApril')
    },
    {
      id: "valley-of-kings",
      title: t('higherEgypt.content.valleyOfKings.title'),
      description: t('higherEgypt.content.valleyOfKings.description'),
      image: "/images/mypics/valley.jpeg",
      coordinates: { lat: 25.7400, lng: 32.6000 },
      type: t('higherEgypt.data.necropolis'),
      bestTime: t('higherEgypt.data.octoberToApril')
    },
    {
      id: "abu-simbel",
      title: t('higherEgypt.content.abuSimbel.title'),
      description: t('higherEgypt.content.abuSimbel.description'),
      image: "/images/mypics/ABU SIMBEL.jpeg",
      coordinates: { lat: 22.3372, lng: 31.6256 },
      type: t('higherEgypt.data.templeComplex'),
      bestTime: t('higherEgypt.data.octoberToApril')
    },
    {
      id: "hatshepsut",
      title: t('higherEgypt.content.hatshepsut.title'),
      description: t('higherEgypt.content.hatshepsut.description'),
      image: "/images/mypics/hatshepsut.jpeg",
      coordinates: { lat: 25.7380, lng: 32.6067 },
      type: t('higherEgypt.data.mortuaryTemple'),
      bestTime: t('higherEgypt.data.octoberToApril')
    }
  ];

  const nileExperiences = [
    {
      id: "felucca",
      title: t('higherEgypt.content.felucca.title'),
      description: t('higherEgypt.content.felucca.description'),
      image: "/images/mypics/feluca.jpeg",
      coordinates: { lat: 25.7000, lng: 32.6500 },
      type: t('higherEgypt.data.culturalExperience'),
      bestTime: t('higherEgypt.data.yearRound')
    },
    {
      id: "nile-cruise",
      title: t('higherEgypt.content.nileCruise.title'),
      description: t('higherEgypt.content.nileCruise.description'),
      image: "/images/mypics/nilec.jpeg",
      coordinates: { lat: 25.7000, lng: 32.6500 },
      type: t('higherEgypt.data.luxuryExperience'),
      bestTime: t('higherEgypt.data.octoberToApril')
    },
    {
      id: "nubian-village",
      title: t('higherEgypt.content.nubianVillage.title'),
      description: t('higherEgypt.content.nubianVillage.description'),
      image: "/images/mypics/nubia.jpeg",
      coordinates: { lat: 24.0889, lng: 32.8997 },
      type: t('higherEgypt.data.culturalExperience'),
      bestTime: t('higherEgypt.data.yearRound')
    }
  ];

  const culturalAdventures = [
    {
      id: "luxor-souk",
      title: t('higherEgypt.content.luxorSouk.title'),
      description: t('higherEgypt.content.luxorSouk.description'),
      image: "/images/mypics/souk.jpeg",
      coordinates: { lat: 25.7000, lng: 32.6500 },
      type: t('higherEgypt.data.shopping'),
      bestTime: t('higherEgypt.data.yearRound')
    },
    {
      id: "luxor-museum",
      title: t('higherEgypt.content.luxorMuseum.title'),
      description: t('higherEgypt.content.luxorMuseum.description'),
      image: "/images/mypics/luxM.jpeg",
      coordinates: { lat: 25.7000, lng: 32.6500 },
      type: t('higherEgypt.data.museum'),
      bestTime: t('higherEgypt.data.yearRound')
    },
    {
      id: "nubian-crafts",
      title: t('higherEgypt.content.nubianCrafts.title'),
      description: t('higherEgypt.content.nubianCrafts.description'),
      image: "/images/mypics/craft.jpeg",
      coordinates: { lat: 24.0889, lng: 32.8997 },
      type: t('higherEgypt.data.culturalExperience'),
      bestTime: t('higherEgypt.data.yearRound')
    }
  ];

  const accommodations = [
    {
      id: "luxor-resort",
      title: t('higherEgypt.content.luxorResort.title'),
      description: t('higherEgypt.content.luxorResort.description'),
      image: "/images/mypics/hiltonx.jpeg",
      coordinates: { lat: 25.7000, lng: 32.6500 },
      type: t('higherEgypt.data.resort'),
      price: t('higherEgypt.data.priceHigh')
    },
    {
      id: "aswan-hotel",
      title: t('higherEgypt.content.aswanHotel.title'),
      description: t('higherEgypt.content.aswanHotel.description'),
      image: "/images/mypics/aswanh.jpeg",
      coordinates: { lat: 24.0889, lng: 32.8997 },
      type: t('higherEgypt.data.historicHotel'),
      price: t('higherEgypt.data.priceHigh')
    },
    {
      id: "nubian-lodge",
      title: t('higherEgypt.content.nubianLodge.title'),
      description: t('higherEgypt.content.nubianLodge.description'),
      image: "/images/mypics/lodge.jpeg",
      coordinates: { lat: 24.0889, lng: 32.8997 },
      type: t('higherEgypt.data.culturalLodge'),
      price: t('higherEgypt.data.priceMedium')
    }
  ];

  const southernFrontiers = [
    {
      id: "halayeb",
      title: t('higherEgypt.content.halayeb.title'),
      description: t('higherEgypt.content.halayeb.description'),
      image: "/images/mypics/halaib.jpeg",
      coordinates: { lat: 22.0000, lng: 36.8667 },
      type: t('higherEgypt.data.naturalArea'),
      highlights: [t('higherEgypt.data.highlights.wildlife'), t('higherEgypt.data.highlights.beaches'), t('higherEgypt.data.highlights.ecoTourism')]
    },
    {
      id: "shalateen",
      title: t('higherEgypt.content.shalateen.title'),
      description: t('higherEgypt.content.shalateen.description'),
      image: "/images/mypics/shh.jpeg",
      coordinates: { lat: 23.1333, lng: 35.5833 },
      type: t('higherEgypt.data.culturalArea'),
      highlights: [t('higherEgypt.data.highlights.bedouinCulture'), t('higherEgypt.data.highlights.marineLife'), t('higherEgypt.data.highlights.desertSafaris')]
    }
  ];

  const attractions = [
    {
      id: "luxor",
      title: t('higherEgypt.attractions.luxor.title'),
      description: t('higherEgypt.attractions.luxor.description'),
      image: "/images/mypics/lux.jpeg",
    },
    {
      id: "aswan",
      title: t('higherEgypt.attractions.aswan.title'),
      description: t('higherEgypt.attractions.aswan.description'),
      image: "/images/mypics/aswan.jpeg",
    },
    {
      id: "kom-ombo",
      title: t('higherEgypt.attractions.komOmbo.title'),
      description: t('higherEgypt.attractions.komOmbo.description'),
      image: "/images/mypics/kom.jpeg",
    },
  ];

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/mypics/11276525-uhd_4096_1720_25fps.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="/images/mypics/egypt.jpeg"
              alt="Higher Egypt"
              fill
              className="object-cover"
              priority
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
        </div>

        <div className="container-custom relative z-10 h-full flex flex-col justify-center text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('higherEgypt.hero.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {t('higherEgypt.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <Tabs defaultValue="temples" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="temples" className="flex items-center gap-2">
              <Landmark className="w-4 h-4" />
              {t('higherEgypt.tabs.temples')}
            </TabsTrigger>
            <TabsTrigger value="nile" className="flex items-center gap-2">
              <Ship className="w-4 h-4" />
              {t('higherEgypt.tabs.nile')}
            </TabsTrigger>
            <TabsTrigger value="cultural" className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              {t('higherEgypt.tabs.cultural')}
            </TabsTrigger>
            <TabsTrigger value="stay" className="flex items-center gap-2">
              <BedDouble className="w-4 h-4" />
              {t('higherEgypt.tabs.stay')}
            </TabsTrigger>
            <TabsTrigger value="frontiers" className="flex items-center gap-2">
              <Compass className="w-4 h-4" />
              {t('higherEgypt.tabs.frontiers')}
            </TabsTrigger>
          </TabsList>

          {/* Temples & Tombs */}
          <TabsContent value="temples">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {templesAndTombs.map((site) => (
                <Card key={site.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={site.image}
                        alt={site.title}
                        fill
                        className="object-cover"
                      />
                      <FavoriteButton 
                        itemId={site.id} 
                        itemType="temple" 
                        itemName={site.title}
                        itemImage={site.image}
                        itemLocation="Higher Egypt"
                        size="md"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{site.title}</h3>
                      <p className="text-muted-foreground mb-4">{site.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-medium">{t('higherEgypt.labels.type')}:</span> {site.type}
                        </div>
                        <div>
                          <span className="font-medium">{t('higherEgypt.labels.bestTime')}:</span> {site.bestTime}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Nile Experiences */}
          <TabsContent value="nile">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nileExperiences.map((experience) => (
                <Card key={experience.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={experience.image}
                        alt={experience.title}
                        fill
                        className="object-cover"
                      />
                      <FavoriteButton 
                        itemId={experience.id} 
                        itemType="nile" 
                        itemName={experience.title}
                        itemImage={experience.image}
                        itemLocation="Higher Egypt"
                        size="md"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                      <p className="text-muted-foreground mb-4">{experience.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-medium">{t('higherEgypt.labels.type')}:</span> {experience.type}
                        </div>
                        <div>
                          <span className="font-medium">{t('higherEgypt.labels.bestTime')}:</span> {experience.bestTime}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Cultural Adventures */}
          <TabsContent value="cultural">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {culturalAdventures.map((adventure) => (
                <Card key={adventure.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={adventure.image}
                        alt={adventure.title}
                        fill
                        className="object-cover"
                      />
                      <FavoriteButton 
                        itemId={adventure.id} 
                        itemType="cultural" 
                        itemName={adventure.title}
                        itemImage={adventure.image}
                        itemLocation="Higher Egypt"
                        size="md"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{adventure.title}</h3>
                      <p className="text-muted-foreground mb-4">{adventure.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-medium">{t('higherEgypt.labels.type')}:</span> {adventure.type}
                        </div>
                        <div>
                          <span className="font-medium">{t('higherEgypt.labels.bestTime')}:</span> {adventure.bestTime}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Where to Stay */}
          <TabsContent value="stay">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accommodations.map((accommodation) => (
                <Card key={accommodation.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={accommodation.image}
                        alt={accommodation.title}
                        fill
                        className="object-cover"
                      />
                      <FavoriteButton 
                        itemId={accommodation.id} 
                        itemType="accommodation" 
                        itemName={accommodation.title}
                        itemImage={accommodation.image}
                        itemLocation="Higher Egypt"
                        size="md"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{accommodation.title}</h3>
                      <p className="text-muted-foreground mb-4">{accommodation.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-medium">{t('higherEgypt.labels.type')}:</span> {accommodation.type}
                        </div>
                        <div>
                          <span className="font-medium">{t('higherEgypt.labels.priceRange')}:</span> {accommodation.price}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Southern Frontiers */}
          <TabsContent value="frontiers">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {southernFrontiers.map((frontier) => (
                <Card key={frontier.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={frontier.image}
                        alt={frontier.title}
                        fill
                        className="object-cover"
                      />
                      <FavoriteButton 
                        itemId={frontier.id} 
                        itemType="frontier" 
                        itemName={frontier.title}
                        itemImage={frontier.image}
                        itemLocation="Higher Egypt"
                        size="md"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{frontier.title}</h3>
                      <p className="text-muted-foreground mb-4">{frontier.description}</p>
                      <div className="space-y-2">
                        <div className="font-medium">{t('higherEgypt.labels.highlights')}:</div>
                        <ul className="list-disc list-inside text-sm">
                          {frontier.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-16 bg-primary/10 p-8 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('higherEgypt.cta.title')}</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            {t('higherEgypt.cta.description')}
          </p>
          <Button className="btn-primary">
            {t('higherEgypt.cta.button')}
          </Button>
        </div>

        {/* Attractions */}
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-8">{t('higherEgypt.attractions.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {attractions.map((attraction) => (
              <Card key={attraction.id} className="overflow-hidden border-none shadow-md">
                <CardContent className="p-0">
                  <div className="aspect-video relative">
                    <Image
                      src={attraction.image}
                      alt={attraction.title}
                      fill
                      className="object-cover"
                    />
                    <FavoriteButton 
                      itemId={attraction.id} 
                      itemType="attraction" 
                      itemName={attraction.title}
                      itemImage={attraction.image}
                      itemLocation="Higher Egypt"
                      size="sm"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{attraction.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{attraction.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-8">{t('higherEgypt.activities.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('higherEgypt.activities.cruise.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('higherEgypt.activities.cruise.description')}
              </p>
              <Button
                asChild
                className="btn-primary"
              >
                <a
                  href="https://nilecruisebooking.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('higherEgypt.activities.cruise.cta')}
                </a>
              </Button>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('higherEgypt.activities.temples.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('higherEgypt.activities.temples.description')}
              </p>
              <Button
                asChild
                className="btn-primary"
              >
                <a
                  href="https://www.getyourguide.com/luxor-temple-l73255/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('higherEgypt.activities.temples.cta')}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* User Reviews Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-8">Traveler Reviews</h2>
          <div className="max-w-md">
            <ReviewsDisplay 
              maxReviews={3} 
              showHeader={false}
              className="shadow-lg"
              location="Higher Egypt"
            />
          </div>
        </div>
      </section>
    </div>
  );
} 