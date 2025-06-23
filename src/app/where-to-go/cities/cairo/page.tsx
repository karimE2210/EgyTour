"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Star, Camera, Heart, Users } from "lucide-react";

export default function CairoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/mypics/Cairo 🇪🇬 القاهرة.jpeg"
          alt="Cairo skyline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 text-shadow-lg">القاهرة</h1>
            <h2 className="text-4xl font-light">Cairo</h2>
            <p className="text-xl mt-2 opacity-90">City of a Thousand Minarets</p>
          </div>
        </div>
        
        <Link 
          href="/where-to-go/cities" 
          className="absolute top-6 left-6 inline-flex items-center text-white hover:text-amber-200 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Cities
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Introduction Section */}
        <section className="text-center space-y-6">
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
            🏙️ The Eternal City
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Cairo stands as the beating heart of the Arab world, where ancient pharaonic grandeur meets 
            the vibrant pulse of modern Egypt. This magnificent metropolis has witnessed the rise and fall 
            of empires, serving as a crossroads of civilizations for over a millennium. Here, the Pyramids 
            of Giza cast their eternal shadows over bustling markets, and the call to prayer echoes between 
            medieval minarets and contemporary towers.
          </p>
        </section>

        {/* History & Origins */}
        <section className="bg-stone-100 dark:bg-slate-800 rounded-3xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            🕰️ History & Origins
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Founded over 1,000 years ago by the Fatimid dynasty in 969 CE, Cairo was built near the ancient 
              capitals of Memphis and Babylon. The city's Arabic name, "Al-Qāhirah," means "The Victorious," 
              reflecting its role as a center of Islamic power and learning.
            </p>
            <div className="border-l-4 border-amber-500 pl-6 py-4 bg-amber-50 dark:bg-amber-900/20 rounded-r-lg">
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-2">The Great Transformation</p>
              <p>
                In 1176 CE, the legendary Saladin unified Egypt and Syria from Cairo, transforming it into 
                the capital of a vast empire that would reclaim Jerusalem and resist the Crusades. This 
                golden age established Cairo as the undisputed center of the Islamic world.
              </p>
            </div>
          </div>
        </section>

        {/* Iconic Landmarks */}
        <section>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            🏛️ Iconic Landmarks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-3">The Great Pyramids of Giza</h4>
              <p className="text-gray-600 dark:text-gray-300">
                The last surviving wonder of the ancient world, these 4,500-year-old monuments continue 
                to guard Cairo's western horizon with their timeless majesty.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-3">Islamic Cairo</h4>
              <p className="text-gray-600 dark:text-gray-300">
                A UNESCO World Heritage site containing the world's largest collection of historic 
                Islamic architecture, with over 600 mosques, madrasas, and monuments.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-3">Khan El-Khalili Bazaar</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Dating back to 1382, this labyrinthine marketplace pulses with the energy of merchants, 
                artisans, and the intoxicating aromas of spices and coffee.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-3">The Egyptian Museum</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Home to the world's most extensive collection of ancient Egyptian artifacts, 
                including the golden treasures of Tutankhamun.
              </p>
            </div>
          </div>
        </section>

        {/* Local Culture */}
        <section className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            🎭 Local Culture
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Cairenes speak with the most recognized Arabic dialect in the Middle East, made famous by Egypt's 
              golden age of cinema and television. The city's culinary soul lives in dishes like <em>ful medames</em> 
              (slow-cooked fava beans) and <em>koshari</em> (a hearty mix of rice, lentils, and pasta topped with 
              spiced tomato sauce).
            </p>
            <p className="text-lg leading-relaxed">
              Life in Cairo revolves around the concept of <em>tarab</em> – the deep emotional connection to music 
              and poetry. From the legendary Umm Kulthum's concerts that once stopped traffic, to the vibrant 
              street performances in Zamalek, music flows through the city's veins. During Ramadan, the streets 
              come alive with <em>fanous</em> lanterns and the festive atmosphere of <em>iftar</em> gatherings.
            </p>
          </div>
        </section>

        {/* Why Visit */}
        <section className="relative">
          <div className="bg-gradient-to-r from-gray-800 to-amber-800 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/mypics/pyramidsH.jpeg"
                alt="Pyramids background"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                🧳 Why Visit Cairo?
              </h3>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Cairo is not just a destination; it's a journey through time itself. This is where you'll 
                  stand in the shadow of monuments that have witnessed 5,000 years of human civilization, 
                  bargain in markets that have traded for centuries, and taste flavors that tell the story 
                  of a crossroads culture.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Timeless Wonder</h4>
                    <p className="text-sm opacity-90">Experience living history</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Cultural Immersion</h4>
                    <p className="text-sm opacity-90">Authentic Egyptian life</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Unforgettable Moments</h4>
                    <p className="text-sm opacity-90">Stories to last a lifetime</p>
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