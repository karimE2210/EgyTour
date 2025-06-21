"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from '@/hooks/use-translation';
import { useState, useEffect } from "react";
import { FavoriteButton } from '@/components/ui/favorite-button';
import ReviewsDisplay from '@/components/shared/reviews-display';

export default function AncientEgypt() {
  const { t } = useTranslation();
  const [blessing, setBlessing] = useState("");

  // Ancient blessings for the oracle box
  const ancientBlessings = [
    "May Ra's light guide your path through the sands of time.",
    "Let the wisdom of Thoth illuminate your journey.",
    "May the protection of Horus shield you from harm.",
    "Let the love of Isis warm your heart like the Nile's embrace.",
    "May the strength of Osiris give you courage in all endeavors.",
    "Let the magic of Hathor bring joy to your days.",
  ];

  useEffect(() => {
    // Set a random blessing on component mount
    const randomBlessing = ancientBlessings[Math.floor(Math.random() * ancientBlessings.length)];
    setBlessing(randomBlessing);
  }, []);

  // Daily life content
  const dailyLifeCards = [
    {
      title: t('ancientEgypt.dailyLife.agriculture.title'),
      description: t('ancientEgypt.dailyLife.agriculture.description'),
      icon: "🌾",
      fact: t('ancientEgypt.dailyLife.agriculture.fact')
    },
    {
      title: t('ancientEgypt.dailyLife.food.title'),
      description: t('ancientEgypt.dailyLife.food.description'),
      icon: "🍺",
      fact: t('ancientEgypt.dailyLife.food.fact')
    },
    {
      title: t('ancientEgypt.dailyLife.fashion.title'),
      description: t('ancientEgypt.dailyLife.fashion.description'),
      icon: "💄",
      fact: t('ancientEgypt.dailyLife.fashion.fact')
    },
    {
      title: t('ancientEgypt.dailyLife.society.title'),
      description: t('ancientEgypt.dailyLife.society.description'),
      icon: "👑",
      fact: t('ancientEgypt.dailyLife.society.fact')
    }
  ];

  // Gods and deities
  const deities = [
    {
      name: t('ancientEgypt.gods.deities.ra.name'),
      role: t('ancientEgypt.gods.deities.ra.role'),
      description: t('ancientEgypt.gods.deities.ra.description'),
      icon: "☀️",
      color: "bg-yellow-500"
    },
    {
      name: t('ancientEgypt.gods.deities.isis.name'),
      role: t('ancientEgypt.gods.deities.isis.role'),
      description: t('ancientEgypt.gods.deities.isis.description'),
      icon: "👸",
      color: "bg-blue-500"
    },
    {
      name: t('ancientEgypt.gods.deities.osiris.name'),
      role: t('ancientEgypt.gods.deities.osiris.role'),
      description: t('ancientEgypt.gods.deities.osiris.description'),
      icon: "🌾",
      color: "bg-green-500"
    },
    {
      name: t('ancientEgypt.gods.deities.anubis.name'),
      role: t('ancientEgypt.gods.deities.anubis.role'),
      description: t('ancientEgypt.gods.deities.anubis.description'),
      icon: "🐺",
      color: "bg-gray-700"
    }
  ];

  // Innovation tiles
  const innovations = [
    {
      title: t('ancientEgypt.innovations.medicine.title'),
      description: t('ancientEgypt.innovations.medicine.description'),
      icon: "🏥",
      fact: t('ancientEgypt.innovations.medicine.fact')
    },
    {
      title: t('ancientEgypt.innovations.astronomy.title'),
      description: t('ancientEgypt.innovations.astronomy.description'),
      icon: "⭐",
      fact: t('ancientEgypt.innovations.astronomy.fact')
    },
    {
      title: t('ancientEgypt.innovations.mathematics.title'),
      description: t('ancientEgypt.innovations.mathematics.description'),
      icon: "📐",
      fact: t('ancientEgypt.innovations.mathematics.fact')
    },
    {
      title: t('ancientEgypt.innovations.writing.title'),
      description: t('ancientEgypt.innovations.writing.description'),
      icon: "📝",
      fact: t('ancientEgypt.innovations.writing.fact')
    }
  ];

  // Monument sites
  const monuments = [
    {
      name: t('ancientEgypt.monuments.pyramids.name'),
      image: "/images/mypics/pyramidsH.jpeg",
      origin: t('ancientEgypt.monuments.pyramids.origin'),
      fact: t('ancientEgypt.monuments.pyramids.fact'),
      period: t('ancientEgypt.monuments.pyramids.period'),
      details: t('ancientEgypt.monuments.pyramids.details'),
      construction: t('ancientEgypt.monuments.pyramids.construction'),
      height: t('ancientEgypt.monuments.pyramids.height'),
      blocks: t('ancientEgypt.monuments.pyramids.blocks')
    },
    {
      name: t('ancientEgypt.monuments.valleyOfKings.name'),
      image: "/images/mypics/valley.jpeg",
      origin: t('ancientEgypt.monuments.valleyOfKings.origin'),
      fact: t('ancientEgypt.monuments.valleyOfKings.fact'),
      period: t('ancientEgypt.monuments.valleyOfKings.period'),
      details: t('ancientEgypt.monuments.valleyOfKings.details'),
      tombs: t('ancientEgypt.monuments.valleyOfKings.tombs'),
      royalTombs: t('ancientEgypt.monuments.valleyOfKings.royalTombs'),
      discovery: t('ancientEgypt.monuments.valleyOfKings.discovery')
    },
    {
      name: t('ancientEgypt.monuments.abuSimbel.name'),
      image: "/images/mypics/ABU SIMBEL.jpeg",
      origin: t('ancientEgypt.monuments.abuSimbel.origin'),
      fact: t('ancientEgypt.monuments.abuSimbel.fact'),
      period: t('ancientEgypt.monuments.abuSimbel.period'),
      details: t('ancientEgypt.monuments.abuSimbel.details'),
      height: t('ancientEgypt.monuments.abuSimbel.height'),
      relocation: t('ancientEgypt.monuments.abuSimbel.relocation'),
      alignment: t('ancientEgypt.monuments.abuSimbel.alignment')
    },
    {
      name: t('ancientEgypt.monuments.dendera.name'),
      image: "/images/mypics/dendera.jpeg",
      origin: t('ancientEgypt.monuments.dendera.origin'),
      fact: t('ancientEgypt.monuments.dendera.fact'),
      period: t('ancientEgypt.monuments.dendera.period'),
      details: t('ancientEgypt.monuments.dendera.details'),
      area: t('ancientEgypt.monuments.dendera.area'),
      features: t('ancientEgypt.monuments.dendera.features'),
      zodiac: t('ancientEgypt.monuments.dendera.zodiac')
    }
  ];

  // Fun facts
  const funFacts = [
    {
      fact: t('ancientEgypt.funFacts.papyrus.fact'),
      icon: "📜"
    },
    {
      fact: t('ancientEgypt.funFacts.mummification.fact'),
      icon: "⚰️"
    },
    {
      fact: t('ancientEgypt.funFacts.clocks.fact'),
      icon: "⏰"
    }
  ];

  // Pharaonic Dynasties Timeline
  const dynasties = [
    {
      period: t('ancientEgypt.timeline.earlyDynastic.period'),
      years: t('ancientEgypt.timeline.earlyDynastic.years'),
      highlights: [
        t('ancientEgypt.timeline.earlyDynastic.highlights.unification'),
        t('ancientEgypt.timeline.earlyDynastic.highlights.menes')
      ]
    },
    {
      period: t('ancientEgypt.timeline.oldKingdom.period'),
      years: t('ancientEgypt.timeline.oldKingdom.years'),
      highlights: [
        t('ancientEgypt.timeline.oldKingdom.highlights.pyramids'),
        t('ancientEgypt.timeline.oldKingdom.highlights.snefru')
      ]
    },
    {
      period: t('ancientEgypt.timeline.firstIntermediate.period'),
      years: t('ancientEgypt.timeline.firstIntermediate.years'),
      highlights: [
        t('ancientEgypt.timeline.firstIntermediate.highlights.decentralization'),
        t('ancientEgypt.timeline.firstIntermediate.highlights.heracleopolis')
      ]
    },
    {
      period: t('ancientEgypt.timeline.middleKingdom.period'),
      years: t('ancientEgypt.timeline.middleKingdom.years'),
      highlights: [
        t('ancientEgypt.timeline.middleKingdom.highlights.reunification'),
        t('ancientEgypt.timeline.middleKingdom.highlights.sesostris')
      ]
    },
    {
      period: t('ancientEgypt.timeline.secondIntermediate.period'),
      years: t('ancientEgypt.timeline.secondIntermediate.years'),
      highlights: [
        t('ancientEgypt.timeline.secondIntermediate.highlights.hyksos'),
        t('ancientEgypt.timeline.secondIntermediate.highlights.ahmose')
      ]
    },
    {
      period: t('ancientEgypt.timeline.newKingdom.period'),
      years: t('ancientEgypt.timeline.newKingdom.years'),
      highlights: [
        t('ancientEgypt.timeline.newKingdom.highlights.tutankhamun'),
        t('ancientEgypt.timeline.newKingdom.highlights.ramesses')
      ]
    },
    {
      period: t('ancientEgypt.timeline.thirdIntermediate.period'),
      years: t('ancientEgypt.timeline.thirdIntermediate.years'),
      highlights: [
        t('ancientEgypt.timeline.thirdIntermediate.highlights.libyans'),
        t('ancientEgypt.timeline.thirdIntermediate.highlights.tanites')
      ]
    },
    {
      period: t('ancientEgypt.timeline.latePeriod.period'),
      years: t('ancientEgypt.timeline.latePeriod.years'),
      highlights: [
        t('ancientEgypt.timeline.latePeriod.highlights.persians'),
        t('ancientEgypt.timeline.latePeriod.highlights.nectanebo')
      ]
    },
    {
      period: t('ancientEgypt.timeline.ptolemaic.period'),
      years: t('ancientEgypt.timeline.ptolemaic.years'),
      highlights: [
        t('ancientEgypt.timeline.ptolemaic.highlights.alexander'),
        t('ancientEgypt.timeline.ptolemaic.highlights.cleopatra')
      ]
    }
  ];

  return (
    <div className="pb-12">
      {/* Hero Banner with Video Background */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/mypics/pyramids_bttswr.jpeg"
        >
          <source src="/images/mypics/4174142-hd_1920_1080_30fps.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="/images/mypics/pyramids_bttswr.jpeg" 
            alt="Ancient Egypt Pyramids" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('ancientEgypt.hero.title')}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {t('ancientEgypt.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <section className="container-custom py-12">
        {/* Section 1: A Day in Ancient Egypt */}
        <div className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('ancientEgypt.dailyLife.title')}</h2>
          <p className="text-lg mb-8 text-center text-gray-600 dark:text-gray-300">
            {t('ancientEgypt.dailyLife.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyLifeCards.map((card, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{card.description}</p>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
                    <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                      💡 {card.fact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 2: Gods, Myths & the Afterlife */}
        <div className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('ancientEgypt.gods.title')}</h2>
          
          {/* Deities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {deities.map((deity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${deity.color} flex items-center justify-center text-2xl`}>
                    {deity.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{deity.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{deity.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{deity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Oracle Box */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center my-8">
            <h3 className="text-2xl font-bold mb-4">{t('ancientEgypt.gods.oracle.title')}</h3>
            <p className="text-lg mb-4">{t('ancientEgypt.gods.oracle.subtitle')}</p>
            <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-xl italic">"{blessing}"</p>
            </div>
          </div>

          {/* Myth Stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{t('ancientEgypt.gods.myths.horusSeth.title')}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('ancientEgypt.gods.myths.horusSeth.description')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{t('ancientEgypt.gods.myths.bookOfDead.title')}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('ancientEgypt.gods.myths.bookOfDead.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 3: Genius of the Ancients */}
        <div className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('ancientEgypt.innovations.title')}</h2>
          <p className="text-lg mb-8 text-center text-gray-600 dark:text-gray-300">
            {t('ancientEgypt.innovations.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((innovation, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{innovation.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{innovation.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{innovation.description}</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-800 dark:text-green-200">
                      🎯 {innovation.fact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 4: Timeless Monuments */}
        <div className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('ancientEgypt.monuments.title')}</h2>
          <p className="text-lg mb-8 text-center text-gray-600 dark:text-gray-300">
            {t('ancientEgypt.monuments.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monuments.map((monument, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={monument.image}
                    alt={monument.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{monument.name}</h3>
                    <p className="text-sm opacity-90">{monument.period}</p>
                  </div>
                  <FavoriteButton 
                    itemId={monument.name} 
                    itemType="monument" 
                    itemName={monument.name}
                    itemImage={monument.image}
                    itemLocation="Ancient Egypt"
                    size="md"
                  />
                  
                  {/* Hover Overlay with Additional Info */}
                  <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                    <div className="text-white text-center">
                      <h4 className="text-xl font-bold mb-4">{t('ancientEgypt.ui.detailedInfo')}</h4>
                      <div className="space-y-3 text-sm">
                        <p className="leading-relaxed">{monument.details}</p>
                        
                        {/* Monument-specific stats */}
                        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/20">
                          {monument.construction && (
                            <div>
                              <span className="font-semibold">Construction:</span>
                              <p>{monument.construction}</p>
                            </div>
                          )}
                          {monument.height && (
                            <div>
                              <span className="font-semibold">Height:</span>
                              <p>{monument.height}</p>
                            </div>
                          )}
                          {monument.blocks && (
                            <div>
                              <span className="font-semibold">Stone Blocks:</span>
                              <p>{monument.blocks}</p>
                            </div>
                          )}
                          {monument.tombs && (
                            <div>
                              <span className="font-semibold">Total Tombs:</span>
                              <p>{monument.tombs}</p>
                            </div>
                          )}
                          {monument.royalTombs && (
                            <div>
                              <span className="font-semibold">Royal Tombs:</span>
                              <p>{monument.royalTombs}</p>
                            </div>
                          )}
                          {monument.discovery && (
                            <div>
                              <span className="font-semibold">Discovery:</span>
                              <p>{monument.discovery}</p>
                            </div>
                          )}
                          {monument.relocation && (
                            <div>
                              <span className="font-semibold">Relocation:</span>
                              <p>{monument.relocation}</p>
                            </div>
                          )}
                          {monument.alignment && (
                            <div>
                              <span className="font-semibold">Solar Alignment:</span>
                              <p>{monument.alignment}</p>
                            </div>
                          )}
                          {monument.area && (
                            <div>
                              <span className="font-semibold">Area:</span>
                              <p>{monument.area}</p>
                            </div>
                          )}
                          {monument.features && (
                            <div>
                              <span className="font-semibold">Features:</span>
                              <p>{monument.features}</p>
                            </div>
                          )}
                          {monument.zodiac && (
                            <div>
                              <span className="font-semibold">Zodiac:</span>
                              <p>{monument.zodiac}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{monument.origin}</p>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <p className="text-sm font-medium text-red-800 dark:text-red-200">
                      🔥 {monument.fact}
                    </p>
                  </div>
                  
                  {/* Hover hint */}
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:opacity-0 transition-opacity duration-300">
                      {t('ancientEgypt.ui.hoverHint')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Section: Did You Know? */}
        <div className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('ancientEgypt.funFacts.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {funFacts.map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-2 border-indigo-200 dark:border-indigo-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{item.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pharaonic Dynasties Timeline Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">
          {t('ancientEgypt.timeline.title')}
        </h2>
        <div className="relative overflow-x-auto">
          <div className="flex space-x-8 min-w-[900px]">
            {dynasties.map((dyn, idx) => (
              <div key={idx} className="flex flex-col items-center w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mx-2 relative">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mb-2 border-2 border-gray-300 dark:border-gray-700"></div>
                <h3 className="text-lg font-semibold mb-1 text-center">{dyn.period}</h3>
                <span className="text-xs text-gray-500 mb-2">{dyn.years}</span>
                <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-4 text-left">
                  {dyn.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                {idx < dynasties.length - 1 && (
                  <div className="absolute right-[-32px] top-1/2 transform -translate-y-1/2 w-8 h-1 bg-yellow-400" />
                )}
              </div>
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
            location="Ancient Egypt"
          />
        </div>
      </section>
    </div>
  );
} 