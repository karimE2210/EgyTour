"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Star, Camera, Heart, Users } from "lucide-react";

export default function HurghadaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-turquoise-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/mypics/Hurghada.jpeg"
          alt="Hurghada Red Sea coast"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 text-shadow-lg">الغردقة</h1>
            <h2 className="text-4xl font-light">Hurghada</h2>
            <p className="text-xl mt-2 opacity-90">Gateway to the Red Sea</p>
          </div>
        </div>
        
        <Link 
          href="/where-to-go/cities" 
          className="absolute top-6 left-6 inline-flex items-center text-white hover:text-blue-200 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Cities
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Introduction Section */}
        <section className="text-center space-y-6">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
            🏖️ Red Sea Paradise
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Hurghada sparkles as Egypt's premier Red Sea destination, where pristine coral reefs meet luxury 
            resorts along crystal-clear waters. This vibrant coastal city has transformed from a humble fishing 
            village into a world-class marine playground, offering some of the planet's best diving and snorkeling 
            experiences. With year-round sunshine, thrilling water sports, and desert adventures just beyond the 
            shoreline, Hurghada perfectly balances relaxation and adventure in one stunning seaside paradise.
          </p>
        </section>

        {/* History & Origins */}
        <section className="bg-blue-100 dark:bg-slate-800 rounded-3xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            🕰️ History & Origins
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Founded in the early 20th century as a small fishing settlement, Hurghada began its transformation 
              in the 1980s when diving enthusiasts discovered its extraordinary underwater treasures. The city's 
              strategic location along the Red Sea coast made it a natural hub for marine exploration and tourism.
            </p>
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">The Diving Revolution</p>
              <p>
                In the 1980s and 1990s, pioneering dive operators revealed Hurghada's underwater wonderland to 
                the world. The pristine coral reefs, abundant marine life, and excellent visibility quickly 
                established it as one of the top diving destinations globally, attracting marine enthusiasts 
                from every corner of the earth.
              </p>
            </div>
          </div>
        </section>

        {/* Iconic Landmarks */}
        <section>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            🏖️ Marine Wonders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3">Giftun Islands</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Protected national park islands featuring pristine coral reefs, white sandy beaches, and 
                crystal-clear waters perfect for swimming, snorkeling, and diving adventures.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3">Marina Boulevard</h4>
              <p className="text-gray-600 dark:text-gray-300">
                The heart of modern Hurghada, featuring luxury yachts, waterfront restaurants, shopping centers, 
                and vibrant nightlife with stunning Red Sea views.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3">Desert Adventures</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Beyond the coastline, the Eastern Desert offers thrilling quad biking, camel treks, Bedouin 
                villages, and stargazing experiences under pristine desert skies.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3">Water Sports Centers</h4>
              <p className="text-gray-600 dark:text-gray-300">
                World-class facilities for kitesurfing, windsurfing, jet skiing, parasailing, and deep-sea 
                fishing, catering to both beginners and expert enthusiasts.
              </p>
            </div>
          </div>
        </section>

        {/* Local Culture */}
        <section className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            🎭 Local Culture
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Hurghada's culture reflects its rapid evolution from fishing village to international resort destination. 
              The old town (El Dahar) preserves traditional Egyptian coastal life with its bustling souq, local coffee 
              houses, and authentic seafood restaurants where fishermen still bring their daily catch. Fresh Red Sea 
              fish, grilled to perfection with Egyptian spices, remains a cornerstone of local cuisine.
            </p>
            <p className="text-lg leading-relaxed">
              The international nature of Hurghada has created a unique cosmopolitan atmosphere where Egyptian hospitality 
              meets global influences. Beach bars offer sunset views with traditional shisha, while resort areas feature 
              world-class spas and fine dining. The city's rhythm follows the sea – energetic water activities during 
              the day, followed by relaxed evenings enjoying the gentle Red Sea breezes and spectacular starlit skies.
            </p>
          </div>
        </section>

        {/* Why Visit */}
        <section className="relative">
          <div className="bg-gradient-to-r from-gray-800 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/mypics/Giftun Island.jpeg"
                alt="Coral reef background"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                🧳 Why Visit Hurghada?
              </h3>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Hurghada offers the perfect Red Sea escape where underwater adventures meet luxury relaxation. 
                  Whether you're diving into coral gardens teeming with tropical fish, kitesurfing across turquoise 
                  waters, or simply basking on pristine beaches, this coastal paradise delivers unforgettable 
                  experiences for every type of traveler.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Marine Paradise</h4>
                    <p className="text-sm opacity-90">World-class diving & snorkeling</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Luxury & Adventure</h4>
                    <p className="text-sm opacity-90">Resort comfort meets thrills</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Year-Round Sunshine</h4>
                    <p className="text-sm opacity-90">Perfect climate always</p>
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