"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Star, Camera, Heart, Users } from "lucide-react";

export default function AswanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/mypics/aswan.jpeg"
          alt="Aswan Nile views"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 text-shadow-lg">أسوان</h1>
            <h2 className="text-4xl font-light">Aswan</h2>
            <p className="text-xl mt-2 opacity-90">Gateway to Nubia</p>
          </div>
        </div>
        
        <Link 
          href="/where-to-go/cities" 
          className="absolute top-6 left-6 inline-flex items-center text-white hover:text-teal-200 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Cities
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Introduction Section */}
        <section className="text-center space-y-6">
          <div className="w-16 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full"></div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
            🌊 The Tranquil Jewel
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Aswan beckons with the serene beauty of the Nile at its most magnificent, where golden dunes meet 
            azure waters in perfect harmony. This enchanting southern gateway has served as Egypt's bridge to 
            Africa for millennia, where Nubian culture flourishes alongside pharaonic grandeur. Here, feluccas 
            drift peacefully past ancient temples on emerald islands, and the legendary hospitality of Upper 
            Egypt welcomes travelers into a world where time moves with the gentle rhythm of the eternal river.
          </p>
        </section>

        {/* History & Origins */}
        <section className="bg-teal-100 dark:bg-slate-800 rounded-3xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            🕰️ History & Origins
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Known in ancient times as Syene, Aswan marked the southern frontier of pharaonic Egypt and served 
              as the gateway for trade with Nubia and sub-Saharan Africa. The city's strategic position at the 
              first cataract of the Nile made it a crucial military and commercial center for over 4,000 years.
            </p>
            <div className="border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 dark:bg-teal-900/20 rounded-r-lg">
              <p className="font-semibold text-teal-800 dark:text-teal-300 mb-2">The Granite Capital</p>
              <p>
                Aswan's famous red granite quarries supplied the stone for many of Egypt's greatest monuments, 
                including obelisks that now stand in London, Paris, and New York. The unfinished obelisk, 
                still lying in the ancient quarry, would have been the largest ever erected if completed.
              </p>
            </div>
          </div>
        </section>

        {/* Iconic Landmarks */}
        <section>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            🏛️ Timeless Wonders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-teal-700 dark:text-teal-400 mb-3">Philae Temple</h4>
              <p className="text-gray-600 dark:text-gray-300">
                The "Pearl of Egypt" rises majestically from Agilkia Island, dedicated to the goddess Isis. 
                This UNESCO World Heritage site was carefully relocated to save it from the rising waters of Lake Nasser.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-teal-700 dark:text-teal-400 mb-3">High Dam</h4>
              <p className="text-gray-600 dark:text-gray-300">
                An engineering marvel that transformed Egypt's agricultural landscape and created the vast 
                Lake Nasser, one of the world's largest artificial lakes stretching into Sudan.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-teal-700 dark:text-teal-400 mb-3">Elephantine Island</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Ancient Egypt's southernmost settlement, featuring archaeological treasures and the historic 
                Nilometer that measured the river's flood levels for over 3,000 years.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-teal-700 dark:text-teal-400 mb-3">Nubian Villages</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Vibrant communities with distinctive colorful houses, rich cultural traditions, and warm 
                hospitality that offer authentic experiences of Nubian heritage and customs.
              </p>
            </div>
          </div>
        </section>

        {/* Local Culture */}
        <section className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            🎭 Local Culture
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Aswan pulses with the rhythms of Nubian culture, where ancient traditions blend seamlessly with 
              Egyptian heritage. The colorful Nubian houses painted in bright blues, yellows, and greens reflect 
              a vibrant artistic tradition. Traditional Nubian music fills the air during celebrations, with drums 
              and tambourines creating infectious rhythms that echo across the Nile.
            </p>
            <p className="text-lg leading-relaxed">
              The famous Aswan market offers fragrant spices from Sudan, handwoven baskets, and intricate silver 
              jewelry. Life moves at a gentler pace here, where afternoon tea culture thrives and felucca captains 
              share stories passed down through generations. The warmth of Aswan's people, known throughout Egypt 
              for their hospitality, creates an atmosphere where visitors become friends and memories last forever.
            </p>
          </div>
        </section>

        {/* Why Visit */}
        <section className="relative">
          <div className="bg-gradient-to-r from-gray-800 to-teal-800 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/mypics/feluca.jpeg"
                alt="Felucca sailing background"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                🧳 Why Visit Aswan?
              </h3>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Aswan offers the perfect blend of ancient wonder and natural beauty, where every sunset paints 
                  the Nile in golden hues and every breeze carries the whisper of history. This is where you'll 
                  experience Egypt's most peaceful moments, whether sailing past temples on a traditional felucca 
                  or sharing tea with Nubian families in their colorful villages.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Serene Beauty</h4>
                    <p className="text-sm opacity-90">Peaceful Nile landscapes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Cultural Richness</h4>
                    <p className="text-sm opacity-90">Authentic Nubian heritage</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Timeless Moments</h4>
                    <p className="text-sm opacity-90">Unforgettable experiences</p>
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