"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/use-translation";

export default function WhereToGoPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#fefcf8] dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16 space-y-24">

      {/* 🌍 Section 1: Intro */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold">{t("whereToGoMain.title")}</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {t("whereToGoMain.subtitle")}
        </p>
      </section>

      {/* 🏙️ Section 2: Major Cities */}
      <section className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold mb-2">🏙️ {t("whereToGoMain.majorCities.title")}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {t("whereToGoMain.majorCities.subtitle")}
        </p>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400">🏛️ {t("whereToGoMain.majorCities.historicCapitals.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>{t("whereToGoMain.majorCities.historicCapitals.cairo.title")}</strong> - {t("whereToGoMain.majorCities.historicCapitals.cairo.description")}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>{t("whereToGoMain.majorCities.historicCapitals.alexandria.title")}</strong> - {t("whereToGoMain.majorCities.historicCapitals.alexandria.description")}
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">🏖️ {t("whereToGoMain.majorCities.coastalGems.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>{t("whereToGoMain.majorCities.coastalGems.sharmElSheikh.title")}</strong> - {t("whereToGoMain.majorCities.coastalGems.sharmElSheikh.description")}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>{t("whereToGoMain.majorCities.coastalGems.hurghada.title")}</strong> - {t("whereToGoMain.majorCities.coastalGems.hurghada.description")}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">🌟 {t("whereToGoMain.majorCities.culturalCapitals.title")}</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>{t("whereToGoMain.majorCities.culturalCapitals.luxor.title")}</strong> - {t("whereToGoMain.majorCities.culturalCapitals.luxor.description")} <strong>{t("whereToGoMain.majorCities.culturalCapitals.aswan.title")}</strong> - {t("whereToGoMain.majorCities.culturalCapitals.aswan.description")}
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/where-to-go/cities"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            🏙️ {t("whereToGoMain.majorCities.exploreCities")}
          </Link>
        </div>
      </section>

      {/* 🏝️ Section 3: Egypt's Islands */}
      <section className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold mb-2">🏝️ {t("whereToGoMain.hiddenIslands.title")}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {t("whereToGoMain.hiddenIslands.subtitle")}
        </p>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">🌊 {t("whereToGoMain.hiddenIslands.redSeaIslands.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>{t("whereToGoMain.hiddenIslands.redSeaIslands.giftunIsland.title")}</strong> {t("whereToGoMain.hiddenIslands.redSeaIslands.giftunIsland.description")}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>{t("whereToGoMain.hiddenIslands.redSeaIslands.tiranIsland.title")}</strong> {t("whereToGoMain.hiddenIslands.redSeaIslands.tiranIsland.description")}
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-400">🏛️ {t("whereToGoMain.hiddenIslands.nileRiverIslands.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>{t("whereToGoMain.hiddenIslands.nileRiverIslands.elephantineIsland.title")}</strong> {t("whereToGoMain.hiddenIslands.nileRiverIslands.elephantineIsland.description")}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>{t("whereToGoMain.hiddenIslands.nileRiverIslands.kitchenerIsland.title")}</strong> {t("whereToGoMain.hiddenIslands.nileRiverIslands.kitchenerIsland.description")}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/where-to-go/islands"
            className="inline-block px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            🏝️ {t("whereToGoMain.hiddenIslands.exploreIslands")}
          </Link>
        </div>
      </section>

      {/* 🏞️ Section 4: Natural Escapes */}
      <section className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold mb-2">🏞️ {t("whereToGoMain.naturalEscapes.title")}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {t("whereToGoMain.naturalEscapes.subtitle")}
        </p>

        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
          <li>{t("whereToGoMain.naturalEscapes.siwa")}</li>
          <li>{t("whereToGoMain.naturalEscapes.rasMohamed")}</li>
          <li>{t("whereToGoMain.naturalEscapes.mountSinai")}</li>
        </ul>
      </section>

      {/* Walk on the wild side - Lose yourself in nature section */}
      <section className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold mb-2">🌿 {t("whereToGoMain.wildSide.title")}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {t("whereToGoMain.wildSide.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{t("whereToGoMain.wildSide.desertAdventures.title")}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t("whereToGoMain.wildSide.desertAdventures.description")}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{t("whereToGoMain.wildSide.wildlifeEncounters.title")}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t("whereToGoMain.wildSide.wildlifeEncounters.description")}
            </p>
          </div>
        </div>


      </section>

      {/* 🧭 Section 5: Explore by Region */}
      <section className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold mb-2">🧭 {t("whereToGoMain.exploreByRegion.title")}</h2>
        <p className="text-gray-600 dark:text-gray-300">
          {t("whereToGoMain.exploreByRegion.subtitle")}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            t("whereToGoMain.exploreByRegion.regions.nileValley"), 
            t("whereToGoMain.exploreByRegion.regions.redSea"), 
            t("whereToGoMain.exploreByRegion.regions.sinai"), 
            t("whereToGoMain.exploreByRegion.regions.westernDesert")
          ].map((region) => (
            <span
              key={region}
              className="bg-amber-100 dark:bg-amber-900 text-gray-800 dark:text-white px-4 py-2 rounded-lg text-center font-medium"
            >
              {region}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
