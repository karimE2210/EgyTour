"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Camera, Waves, TreePine, Fish, Mountain, Clock, Users, Star, Heart, MessageSquare } from "lucide-react";
import { useFavorites } from "@/hooks/use-favorites";
import { useState } from "react";
import ReviewForm from "@/components/shared/review-form";
import ReviewsDisplay from "@/components/shared/reviews-display";
import { useTranslation } from "@/hooks/use-translation";

export default function IslandsPage() {
  const { t } = useTranslation();
  const { isFavorited, toggleFavorite } = useFavorites();
  const [selectedIsland, setSelectedIsland] = useState<string | null>(null);
  const [showReviewForm, setShowReviewForm] = useState<string | null>(null);

  const redSeaIslands = [
    {
      name: "Giftun Island",
      location: "Hurghada, Red Sea",
      image: "/images/mypics/Giftun Island.jpeg",
      description: "A pristine coral paradise offering world-class diving and snorkeling experiences.",
      highlights: ["Protected Marine Reserve", "Pristine Coral Reefs", "White Sandy Beaches", "Dolphin Watching"],
      activities: ["Snorkeling", "Scuba Diving", "Beach Relaxation", "Boat Tours"],
      bestTime: "October - April",
      difficulty: "Easy",
      rating: 4.8
    },
    {
      name: "Tiran Island",
      location: "South Sinai",
      image: "/images/mypics/Tiran Island South Sinai.jpeg",
      description: "Guardian of the Gulf of Aqaba, featuring dramatic underwater walls and vibrant marine life.",
      highlights: ["Famous Diving Sites", "Coral Gardens", "Underwater Walls", "Marine Biodiversity"],
      activities: ["Advanced Diving", "Underwater Photography", "Marine Research", "Boat Excursions"],
      bestTime: "Year Round",
      difficulty: "Intermediate",
      rating: 4.9
    },
    {
      name: "Mahmya Island",
      location: "Hurghada, Red Sea",
      image: "/images/mypics/Mahmya Island.jpeg",
      description: "An eco-friendly island paradise with crystal-clear waters and sustainable tourism practices.",
      highlights: ["Eco-Tourism", "Crystal Clear Waters", "Sustainable Practices", "Beach Volleyball"],
      activities: ["Swimming", "Beach Games", "Eco Tours", "Relaxation"],
      bestTime: "October - May",
      difficulty: "Easy",
      rating: 4.7
    }
  ];

  const nileIslands = [
    {
      name: "Elephantine Island",
      location: "Aswan, Upper Egypt",
      image: "/images/mypics/Elephantine Island.jpeg",
      description: "Ancient Egypt's southern frontier, rich with archaeological treasures and Nubian culture.",
      highlights: ["Archaeological Sites", "Nubian Villages", "Ancient Temples", "Cultural Heritage"],
      activities: ["Cultural Tours", "Archaeological Exploration", "Village Visits", "Photography"],
      bestTime: "October - March",
      difficulty: "Easy",
      rating: 4.6
    },
    {
      name: "Kitchener's Island",
      location: "Aswan, Upper Egypt",
      image: "/images/mypics/Kitchener's Island.jpeg",
      description: "A lush botanical paradise showcasing exotic plants from across Africa and Asia.",
      highlights: ["Botanical Gardens", "Exotic Plants", "Peaceful Atmosphere", "Bird Watching"],
      activities: ["Nature Walks", "Botanical Tours", "Bird Watching", "Photography"],
      bestTime: "November - February",
      difficulty: "Easy",
      rating: 4.5
    },
    {
      name: "Sehel Island",
      location: "Aswan, Upper Egypt",
      image: "/images/mypics/Sehel Island.jpeg",
      description: "Home to ancient inscriptions and petroglyphs, offering insights into Egypt's past.",
      highlights: ["Ancient Inscriptions", "Rock Art", "Historical Significance", "Quiet Beaches"],
      activities: ["Historical Tours", "Rock Art Viewing", "Peaceful Walks", "Cultural Learning"],
      bestTime: "October - March",
      difficulty: "Easy",
      rating: 4.4
    }
  ];

  const renderIslandCard = (island: any, colorScheme: 'blue' | 'amber') => {
    const islandId = island.name.toLowerCase().replace(/\s+/g, '-');
    const isFav = isFavorited(islandId);
    const showReview = showReviewForm === island.name;
    const showReviews = selectedIsland === island.name;

    const colorClasses = {
      blue: {
        border: "border-blue-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600",
        location: "text-blue-600 dark:text-blue-400",
        highlights: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
        activities: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300"
      },
      amber: {
        border: "border-amber-100 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600",
        location: "text-amber-600 dark:text-amber-400",
        highlights: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
        activities: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
      }
    };

    const colors = colorClasses[colorScheme];

    return (
      <div 
        key={island.name} 
        className={`group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${colors.border} hover:-translate-y-2`}
      >
        <div className="relative overflow-hidden">
          <Image
            src={island.image}
            alt={island.name}
            width={400}
            height={250}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{island.name}</h3>
            <div className={`flex items-center ${colors.location} text-sm mb-3`}>
              <MapPin className="w-4 h-4 mr-1" />
              {island.location}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{island.description}</p>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">🌟 {t("whereToGoIslands.common.highlights")}</h4>
              <div className="flex flex-wrap gap-1">
                {island.highlights.map((highlight: string) => (
                  <span 
                    key={highlight} 
                    className={`px-2 py-1 ${colors.highlights} text-xs rounded-full`}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">🎯 {t("whereToGoIslands.common.activities")}</h4>
              <div className="flex flex-wrap gap-1">
                {island.activities.map((activity: string) => (
                  <span 
                    key={activity} 
                    className={`px-2 py-1 ${colors.activities} text-xs rounded-full`}
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                {island.bestTime}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Users className="w-4 h-4 mr-1" />
                {island.difficulty}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-slate-700">
              <button
                onClick={() => toggleFavorite(
                  islandId,
                  'island',
                  island.name,
                  island.image,
                  island.location
                )}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isFav
                    ? 'bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-slate-700 dark:text-gray-300 hover:dark:bg-slate-600'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                {isFav ? t("whereToGoIslands.common.saved") : t("whereToGoIslands.common.save")}
              </button>

              <button
                onClick={() => setShowReviewForm(showReview ? null : island.name)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                {showReview ? 'Cancel' : t("whereToGoIslands.common.writeReview")}
              </button>

              <button
                onClick={() => setSelectedIsland(showReviews ? null : island.name)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-slate-700 dark:text-gray-300 hover:dark:bg-slate-600 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                {showReviews ? t("whereToGoIslands.common.closeReviews") : t("whereToGoIslands.common.viewReviews")}
              </button>
            </div>
          </div>

          {/* Review Form */}
          {showReview && (
            <div className="border-t border-gray-100 dark:border-slate-700 pt-4">
              <ReviewForm
                placeId={islandId}
                placeName={island.name}
                placeLocation={island.location}
                onReviewSubmitted={() => setShowReviewForm(null)}
                className="shadow-none border-0"
              />
            </div>
          )}

          {/* Reviews Display */}
          {showReviews && (
            <div className="border-t border-gray-100 dark:border-slate-700 pt-4">
              <ReviewsDisplay
                location={island.location}
                maxReviews={3}
                className="shadow-none border-0"
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Floating Elements Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-200/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-sky-200/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-teal-200/20 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/80 to-transparent"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
            <Link 
              href="/where-to-go" 
              className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t("whereToGoIslands.backToWhereToGo")}
            </Link>
            
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                🏝️ {t("whereToGoIslands.title")}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                {t("whereToGoIslands.subtitle")}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
          {/* Red Sea Islands Section */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-3">
                <Waves className="w-10 h-10" />
                {t("whereToGoIslands.redSeaIslands.title")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("whereToGoIslands.redSeaIslands.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {redSeaIslands.map((island) => renderIslandCard(island, 'blue'))}
            </div>
          </section>

          {/* Nile River Islands Section */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-amber-600 dark:text-amber-400 flex items-center justify-center gap-3">
                <TreePine className="w-10 h-10" />
                {t("whereToGoIslands.nileIslands.title")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("whereToGoIslands.nileIslands.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {nileIslands.map((island) => renderIslandCard(island, 'amber'))}
            </div>
          </section>

          {/* Planning Your Island Adventure */}
          <section className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-300/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-3xl font-bold">🗺️ {t("whereToGoIslands.planningSection.title")}</h2>
              <p className="text-blue-100 max-w-3xl mx-auto text-lg">
                {t("whereToGoIslands.planningSection.description")}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3">
                  <Fish className="w-8 h-8 mx-auto" />
                  <h3 className="font-semibold">{t("whereToGoIslands.planningSection.marineExploration.title")}</h3>
                  <p className="text-blue-100 text-sm">{t("whereToGoIslands.planningSection.marineExploration.description")}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3">
                  <Mountain className="w-8 h-8 mx-auto" />
                  <h3 className="font-semibold">{t("whereToGoIslands.planningSection.culturalHeritage.title")}</h3>
                  <p className="text-blue-100 text-sm">{t("whereToGoIslands.planningSection.culturalHeritage.description")}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3">
                  <Camera className="w-8 h-8 mx-auto" />
                  <h3 className="font-semibold">{t("whereToGoIslands.planningSection.naturalBeauty.title")}</h3>
                  <p className="text-blue-100 text-sm">{t("whereToGoIslands.planningSection.naturalBeauty.description")}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 