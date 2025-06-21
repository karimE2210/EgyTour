"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Mountain, Waves, Star, BedDouble, Compass } from "lucide-react";
import { useTranslation } from '@/hooks/use-translation';
import { FavoriteButton } from '@/components/ui/favorite-button';
import ReviewsDisplay from '@/components/shared/reviews-display';

export default function Sinai() {
  const { t } = useTranslation();

  // Function to handle diving trip booking
  const handleDivingTripBooking = () => {
    // Redirect to liveaboard.com Egypt diving page
    window.open('https://www.liveaboard.com/diving/egypt?cid=5000&gad_campaignid=11349755489', '_blank');
  };

  // Function to handle hiking tour booking
  const handleHikingTourBooking = () => {
    // Redirect to TripAdvisor Egypt hiking activities page
    window.open('https://www.tripadvisor.com/Attractions-g294200-Activities-c61-t219-Egypt.html', '_blank');
  };

  const adventures = [
    {
      id: "saint-catherine-mountain",
      title: t('sinai.adventures.saintCatherineMountain.title'),
      description: t('sinai.adventures.saintCatherineMountain.description'),
      image: "/images/mypics/stSnow.jpeg",
      coordinates: { lat: 28.5392, lng: 33.9753 },
      difficulty: t('sinai.adventures.saintCatherineMountain.difficulty'),
      duration: t('sinai.adventures.saintCatherineMountain.duration'),
      bestTime: t('sinai.adventures.saintCatherineMountain.bestTime')
    },
    {
      id: "colored-canyon",
      title: t('sinai.adventures.coloredCanyon.title'),
      description: t('sinai.adventures.coloredCanyon.description'),
      image: "/images/mypics/cc.jpeg",
      coordinates: { lat: 29.4167, lng: 34.8333 },
      difficulty: t('sinai.adventures.coloredCanyon.difficulty'),
      duration: t('sinai.adventures.coloredCanyon.duration'),
      bestTime: t('sinai.adventures.coloredCanyon.bestTime')
    },
    {
      id: "moses-mountain",
      title: t('sinai.adventures.mosesMountain.title'),
      description: t('sinai.adventures.mosesMountain.description'),
      image: "/images/mypics/Ms.jpeg",
      coordinates: { lat: 28.5392, lng: 33.9753 },
      difficulty: t('sinai.adventures.mosesMountain.difficulty'),
      duration: t('sinai.adventures.mosesMountain.duration'),
      bestTime: t('sinai.adventures.mosesMountain.bestTime')
    }
  ];

  const divingSpots = [
    {
      id: "dahab",
      title: t('sinai.divingSpots.dahab.title'),
      description: t('sinai.divingSpots.dahab.description'),
      image: "/images/mypics/Dahab, Egypt.jpeg",
      coordinates: { lat: 28.5097, lng: 34.5167 },
      depth: t('sinai.divingSpots.dahab.depth'),
      visibility: t('sinai.divingSpots.dahab.visibility'),
      bestTime: t('sinai.divingSpots.dahab.bestTime')
    },
    {
      id: "ras-abu-galum",
      title: t('sinai.divingSpots.rasAbuGalum.title'),
      description: t('sinai.divingSpots.rasAbuGalum.description'),
      image: "/images/mypics/ag.jpeg",
      coordinates: { lat: 28.6500, lng: 34.5833 },
      depth: t('sinai.divingSpots.rasAbuGalum.depth'),
      visibility: t('sinai.divingSpots.rasAbuGalum.visibility'),
      bestTime: t('sinai.divingSpots.rasAbuGalum.bestTime')
    },
    {
      id: "blue-hole",
      title: t('sinai.divingSpots.blueHole.title'),
      description: t('sinai.divingSpots.blueHole.description'),
      image: "/images/mypics/bh.jpeg",
      coordinates: { lat: 28.5750, lng: 34.5333 },
      depth: t('sinai.divingSpots.blueHole.depth'),
      visibility: t('sinai.divingSpots.blueHole.visibility'),
      bestTime: t('sinai.divingSpots.blueHole.bestTime')
    }
  ];

  const spiritualRetreats = [
    {
      id: "st-catherine",
      title: t('sinai.spiritualRetreats.stCatherine.title'),
      description: t('sinai.spiritualRetreats.stCatherine.description'),
      image: "/images/mypics/Saint Catherine mountain - Sinai - Egypt.jpeg",
      coordinates: { lat: 28.5557, lng: 33.9753 },
      type: t('sinai.spiritualRetreats.stCatherine.type'),
      bestTime: t('sinai.spiritualRetreats.stCatherine.bestTime')
    },
    {
      id: "bedouin-camp",
      title: t('sinai.spiritualRetreats.bedouinCamp.title'),
      description: t('sinai.spiritualRetreats.bedouinCamp.description'),
      image: "/images/mypics/caaamp.jpeg",
      coordinates: { lat: 28.5097, lng: 34.5167 },
      type: t('sinai.spiritualRetreats.bedouinCamp.type'),
      bestTime: t('sinai.spiritualRetreats.bedouinCamp.bestTime')
    },
    {
      id: "stargazing",
      title: t('sinai.spiritualRetreats.stargazing.title'),
      description: t('sinai.spiritualRetreats.stargazing.description'),
      image: "/images/mypics/tss.jpeg",
      coordinates: { lat: 28.5097, lng: 34.5167 },
      type: t('sinai.spiritualRetreats.stargazing.type'),
      bestTime: t('sinai.spiritualRetreats.stargazing.bestTime')
    }
  ];

  const accommodations = [
    {
      id: "dahab-resort",
      title: t('sinai.accommodations.dahabResort.title'),
      description: t('sinai.accommodations.dahabResort.description'),
      image: "/images/mypics/safir.jpeg",
      coordinates: { lat: 28.5097, lng: 34.5167 },
      type: t('sinai.accommodations.dahabResort.type'),
      price: t('sinai.accommodations.dahabResort.price')
    },
    {
      id: "zaman-castle",
      title: t('sinai.accommodations.zamanCastle.title'),
      description: t('sinai.accommodations.zamanCastle.description'),
      image: "/images/mypics/zaman castle.jpeg",
      coordinates: { lat: 28.5097, lng: 34.5167 },
      type: t('sinai.accommodations.zamanCastle.type'),
      price: t('sinai.accommodations.zamanCastle.price')
    },
    {
      id: "taba-resort",
      title: t('sinai.accommodations.tabaResort.title'),
      description: t('sinai.accommodations.tabaResort.description'),
      image: "/images/mypics/taba.jpeg",
      coordinates: { lat: 28.5097, lng: 34.5167 },
      type: t('sinai.accommodations.tabaResort.type'),
      price: t('sinai.accommodations.tabaResort.price')
    }
  ];

  const attractions = [
    {
      id: "st-catherine",
      title: t('sinai.attractions.stCatherine.title'),
      description: t('sinai.attractions.stCatherine.description'),
      image: "/images/mypics/Catherine's Monastery.jpeg",
    },
    {
      id: "dahab",
      title: t('sinai.attractions.dahab.title'),
      description: t('sinai.attractions.dahab.description'),
      image: "/images/mypics/Dahab, Egypt.jpeg",
    },
    {
      id: "sharm",
      title: t('sinai.attractions.sharm.title'),
      description: t('sinai.attractions.sharm.description'),
      image: "/images/mypics/sharm.jpeg",
    },
  ];

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/mypics/5976697-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="/images/mypics/her.jpeg"
              alt="Sinai Peninsula"
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
              {t('sinai.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {t('sinai.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <Tabs defaultValue="adventure" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="adventure" className="flex items-center gap-2">
              <Mountain className="w-4 h-4" />
              {t('sinai.tabs.adventure')}
            </TabsTrigger>
            <TabsTrigger value="diving" className="flex items-center gap-2">
              <Waves className="w-4 h-4" />
              {t('sinai.tabs.diving')}
            </TabsTrigger>
            <TabsTrigger value="spiritual" className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              {t('sinai.tabs.spiritual')}
            </TabsTrigger>
            <TabsTrigger value="stay" className="flex items-center gap-2">
              <BedDouble className="w-4 h-4" />
              {t('sinai.tabs.stay')}
            </TabsTrigger>
          </TabsList>

          {/* Adventure & Hiking */}
          <TabsContent value="adventure">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {adventures.map((adventure) => (
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
                        itemType="adventure" 
                        itemName={adventure.title}
                        itemImage={adventure.image}
                        itemLocation="Sinai Peninsula"
                        size="md"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{adventure.title}</h3>
                      <p className="text-muted-foreground mb-4">{adventure.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                        <div>
                          <span className="font-medium">{t('sinai.labels.difficulty')}</span> {adventure.difficulty}
                        </div>
                        <div>
                          <span className="font-medium">{t('sinai.labels.duration')}</span> {adventure.duration}
                        </div>
                        <div>
                          <span className="font-medium">{t('sinai.labels.bestTime')}</span> {adventure.bestTime}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Diving & Beaches */}
          <TabsContent value="diving">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {divingSpots.map((spot) => (
                <Card key={spot.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={spot.image}
                        alt={spot.title}
                        fill
                        className="object-cover"
                      />
                      <FavoriteButton 
                        itemId={spot.id} 
                        itemType="diving" 
                        itemName={spot.title}
                        itemImage={spot.image}
                        itemLocation="Sinai Peninsula"
                        size="md"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{spot.title}</h3>
                      <p className="text-muted-foreground mb-4">{spot.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                        <div>
                          <span className="font-medium">{t('sinai.labels.depth')}</span> {spot.depth}
                        </div>
                        <div>
                          <span className="font-medium">{t('sinai.labels.visibility')}</span> {spot.visibility}
                        </div>
                        <div>
                          <span className="font-medium">{t('sinai.labels.bestTime')}</span> {spot.bestTime}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Spiritual Retreats */}
          <TabsContent value="spiritual">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {spiritualRetreats.map((retreat) => (
                <Card key={retreat.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={retreat.image}
                        alt={retreat.title}
                        fill
                        className="object-cover"
                      />
                      <FavoriteButton 
                        itemId={retreat.id} 
                        itemType="spiritual" 
                        itemName={retreat.title}
                        itemImage={retreat.image}
                        itemLocation="Sinai Peninsula"
                        size="md"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{retreat.title}</h3>
                      <p className="text-muted-foreground mb-4">{retreat.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-medium">{t('sinai.labels.type')}</span> {retreat.type}
                        </div>
                        <div>
                          <span className="font-medium">{t('sinai.labels.bestTime')}</span> {retreat.bestTime}
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
                        itemLocation="Sinai Peninsula"
                        size="md"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{accommodation.title}</h3>
                      <p className="text-muted-foreground mb-4">{accommodation.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-medium">{t('sinai.labels.type')}</span> {accommodation.type}
                        </div>
                        <div>
                          <span className="font-medium">{t('sinai.labels.priceRange')}</span> {accommodation.price}
                        </div>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('sinai.cta.title')}</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            {t('sinai.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary">
              {t('sinai.cta.button')}
            </Button>
          </div>
        </div>

        {/* Attractions */}
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-8">{t('sinai.attractions.title')}</h2>
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
                      itemLocation="Sinai Peninsula"
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
          <h2 className="text-3xl font-bold mb-8">{t('sinai.activities.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('sinai.activities.hiking.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('sinai.activities.hiking.description')}
              </p>
              <Button className="btn-primary" onClick={handleHikingTourBooking}>
                {t('sinai.activities.hiking.cta')}
              </Button>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('sinai.activities.diving.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('sinai.activities.diving.description')}
              </p>
              <Button className="btn-primary" onClick={handleDivingTripBooking}>
                {t('sinai.activities.diving.cta')}
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
              location="Sinai Peninsula"
            />
          </div>
        </div>
      </section>
    </div>
  );
} 