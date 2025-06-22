"use client";

import Image from "next/image";
import { useTranslation } from '@/hooks/use-translation';

export default function HiddenEgyptPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#fdfaf3] dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16 space-y-20">
      
      {/* 🏺 Intro */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4">{t("hiddenEgypt.title")}</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {t("hiddenEgypt.intro")}
        </p>
      </section>

      {/* 📍 El-Minya */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">{t("hiddenEgypt.elMinya.title")}</h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t("hiddenEgypt.elMinya.description")}
          </p>
        </div>
        <Image
          src="/images/mypics/elminya.jpeg"
          alt={t("hiddenEgypt.elMinya.title")}
          width={600}
          height={400}
          className="rounded-xl object-cover shadow-lg"
        />
      </section>

      {/* 🏜️ Dakhla Oasis */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/mypics/Dakhla Oasis.jpeg"
          alt={t("hiddenEgypt.dakhlaOasis.title")}
          width={600}
          height={400}
          className="rounded-xl object-cover shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{t("hiddenEgypt.dakhlaOasis.title")}</h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t("hiddenEgypt.dakhlaOasis.description")}
          </p>
        </div>
      </section>

      {/* 🏛️ Tanis */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">{t("hiddenEgypt.tanis.title")}</h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t("hiddenEgypt.tanis.description")}
          </p>
        </div>
        <Image
          src="/images/mypics/Tanis.jpeg"
          alt={t("hiddenEgypt.tanis.title")}
          width={600}
          height={400}
          className="rounded-xl object-cover shadow-lg"
        />
      </section>

      {/* 🏞️ Fayoum Waterfalls */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/mypics/fay.jpeg"
          alt={t("hiddenEgypt.wadiElRayan.title")}
          width={600}
          height={400}
          className="rounded-xl object-cover shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{t("hiddenEgypt.wadiElRayan.title")}</h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t("hiddenEgypt.wadiElRayan.description")}
          </p>
        </div>
      </section>

      {/* 🧭 Siwa's Abandoned Fortress */}
      <section className="max-w-4xl mx-auto text-center space-y-4 pt-10">
        <h2 className="text-2xl font-bold">{t("hiddenEgypt.exploreMore.title")}</h2>
        <p className="text-gray-700 dark:text-gray-300">
          {t("hiddenEgypt.exploreMore.description")}
        </p>
      </section>
    </main>
  );
} 