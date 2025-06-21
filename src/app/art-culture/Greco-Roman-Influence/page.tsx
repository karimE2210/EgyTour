"use client";

import Image from "next/image";
import { Quote, Sparkles, Palette, Eye, Scroll, Crown } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

// Enhanced Greek decorative elements
const IonicColumn = () => (
  <div className="absolute left-6 bottom-6 w-12 h-40 opacity-15 dark:opacity-25">
    <div className="w-full h-full bg-gradient-to-b from-stone-200 to-stone-400 dark:from-stone-500 dark:to-stone-700 rounded-t-lg relative">
      {/* Column base */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-stone-500 dark:bg-stone-800 rounded-b-lg"></div>
      {/* Column capital */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-stone-300 dark:bg-stone-600 rounded-t-lg">
        <div className="absolute top-1 left-1 right-1 h-1 bg-stone-400 dark:bg-stone-500 rounded"></div>
        <div className="absolute top-3 left-1 right-1 h-1 bg-stone-400 dark:bg-stone-500 rounded"></div>
      </div>
      {/* Column fluting */}
      <div className="absolute top-6 left-1 right-1 bottom-8 bg-gradient-to-b from-transparent via-stone-300/20 dark:via-stone-600/20 to-transparent"></div>
    </div>
  </div>
);

const GreekKeyPattern = () => (
  <div className="absolute inset-0 border-4 border-blue-900/30 dark:border-blue-300/40 rounded-lg overflow-hidden">
    {/* Greek key pattern corners */}
    <div className="absolute top-2 left-2 w-8 h-8 border-2 border-blue-900/50 dark:border-blue-300/60 rounded-sm">
      <div className="absolute top-1 left-1 w-2 h-2 bg-blue-900/60 dark:bg-blue-300/70 rounded-sm"></div>
    </div>
    <div className="absolute top-2 right-2 w-8 h-8 border-2 border-blue-900/50 dark:border-blue-300/60 rounded-sm">
      <div className="absolute top-1 right-1 w-2 h-2 bg-blue-900/60 dark:bg-blue-300/70 rounded-sm"></div>
    </div>
    <div className="absolute bottom-2 left-2 w-8 h-8 border-2 border-blue-900/50 dark:border-blue-300/60 rounded-sm">
      <div className="absolute bottom-1 left-1 w-2 h-2 bg-blue-900/60 dark:bg-blue-300/70 rounded-sm"></div>
    </div>
    <div className="absolute bottom-2 right-2 w-8 h-8 border-2 border-blue-900/50 dark:border-blue-300/60 rounded-sm">
      <div className="absolute bottom-1 right-1 w-2 h-2 bg-blue-900/60 dark:bg-blue-300/70 rounded-sm"></div>
    </div>
  </div>
);

const OliveBranch = () => (
  <div className="flex items-center justify-center gap-1 text-green-700/70 dark:text-green-400/70">
    <div className="w-2 h-4 bg-green-700/50 dark:bg-green-400/60 rounded-full transform rotate-12"></div>
    <div className="w-2 h-4 bg-green-700/50 dark:bg-green-400/60 rounded-full transform -rotate-12"></div>
    <div className="w-2 h-4 bg-green-700/50 dark:bg-green-400/60 rounded-full transform rotate-12"></div>
    <div className="w-2 h-4 bg-green-700/50 dark:bg-green-400/60 rounded-full transform -rotate-12"></div>
    <div className="w-2 h-4 bg-green-700/50 dark:bg-green-400/60 rounded-full transform rotate-12"></div>
  </div>
);

const CorinthianCapital = () => (
  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 opacity-20 dark:opacity-30">
    <div className="w-full h-full bg-gradient-to-b from-stone-300 to-stone-500 dark:from-stone-600 dark:to-stone-800 rounded-t-lg relative">
      {/* Acanthus leaves */}
      <div className="absolute top-1 left-2 right-2 h-2 bg-green-700/40 dark:bg-green-400/50 rounded-full"></div>
      <div className="absolute top-3 left-1 right-1 h-1 bg-green-700/40 dark:bg-green-400/50 rounded-full"></div>
      <div className="absolute top-5 left-3 right-3 h-1 bg-green-700/40 dark:bg-green-400/50 rounded-full"></div>
    </div>
  </div>
);

const MeanderBorder = () => (
  <div className="absolute inset-0 border-2 border-blue-900/20 dark:border-blue-300/30 rounded-lg">
    <div className="absolute top-2 left-2 right-2 h-0.5 bg-blue-900/30 dark:bg-blue-300/40"></div>
    <div className="absolute bottom-2 left-2 right-2 h-0.5 bg-blue-900/30 dark:bg-blue-300/40"></div>
    <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-blue-900/30 dark:bg-blue-300/40"></div>
    <div className="absolute right-2 top-2 bottom-2 w-0.5 bg-blue-900/30 dark:bg-blue-300/40"></div>
  </div>
);

const LaurelWreath = () => (
  <div className="flex items-center justify-center gap-1 text-green-700/60 dark:text-green-400/60">
    <div className="w-3 h-6 bg-green-700/40 dark:bg-green-400/50 rounded-full transform rotate-12"></div>
    <div className="w-3 h-6 bg-green-700/40 dark:bg-green-400/50 rounded-full transform -rotate-12"></div>
    <div className="w-3 h-6 bg-green-700/40 dark:bg-green-400/50 rounded-full transform rotate-12"></div>
    <div className="w-3 h-6 bg-green-700/40 dark:bg-green-400/50 rounded-full transform -rotate-12"></div>
  </div>
);

export default function GrecoRomanInfluencePage() {
  const { t } = useTranslation();
  
  const artHighlights = [
    {
      title: t('grecoRoman.artHighlights.fayumPortraits.title'),
      image: "/images/mypics/Fayum Mummy Portrait.jpeg",
      description: t('grecoRoman.artHighlights.fayumPortraits.description'),
      alt: t('grecoRoman.artHighlights.fayumPortraits.alt')
    },
    {
      title: t('grecoRoman.artHighlights.hellenisticSculpture.title'),
      image: "/images/mypics/Hellenistic Sculpture.jpeg",
      description: t('grecoRoman.artHighlights.hellenisticSculpture.description'),
      alt: t('grecoRoman.artHighlights.hellenisticSculpture.alt')
    },
    {
      title: t('grecoRoman.artHighlights.romanMosaics.title'),
      image: "/images/mypics/Roman Mosaics.jpeg",
      description: t('grecoRoman.artHighlights.romanMosaics.description'),
      alt: t('grecoRoman.artHighlights.romanMosaics.alt')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f8f6] via-stone-100 to-[#f5f4f2] dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 text-stone-800 dark:text-stone-200 font-serif">
      <main className="container mx-auto px-4 py-16 space-y-16">
        
        {/* Section 1: Intro Paragraph with Enhanced Greek Styling */}
        <section className="relative max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-white/80 via-stone-50/80 to-white/80 dark:from-stone-800/80 dark:via-stone-700/80 dark:to-stone-800/80 backdrop-blur-sm p-10 rounded-xl shadow-2xl border-2 border-stone-200/50 dark:border-stone-700/50">
            <IonicColumn />
            <CorinthianCapital />
            <div className="absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent"></div>
            <p className="text-xl leading-relaxed text-stone-700 dark:text-stone-300 relative z-10 font-medium tracking-wide">
              {t('grecoRoman.intro')}
            </p>
            <div className="absolute top-6 right-6 text-[#d4af37]/60 dark:text-[#d4af37]/70">
              <Crown size={28} />
            </div>
            <div className="absolute bottom-6 left-6">
              <OliveBranch />
            </div>
          </div>
        </section>

        {/* Section 2: Art Highlights Grid with Greek Key Patterns */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#0d1a4b]/50 dark:to-blue-300/50"></div>
              <h2 className="text-4xl font-bold text-[#0d1a4b] dark:text-blue-300 tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                {t('grecoRoman.artHighlights.title')}
              </h2>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#0d1a4b]/50 dark:to-blue-300/50"></div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-[#d4af37]/30 via-[#b44e3b]/30 to-[#d4af37]/30 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artHighlights.map((item, index) => (
              <div key={index} className="relative group">
                <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl border-2 border-stone-200/30 dark:border-stone-700/30">
                  <GreekKeyPattern />
                  <Image 
                    src={item.image} 
                    alt={item.alt} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a4b]/90 dark:from-stone-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-[#d4af37]"></div>
                      <h3 className="text-xl font-bold text-[#d4af37] tracking-wide">{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-stone-100">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Classical Fusion in Daily Life with Ionic Columns */}
        <section className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-white/80 via-stone-50/80 to-white/80 dark:from-stone-800/80 dark:via-stone-700/80 dark:to-stone-800/80 backdrop-blur-sm p-10 rounded-xl shadow-2xl border-2 border-stone-200/50 dark:border-stone-700/50">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37]/50 via-[#b44e3b]/50 to-[#d4af37]/50"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37]/50 via-[#b44e3b]/50 to-[#d4af37]/50"></div>
            <h2 className="text-3xl font-bold mb-8 text-[#0d1a4b] dark:text-blue-300 text-center tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
              {t('grecoRoman.dailyLife.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-stone-50/50 to-stone-100/50 dark:from-stone-700/50 dark:to-stone-800/50 rounded-lg border border-stone-200/30 dark:border-stone-600/30">
                <div className="w-3 h-3 rounded-full bg-[#b44e3b] mt-2 flex-shrink-0 shadow-lg"></div>
                <p className="text-stone-700 dark:text-stone-300 font-medium">{t('grecoRoman.dailyLife.deities')}</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-stone-50/50 to-stone-100/50 dark:from-stone-700/50 dark:to-stone-800/50 rounded-lg border border-stone-200/30 dark:border-stone-600/30">
                <div className="w-3 h-3 rounded-full bg-[#b44e3b] mt-2 flex-shrink-0 shadow-lg"></div>
                <p className="text-stone-700 dark:text-stone-300 font-medium">{t('grecoRoman.dailyLife.inscriptions')}</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-stone-50/50 to-stone-100/50 dark:from-stone-700/50 dark:to-stone-800/50 rounded-lg border border-stone-200/30 dark:border-stone-600/30">
                <div className="w-3 h-3 rounded-full bg-[#b44e3b] mt-2 flex-shrink-0 shadow-lg"></div>
                <p className="text-stone-700 dark:text-stone-300 font-medium">{t('grecoRoman.dailyLife.domestic')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Quote from Antiquity with Enhanced Greek Styling */}
        <section className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#0d1a4b]/10 dark:from-blue-900/20 via-stone-50/20 dark:via-stone-800/20 to-[#b44e3b]/10 dark:to-red-900/20 p-10 rounded-xl border-l-4 border-[#d4af37] shadow-2xl">
            <div className="absolute top-6 left-6">
              <LaurelWreath />
            </div>
            <div className="absolute bottom-6 right-6">
              <LaurelWreath />
            </div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37]/50 via-[#b44e3b]/50 to-[#d4af37]/50"></div>
            <blockquote className="text-center relative z-10">
              <div className="mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50 mx-auto mb-4"></div>
                <p className="text-2xl italic text-[#0d1a4b] dark:text-blue-300 mb-4 leading-relaxed font-medium tracking-wide">
                  {t('grecoRoman.quote.text')}
                </p>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50 mx-auto mt-4"></div>
              </div>
              <footer className="text-sm text-[#b44e3b] dark:text-red-400 font-medium tracking-wide">
                {t('grecoRoman.quote.source')}
              </footer>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-3 font-mono tracking-wider">
                {t('grecoRoman.quote.greek')}
              </p>
            </blockquote>
          </div>
        </section>

        {/* Enhanced Decorative Footer */}
        <section className="text-center">
          <div className="flex items-center justify-center gap-8 text-[#0d1a4b]/40 dark:text-blue-300/50">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#0d1a4b]/40 dark:to-blue-300/40"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#b44e3b]/20 dark:from-[#d4af37]/30 dark:to-[#b44e3b]/30 flex items-center justify-center">
                <Palette size={16} />
              </div>
              <span className="text-sm font-medium tracking-wide">{t('grecoRoman.footer.legacy')}</span>
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#0d1a4b]/40 dark:to-blue-300/40"></div>
          </div>
        </section>

      </main>
    </div>
  );
} 