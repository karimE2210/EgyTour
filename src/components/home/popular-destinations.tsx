"use client";

import { useTranslation } from '@/hooks/use-translation';
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WeatherCard } from "@/components/ui/weather-card";

// Sample destinations data - replace with your actual data
const destinations = [
  {
    id: "cairo",
    name: "Cairo",
    image: "/images/mypics/Cairo 🇪🇬 القاهرة.jpeg",
    link: "/where-to-go/cairo",
  },
  {
    id: "luxor",
    name: "Luxor",
    image: "/images/mypics/lux.jpeg",
    link: "/where-to-go/luxor",
  },
  {
    id: "aswan",
    name: "Aswan",
    image: "/images/mypics/aswan.jpeg",
    link: "/where-to-go/aswan",
  },
  {
    id: "siwa",
    name: "Siwa",
    image: "/images/mypics/siwa.jpeg",
    link: "/where-to-go/siwa",
  },
  {
    id: "fayoum",
    name: "Fayoum",
    image: "/images/mypics/fay.jpeg",
    link: "/where-to-go/fayoum",
  },
  {
    id: "alexandria",
    name: "Alexandria",
    image: "/images/mypics/alex.jpeg",
    link: "/where-to-go/alexandria",
  },
  {
    id: "hurghada",
    name: "Hurghada",
    image: "/images/mypics/redss.jpeg",
    link: "/where-to-go/hurghada",
  },
  {
    id: "sharm-el-sheikh",
    name: "Sharm El Sheikh",
    image: "/images/mypics/sharm.jpeg",
    link: "/where-to-go/sharm-el-sheikh",
  },
];

export function PopularDestinations() {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  // Check scroll position to show/hide navigation buttons
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Scroll handlers
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      checkScroll(); // Initial check
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("home.popularDestinations.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("home.popularDestinations.subtitle")}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            💡 Hover over any destination to see live weather information
          </p>
        </div>

        {/* Destinations Carousel */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-30 px-2">
            {showLeftButton && (
              <Button
                variant="outline"
                size="icon"
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-600 hover:scale-110 opacity-90 hover:opacity-100"
                onClick={scrollLeft}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </Button>
            )}
            {showRightButton && (
              <Button
                variant="outline"
                size="icon"
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-600 hover:scale-110 opacity-90 hover:opacity-100 ml-auto"
                onClick={scrollRight}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </Button>
            )}
          </div>

          {/* Destinations Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="relative flex-none w-[calc(33.333%-1rem)] min-w-[300px] h-[400px] rounded-xl overflow-hidden snap-center group cursor-pointer"
                onMouseEnter={() => setHoveredCity(destination.id)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                {/* Destination Image */}
                <div className="absolute inset-0">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                </div>

                {/* Destination Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {destination.name}
                  </h3>
                  <Link
                    href={destination.link}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {t("home.popularDestinations.seeMore")}
                  </Link>
                </div>

                {/* Weather Card Overlay */}
                <WeatherCard
                  cityId={destination.id}
                  cityName={destination.name}
                  isVisible={hoveredCity === destination.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 