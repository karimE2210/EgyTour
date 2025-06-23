"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Palmtree, Fish, Sun, Heart, Star, Waves } from "lucide-react";

export default function SharmElSheikhPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-rose-900/10 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/mypics/sharm.jpeg"
          alt="Sharm El-Sheikh resort"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-orange-600/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 text-shadow-lg">شرم الشيخ</h1>
            <h2 className="text-4xl font-light">Sharm El-Sheikh</h2>
            <p className="text-xl mt-2 opacity-90">Jewel of the Sinai</p>
          </div>
        </div>
        
        <Link 
          href="/where-to-go/cities" 
          className="absolute top-6 left-6 inline-flex items-center text-white hover:text-orange-200 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Cities
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Introduction Section */}
        <section className="text-center space-y-6">
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          <h2 className="text-4xl font-bold text-red-800 dark:text-red-300 flex items-center justify-center gap-3">
            🏝️ The Red Sea Riviera
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Where the dramatic mountains of Sinai plunge into the crystal-clear waters of the Red Sea, 
            Sharm El-Sheikh emerges as Egypt's crown jewel of luxury tourism. This world-class resort 
            destination seamlessly blends ancient Bedouin heritage with contemporary sophistication, 
            offering pristine coral reefs, championship golf courses, and sunset views that have 
            captivated pharaohs and presidents alike. Here, every day unfolds against a backdrop 
            of unparalleled natural beauty and five-star indulgence.
          </p>
        </section>

        {/* History & Origins */}
        <section className="bg-gradient-to-r from-rose-100 to-red-100 dark:from-rose-900/30 dark:to-red-900/30 rounded-3xl p-8 shadow-lg border border-rose-200 dark:border-rose-700">
          <h3 className="text-3xl font-bold text-red-800 dark:text-red-200 mb-6 flex items-center gap-3">
            🕰️ History & Origins
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Originally a small fishing village inhabited by the Sharkiya Bedouin tribe, Sharm El-Sheikh 
              ("Bay of the Sheikh") remained virtually unknown until the mid-20th century. The area's 
              strategic location at the mouth of the Gulf of Aqaba made it a natural harbor, but its 
              tourism potential lay dormant beneath pristine waters.
            </p>
            <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 dark:bg-orange-900/20 rounded-r-lg">
              <p className="font-semibold text-orange-800 dark:text-orange-300 mb-2">The Resort Revolution</p>
              <p>
                In the 1980s, following the Camp David Accords, visionary developers recognized Sharm's 
                potential as a world-class diving and resort destination. The transformation was remarkable: 
                within decades, this remote Bedouin settlement became the "Las Vegas of the Red Sea," 
                hosting international peace summits and welcoming millions of visitors annually while 
                maintaining its commitment to marine conservation.
              </p>
            </div>
          </div>
        </section>

        {/* Iconic Landmarks */}
        <section>
          <h3 className="text-3xl font-bold text-red-800 dark:text-red-200 mb-8 flex items-center gap-3">
            🏛️ Luxury & Adventure
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/40 dark:to-teal-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-blue-200 dark:border-blue-700">
              <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                <Fish className="w-5 h-5" />
                Ras Mohammed National Park
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Egypt's first national marine park protects some of the world's most spectacular coral 
                reefs, where 220 coral species and over 1,000 fish species create an underwater 
                paradise for divers and snorkelers.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/40 dark:to-red-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-orange-200 dark:border-orange-700">
              <h4 className="text-xl font-bold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                <Palmtree className="w-5 h-5" />
                Naama Bay
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                The beating heart of Sharm's nightlife and entertainment, this crescent-shaped bay 
                offers world-class resorts, gourmet restaurants, and vibrant promenades against 
                a backdrop of turquoise waters.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/40 dark:to-pink-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-red-200 dark:border-red-700">
              <h4 className="text-xl font-bold text-red-700 dark:text-red-300 mb-3">SOHO Square</h4>
              <p className="text-gray-600 dark:text-gray-300">
                A vibrant entertainment complex featuring international dining, designer shopping, 
                cultural performances, and the region's only ice bar, creating a cosmopolitan 
                oasis in the desert.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/40 dark:to-yellow-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-200 dark:border-amber-700">
              <h4 className="text-xl font-bold text-amber-700 dark:text-amber-300 mb-3 flex items-center gap-2">
                <Sun className="w-5 h-5" />
                Shark's Bay
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                An exclusive resort area where luxury hotels perch on clifftops overlooking pristine 
                beaches, offering the perfect blend of privacy, panoramic views, and easy access 
                to world-class diving sites.
              </p>
            </div>
          </div>
        </section>

        {/* Local Culture */}
        <section className="bg-gradient-to-r from-orange-100 via-red-100 to-pink-100 dark:from-orange-900/20 dark:via-red-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-orange-200 dark:border-orange-700">
          <h3 className="text-3xl font-bold text-orange-800 dark:text-orange-200 mb-6 flex items-center gap-3">
            🎭 Cosmopolitan Elegance
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Sharm El-Sheikh represents modern Egypt at its most international, where multiple languages 
              blend in luxury hotel lobbies and world-renowned chefs create fusion cuisine that honors 
              both Bedouin traditions and global palates. Local specialties include <em>ouzi</em> (stuffed 
              lamb), fresh Red Sea grouper, and innovative interpretations of traditional <em>mezze</em> 
              served in award-winning restaurants.
            </p>
            <p className="text-lg leading-relaxed">
              The city's unique culture celebrates both adventure and relaxation. Morning yoga sessions 
              transition to championship golf, while sunset camel treks lead to glamorous rooftop 
              dining experiences. The annual Sharm El-Sheikh International Theatre Festival and Red Sea 
              Jazz Festival showcase the city's commitment to arts and culture, while traditional 
              Bedouin <em>fantasia</em> shows under starlit skies maintain connections to Sinai's 
              desert heritage.
            </p>
          </div>
        </section>

        {/* Why Visit */}
        <section className="relative">
          <div className="bg-gradient-to-r from-red-800 via-orange-700 to-pink-700 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/mypics/sharm.jpeg"
                alt="Sharm resort background"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                🧳 Why Visit Sharm El-Sheikh?
              </h3>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Sharm El-Sheikh offers the ultimate fusion of natural wonder and sophisticated luxury. 
                  This is where you can explore some of Earth's most pristine coral ecosystems by day 
                  and savor world-class cuisine by night, where adventure diving meets spa indulgence, 
                  and where every sunset over the Red Sea creates a new masterpiece. It's Egypt's 
                  answer to the world's great resort destinations, elevated by unparalleled marine 
                  biodiversity and Sinai's dramatic desert beauty.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Fish className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Marine Wonderland</h4>
                    <p className="text-sm opacity-90">World's premier diving destination</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Palmtree className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Luxury Resort Life</h4>
                    <p className="text-sm opacity-90">Five-star sophistication</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sun className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Year-Round Paradise</h4>
                    <p className="text-sm opacity-90">Perfect climate and sunshine</p>
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