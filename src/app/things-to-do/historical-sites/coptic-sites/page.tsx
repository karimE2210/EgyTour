"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from '@/hooks/use-translation';
import { Clock, MapPin, Info, Star, Building2, BookOpen, Shield, Calendar } from "lucide-react";
import { FavoriteButton } from '@/components/ui/favorite-button';
import ReviewsDisplay from '@/components/shared/reviews-display';

export default function CopticSites() {
  const { t } = useTranslation();

  const copticSites = [
    {
      id: "hangingChurch",
      name: t('copticSites.sites.hangingChurch.name'),
      description: t('copticSites.sites.hangingChurch.description'),
      image: "/images/mypics/hang.jpeg",
      period: t('copticSites.sites.hangingChurch.period'),
      location: t('copticSites.sites.hangingChurch.location'),
      details: t('copticSites.sites.hangingChurch.details'),
      facts: t('copticSites.sites.hangingChurch.facts'),
      visitInfo: t('copticSites.sites.hangingChurch.visitInfo'),
    },
    {
      id: "saintSergius",
      name: t('copticSites.sites.saintSergius.name'),
      description: t('copticSites.sites.saintSergius.description'),
      image: "/images/mypics/Saints Sergius and Bacchus Church - Wikipedia.jpeg",
      period: t('copticSites.sites.saintSergius.period'),
      location: t('copticSites.sites.saintSergius.location'),
      details: t('copticSites.sites.saintSergius.details'),
      facts: t('copticSites.sites.saintSergius.facts'),
      visitInfo: t('copticSites.sites.saintSergius.visitInfo'),
    },
    {
      id: "copticMuseum",
      name: t('copticSites.sites.copticMuseum.name'),
      description: t('copticSites.sites.copticMuseum.description'),
      image: "/images/mypics/cm.jpeg",
      period: t('copticSites.sites.copticMuseum.period'),
      location: t('copticSites.sites.copticMuseum.location'),
      details: t('copticSites.sites.copticMuseum.details'),
      facts: t('copticSites.sites.copticMuseum.facts'),
      visitInfo: t('copticSites.sites.copticMuseum.visitInfo'),
    },
    {
      id: "saintSimon",
      name: t('copticSites.sites.saintSimon.name'),
      description: t('copticSites.sites.saintSimon.description'),
      image: "/images/mypics/sim.jpeg",
      period: t('copticSites.sites.saintSimon.period'),
      location: t('copticSites.sites.saintSimon.location'),
      details: t('copticSites.sites.saintSimon.details'),
      facts: t('copticSites.sites.saintSimon.facts'),
      visitInfo: t('copticSites.sites.saintSimon.visitInfo'),
    },
    {
      id: "saintBarbara",
      name: t('copticSites.sites.saintBarbara.name'),
      description: t('copticSites.sites.saintBarbara.description'),
      image: "/images/mypics/bar.jpeg",
      period: t('copticSites.sites.saintBarbara.period'),
      location: t('copticSites.sites.saintBarbara.location'),
      details: t('copticSites.sites.saintBarbara.details'),
      facts: t('copticSites.sites.saintBarbara.facts'),
      visitInfo: t('copticSites.sites.saintBarbara.visitInfo'),
    },
    {
      id: "abuSerga",
      name: t('copticSites.sites.abuSerga.name'),
      description: t('copticSites.sites.abuSerga.description'),
      image: "/images/mypics/cryp.jpeg",
      period: t('copticSites.sites.abuSerga.period'),
      location: t('copticSites.sites.abuSerga.location'),
      details: t('copticSites.sites.abuSerga.details'),
      facts: t('copticSites.sites.abuSerga.facts'),
      visitInfo: t('copticSites.sites.abuSerga.visitInfo'),
    },
  ];

  const funFacts = [
    {
      icon: Calendar,
      fact: t('copticSites.funFacts.calendar.fact'),
    },
    {
      icon: Building2,
      fact: t('copticSites.funFacts.hangingChurch.fact'),
    },
    {
      icon: BookOpen,
      fact: t('copticSites.funFacts.liturgy.fact'),
    },
    {
      icon: Star,
      fact: t('copticSites.funFacts.christmas.fact'),
    },
  ];

  const timeline = [
    {
      year: "42 AD",
      title: t('copticSites.timeline.saintMark.title'),
      description: t('copticSites.timeline.saintMark.description'),
      impact: [
        t('copticSites.timeline.saintMark.impact.foundation'),
        t('copticSites.timeline.saintMark.impact.alexandria'),
      ],
    },
    {
      year: "3rd–5th century",
      title: t('copticSites.timeline.spread.title'),
      description: t('copticSites.timeline.spread.description'),
      impact: [
        t('copticSites.timeline.spread.impact.churches'),
        t('copticSites.timeline.spread.impact.monasteries'),
      ],
    },
    {
      year: "451 AD",
      title: t('copticSites.timeline.chalcedon.title'),
      description: t('copticSites.timeline.chalcedon.description'),
      impact: [
        t('copticSites.timeline.chalcedon.impact.separation'),
        t('copticSites.timeline.chalcedon.impact.identity'),
      ],
    },
    {
      year: "7th century",
      title: t('copticSites.timeline.arabConquest.title'),
      description: t('copticSites.timeline.arabConquest.description'),
      impact: [
        t('copticSites.timeline.arabConquest.impact.minority'),
        t('copticSites.timeline.arabConquest.impact.preservation'),
      ],
    },
    {
      year: "Modern era",
      title: t('copticSites.timeline.revival.title'),
      description: t('copticSites.timeline.revival.description'),
      impact: [
        t('copticSites.timeline.revival.impact.art'),
        t('copticSites.timeline.revival.impact.architecture'),
      ],
    },
  ];

  const travelTips = [
    {
      icon: Info,
      title: t('copticSites.travelTips.dress.title'),
      description: t('copticSites.travelTips.dress.description'),
    },
    {
      icon: Shield,
      title: t('copticSites.travelTips.shoes.title'),
      description: t('copticSites.travelTips.shoes.description'),
    },
    {
      icon: Clock,
      title: t('copticSites.travelTips.respect.title'),
      description: t('copticSites.travelTips.respect.description'),
    },
    {
      icon: MapPin,
      title: t('copticSites.travelTips.timing.title'),
      description: t('copticSites.travelTips.timing.description'),
    },
    {
      icon: Star,
      title: t('copticSites.travelTips.photography.title'),
      description: t('copticSites.travelTips.photography.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/mypics/coptic.jpeg"
          alt={t('copticSites.hero.alt')}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl">
              {t('copticSites.hero.title')}
            </h1>
            <p className="mx-auto max-w-3xl text-lg md:text-xl lg:text-2xl">
              {t('copticSites.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">
            {t('copticSites.introduction.title')}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {t('copticSites.introduction.description')}
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t('copticSites.introduction.highlights.tradition.title')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('copticSites.introduction.highlights.tradition.description')}
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t('copticSites.introduction.highlights.architecture.title')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('copticSites.introduction.highlights.architecture.description')}
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t('copticSites.introduction.highlights.heritage.title')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('copticSites.introduction.highlights.heritage.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Iconic Coptic Sites Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">
          {t('copticSites.sites.title')}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {copticSites.map((site) => (
            <Card key={site.id} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={site.image}
                  alt={site.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-2 right-2 bg-white/90 text-gray-900 z-10">
                  {site.period}
                </Badge>
                <FavoriteButton 
                  itemId={site.id} 
                  itemType="site" 
                  itemName={site.name}
                  itemImage={site.image}
                  itemLocation="Coptic Cairo"
                  size="md"
                />
                
                {/* Hover Overlay with Detailed Information */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-semibold mb-2">{site.name}</h3>
                    <p className="text-sm mb-3 opacity-90">{site.details}</p>
                    <div className="text-xs space-y-1">
                      <p className="font-semibold text-blue-300">{site.facts}</p>
                      <p className="opacity-80">{site.visitInfo}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{site.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  {site.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {site.description}
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
            {t('copticSites.funFacts.title')}
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
          {t('copticSites.timeline.title')}
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
                        <Badge variant="outline">{era.year}</Badge>
                      </div>
                      <CardDescription className="text-sm font-medium">
                        {era.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        {era.impact.map((impact, impactIndex) => (
                          <li key={impactIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {impact}
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
            {t('copticSites.travelTips.title')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            location="Coptic Cairo"
          />
        </div>
      </section>
    </div>
  );
} 