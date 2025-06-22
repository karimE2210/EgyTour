"use client";

import { Palette, Clapperboard, Music, Sprout, Hand, Users, Drama, MapPin, Utensils, ArrowRight } from 'lucide-react';
import Image from "next/image";
import { MusicPlayer } from '@/components/music-player';
import SoundWave from '@/components/ui/sound-wave';
import { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';

// A reusable card component for consistent section styling
const ArtCard = ({ icon, title, children }: { icon: ReactNode, title: string, children: ReactNode }) => (
  <div className="bg-stone-50/60 dark:bg-stone-900/60 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-black/5 dark:border-white/5">
    <div className="flex items-center gap-4 mb-4">
      <div className="text-amber-800 dark:text-amber-500">{icon}</div>
      <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-200">{title}</h2>
    </div>
    <div className="prose prose-stone dark:prose-invert max-w-none">
      {children}
    </div>
  </div>
);

export default function ArtAndCulturePage() {
  const { t } = useTranslation();

  const artLegacy = [
    { 
      icon: Palette, 
      title: t("artCulture.artisticLegacy.ancientEgyptian.title"), 
      description: t("artCulture.artisticLegacy.ancientEgyptian.description"),
      image: "/images/mypics/ancient.jpeg",
      link: "/art-culture/ancient-egyptian-art"
    },
    { 
      icon: Drama, 
      title: t("artCulture.artisticLegacy.grecoRoman.title"), 
      description: t("artCulture.artisticLegacy.grecoRoman.description"),
      image: "/images/mypics/rom.jpeg",
      link: "/art-culture/Greco-Roman-Influence"
    },
    { 
      icon: Hand, 
      title: t("artCulture.artisticLegacy.islamic.title"), 
      description: t("artCulture.artisticLegacy.islamic.description"),
      image: "/images/mypics/sul.jpeg",
      link: "/art-culture/Islamic-Art"
    }
  ];

  const cinemaPosters = [
    { image: "/images/mypics/movies/The Nightingale's Prayer.jpeg", alt: "The Nightingale's Prayer movie poster" },
    { image: "/images/mypics/movies/The Land.jpeg", alt: "The Land movie poster" },
    { image: "/images/mypics/movies/cairo station movie.jpeg", alt: "Cairo Station movie poster" },
    { image: "/images/mypics/movies/Al-Mummia.jpeg", alt: "The Mummy (Al-Mummia) movie poster" },
    { image: "/images/mypics/movies/blue elphant.jpeg", alt: "The Blue Elephant movie poster" },
  ];
  
  const cuisineItems = [
    { name: t('artCulture.cuisine.koshary'), image: '/images/mypics/food/Koshari.jpeg', recipe: t('artCulture.cuisine.kosharyRecipe') },
    { name: t('artCulture.cuisine.fulMedames'), image: '/images/mypics/food/ful medamas.jpeg', recipe: t('artCulture.cuisine.fulMedamesRecipe') },
    { name: t('artCulture.cuisine.molokhia'), image: '/images/mypics/food/molkhia.jpeg', recipe: t('artCulture.cuisine.molokhiaRecipe') },
    { name: t('artCulture.cuisine.fattah'), image: '/images/mypics/food/fattah.jpeg', recipe: t('artCulture.cuisine.fattahRecipe') },
  ];

  const folklore = [
    { title: t("artCulture.folklore.tanoura") },
    { title: t("artCulture.folklore.nubian") },
    { title: t("artCulture.folklore.bedouin") },
    { title: t("artCulture.folklore.moulid") },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-200 via-amber-100 to-stone-200 dark:from-gray-900 dark:via-stone-900 dark:to-gray-900 text-stone-800 dark:text-stone-200 font-serif">
      <main className="container mx-auto px-4 py-20 space-y-20">
        
        {/* Intro Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-stone-700 dark:from-amber-400 dark:to-stone-300">
            {t("artCulture.title")}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-stone-700 dark:text-stone-300">
            {t("artCulture.intro")}
          </p>
        </section>
        
        {/* Art Legacy */}
        <ArtCard icon={<Palette size={28}/>} title={t("artCulture.artisticLegacy.title")}>
          <p>{t("artCulture.artisticLegacy.intro")}</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {artLegacy.map(item => {
              const Icon = item.icon; 
              return (
                <div key={item.title} className="relative h-80 rounded-lg overflow-hidden group shadow-lg">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={20} className="text-amber-400" />
                      <h3 className="font-bold text-lg">{item.title}</h3>
                    </div>
                    <p className="text-sm text-stone-200 mb-3">{item.description}</p>
                    {item.link && (
                      <Link 
                        href={item.link}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/90 text-white rounded-lg shadow-md hover:bg-amber-600 transition-colors text-sm font-medium"
                      >
                        {t("artCulture.artisticLegacy.exploreMore")}
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ArtCard>
        
        {/* Cinema */}
        <ArtCard icon={<Clapperboard size={28}/>} title={t("artCulture.cinema.title")}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p>{t("artCulture.cinema.description")}</p>
              <ul className="list-disc list-inside mt-4 space-y-1">
                <li><span className="font-bold">{t("artCulture.cinema.stars")}:</span> {t("artCulture.cinema.starsList")}</li>
                <li><span className="font-bold">{t("artCulture.cinema.iconicFilms")}:</span> {t("artCulture.cinema.filmsList")}</li>
                <li><span className="font-bold">{t("artCulture.cinema.hubs")}:</span> {t("artCulture.cinema.hubsList")}</li>
              </ul>
              <a 
                href="https://letterboxd.com/kanafani/list/top-100-egyptian-movies/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6 px-4 py-2 bg-amber-800/90 text-white rounded-lg shadow-md hover:bg-amber-800 transition-colors"
              >
                {t("artCulture.cinema.exploreTopFilms")}
              </a>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {cinemaPosters.map((poster, index) => (
                <div key={index} className="flex-none w-40 h-56 rounded-md overflow-hidden shadow-xl transform hover:scale-105 transition-transform">
                  <Image src={poster.image} alt={poster.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </ArtCard>

        {/* Music */}
        <ArtCard icon={<Music size={28}/>} title={t("artCulture.music.title")}>
          <div className="md:w-3/4 mx-auto text-center">
            <p className="mb-8">{t("artCulture.music.description")}</p>
            <div className="flex items-center justify-center gap-8 md:gap-16">
              <div className="hidden md:block">
                <SoundWave />
              </div>
              <div className="max-w-md mx-auto">
                <MusicPlayer />
              </div>
              <div className="hidden md:block">
                <SoundWave />
              </div>
            </div>
          </div>
        </ArtCard>

        {/* Cuisine */}
        <ArtCard icon={<Utensils size={28}/>} title={t("artCulture.cuisine.title")}>
          <p className="text-center mb-8">{t("artCulture.cuisine.description")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cuisineItems.map(item => (
              <div key={item.name} className="relative h-64 rounded-lg overflow-hidden group shadow-lg">
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                {/* Always visible title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-bold text-lg text-white">{item.name}</h3>
                </div>
                {/* Hover overlay for recipe */}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <h4 className="font-bold mb-2 border-b border-amber-500/50 pb-1">{item.name} {t("artCulture.cuisine.recipe")}</h4>
                    <p className="text-xs leading-relaxed">{item.recipe}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ArtCard>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Culture & Identity */}
          <div className="md:col-span-3">
            <ArtCard icon={<Users size={28}/>} title={t("artCulture.culture.title")}>
              <p>{t("artCulture.culture.description")}</p>
              <div className="grid md:grid-cols-2 gap-x-6 mt-4">
                <div>
                  <h4 className="font-bold mt-4">{t("artCulture.culture.dailyLife.title")}</h4>
                  <p className="text-sm">{t("artCulture.culture.dailyLife.description")}</p>
                </div>
                <div>
                  <h4 className="font-bold mt-4">{t("artCulture.culture.languagesFaith.title")}</h4>
                  <p className="text-sm">{t("artCulture.culture.languagesFaith.description")}</p>
                </div>
              </div>
            </ArtCard>
          </div>
          
          {/* Folklore */}
          <div className="md:col-span-2">
            <ArtCard icon={<MapPin size={28}/>} title={t("artCulture.folklore.title")}>
              <p className="mb-4">{t("artCulture.folklore.description")}</p>
              <ul className="space-y-2">
                {folklore.map(item => (
                  <li key={item.title} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-700 dark:bg-amber-500 flex-shrink-0"></span>
                    {item.title}
                  </li>
                ))}
              </ul>
            </ArtCard>
          </div>
        </div>
        
      </main>
    </div>
  );
} 