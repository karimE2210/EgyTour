"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Landmark, Waves, Coffee, Ship, Building2 } from "lucide-react";
import { useTranslation } from '@/hooks/use-translation';
import { FavoriteButton } from '@/components/ui/favorite-button';
import ReviewsDisplay from '@/components/shared/reviews-display';

export default function Mediterranean() {
  const { t } = useTranslation();

  const historicSites = [
    {
      id: "alexandria-library",
      title: t('mediterranean.attractions.bibliotheca.title'),
      description: t('mediterranean.attractions.bibliotheca.description'),
      image: "/images/mypics/bib.jpeg",
      coordinates: { lat: 31.2089, lng: 29.9092 },
      type: t('mediterranean.attractions.bibliotheca.type'),
      bestTime: t('mediterranean.attractions.bibliotheca.bestTime')
    },
    {
      id: "qaitbay-citadel",
      title: t('mediterranean.attractions.qaitbay.title'),
      description: t('mediterranean.attractions.qaitbay.description'),
      image: "/images/mypics/qait.jpeg",
      coordinates: { lat: 31.2139, lng: 29.8856 },
      type: t('mediterranean.attractions.qaitbay.type'),
      bestTime: t('mediterranean.attractions.qaitbay.bestTime')
    },
    {
      id: "roman-amphitheatre",
      title: t('mediterranean.attractions.romanAmphitheatre.title'),
      description: t('mediterranean.attractions.romanAmphitheatre.description'),
      image: "/images/mypics/rom.jpeg",
      coordinates: { lat: 31.1956, lng: 29.8978 },
      type: t('mediterranean.attractions.romanAmphitheatre.type'),
      bestTime: t('mediterranean.attractions.romanAmphitheatre.bestTime')
    }
  ];

  const beachEscapes = [
    {
      id: "marsa-matrouh",
      title: t('mediterranean.attractions.marsaMatrouh.title'),
      description: t('mediterranean.attractions.marsaMatrouh.description'),
      image: "/images/mypics/marasi.jpeg",
      coordinates: { lat: 31.3525, lng: 27.2372 },
      type: t('mediterranean.attractions.marsaMatrouh.type'),
      bestTime: t('mediterranean.attractions.marsaMatrouh.bestTime')
    },
    {
      id: "agiba-beach",
      title: t('mediterranean.attractions.agibaBeach.title'),
      description: t('mediterranean.attractions.agibaBeach.description'),
      image: "/images/mypics/agiba.jpeg",
      coordinates: { lat: 31.3525, lng: 27.2372 },
      type: t('mediterranean.attractions.agibaBeach.type'),
      bestTime: t('mediterranean.attractions.agibaBeach.bestTime')
    },
    {
      id: "el-alamein",
      title: t('mediterranean.attractions.elAlamein.title'),
      description: t('mediterranean.attractions.elAlamein.description'),
      image: "/images/mypics/ww.jpeg",
      coordinates: { lat: 30.8333, lng: 28.9500 },
      type: t('mediterranean.attractions.elAlamein.type'),
      bestTime: t('mediterranean.attractions.elAlamein.bestTime')
    }
  ];

 

  const coastalCities = [
    {
      id: "port-said",
      title: t('mediterranean.attractions.portSaid.title'),
      description: t('mediterranean.attractions.portSaid.description'),
      image: "/images/mypics/port.jpeg",
      coordinates: { lat: 31.2667, lng: 32.3000 },
      type: t('mediterranean.attractions.portSaid.type'),
      highlights: [
        t('mediterranean.attractions.portSaid.highlights.canalHistory'),
        t('mediterranean.attractions.portSaid.highlights.architecture'),
        t('mediterranean.attractions.portSaid.highlights.museum')
      ]
    },
    {
      id: "ismailia",
      title: t('mediterranean.attractions.ismailia.title'),
      description: t('mediterranean.attractions.ismailia.description'),
      image: "/images/mypics/ism.jpeg",
      coordinates: { lat: 30.5833, lng: 32.2667 },
      type: t('mediterranean.attractions.ismailia.type'),
      highlights: [
        t('mediterranean.attractions.ismailia.highlights.gardens'),
        t('mediterranean.attractions.ismailia.highlights.lakeView'),
        t('mediterranean.attractions.ismailia.highlights.museum')
      ]
    }
  ];

  const attractions = [
    {
      id: "alexandria",
      title: t('mediterranean.attractions.alexandria.title'),
      description: t('mediterranean.attractions.alexandria.description'),
      image: "/images/mypics/alexandria.jpeg",
    },
    {
      id: "marsa-matrouh",
      title: t('mediterranean.attractions.marsaMatrouh.title'),
      description: t('mediterranean.attractions.marsaMatrouh.description'),
      image: "/images/mypics/marsa-matrouh.jpeg",
    },
    {
      id: "el-alamein",
      title: t('mediterranean.attractions.elAlamein.title'),
      description: t('mediterranean.attractions.elAlamein.description'),
      image: "/images/mypics/el-alamein.jpeg",
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
            <source src="/images/mypics/7579789-hd_1920_1080_24fps.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="/images/mediterranean-hero.jpg"
              alt="Mediterranean Coast"
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
              {t('mediterranean.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {t('mediterranean.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <Tabs defaultValue="historic" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="historic" className="flex items-center gap-2">
              <Landmark className="w-4 h-4" />
              {t('mediterranean.tabs.historic')}
            </TabsTrigger>
            <TabsTrigger value="beaches" className="flex items-center gap-2">
              <Waves className="w-4 h-4" />
              {t('mediterranean.tabs.beaches')}
            </TabsTrigger>
            <TabsTrigger value="cities" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              {t('mediterranean.tabs.cities')}
            </TabsTrigger>
          </TabsList>

          {/* Historic Sites */}
          <TabsContent value="historic">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {historicSites.map((site) => (
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
                        itemType="historic" 
                        itemName={site.title}
                        itemImage={site.image}
                        itemLocation="Mediterranean Coast"
                        size="md"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{site.title}</h3>
                      <p className="text-muted-foreground mb-4">{site.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-medium">Type:</span> {site.type}
                        </div>
                        <div>
                          <span className="font-medium">Best Time:</span> {site.bestTime}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Beach Escapes */}
          <TabsContent value="beaches">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {beachEscapes.map((beach) => (
                <Card key={beach.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={beach.image}
                        alt={beach.title}
                        fill
                        className="object-cover"
                      />
                      <FavoriteButton 
                        itemId={beach.id} 
                        itemType="beach" 
                        itemName={beach.title}
                        itemImage={beach.image}
                        itemLocation="Mediterranean Coast"
                        size="md"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{beach.title}</h3>
                      <p className="text-muted-foreground mb-4">{beach.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-medium">Type:</span> {beach.type}
                        </div>
                        <div>
                          <span className="font-medium">Best Time:</span> {beach.bestTime}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Coastal Cities */}
          <TabsContent value="cities">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coastalCities.map((city) => (
                <Card key={city.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={city.image}
                        alt={city.title}
                        fill
                        className="object-cover"
                      />
                      <FavoriteButton 
                        itemId={city.id} 
                        itemType="city" 
                        itemName={city.title}
                        itemImage={city.image}
                        itemLocation="Mediterranean Coast"
                        size="md"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{city.title}</h3>
                      <p className="text-muted-foreground mb-4">{city.description}</p>
                      <div className="space-y-2">
                        <div className="font-medium">Highlights:</div>
                        <ul className="list-disc list-inside text-sm">
                          {city.highlights.map((highlight, index) => (
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('mediterranean.cta.title')}</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            {t('mediterranean.cta.description')}
          </p>
          <Button className="btn-primary">
            {t('mediterranean.cta.button')}
          </Button>
        </div>

        {/* User Reviews Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-8">Traveler Reviews</h2>
          <div className="max-w-md">
            <ReviewsDisplay 
              maxReviews={3} 
              showHeader={false}
              className="shadow-lg"
              location="Mediterranean Coast"
            />
          </div>
        </div>
      </section>
    </div>
  );
} 