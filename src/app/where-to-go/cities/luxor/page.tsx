"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Crown, Sparkles, Camera, Heart, Star } from "lucide-react";

export default function LuxorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-amber-50 to-yellow-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/mypics/lux.jpeg"
          alt="Luxor temples"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-600/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 text-shadow-lg">الأقصر</h1>
            <h2 className="text-4xl font-light">Luxor</h2>
            <p className="text-xl mt-2 opacity-90">World's Greatest Open-Air Museum</p>
          </div>
        </div>
        
        <Link 
          href="/where-to-go/cities" 
          className="absolute top-6 left-6 inline-flex items-center text-white hover:text-yellow-300 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Cities
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Introduction Section */}
        <section className="text-center space-y-6">
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-amber-500 mx-auto rounded-full"></div>
          <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-300 flex items-center justify-center gap-3">
            👑 The Royal Throne of Pharaohs
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            In the shadow of the Theban Hills, where golden sunsets illuminate temple columns that have 
            stood for millennia, lies Luxor—the crown jewel of ancient Egypt. Once called Thebes, this 
            sacred city served as the pharaohs' religious and political capital for over 1,500 years. 
            Here, every stone whispers legends of god-kings, and every sunrise reveals new secrets 
            carved in hieroglyphs by master craftsmen of antiquity.
          </p>
        </section>

        {/* History & Origins */}
        <section className="bg-gradient-to-r from-purple-100 to-amber-100 dark:from-purple-900/30 dark:to-amber-900/30 rounded-3xl p-8 shadow-lg border border-purple-200 dark:border-purple-700">
          <h3 className="text-3xl font-bold text-purple-900 dark:text-purple-200 mb-6 flex items-center gap-3">
            🕰️ History & Origins
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Around 2100 BCE, Thebes emerged as the sacred city of Amun-Ra, the king of gods. During the 
              New Kingdom (1550-1070 BCE), it became the most powerful city in the world, with pharaohs 
              launching expeditions to Nubia and the Levant from its royal palaces.
            </p>
            <div className="border-l-4 border-amber-500 pl-6 py-4 bg-amber-50 dark:bg-amber-900/20 rounded-r-lg">
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-2">The Valley of Kings</p>
              <p>
                Around 1500 BCE, Thutmose I made the revolutionary decision to abandon pyramid building, 
                instead carving secret tombs into the Valley of the Kings. For 500 years, this became 
                the exclusive necropolis of pharaohs, including the famous tomb of Tutankhamun, discovered 
                intact in 1922.
              </p>
            </div>
          </div>
        </section>

        {/* Iconic Landmarks */}
        <section>
          <h3 className="text-3xl font-bold text-purple-900 dark:text-purple-200 mb-8 flex items-center gap-3">
            🏛️ Monuments of Eternity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-amber-50 dark:from-purple-900/40 dark:to-amber-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-purple-200 dark:border-purple-700">
              <h4 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
                <Crown className="w-5 h-5" />
                Karnak Temple Complex
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                The largest religious building ever constructed, this vast temple complex took 2,000 years 
                to complete. Its Great Hypostyle Hall contains 134 massive columns, each capable of holding 
                100 people on its capital.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/40 dark:to-yellow-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-200 dark:border-amber-700">
              <h4 className="text-xl font-bold text-amber-700 dark:text-amber-300 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Valley of the Kings
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Hidden in the desert mountains, 63 royal tombs reveal the pharaohs' journey to the afterlife 
                through intricate paintings and hieroglyphs that have retained their vivid colors for millennia.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/40 dark:to-pink-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-purple-200 dark:border-purple-700">
              <h4 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3">Temple of Hatshepsut</h4>
              <p className="text-gray-600 dark:text-gray-300">
                The mortuary temple of Egypt's most powerful female pharaoh, carved dramatically into 
                the cliffs of Deir el-Bahari, showcasing the architectural genius of ancient Egypt.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/40 dark:to-orange-900/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-yellow-200 dark:border-yellow-700">
              <h4 className="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-3">Luxor Temple</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Connected to Karnak by a 3-kilometer avenue of sphinxes, this temple was the setting for 
                the annual Opet Festival, the most important celebration in ancient Thebes.
              </p>
            </div>
          </div>
        </section>

        {/* Local Culture */}
        <section className="bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-8 border border-amber-200 dark:border-amber-700">
          <h3 className="text-3xl font-bold text-amber-800 dark:text-amber-200 mb-6 flex items-center gap-3">
            🎭 Living Heritage
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Luxor's people are the inheritors of ancient traditions. Local artisans still practice crafts 
              passed down through generations—from the alabaster carvers of the west bank to the papyrus makers 
              whose techniques mirror those used in pharaonic times. The Luxori dialect carries echoes of ancient 
              Egyptian words, particularly in archaeological and agricultural contexts.
            </p>
            <p className="text-lg leading-relaxed">
              The <em>moulid</em> of Abu el-Haggag, held annually in the mosque built atop Luxor Temple, 
              mysteriously mirrors the ancient Opet Festival route. During this celebration, ornate boats 
              process through the streets just as Amun's sacred barque once did. Traditional dishes like 
              <em>roz me'ammar</em> (baked rice) and <em>bamia</em> (okra stew) are prepared using recipes 
              that have nourished Nile Valley dwellers for centuries.
            </p>
          </div>
        </section>

        {/* Why Visit */}
        <section className="relative">
          <div className="bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/mypics/luxM.jpeg"
                alt="Luxor temple background"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-amber-600/20"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                🧳 Why Visit Luxor?
              </h3>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Luxor offers an encounter with the sublime—standing before monuments that dwarf human 
                  ambition while revealing the heights of human achievement. This is where archaeology 
                  becomes adventure, where morning light on temple walls transforms ancient stone into 
                  golden poetry, and where the pharaohs' eternal quest for immortality becomes tangibly real.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Royal Splendor</h4>
                    <p className="text-sm opacity-90">Walk in pharaohs' footsteps</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Archaeological Marvel</h4>
                    <p className="text-sm opacity-90">Witness living excavations</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Mystical Experience</h4>
                    <p className="text-sm opacity-90">Sunset over sacred temples</p>
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