"use client";

import { Info } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/use-translation";

export default function DesertAdventuresPage() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 px-4 py-10 md:py-16 flex flex-col items-center">
      <div className="w-full max-w-2xl space-y-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">{t('desertAdventures.title')}</h1>
        {/* Intro Paragraph */}
        <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400">
          {t('desertAdventures.intro')}
        </p>

        <Image
          src="/images/mypics/4x4.jpeg"
          alt={t('desertAdventures.safariImageAlt')}
          width={1200}
          height={800}
          className="w-full h-64 md:h-96 object-cover rounded-lg my-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
        />

        {/* Desert Safari Section */}
        <section className="space-y-2 p-6 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:scale-[1.02] dark:hover:bg-gray-800">
          <h2 className="text-2xl font-semibold flex items-center gap-2">🏜️ {t('desertAdventures.safari.title')}</h2>
          <p className="text-gray-700 dark:text-gray-300">{t('desertAdventures.safari.description')}</p>
          <ul className="list-disc list-inside pl-2 text-gray-700 dark:text-gray-300 space-y-1">
            <li>{t('desertAdventures.safari.items.0')}</li>
            <li>{t('desertAdventures.safari.items.1')}</li>
            <li>{t('desertAdventures.safari.items.2')}</li>
          </ul>
        </section>

        {/* Desert Camping Section */}
        <section className="space-y-2 pt-6 p-6 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:scale-[1.02] dark:hover:bg-gray-800">
          <h2 className="text-2xl font-semibold flex items-center gap-2">⛺ {t('desertAdventures.camping.title')}</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 space-y-2">
              <p className="text-gray-700 dark:text-gray-300">{t('desertAdventures.camping.description')}</p>
              <ul className="list-disc list-inside pl-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>{t('desertAdventures.camping.items.0')}</li>
                <li>{t('desertAdventures.camping.items.1')}</li>
                <li>{t('desertAdventures.camping.items.2')}</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 group">
               <Image
                src="/images/mypics/camps.jpeg"
                alt={t('desertAdventures.campingImageAlt')}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl cursor-pointer"
              />
            </div>
          </div>
        </section>

        {/* Stargazing Section */}
        <section className="space-y-2 pt-6 p-6 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:scale-[1.02] dark:hover:bg-gray-800">
          <h2 className="text-2xl font-semibold flex items-center gap-2">🔭 {t('desertAdventures.stargazing.title')}</h2>
          <p className="text-gray-700 dark:text-gray-300">{t('desertAdventures.stargazing.description')}</p>
           <div className="group">
             <Image
              src="/images/mypics/stgg.jpeg"
              alt={t('desertAdventures.stargazingImageAlt')}
              width={1200}
              height={800}
              className="w-full h-64 object-cover rounded-lg my-6 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl cursor-pointer"
            />
           </div>
          <ul className="list-disc list-inside pl-2 text-gray-700 dark:text-gray-300 space-y-1">
            <li>{t('desertAdventures.stargazing.items.0')}</li>
            <li>{t('desertAdventures.stargazing.items.1')}</li>
            <li>{t('desertAdventures.stargazing.items.2')}</li>
          </ul>
        </section>

        {/* Tips Box */}
        <section className="pt-8">
          <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded-md shadow-sm flex gap-3 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-yellow-100 cursor-pointer dark:bg-gray-800 dark:border-yellow-500 dark:hover:bg-gray-700">
            <Info className="text-yellow-500 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-400 mb-1">{t('desertAdventures.tips.title')}</h3>
              <ul className="list-disc list-inside text-yellow-900 dark:text-yellow-300 space-y-1">
                <li>{t('desertAdventures.tips.items.0')}</li>
                <li>{t('desertAdventures.tips.items.1')}</li>
                <li>{t('desertAdventures.tips.items.2')}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 