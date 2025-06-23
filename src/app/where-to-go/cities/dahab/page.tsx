"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mountain, Fish, Wind, Heart, Star, Sunset } from "lucide-react";

export default function DahabPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-yellow-900/10 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/mypics/dahab1.jpeg"
          alt="Dahab coastline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-yellow-600/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 text-shadow-lg">دهب</h1>
            <h2 className="text-4xl font-light">Dahab</h2>
            <p className="text-xl mt-2 opacity-90">Backpacker's Paradise</p>
          </div>
        </div>
        
        <Link 
          href="/where-to-go/cities" 
          className="absolute top-6 left-6 inline-flex items-center text-white hover:text-yellow-200 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Cities
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Introduction Section */}
        <section className="text-center space-y-6">
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          <h2 className="text-4xl font-bold text-orange-800 dark:text-orange-300 flex items-center justify-center gap-3">
            🏖️ The Golden Sanctuary
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            On the eastern shore of the Sinai Peninsula, where golden dunes kiss turquoise waters, 
            Dahab unfolds like a bohemian dream. This laid-back coastal haven has evolved from a simple 
            Bedouin fishing village into a global magnet for free spirits, divers, and seekers of 
            authentic desert-meets-sea experiences. Here, time flows as slowly as the gentle lapping 
            of Red Sea waves, and every sunset paints the mountains in shades of copper and gold.
          </p>
        </section>

        {/* History & Origins */}
        <section className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-3xl p-8 shadow-lg border border-yellow-200 dark:border-yellow-700">
          <h3 className="text-3xl font-bold text-orange-800 dark:text-orange-200 mb-6 flex items-center gap-3">
            🕰️ History & Origins
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              For centuries, Dahab ("gold" in Arabic) was known only to the Muzayna Bedouin tribe, 
              who found sustenance in its waters and shelter in its palm groves. The village remained 
              virtually untouched by the outside world until the 1960s, when Israeli settlers established 
              the first tourist infrastructure.
            </p>
            <div className="border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 dark:bg-teal-900/20 rounded-r-lg">
              <p className="font-semibold text-teal-800 dark:text-teal-300 mb-2">The Diving Revolution</p>
              <p>
                In the 1980s, after Egypt regained control of Sinai, word spread about Dahab's 
                incredible diving sites, particularly the legendary Blue Hole. The village transformed 
                into an international diving destination while miraculously maintaining its unhurried, 
                authentic character that continues to enchant visitors seeking an escape from the modern world.
              </p>
            </div>
          </div>
        </section>

        {/* Iconic Landmarks */}
        <section>
          <h3 className="text-3xl font-bold text-orange-800 dark:text-orange-200 mb-8 flex items-center gap-3">
            🏛️ Natural Wonders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/40 dark:to-cyan-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-teal-200 dark:border-teal-700">
              <h4 className="text-xl font-bold text-teal-700 dark:text-teal-300 mb-3 flex items-center gap-2">
                <Fish className="w-5 h-5" />
                The Blue Hole
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                One of the world's most famous diving sites, this underwater sinkhole plunges 130 meters 
                into crystal-clear depths, offering encounters with coral gardens and diverse marine life 
                that define Red Sea diving.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/40 dark:to-red-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-orange-200 dark:border-orange-700">
              <h4 className="text-xl font-bold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                <Mountain className="w-5 h-5" />
                Mount Sinai
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                The sacred mountain where Moses received the Ten Commandments rises majestically from 
                Dahab's horizon, offering spiritual pilgrims and adventurers a transformative sunrise 
                hiking experience.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/40 dark:to-amber-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-yellow-200 dark:border-yellow-700">
              <h4 className="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-3">Lighthouse Reef</h4>
              <p className="text-gray-600 dark:text-gray-300">
                A pristine diving sanctuary where untouched coral formations create an underwater paradise, 
                perfect for both novice snorkelers and experienced divers seeking Red Sea magic just 
                steps from shore.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/40 dark:to-orange-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-200 dark:border-amber-700">
              <h4 className="text-xl font-bold text-amber-700 dark:text-amber-300 mb-3 flex items-center gap-2">
                <Wind className="w-5 h-5" />
                Assalah Bay
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                The heart of Dahab's bohemian scene, where wind and kite surfers dance with steady 
                breezes while beachfront cafés serve traditional Bedouin tea under swaying palm trees.
              </p>
            </div>
          </div>
        </section>

        {/* Local Culture */}
        <section className="bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-8 border border-amber-200 dark:border-amber-700">
          <h3 className="text-3xl font-bold text-amber-800 dark:text-amber-200 mb-6 flex items-center gap-3">
            🎭 Desert-Sea Fusion
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Dahab's culture is a beautiful fusion of ancient Bedouin traditions and international 
              bohemian spirit. Local Muzayna guides still lead camel treks using ancestral desert knowledge, 
              while the village's restaurants serve everything from traditional <em>zarb</em> (underground-cooked 
              lamb) to fresh <em>samak mashwi</em> (grilled fish) alongside global backpacker favorites.
            </p>
            <p className="text-lg leading-relaxed">
              The famous "Dahab time" reflects a pace of life where schedules are suggestions and sunset 
              gatherings are sacred. Evening <em>shisha</em> sessions on colorful floor cushions blend 
              Arabic music with acoustic guitar, while morning yoga sessions on the beach continue the 
              spiritual tradition that began with Sufi mystics who once meditated in these desert valleys. 
              The annual Dahab Festival celebrates this unique culture with traditional dance, desert sports, 
              and Red Sea adventures.
            </p>
          </div>
        </section>

        {/* Why Visit */}
        <section className="relative">
          <div className="bg-gradient-to-r from-orange-800 via-amber-700 to-yellow-700 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/mypics/Dahab, Egypt.jpeg"
                alt="Dahab sunset background"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-yellow-600/20"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                🧳 Why Visit Dahab?
              </h3>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Dahab offers the rare gift of genuine relaxation in our hyperconnected world. This is 
                  where digital detox happens naturally, where underwater adventures rival any theme park, 
                  and where the simple pleasure of watching stars emerge over the desert reminds you what 
                  truly matters. Come for the diving, stay for the soul-nourishing pace of life that 
                  transforms visitors into temporary philosophers and permanent dreamers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Fish className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Diving Paradise</h4>
                    <p className="text-sm opacity-90">World-class underwater adventures</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sunset className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Spiritual Escape</h4>
                    <p className="text-sm opacity-90">Desert serenity and mindfulness</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Wind className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Bohemian Freedom</h4>
                    <p className="text-sm opacity-90">Authentic cultural exchange</p>
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