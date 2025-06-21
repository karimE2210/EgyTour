"use client";

import Image from "next/image";
import { Star, Sparkles, Palette, Eye, Scroll, Crown } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

// Islamic decorative elements
const IslamicArch = () => (
  <div className="absolute inset-0 opacity-5 dark:opacity-10">
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 border-2 border-[#004d40] rounded-t-full"></div>
    </div>
  </div>
);

const GeometricPattern = () => (
  <div className="absolute inset-0 opacity-10 dark:opacity-15">
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-24 h-24 border border-[#c7a35e]/30 transform rotate-45">
        <div className="w-full h-full border border-[#c7a35e]/20 transform rotate-45 scale-75"></div>
      </div>
    </div>
  </div>
);

const MuqarnasCorner = () => (
  <div className="absolute top-4 right-4 w-8 h-8 opacity-20 dark:opacity-30">
    <div className="w-full h-full bg-gradient-to-br from-[#c7a35e]/40 to-[#004d40]/40 rounded-tl-lg">
      <div className="absolute top-1 right-1 w-2 h-2 bg-[#c7a35e]/60 rounded-sm"></div>
      <div className="absolute bottom-1 left-1 w-2 h-2 bg-[#004d40]/60 rounded-sm"></div>
    </div>
  </div>
);

const ArabesqueBorder = () => (
  <div className="absolute inset-0 border-2 border-[#c7a35e]/20 dark:border-[#c7a35e]/30 rounded-lg">
    <div className="absolute top-2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-[#c7a35e]/40 to-transparent"></div>
    <div className="absolute bottom-2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-[#c7a35e]/40 to-transparent"></div>
    <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[#c7a35e]/40 to-transparent"></div>
    <div className="absolute right-2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[#c7a35e]/40 to-transparent"></div>
  </div>
);

const StarPattern = () => (
  <div className="flex items-center justify-center gap-1 text-[#c7a35e]/60 dark:text-[#c7a35e]/70">
    <Star size={12} className="transform rotate-0" />
    <Star size={10} className="transform rotate-45" />
    <Star size={12} className="transform rotate-90" />
    <Star size={10} className="transform rotate-135" />
    <Star size={12} className="transform rotate-180" />
  </div>
);

export default function IslamicArtPage() {
  const { t } = useTranslation();
  
  const islamicHighlights = [
    {
      title: t('islamicArt.highlights.mashrabiya.title'),
      image: "/images/mypics/Mashrabiya & Woodwork.jpeg",
      description: t('islamicArt.highlights.mashrabiya.description'),
      alt: t('islamicArt.highlights.mashrabiya.alt')
    },
    {
      title: t('islamicArt.highlights.calligraphy.title'),
      image: "/images/mypics/Calligraphy & Kufic Scrip.jpeg",
      description: t('islamicArt.highlights.calligraphy.description'),
      alt: t('islamicArt.highlights.calligraphy.alt')
    },
    {
      title: t('islamicArt.highlights.mosqueDesign.title'),
      image: "/images/mypics/elazhar.jpeg",
      description: t('islamicArt.highlights.mosqueDesign.description'),
      alt: t('islamicArt.highlights.mosqueDesign.alt')
    }
  ];

  return (
    <div className="min-h-screen bg-[#fef7e0] dark:bg-stone-900 text-[#002b36] dark:text-stone-200 font-serif">
      <main className="container mx-auto px-4 py-16 space-y-16">
        
        {/* Section 1: Introduction with Islamic Arch */}
        <section className="relative max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-white/80 via-[#fefaf3]/80 to-white/80 dark:from-stone-800/80 dark:via-stone-700/80 dark:to-stone-800/80 backdrop-blur-sm p-10 rounded-xl shadow-2xl border-2 border-[#c7a35e]/20 dark:border-[#c7a35e]/30">
            <IslamicArch />
            <div className="absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#c7a35e]/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#c7a35e]/50 to-transparent"></div>
            <p className="text-xl leading-relaxed text-[#002b36] dark:text-stone-300 relative z-10 font-medium tracking-wide">
              {t('islamicArt.intro')}
            </p>
            <div className="absolute top-6 right-6 text-[#c7a35e]/60 dark:text-[#c7a35e]/70">
              <Star size={28} />
            </div>
            <div className="absolute bottom-6 left-6">
              <StarPattern />
            </div>
          </div>
        </section>

        {/* Section 2: Highlights of Islamic Art */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#004d40]/50 dark:to-emerald-300/50"></div>
              <h2 className="text-4xl font-bold text-[#004d40] dark:text-emerald-300 tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                {t('islamicArt.highlights.title')}
              </h2>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#004d40]/50 dark:to-emerald-300/50"></div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-[#c7a35e]/30 via-[#004d40]/30 to-[#c7a35e]/30 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {islamicHighlights.map((item, index) => (
              <div key={index} className="relative group">
                <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl border-2 border-[#c7a35e]/20 dark:border-[#c7a35e]/30 transition-all duration-300 group-hover:border-[#c7a35e]/50">
                  <ArabesqueBorder />
                  <Image 
                    src={item.image} 
                    alt={item.alt} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004d40]/90 dark:from-stone-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-[#c7a35e]"></div>
                      <h3 className="text-xl font-bold text-[#c7a35e] tracking-wide">{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-stone-100">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: The Divine in Geometry */}
        <section className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-white/80 via-[#fefaf3]/80 to-white/80 dark:from-stone-800/80 dark:via-stone-700/80 dark:to-stone-800/80 backdrop-blur-sm p-10 rounded-xl shadow-2xl border-2 border-[#c7a35e]/20 dark:border-[#c7a35e]/30">
            <GeometricPattern />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c7a35e]/50 via-[#004d40]/50 to-[#c7a35e]/50"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c7a35e]/50 via-[#004d40]/50 to-[#c7a35e]/50"></div>
            <h2 className="text-3xl font-bold mb-8 text-[#004d40] dark:text-emerald-300 text-center tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
              {t('islamicArt.geometry.title')}
            </h2>
            <p className="text-lg leading-relaxed text-[#002b36] dark:text-stone-300 relative z-10 font-medium">
              {t('islamicArt.geometry.description')}
            </p>
          </div>
        </section>

        {/* Section 4: Quote with Islamic Styling */}
        <section className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#004d40]/10 dark:from-emerald-900/20 via-[#fefaf3]/20 dark:via-stone-800/20 to-[#c7a35e]/10 dark:to-amber-900/20 p-10 rounded-xl border-l-4 border-[#c7a35e] shadow-2xl">
            <MuqarnasCorner />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c7a35e]/50 via-[#004d40]/50 to-[#c7a35e]/50"></div>
            <blockquote className="text-center relative z-10">
              <div className="mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c7a35e]/50 mx-auto mb-4"></div>
                <p className="text-2xl italic text-[#004d40] dark:text-emerald-300 mb-4 leading-relaxed font-medium tracking-wide">
                  {t('islamicArt.quote.text')}
                </p>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c7a35e]/50 mx-auto mt-4"></div>
              </div>
              <footer className="text-sm text-[#c7a35e] dark:text-amber-400 font-medium tracking-wide">
                {t('islamicArt.quote.source')}
              </footer>
              <p className="text-xs text-[#002b36]/70 dark:text-stone-400 mt-3 font-medium tracking-wide">
                {t('islamicArt.quote.subtitle')}
              </p>
            </blockquote>
          </div>
        </section>

        {/* Enhanced Decorative Footer */}
        <section className="text-center">
          <div className="flex items-center justify-center gap-8 text-[#004d40]/40 dark:text-emerald-300/50">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#004d40]/40 dark:to-emerald-300/40"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c7a35e]/20 to-[#004d40]/20 dark:from-[#c7a35e]/30 dark:to-[#004d40]/30 flex items-center justify-center">
                <Palette size={16} />
              </div>
              <span className="text-sm font-medium tracking-wide">{t('islamicArt.footer.legacy')}</span>
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#004d40]/40 dark:to-emerald-300/40"></div>
          </div>
        </section>

      </main>
    </div>
  );
} 