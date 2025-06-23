"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, Waves, MapPin, Heart, Star } from "lucide-react";

export default function AlexandriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/mypics/alex.jpeg"
          alt="Alexandria coastline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 text-shadow-lg">الإسكندرية</h1>
            <h2 className="text-4xl font-light">Alexandria</h2>
            <p className="text-xl mt-2 opacity-90">Pearl of the Mediterranean</p>
          </div>
        </div>
        
        <Link 
          href="/where-to-go/cities" 
          className="absolute top-6 left-6 inline-flex items-center text-white hover:text-cyan-200 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Cities
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Introduction Section */}
        <section className="text-center space-y-6">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-300 flex items-center justify-center gap-3">
            🌊 The Bride of the Mediterranean
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Where the azure Mediterranean meets the fertile Nile Delta, Alexandria breathes with the rhythm 
            of ancient wisdom and modern aspirations. Founded by Alexander the Great and home to the legendary 
            Library, this cosmopolitan city has been a beacon of learning and tolerance for over two millennia. 
            Here, Greek philosophers once debated alongside Egyptian priests, and today, the sea breeze carries 
            whispers of poetry, science, and the enduring spirit of intellectual curiosity.
          </p>
        </section>

        {/* History & Origins */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-3xl p-8 shadow-lg border border-blue-200 dark:border-blue-700">
          <h3 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-6 flex items-center gap-3">
            🕰️ History & Origins
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              In 331 BCE, Alexander the Great chose this strategic location where Lake Mariout meets the sea, 
              envisioning a city that would bridge East and West. Under the Ptolemaic dynasty, Alexandria 
              became the intellectual capital of the ancient world, where Greek learning merged with Egyptian 
              wisdom and Eastern knowledge.
            </p>
            <div className="border-l-4 border-cyan-500 pl-6 py-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-r-lg">
              <p className="font-semibold text-cyan-800 dark:text-cyan-300 mb-2">The Great Library</p>
              <p>
                Around 295 BCE, Ptolemy I established the legendary Library and Museum of Alexandria, 
                attracting scholars like Euclid, Archimedes, and Eratosthenes. For 600 years, it remained 
                the world's greatest repository of knowledge, housing over 400,000 scrolls and fostering 
                discoveries that shaped human understanding of mathematics, astronomy, and medicine.
              </p>
            </div>
          </div>
        </section>

        {/* Iconic Landmarks */}
        <section>
          <h3 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-8 flex items-center gap-3">
            🏛️ Treasures by the Sea
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-blue-200 dark:border-blue-700">
              <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Bibliotheca Alexandrina
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                The modern resurrection of the ancient Library, this architectural marvel houses millions 
                of books and serves as a beacon of learning for the 21st century, continuing Alexandria's 
                scholarly legacy.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/40 dark:to-teal-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-cyan-200 dark:border-cyan-700">
              <h4 className="text-xl font-bold text-cyan-700 dark:text-cyan-300 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Citadel of Qaitbay
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Built on the exact site of the ancient Lighthouse of Alexandria—one of the Seven Wonders 
                of the Ancient World—this 15th-century fortress guards the harbor with timeless vigilance.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/40 dark:to-green-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-teal-200 dark:border-teal-700">
              <h4 className="text-xl font-bold text-teal-700 dark:text-teal-300 mb-3">Corniche Waterfront</h4>
              <p className="text-gray-600 dark:text-gray-300">
                A 15-kilometer promenade along the Mediterranean, where Alexandrians gather for sunset 
                strolls and the sea breeze carries the romantic spirit that inspired poets and lovers 
                throughout history.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/40 dark:to-purple-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-indigo-200 dark:border-indigo-700">
              <h4 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-3">Catacombs of Kom el Shoqafa</h4>
              <p className="text-gray-600 dark:text-gray-300">
                A unique blend of Egyptian, Greek, and Roman art, these underground tombs represent 
                Alexandria's multicultural heritage and stand as one of the Seven Wonders of the 
                Medieval World.
              </p>
            </div>
          </div>
        </section>

        {/* Local Culture */}
        <section className="bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 dark:from-cyan-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-700">
          <h3 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6 flex items-center gap-3">
            🎭 Mediterranean Soul
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Alexandrians speak Arabic with a distinctive coastal lilt, peppered with Greek and Italian 
              words—remnants of the city's cosmopolitan past. The local cuisine reflects this heritage: 
              <em>seafood sayadeya</em> (fisherman's rice), <em>molokhia</em> with prawns, and the famous 
              Alexandrian <em>liver sandwiches</em> served with tahina and spices unique to the city.
            </p>
            <p className="text-lg leading-relaxed">
              The café culture thrives in establishments like <em>Pastroudis</em> and <em>Trianon</em>, 
              where intellectuals gather over Turkish coffee and backgammon, continuing traditions from 
              the days when Alexandria was home to poets like Constantine Cavafy and Lawrence Durrell. 
              The city's literary festivals and the annual Mediterranean Biennale celebrate this ongoing 
              cultural renaissance, while traditional <em>simsemia</em> folk music echoes in waterfront venues.
            </p>
          </div>
        </section>

        {/* Why Visit */}
        <section className="relative">
          <div className="bg-gradient-to-r from-blue-800 via-cyan-800 to-teal-800 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/mypics/alexx.jpeg"
                alt="Alexandria waterfront background"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                🧳 Why Visit Alexandria?
              </h3>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Alexandria offers a contemplative journey through intellectual history while embracing 
                  the timeless pleasure of Mediterranean living. This is where ancient wisdom meets seaside 
                  serenity, where morning coffee in a historic café can inspire profound thoughts, and where 
                  sunset walks along the Corniche connect you to centuries of dreamers and scholars who found 
                  inspiration in these same rhythmic waves.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Intellectual Heritage</h4>
                    <p className="text-sm opacity-90">Walk with ancient scholars</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Waves className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Coastal Tranquility</h4>
                    <p className="text-sm opacity-90">Mediterranean serenity</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Timeless Beauty</h4>
                    <p className="text-sm opacity-90">Where past meets present</p>
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