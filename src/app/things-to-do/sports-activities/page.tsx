"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Wind, Waves, Mountain, Bike, Tent, Star } from "lucide-react";
import Image from "next/image";
import { useTranslation } from '@/hooks/use-translation';
import { motion } from "framer-motion";

export default function SportsActivitiesPage() {
  const { t } = useTranslation();

  const sportsActivities = [
    {
      id: "kitesurfing",
      title: t('sportsActivities.kitesurfing.title'),
      subtitle: t('sportsActivities.kitesurfing.subtitle'),
      description: t('sportsActivities.kitesurfing.description'),
      highlights: [
        t('sportsActivities.kitesurfing.highlights.wind'),
        t('sportsActivities.kitesurfing.highlights.training'),
        t('sportsActivities.kitesurfing.highlights.locations')
      ],
      image: "/images/mypics/kite.jpeg",
      icon: Wind,
      color: "bg-blue-500"
    },
    {
      id: "diving",
      title: t('sportsActivities.diving.title'),
      subtitle: t('sportsActivities.diving.subtitle'),
      description: t('sportsActivities.diving.description'),
      highlights: [
        t('sportsActivities.diving.highlights.coral'),
        t('sportsActivities.diving.highlights.wrecks'),
        t('sportsActivities.diving.highlights.hubs')
      ],
      image: "/images/mypics/redss.jpeg",
      icon: Waves,
      color: "bg-cyan-500"
    },
    {
      id: "hiking",
      title: t('sportsActivities.hiking.title'),
      subtitle: t('sportsActivities.hiking.subtitle'),
      description: t('sportsActivities.hiking.description'),
      highlights: [
        t('sportsActivities.hiking.highlights.sunrise'),
        t('sportsActivities.hiking.highlights.trails'),
        t('sportsActivities.hiking.highlights.guides')
      ],
      image: "/images/mypics/hik.jpeg",
      icon: Mountain,
      color: "bg-orange-500"
    },
    {
      id: "wadi-degla",
      title: t('sportsActivities.wadiDegla.title'),
      subtitle: t('sportsActivities.wadiDegla.subtitle'),
      description: t('sportsActivities.wadiDegla.description'),
      highlights: [
        t('sportsActivities.wadiDegla.highlights.cycling'),
        t('sportsActivities.wadiDegla.highlights.wildlife'),
        t('sportsActivities.wadiDegla.highlights.accessibility')
      ],
      image: "/images/mypics/wadid.jpeg",
      icon: Bike,
      color: "bg-green-500"
    },
    {
      id: "desert-sports",
      title: t('sportsActivities.desertSports.title'),
      subtitle: t('sportsActivities.desertSports.subtitle'),
      description: t('sportsActivities.desertSports.description'),
      highlights: [
        t('sportsActivities.desertSports.highlights.safaris'),
        t('sportsActivities.desertSports.highlights.camping'),
        t('sportsActivities.desertSports.highlights.locations')
      ],
      image: "/images/mypics/Sandboarding.jpeg",
      icon: Tent,
      color: "bg-amber-500"
    }
  ];

  const travelTips = [
    t('sportsActivities.travelTips.hydration'),
    t('sportsActivities.travelTips.guides'),
    t('sportsActivities.travelTips.timing')
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12 md:py-16">
        
        <motion.div 
          className="mb-16 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            🏷️ {t('sportsActivities.hero.title')}
          </motion.h1>
          <motion.p 
            className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-700 dark:text-gray-300 md:text-xl"
            variants={itemVariants}
          >
            {t('sportsActivities.hero.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {sportsActivities.map((activity, index) => (
            <motion.div 
              key={activity.id}
              className={`group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-500 hover:shadow-2xl dark:bg-gray-800 md:p-12`}
              variants={itemVariants}
            >
              <div className={`absolute -top-4 -right-4 h-32 w-32 rounded-full ${activity.color} opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20`} />
              
              <div className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                
                <motion.div 
                  className="flex-1 space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={containerVariants}
                >
                  <motion.div className="flex items-center gap-3" variants={itemVariants}>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${activity.color} text-white`}>
                      <activity.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                        {activity.title}
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {activity.subtitle}
            </p>
          </div>
                  </motion.div>
                  
                  <motion.p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300" variants={itemVariants}>
                    {activity.description}
                  </motion.p>
                  
                  <motion.div className="space-y-3" variants={itemVariants}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {t('sportsActivities.ui.highlights')}:
                    </h3>
                    <ul className="space-y-2">
                      {activity.highlights.map((highlight, highlightIndex) => (
                        <motion.li 
                          key={highlightIndex} 
                          className="flex items-start gap-3"
                          custom={highlightIndex}
                          variants={itemVariants}
                        >
                          <Star className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-500" />
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="flex-1"
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={activity.image}
                      alt={activity.title}
                    fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </motion.div>
                </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <Card className="border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 shadow-lg dark:from-gray-800 dark:to-gray-700">
                <CardHeader>
              <div className="flex items-center gap-3">
                <Info className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  🧭 {t('sportsActivities.travelTips.title')}
                </CardTitle>
              </div>
                </CardHeader>
                <CardContent>
              <ul className="space-y-3">
                {travelTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
                </CardContent>
              </Card>
        </motion.div>
      </div>
    </div>
  );
} 