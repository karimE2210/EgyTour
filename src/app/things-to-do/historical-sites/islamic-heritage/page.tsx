"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from '@/hooks/use-translation';
import { Clock, MapPin, Info, Star, Building2, Castle, BookOpen, Shield } from "lucide-react";
import { FavoriteButton } from '@/components/ui/favorite-button';
import ReviewsDisplay from '@/components/shared/reviews-display';

export default function IslamicHeritage() {
  const { t } = useTranslation();

  const landmarks = [
    {
      id: "muhammadAli",
      name: t('islamicHeritage.landmarks.muhammadAli.name'),
      description: t('islamicHeritage.landmarks.muhammadAli.description'),
      image: "/images/mypics/moali.jpeg",
      period: t('islamicHeritage.landmarks.muhammadAli.period'),
      location: t('islamicHeritage.landmarks.muhammadAli.location'),
      details: t('islamicHeritage.landmarks.muhammadAli.details'),
      facts: t('islamicHeritage.landmarks.muhammadAli.facts'),
      visitInfo: t('islamicHeritage.landmarks.muhammadAli.visitInfo'),
    },
    {
      id: "alAzhar",
      name: t('islamicHeritage.landmarks.alAzhar.name'),
      description: t('islamicHeritage.landmarks.alAzhar.description'),
      image: "/images/mypics/elazhar.jpeg",
      period: t('islamicHeritage.landmarks.alAzhar.period'),
      location: t('islamicHeritage.landmarks.alAzhar.location'),
      details: t('islamicHeritage.landmarks.alAzhar.details'),
      facts: t('islamicHeritage.landmarks.alAzhar.facts'),
      visitInfo: t('islamicHeritage.landmarks.alAzhar.visitInfo'),
    },
    {
      id: "sultanHassan",
      name: t('islamicHeritage.landmarks.sultanHassan.name'),
      description: t('islamicHeritage.landmarks.sultanHassan.description'),
      image: "/images/mypics/sul.jpeg",
      period: t('islamicHeritage.landmarks.sultanHassan.period'),
      location: t('islamicHeritage.landmarks.sultanHassan.location'),
      details: t('islamicHeritage.landmarks.sultanHassan.details'),
      facts: t('islamicHeritage.landmarks.sultanHassan.facts'),
      visitInfo: t('islamicHeritage.landmarks.sultanHassan.visitInfo'),
    },
    {
      id: "alRifai",
      name: t('islamicHeritage.landmarks.alRifai.name'),
      description: t('islamicHeritage.landmarks.alRifai.description'),
      image: "/images/mypics/elr.jpeg",
      period: t('islamicHeritage.landmarks.alRifai.period'),
      location: t('islamicHeritage.landmarks.alRifai.location'),
      details: t('islamicHeritage.landmarks.alRifai.details'),
      facts: t('islamicHeritage.landmarks.alRifai.facts'),
      visitInfo: t('islamicHeritage.landmarks.alRifai.visitInfo'),
    },
    {
      id: "baytAlSuhaymi",
      name: t('islamicHeritage.landmarks.baytAlSuhaymi.name'),
      description: t('islamicHeritage.landmarks.baytAlSuhaymi.description'),
      image: "/images/mypics/x.jpeg",
      period: t('islamicHeritage.landmarks.baytAlSuhaymi.period'),
      location: t('islamicHeritage.landmarks.baytAlSuhaymi.location'),
      details: t('islamicHeritage.landmarks.baytAlSuhaymi.details'),
      facts: t('islamicHeritage.landmarks.baytAlSuhaymi.facts'),
      visitInfo: t('islamicHeritage.landmarks.baytAlSuhaymi.visitInfo'),
    },
    {
      id: "babZuweila",
      name: t('islamicHeritage.landmarks.babZuweila.name'),
      description: t('islamicHeritage.landmarks.babZuweila.description'),
      image: "/images/mypics/bab.jpeg",
      period: t('islamicHeritage.landmarks.babZuweila.period'),
      location: t('islamicHeritage.landmarks.babZuweila.location'),
      details: t('islamicHeritage.landmarks.babZuweila.details'),
      facts: t('islamicHeritage.landmarks.babZuweila.facts'),
      visitInfo: t('islamicHeritage.landmarks.babZuweila.visitInfo'),
    },
  ];

  const funFacts = [
    {
      icon: Building2,
      fact: t('islamicHeritage.funFacts.cairoMonuments.fact'),
    },
    {
      icon: BookOpen,
      fact: t('islamicHeritage.funFacts.alAzhar.fact'),
    },
    {
      icon: Castle,
      fact: t('islamicHeritage.funFacts.citadel.fact'),
    },
    {
      icon: Star,
      fact: t('islamicHeritage.funFacts.unesco.fact'),
    },
  ];

  const timeline = [
    {
      period: t('islamicHeritage.timeline.fatimid.period'),
      years: "969–1171",
      title: t('islamicHeritage.timeline.fatimid.title'),
      achievements: [
        t('islamicHeritage.timeline.fatimid.achievements.architecture'),
        t('islamicHeritage.timeline.fatimid.achievements.scholarship'),
      ],
    },
    {
      period: t('islamicHeritage.timeline.ayyubid.period'),
      years: "1171–1250",
      title: t('islamicHeritage.timeline.ayyubid.title'),
      achievements: [
        t('islamicHeritage.timeline.ayyubid.achievements.citadel'),
        t('islamicHeritage.timeline.ayyubid.achievements.defense'),
      ],
    },
    {
      period: t('islamicHeritage.timeline.mamluk.period'),
      years: "1250–1517",
      title: t('islamicHeritage.timeline.mamluk.title'),
      achievements: [
        t('islamicHeritage.timeline.mamluk.achievements.mosques'),
        t('islamicHeritage.timeline.mamluk.achievements.art'),
      ],
    },
    {
      period: t('islamicHeritage.timeline.ottoman.period'),
      years: "1517–1867",
      title: t('islamicHeritage.timeline.ottoman.title'),
      achievements: [
        t('islamicHeritage.timeline.ottoman.achievements.domes'),
        t('islamicHeritage.timeline.ottoman.achievements.spaces'),
      ],
    },
  ];

  const travelTips = [
    {
      icon: Info,
      title: t('islamicHeritage.travelTips.dress.title'),
      description: t('islamicHeritage.travelTips.dress.description'),
    },
    {
      icon: Clock,
      title: t('islamicHeritage.travelTips.timing.title'),
      description: t('islamicHeritage.travelTips.timing.description'),
    },
    {
      icon: MapPin,
      title: t('islamicHeritage.travelTips.guide.title'),
      description: t('islamicHeritage.travelTips.guide.description'),
    },
    {
      icon: Shield,
      title: t('islamicHeritage.travelTips.weather.title'),
      description: t('islamicHeritage.travelTips.weather.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/mypics/coo-mosc.jpeg"
        >
          <source src="/images/mypics/4174555-hd_1920_1080_30fps.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="/images/mypics/coo-mosc.jpeg" 
            alt="Islamic Cairo" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl">
              {t('islamicHeritage.hero.title')}
            </h1>
            <p className="mx-auto max-w-3xl text-lg md:text-xl lg:text-2xl">
              {t('islamicHeritage.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">
            {t('islamicHeritage.introduction.title')}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {t('islamicHeritage.introduction.description')}
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t('islamicHeritage.introduction.highlights.minarets.title')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('islamicHeritage.introduction.highlights.minarets.description')}
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t('islamicHeritage.introduction.highlights.art.title')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('islamicHeritage.introduction.highlights.art.description')}
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t('islamicHeritage.introduction.highlights.architecture.title')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('islamicHeritage.introduction.highlights.architecture.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Must-See Landmarks Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">
          {t('islamicHeritage.landmarks.title')}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {landmarks.map((landmark) => (
            <Card key={landmark.id} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={landmark.image}
                  alt={landmark.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-2 right-2 bg-white/90 text-gray-900 z-10">
                  {landmark.period}
                </Badge>
                <FavoriteButton 
                  itemId={landmark.id} 
                  itemType="landmark" 
                  itemName={landmark.name}
                  itemImage={landmark.image}
                  itemLocation="Islamic Cairo"
                  size="md"
                />
                
                {/* Hover Overlay with Detailed Information */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-semibold mb-2">{landmark.name}</h3>
                    <p className="text-sm mb-3 opacity-90">{landmark.details}</p>
                    <div className="text-xs space-y-1">
                      <p className="font-semibold text-blue-300">{landmark.facts}</p>
                      <p className="opacity-80">{landmark.visitInfo}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{landmark.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  {landmark.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {landmark.description}
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  {t('ancientEgypt.ui.hoverHint')}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">
            {t('islamicHeritage.funFacts.title')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <fact.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {fact.fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">
          {t('islamicHeritage.timeline.title')}
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 md:left-1/2 md:transform md:-translate-x-1/2"></div>
          
          <div className="space-y-8">
            {timeline.map((era, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 md:left-1/2 md:transform md:-translate-x-1/2"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{era.title}</CardTitle>
                        <Badge variant="outline">{era.years}</Badge>
                      </div>
                      <CardDescription className="text-sm font-medium">
                        {era.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        {era.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">
            {t('islamicHeritage.travelTips.title')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {travelTips.map((tip, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <tip.icon className="w-6 h-6 mr-2 text-blue-600" />
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">
          Traveler Reviews
        </h2>
        <div className="max-w-md mx-auto">
          <ReviewsDisplay 
            maxReviews={3} 
            showHeader={false}
            className="shadow-lg"
            location="Islamic Cairo"
          />
        </div>
      </section>
    </div>
  );
} 