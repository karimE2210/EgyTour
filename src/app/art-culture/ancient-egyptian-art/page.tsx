"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, Feather, Sun, Scroll, Sparkles, Gem, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useTranslation } from '@/hooks/use-translation';

const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`bg-stone-50/20 dark:bg-stone-900/20 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-black/5 dark:border-white/5 ${className}`}>
    {children}
  </section>
);

const HieroglyphDivider = () => (
  <div className="text-center my-12">
    <span className="text-3xl text-amber-700/50 dark:text-amber-500/50">
      𓆗 𓏏 𓆗
    </span>
  </div>
);

const PapyrusScrollSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="max-w-3xl mx-auto">
      <Section className="!p-0 !bg-transparent !shadow-none !border-none">
        <div className="bg-gradient-to-b from-amber-50 via-yellow-100 to-amber-200 text-center p-12 shadow-[0_10px_30px_rgba(0,0,0,0.3)] rounded-b-lg border border-amber-300/50">
          <h2 className="text-3xl font-bold mb-6 text-amber-900" style={{ fontFamily: "'Cinzel', serif" }}>{t('ancientEgypt.wisdomOfScribes.title')}</h2>
          <div className="text-center p-6">
            <p className="text-2xl italic leading-relaxed text-stone-800 whitespace-pre-line">
              {t('ancientEgypt.wisdomOfScribes.quote')}
            </p>
            <p className="mt-4 text-sm text-stone-700">
              {t('ancientEgypt.wisdomOfScribes.source')}
            </p>
          </div>
          <div className="flex justify-center items-center gap-8 mt-6 text-4xl text-amber-900">
            <Tooltip>
              <TooltipTrigger>𓄣</TooltipTrigger>
              <TooltipContent><p>{t('ancientEgypt.wisdomOfScribes.hieroglyphs.heart')}</p></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>𓋹</TooltipTrigger>
              <TooltipContent><p>{t('ancientEgypt.wisdomOfScribes.hieroglyphs.life')}</p></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>𓄤</TooltipTrigger>
              <TooltipContent><p>{t('ancientEgypt.wisdomOfScribes.hieroglyphs.beauty')}</p></TooltipContent>
            </Tooltip>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default function AncientEgyptianArtPage() {
  const { t } = useTranslation();
  
  const mediums = [
    { title: t('ancientEgypt.mediums.wallReliefs.title'), description: t('ancientEgypt.mediums.wallReliefs.description') },
    { title: t('ancientEgypt.mediums.sculptures.title'), description: t('ancientEgypt.mediums.sculptures.description') },
    { title: t('ancientEgypt.mediums.papyrusPaintings.title'), description: t('ancientEgypt.mediums.papyrusPaintings.description') },
    { title: t('ancientEgypt.mediums.jewelryAmulets.title'), description: t('ancientEgypt.mediums.jewelryAmulets.description') },
    { title: t('ancientEgypt.mediums.templesAsArt.title'), description: t('ancientEgypt.mediums.templesAsArt.description') },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-100 to-amber-200 dark:from-stone-900 dark:via-amber-900/20 dark:to-stone-800 text-stone-900 dark:text-stone-100 font-serif">
        <main className="container mx-auto px-4 py-20 space-y-16">

          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-yellow-600 dark:from-amber-400 dark:to-yellow-200" style={{ fontFamily: "'Cinzel', serif" }}>
              {t('ancientEgypt.title')}
            </h1>
            <p className="text-lg text-stone-700 dark:text-stone-300">{t('ancientEgypt.subtitle')}</p>
          </header>

          <Section>
            <div className="md:grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-4 text-amber-800 dark:text-amber-500">{t('ancientEgypt.sacredBlueprint.title')}</h2>
                <p className="text-lg leading-relaxed text-stone-800 dark:text-stone-200">
                  {t('ancientEgypt.sacredBlueprint.description')}
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Image src="/images/mypics/mural.jpeg" alt={t('ancientEgypt.sacredBlueprint.imageAlt')} width={500} height={400} className="rounded-lg shadow-xl object-cover" />
              </div>
            </div>
          </Section>
          
          <HieroglyphDivider />

          <Section>
            <h2 className="text-3xl font-bold mb-6 text-center text-amber-800 dark:text-amber-500">{t('ancientEgypt.whatMakesItEgyptian.title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
              <div className="p-4">
                <h3 className="font-bold text-lg text-stone-800 dark:text-stone-200">{t('ancientEgypt.whatMakesItEgyptian.symbolicView.title')}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">{t('ancientEgypt.whatMakesItEgyptian.symbolicView.description')}</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-stone-800 dark:text-stone-200">{t('ancientEgypt.whatMakesItEgyptian.canonicalGrid.title')}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">{t('ancientEgypt.whatMakesItEgyptian.canonicalGrid.description')}</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-stone-800 dark:text-stone-200">{t('ancientEgypt.whatMakesItEgyptian.hierarchicalScale.title')}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">{t('ancientEgypt.whatMakesItEgyptian.hierarchicalScale.description')}</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-stone-800 dark:text-stone-200">{t('ancientEgypt.whatMakesItEgyptian.richMaterials.title')}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">{t('ancientEgypt.whatMakesItEgyptian.richMaterials.description')}</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-stone-800 dark:text-stone-200">{t('ancientEgypt.whatMakesItEgyptian.flatRegisters.title')}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">{t('ancientEgypt.whatMakesItEgyptian.flatRegisters.description')}</p>
              </div>
            </div>
          </Section>

          <Section>
            <h2 className="text-3xl font-bold mb-8 text-center text-amber-800 dark:text-amber-500">{t('ancientEgypt.mediumsOfExpression.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative rounded-lg overflow-hidden shadow-xl group">
                  <Image src="/images/mypics/Egyptian pharaoh Jewelry & Amulets.jpeg" alt={t('ancientEgypt.mediums.jewelryAmulets.imageAlt')} width={300} height={400} className="rounded-lg shadow-xl object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-3 text-white">
                      <h3 className="text-sm font-bold mb-1">{t('ancientEgypt.mediums.jewelryAmulets.hoverTitle')}</h3>
                      <p className="text-xs">{t('ancientEgypt.mediums.jewelryAmulets.hoverDescription')}</p>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-xl group">
                  <Image src="/images/mypics/Papyrus painting from the Book of the Dead.jpeg" alt={t('ancientEgypt.mediums.papyrusPaintings.imageAlt')} width={300} height={400} className="rounded-lg shadow-xl object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-3 text-white">
                      <h3 className="text-sm font-bold mb-1">{t('ancientEgypt.mediums.papyrusPaintings.hoverTitle')}</h3>
                      <p className="text-xs">{t('ancientEgypt.mediums.papyrusPaintings.hoverDescription')}</p>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-xl group">
                  <Image src="/images/mypics/karnak.jpeg" alt={t('ancientEgypt.mediums.templesAsArt.imageAlt')} width={300} height={400} className="rounded-lg shadow-xl object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-3 text-white">
                      <h3 className="text-sm font-bold mb-1">{t('ancientEgypt.mediums.templesAsArt.hoverTitle')}</h3>
                      <p className="text-xs">{t('ancientEgypt.mediums.templesAsArt.hoverDescription')}</p>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-xl group">
                  <Image src="/images/mypics/valley.jpeg" alt={t('ancientEgypt.mediums.wallReliefs.imageAlt')} width={300} height={400} className="rounded-lg shadow-xl object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-3 text-white">
                      <h3 className="text-sm font-bold mb-1">{t('ancientEgypt.mediums.wallReliefs.hoverTitle')}</h3>
                      <p className="text-xs">{t('ancientEgypt.mediums.wallReliefs.hoverDescription')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {mediums.map((medium, index) => (
                  <div key={index} className="p-4 bg-stone-50/30 dark:bg-stone-900/30 rounded-md border border-stone-200/20 dark:border-stone-700/20">
                    <h3 className="font-bold text-stone-800 dark:text-stone-200">{medium.title}</h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400">{medium.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
          
          <HieroglyphDivider />

          <div className="grid md:grid-cols-3 gap-8">
            <Section className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4 text-amber-800 dark:text-amber-500">{t('ancientEgypt.artForAfterlife.title')}</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="space-y-4">
                  <p className="text-stone-800 dark:text-stone-200">{t('ancientEgypt.artForAfterlife.description1')}</p>
                  <p className="text-stone-800 dark:text-stone-200">{t('ancientEgypt.artForAfterlife.description2')}</p>
                </div>
                <div className="flex-shrink-0">
                  <Image src="/images/mypics/Weighing of the Heart scene from the Book of the Dead.jpeg" alt={t('ancientEgypt.artForAfterlife.imageAlt')} width={400} height={300} className="rounded-lg shadow-xl object-cover" />
                </div>
              </div>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold mb-4 text-amber-800 dark:text-amber-500">{t('ancientEgypt.funFacts.title')}</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3"><Sparkles size={16} className="mt-1 text-amber-600 dark:text-amber-400" /> <span className="text-stone-800 dark:text-stone-200">{t('ancientEgypt.funFacts.artists')}</span></li>
                <li className="flex items-start gap-3"><Eye size={16} className="mt-1 text-amber-600 dark:text-amber-400" /> <span className="text-stone-800 dark:text-stone-200">{t('ancientEgypt.funFacts.openingMouth')}</span></li>
                <li className="flex items-start gap-3"><Scroll size={16} className="mt-1 text-amber-600 dark:text-amber-400" /> <span className="text-stone-800 dark:text-stone-200">{t('ancientEgypt.funFacts.falseDoors')}</span></li>
              </ul>
            </Section>
          </div>
          
          <PapyrusScrollSection />

          <Section>
             <h2 className="text-3xl font-bold mb-6 text-center text-amber-800 dark:text-amber-500">{t('ancientEgypt.miniGallery.title')}</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="h-80 relative rounded-lg overflow-hidden shadow-lg group">
                    <Image src="/images/mypics/pyramidsH.jpeg" alt={t('ancientEgypt.miniGallery.pyramids.alt')} layout="fill" className="object-cover transition-transform duration-300 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-lg font-bold mb-2">{t('ancientEgypt.miniGallery.pyramids.title')}</h3>
                        <p className="text-sm">{t('ancientEgypt.miniGallery.pyramids.description')}</p>
                      </div>
                    </div>
                </div>
                 <div className="h-80 relative rounded-lg overflow-hidden shadow-lg group">
                    <Image src="/images/mypics/valley.jpeg" alt={t('ancientEgypt.miniGallery.valley.alt')} layout="fill" className="object-cover transition-transform duration-300 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-lg font-bold mb-2">{t('ancientEgypt.miniGallery.valley.title')}</h3>
                        <p className="text-sm">{t('ancientEgypt.miniGallery.valley.description')}</p>
                      </div>
                    </div>
                </div>
                 <div className="h-80 relative rounded-lg overflow-hidden shadow-lg group">
                    <Image src="/images/mypics/dendera.jpeg" alt={t('ancientEgypt.miniGallery.dendera.alt')} layout="fill" className="object-cover transition-transform duration-300 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-lg font-bold mb-2">{t('ancientEgypt.miniGallery.dendera.title')}</h3>
                        <p className="text-sm">{t('ancientEgypt.miniGallery.dendera.description')}</p>
                      </div>
                    </div>
                </div>
             </div>
          </Section>

        </main>
      </div>
    </TooltipProvider>
  );
} 