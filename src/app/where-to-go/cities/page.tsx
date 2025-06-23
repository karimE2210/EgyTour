"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Camera, Building, Crown, Waves, Mountain, Clock, Users, Star, Palmtree, Heart, MessageSquare } from "lucide-react";
import { useFavorites } from "@/hooks/use-favorites";
import { useState } from "react";
import ReviewForm from "@/components/shared/review-form";
import ReviewsDisplay from "@/components/shared/reviews-display";
import { useTranslation } from "@/hooks/use-translation";

export default function CitiesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const [activeReviewForm, setActiveReviewForm] = useState<string | null>(null);
  const [showReviews, setShowReviews] = useState<string | null>(null);
  const { t } = useTranslation();

  const historicCapitals = [
    {
      name: "Cairo",
      nickname: t("whereToGoCities.common.cityOfThousandMinarets") || "City of a Thousand Minarets",
      location: t("whereToGoCities.common.capitalOfEgypt") || "Capital of Egypt",
      image: "/images/mypics/Cairo 🇪🇬 القاهرة.jpeg",
      description: t("whereToGoCities.common.cairoDescription") || "The heart of the Arab world where ancient pyramids meet bustling bazaars and medieval Islamic architecture.",
      highlights: ["Giza Pyramids", "Islamic Cairo", "Khan El-Khalili", "Coptic Quarter", "Egyptian Museum"],
      activities: ["Historical Tours", "Bazaar Shopping", "Museum Visits", "Nile Cruises", "Cultural Experiences"],
      bestTime: t("whereToGoCities.common.bestTime"),
      population: "20.9 million",
      rating: 4.6
    },
    {
      name: "Alexandria",
      nickname: t("whereToGoCities.common.pearlOfMediterranean") || "Pearl of the Mediterranean",
      location: t("whereToGoCities.historicCapitals.alexandria.location") || "Mediterranean Coast",
      image: "/images/mypics/alex.jpeg",
      description: t("whereToGoCities.common.alexandriaDescription") || "Egypt's second-largest city carrying the legacy of ancient scholars and Ptolemaic grandeur.",
      highlights: ["Bibliotheca Alexandrina", "Citadel of Qaitbay", "Corniche", "Greco-Roman Museum", "Montaza Palace"],
      activities: ["Coastal Walks", "Historical Exploration", "Library Visits", "Beach Activities", "Cultural Tours"],
      bestTime: t("whereToGoCities.common.bestTime"),
      population: "5+ Million",
      rating: 4.5
    }
  ];

  const coastalGems = [
    {
      name: t("whereToGoCities.coastalGems.sharmElSheikh.name") || "Sharm El-Sheikh",
      nickname: t("whereToGoCities.coastalGems.sharmElSheikh.nickname") || "Jewel of the Sinai",
      location: t("whereToGoCities.coastalGems.sharmElSheikh.location") || "South Sinai, Red Sea",
      image: "/images/mypics/sharm.jpeg",
      description: t("whereToGoCities.coastalGems.sharmElSheikh.description") || "World-class diving destination offering luxury resorts and stunning Red Sea coral reefs.",
      highlights: [
        t("whereToGoCities.coastalGems.sharmElSheikh.highlights.0") || "Ras Mohammed Park",
        t("whereToGoCities.coastalGems.sharmElSheikh.highlights.1") || "Naama Bay",
        t("whereToGoCities.coastalGems.sharmElSheikh.highlights.2") || "Coral Reefs",
        t("whereToGoCities.coastalGems.sharmElSheikh.highlights.3") || "Luxury Resorts",
        t("whereToGoCities.coastalGems.sharmElSheikh.highlights.4") || "Desert Excursions"
      ],
      activities: [
        t("whereToGoCities.coastalGems.sharmElSheikh.activities.0") || "Scuba Diving",
        t("whereToGoCities.coastalGems.sharmElSheikh.activities.1") || "Snorkeling",
        t("whereToGoCities.coastalGems.sharmElSheikh.activities.2") || "Desert Safari",
        t("whereToGoCities.coastalGems.sharmElSheikh.activities.3") || "Resort Relaxation",
        t("whereToGoCities.coastalGems.sharmElSheikh.activities.4") || "Water Sports"
      ],
      bestTime: t("whereToGoCities.coastalGems.sharmElSheikh.bestTime") || "September - May",
      population: "73,000",
    
    },
    {
      name: t("whereToGoCities.coastalGems.hurghada.name") || "Hurghada",
      nickname: t("whereToGoCities.coastalGems.hurghada.nickname") || "Gateway to the Red Sea",
      location: t("whereToGoCities.coastalGems.hurghada.location") || "Red Sea Governorate",
      image: "/images/mypics/hurghada.jpeg",
      description: t("whereToGoCities.coastalGems.hurghada.description") || "Vibrant resort town transformed from fishing village to Egypt's premier Red Sea destination.",
      highlights: [
        t("whereToGoCities.coastalGems.hurghada.highlights.0") || "Marina Boulevard",
        t("whereToGoCities.coastalGems.hurghada.highlights.1") || "Giftun Islands",
        t("whereToGoCities.coastalGems.hurghada.highlights.2") || "Desert Adventures",
        t("whereToGoCities.coastalGems.hurghada.highlights.3") || "Water Sports Centers",
        t("whereToGoCities.coastalGems.hurghada.highlights.4") || "Vibrant Nightlife"
      ],
      activities: [
        t("whereToGoCities.coastalGems.hurghada.activities.0") || "Island Hopping",
        t("whereToGoCities.coastalGems.hurghada.activities.1") || "Kitesurfing",
        t("whereToGoCities.coastalGems.hurghada.activities.2") || "Quad Biking",
        t("whereToGoCities.coastalGems.hurghada.activities.3") || "Boat Tours",
        t("whereToGoCities.coastalGems.hurghada.activities.4") || "Beach Relaxation"
      ],
      bestTime: t("whereToGoCities.coastalGems.hurghada.bestTime") || "October - May",
      population: "248,000",
      
    },
    {
      name: t("whereToGoCities.coastalGems.dahab.name") || "Dahab",
      nickname: t("whereToGoCities.coastalGems.dahab.nickname") || "Backpacker's Paradise",
      location: t("whereToGoCities.coastalGems.dahab.location") || "South Sinai, Red Sea",
      image: "/images/mypics/dahab1.jpeg",
      description: t("whereToGoCities.coastalGems.dahab.description") || "Laid-back coastal town famous for world-class diving spots and bohemian atmosphere.",
      highlights: [
        t("whereToGoCities.coastalGems.dahab.highlights.0") || "Blue Hole",
        t("whereToGoCities.coastalGems.dahab.highlights.1") || "Lighthouse Reef",
        t("whereToGoCities.coastalGems.dahab.highlights.2") || "Bedouin Culture",
        t("whereToGoCities.coastalGems.dahab.highlights.3") || "Mount Sinai Access",
        t("whereToGoCities.coastalGems.dahab.highlights.4") || "Relaxed Vibe"
      ],
      activities: [
        t("whereToGoCities.coastalGems.dahab.activities.0") || "World-Class Diving",
        t("whereToGoCities.coastalGems.dahab.activities.1") || "Freediving",
        t("whereToGoCities.coastalGems.dahab.activities.2") || "Camel Trekking",
        t("whereToGoCities.coastalGems.dahab.activities.3") || "Yoga Retreats",
        t("whereToGoCities.coastalGems.dahab.activities.4") || "Cultural Exchange"
      ],
      bestTime: t("whereToGoCities.coastalGems.dahab.bestTime") || "September - May",
      population: "15,000",
      
    }
  ];

  const culturalCapitals = [
    {
      name: t("whereToGoCities.culturalCapitals.luxor.name") || "Luxor",
      nickname: t("whereToGoCities.culturalCapitals.luxor.nickname") || "World's Greatest Open-Air Museum",
      location: t("whereToGoCities.culturalCapitals.luxor.location") || "Upper Egypt, Nile Valley",
      image: "/images/mypics/lux.jpeg",
      description: t("whereToGoCities.culturalCapitals.luxor.description") || "Ancient Thebes revealing treasures through magnificent temples and royal tombs.",
      highlights: [
        t("whereToGoCities.culturalCapitals.luxor.highlights.0") || "Valley of the Kings",
        t("whereToGoCities.culturalCapitals.luxor.highlights.1") || "Karnak Temple",
        t("whereToGoCities.culturalCapitals.luxor.highlights.2") || "Luxor Temple",
        t("whereToGoCities.culturalCapitals.luxor.highlights.3") || "Queen Hatshepsut Temple",
        t("whereToGoCities.culturalCapitals.luxor.highlights.4") || "Hot Air Balloons"
      ],
      activities: [
        t("whereToGoCities.culturalCapitals.luxor.activities.0") || "Temple Tours",
        t("whereToGoCities.culturalCapitals.luxor.activities.1") || "Tomb Exploration",
        t("whereToGoCities.culturalCapitals.luxor.activities.2") || "Hot Air Ballooning",
        t("whereToGoCities.culturalCapitals.luxor.activities.3") || "Nile Cruises",
        t("whereToGoCities.culturalCapitals.luxor.activities.4") || "Archaeological Sites"
      ],
      bestTime: t("whereToGoCities.culturalCapitals.luxor.bestTime") || "October - March",
      population: "506,000",
      
    },
    {
      name: t("whereToGoCities.culturalCapitals.aswan.name") || "Aswan",
      nickname: t("whereToGoCities.culturalCapitals.aswan.nickname") || "Gateway to Nubia",
      location: t("whereToGoCities.culturalCapitals.aswan.location") || "Upper Egypt, Southern Border",
      image: "/images/mypics/aswan.jpeg",
      description: t("whereToGoCities.culturalCapitals.aswan.description") || "Tranquil Nile scenery, colorful markets, and authentic Egyptian hospitality.",
      highlights: [
        t("whereToGoCities.culturalCapitals.aswan.highlights.0") || "Philae Temple",
        t("whereToGoCities.culturalCapitals.aswan.highlights.1") || "High Dam",
        t("whereToGoCities.culturalCapitals.aswan.highlights.2") || "Elephantine Island",
        t("whereToGoCities.culturalCapitals.aswan.highlights.3") || "Nubian Villages",
        t("whereToGoCities.culturalCapitals.aswan.highlights.4") || "Felucca Rides"
      ],
      activities: [
        t("whereToGoCities.culturalCapitals.aswan.activities.0") || "Nubian Culture",
        t("whereToGoCities.culturalCapitals.aswan.activities.1") || "Temple Visits",
        t("whereToGoCities.culturalCapitals.aswan.activities.2") || "Felucca Sailing",
        t("whereToGoCities.culturalCapitals.aswan.activities.3") || "Island Tours",
        t("whereToGoCities.culturalCapitals.aswan.activities.4") || "Market Shopping"
      ],
      bestTime: t("whereToGoCities.culturalCapitals.aswan.bestTime") || "October - March",
      population: "375,000",
      
    },
    {
      name: t("whereToGoCities.culturalCapitals.edfu.name") || "Edfu",
      nickname: t("whereToGoCities.culturalCapitals.edfu.nickname") || "Temple of Horus",
      location: t("whereToGoCities.culturalCapitals.edfu.location") || "Upper Egypt, Nile Valley",
      image: "/images/mypics/edfu.jpeg",
      description: t("whereToGoCities.culturalCapitals.edfu.description") || "Home to the best-preserved ancient temple in Egypt dedicated to the falcon god Horus.",
      highlights: [
        t("whereToGoCities.culturalCapitals.edfu.highlights.0") || "Temple of Horus",
        t("whereToGoCities.culturalCapitals.edfu.highlights.1") || "Traditional Markets",
        t("whereToGoCities.culturalCapitals.edfu.highlights.2") || "Nile Views",
        t("whereToGoCities.culturalCapitals.edfu.highlights.3") || "Ancient Architecture",
        t("whereToGoCities.culturalCapitals.edfu.highlights.4") || "Local Crafts"
      ],
      activities: [
        t("whereToGoCities.culturalCapitals.edfu.activities.0") || "Temple Exploration",
        t("whereToGoCities.culturalCapitals.edfu.activities.1") || "Historical Tours",
        t("whereToGoCities.culturalCapitals.edfu.activities.2") || "Cultural Walks",
        t("whereToGoCities.culturalCapitals.edfu.activities.3") || "Photography",
        t("whereToGoCities.culturalCapitals.edfu.activities.4") || "Local Shopping"
      ],
      bestTime: t("whereToGoCities.culturalCapitals.edfu.bestTime") || "October - March",
      population: "60,000",
     
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Floating Elements Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-amber-200/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-yellow-200/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-red-200/20 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-600/80 to-transparent"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-amber-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
            <Link 
              href="/where-to-go" 
              className="inline-flex items-center text-orange-100 hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t("whereToGoCities.backToWhereToGo")}
            </Link>
            
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
                🏙️ {t("whereToGoCities.title")}
              </h1>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                {t("whereToGoCities.subtitle")}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
          {/* Historic Capitals Section */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400 flex items-center justify-center gap-3">
                <Crown className="w-10 h-10" />
                {t("whereToGoCities.sections.historicCapitals.title")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("whereToGoCities.sections.historicCapitals.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {historicCapitals.map((city, index) => (
                <div 
                  key={city.name} 
                  className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={city.image}
                      alt={city.name}
                      width={500}
                      height={300}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{city.name}</h3>
                      <p className="text-orange-600 dark:text-orange-400 text-sm font-medium mb-2">{city.nickname}</p>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        {city.location}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{city.description}</p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">🌟 {t("whereToGoCities.common.highlights")}</h4>
                        <div className="flex flex-wrap gap-1">
                          {city.highlights.map((highlight) => (
                            <span 
                              key={highlight} 
                              className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">🎯 {t("whereToGoCities.common.activities")}</h4>
                        <div className="flex flex-wrap gap-1">
                          {city.activities.map((activity) => (
                            <span 
                              key={activity} 
                              className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs rounded-full"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {city.bestTime}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Users className="w-4 h-4 mr-1" />
                          {city.population}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-700">
                        <button
                          onClick={() => toggleFavorite(city.name, 'city', city.name, city.image, city.location)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                            favorites.some(fav => fav.place_id === city.name)
                              ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                              : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${
                            favorites.some(fav => fav.place_id === city.name) 
                              ? 'fill-current' 
                              : ''
                          }`} />
                          {t("whereToGoCities.common.save")}
                        </button>

                        <div className="flex gap-2">
                          <button
                            onClick={() => setActiveReviewForm(activeReviewForm === city.name ? null : city.name)}
                            className="flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
                          >
                            <MessageSquare className="w-4 h-4" />
                            {t("whereToGoCities.common.review")}
                          </button>

                          <button
                            onClick={() => setShowReviews(showReviews === city.name ? null : city.name)}
                            className="flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
                          >
                            <Star className="w-4 h-4" />
                            {t("whereToGoCities.common.reviews")}
                          </button>
                        </div>
                      </div>

                      {/* Learn More Link */}
                      <div className="pt-2">
                        <Link
                          href={`/where-to-go/cities/${city.name.toLowerCase()}`}
                          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                        >
                          <Building className="w-4 h-4" />
                          {t("whereToGoCities.common.explore")} {city.name}
                        </Link>
                      </div>

                      {/* Review Form */}
                      {activeReviewForm === city.name && (
                        <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                          <ReviewForm
                            placeId={city.name}
                            placeName={city.name}
                            placeLocation={city.location}
                            onReviewSubmitted={() => setActiveReviewForm(null)}
                          />
                        </div>
                      )}

                      {/* Reviews Display */}
                      {showReviews === city.name && (
                        <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                          <ReviewsDisplay
                            location={city.name}
                            maxReviews={3}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Coastal Gems Section */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-3">
                <Waves className="w-10 h-10" />
                {t("whereToGoCities.sections.coastalGems.title")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("whereToGoCities.sections.coastalGems.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {coastalGems.map((city, index) => (
                <div 
                  key={city.name} 
                  className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-blue-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={city.image}
                      alt={city.name}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{city.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">{city.nickname}</p>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        {city.location}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{city.description}</p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">🌟 {t("whereToGoCities.common.highlights")}</h4>
                        <div className="flex flex-wrap gap-1">
                          {city.highlights.map((highlight) => (
                            <span 
                              key={highlight} 
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">🎯 {t("whereToGoCities.common.activities")}</h4>
                        <div className="flex flex-wrap gap-1">
                          {city.activities.map((activity) => (
                            <span 
                              key={activity} 
                              className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs rounded-full"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {city.bestTime}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Users className="w-4 h-4 mr-1" />
                          {city.population}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-700">
                        <button
                          onClick={() => toggleFavorite(city.name, 'city', city.name, city.image, city.location)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                            favorites.some(fav => fav.place_id === city.name)
                              ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                              : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${
                            favorites.some(fav => fav.place_id === city.name) 
                              ? 'fill-current' 
                              : ''
                          }`} />
                          {t("whereToGoCities.common.save")}
                        </button>

                        <div className="flex gap-2">
                          <button
                            onClick={() => setActiveReviewForm(activeReviewForm === city.name ? null : city.name)}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                          >
                            <MessageSquare className="w-4 h-4" />
                            {t("whereToGoCities.common.review")}
                          </button>

                          <button
                            onClick={() => setShowReviews(showReviews === city.name ? null : city.name)}
                            className="flex items-center gap-2 px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-lg hover:bg-cyan-200 dark:hover:bg-cyan-900/50 transition-colors"
                          >
                            <Star className="w-4 h-4" />
                            {t("whereToGoCities.common.reviews")}
                          </button>
                        </div>
                      </div>

                      {/* Learn More Link */}
                      <div className="pt-2">
                        <Link
                          href={`/where-to-go/cities/${city.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                        >
                          <Waves className="w-4 h-4" />
                          {t("whereToGoCities.common.explore")} {city.name}
                        </Link>
                      </div>

                      {/* Review Form */}
                      {activeReviewForm === city.name && (
                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <ReviewForm
                            placeId={city.name}
                            placeName={city.name}
                            placeLocation={city.location}
                            onReviewSubmitted={() => setActiveReviewForm(null)}
                          />
                        </div>
                      )}

                      {/* Reviews Display */}
                      {showReviews === city.name && (
                        <div className="mt-4 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                          <ReviewsDisplay
                            location={city.name}
                            maxReviews={3}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cultural Capitals Section */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-purple-600 dark:text-purple-400 flex items-center justify-center gap-3">
                <Palmtree className="w-10 h-10" />
                {t("whereToGoCities.sections.culturalCapitals.title")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("whereToGoCities.sections.culturalCapitals.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {culturalCapitals.map((city, index) => (
                <div 
                  key={city.name} 
                  className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-purple-100 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={city.image}
                      alt={city.name}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{city.name}</h3>
                      <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">{city.nickname}</p>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        {city.location}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{city.description}</p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">🌟 {t("whereToGoCities.common.highlights")}</h4>
                        <div className="flex flex-wrap gap-1">
                          {city.highlights.map((highlight) => (
                            <span 
                              key={highlight} 
                              className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">🎯 {t("whereToGoCities.common.activities")}</h4>
                        <div className="flex flex-wrap gap-1">
                          {city.activities.map((activity) => (
                            <span 
                              key={activity} 
                              className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {city.bestTime}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Users className="w-4 h-4 mr-1" />
                          {city.population}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-700">
                        <button
                          onClick={() => toggleFavorite(city.name, 'city', city.name, city.image, city.location)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                            favorites.some(fav => fav.place_id === city.name)
                              ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                              : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${
                            favorites.some(fav => fav.place_id === city.name) 
                              ? 'fill-current' 
                              : ''
                          }`} />
                          {t("whereToGoCities.common.save")}
                        </button>

                        <div className="flex gap-2">
                          <button
                            onClick={() => setActiveReviewForm(activeReviewForm === city.name ? null : city.name)}
                            className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                          >
                            <MessageSquare className="w-4 h-4" />
                            {t("whereToGoCities.common.review")}
                          </button>

                          <button
                            onClick={() => setShowReviews(showReviews === city.name ? null : city.name)}
                            className="flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
                          >
                            <Star className="w-4 h-4" />
                            {t("whereToGoCities.common.reviews")}
                          </button>
                        </div>
                      </div>

                      {/* Learn More Link */}
                      <div className="pt-2">
                        <Link
                          href={`/where-to-go/cities/${city.name.toLowerCase()}`}
                          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                        >
                          <Palmtree className="w-4 h-4" />
                          {t("whereToGoCities.common.explore")} {city.name}
                        </Link>
                      </div>

                      {/* Review Form */}
                      {activeReviewForm === city.name && (
                        <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                          <ReviewForm
                            placeId={city.name}
                            placeName={city.name}
                            placeLocation={city.location}
                            onReviewSubmitted={() => setActiveReviewForm(null)}
                          />
                        </div>
                      )}

                      {/* Reviews Display */}
                      {showReviews === city.name && (
                        <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                          <ReviewsDisplay
                            location={city.name}
                            maxReviews={3}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Planning Your City Adventure */}
          <section className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-amber-300/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-3xl font-bold">🗺️ {t("whereToGoCities.planning.title")}</h2>
              <p className="text-orange-100 max-w-3xl mx-auto text-lg">
                {t("whereToGoCities.planning.description")}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3">
                  <Building className="w-8 h-8 mx-auto" />
                  <h3 className="font-semibold">{t("whereToGoCities.planning.urbanExploration.title")}</h3>
                  <p className="text-orange-100 text-sm">{t("whereToGoCities.planning.urbanExploration.description")}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3">
                  <Mountain className="w-8 h-8 mx-auto" />
                  <h3 className="font-semibold">{t("whereToGoCities.planning.culturalHeritage.title")}</h3>
                  <p className="text-orange-100 text-sm">{t("whereToGoCities.planning.culturalHeritage.description")}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3">
                  <Camera className="w-8 h-8 mx-auto" />
                  <h3 className="font-semibold">{t("whereToGoCities.planning.localExperiences.title")}</h3>
                  <p className="text-orange-100 text-sm">{t("whereToGoCities.planning.localExperiences.description")}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
