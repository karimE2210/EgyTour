"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Star, Camera, Heart, Users } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export default function EdfuPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/mypics/Edfu.jpeg"
          alt="Edfu Temple"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 text-shadow-lg">{t("cityPages.edfu.arabicTitle")}</h1>
            <h2 className="text-4xl font-light">{t("cityPages.edfu.title")}</h2>
            <p className="text-xl mt-2 opacity-90">{t("cityPages.edfu.subtitle")}</p>
          </div>
        </div>
        
        <Link 
          href="/where-to-go/cities" 
          className="absolute top-6 left-6 inline-flex items-center text-white hover:text-purple-200 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          {t("cityPages.backToCities")}
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Introduction Section */}
        <section className="text-center space-y-6">
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
            🏛️ {t("cityPages.edfu.heroTitle")}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t("cityPages.edfu.intro")}
          </p>
        </section>

        {/* History & Origins */}
        <section className="bg-purple-100 dark:bg-slate-800 rounded-3xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            🕰️ {t("cityPages.edfu.history.title")}
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              {t("cityPages.edfu.history.content")}
            </p>
            <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">{t("cityPages.edfu.history.legend.title")}</p>
              <p>
                {t("cityPages.edfu.history.legend.content")}
              </p>
            </div>
          </div>
        </section>

        {/* Iconic Landmarks */}
        <section>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            🏛️ {t("cityPages.edfu.landmarks.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-3">{t("cityPages.edfu.landmarks.templeOfHorus.title")}</h4>
              <p className="text-gray-600 dark:text-gray-300">
                {t("cityPages.edfu.landmarks.templeOfHorus.description")}
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-3">{t("cityPages.edfu.landmarks.greatPylon.title")}</h4>
              <p className="text-gray-600 dark:text-gray-300">
                {t("cityPages.edfu.landmarks.greatPylon.description")}
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-3">{t("cityPages.edfu.landmarks.sanctuary.title")}</h4>
              <p className="text-gray-600 dark:text-gray-300">
                {t("cityPages.edfu.landmarks.sanctuary.description")}
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-3">{t("cityPages.edfu.landmarks.souq.title")}</h4>
              <p className="text-gray-600 dark:text-gray-300">
                {t("cityPages.edfu.landmarks.souq.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Local Culture */}
        <section className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            🎭 {t("cityPages.edfu.culture.title")}
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              {t("cityPages.edfu.culture.content1")}
            </p>
            <p className="text-lg leading-relaxed">
              {t("cityPages.edfu.culture.content2")}
            </p>
          </div>
        </section>

        {/* Why Visit */}
        <section className="relative">
          <div className="bg-gradient-to-r from-gray-800 to-purple-800 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/mypics/karnak.jpeg"
                alt="Ancient temple background"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                🧳 {t("cityPages.edfu.whyVisit.title")}
              </h3>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  {t("cityPages.edfu.whyVisit.content")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{t("cityPages.edfu.whyVisit.reasons.preservation.title")}</h4>
                    <p className="text-sm opacity-90">{t("cityPages.edfu.whyVisit.reasons.preservation.description")}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{t("cityPages.edfu.whyVisit.reasons.experience.title")}</h4>
                    <p className="text-sm opacity-90">{t("cityPages.edfu.whyVisit.reasons.experience.description")}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{t("cityPages.edfu.whyVisit.reasons.history.title")}</h4>
                    <p className="text-sm opacity-90">{t("cityPages.edfu.whyVisit.reasons.history.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 