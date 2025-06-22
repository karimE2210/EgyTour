"use client";

import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Users, Camera, Star } from 'lucide-react';
import Link from 'next/link';

export function FamilyAdventures() {
  const { t } = useTranslation();

  const familyActivities = [
    {
      icon: Users,
      title: "Family-Friendly Sites",
      description: "Explore pyramids, temples, and museums designed for all ages"
    },
    {
      icon: Camera,
      title: "Photo Opportunities",
      description: "Capture magical moments at Egypt's most iconic landmarks"
    },
    {
      icon: Heart,
      title: "Safe Adventures",
      description: "Guided tours and activities perfect for children and adults"
    },
    {
      icon: Star,
      title: "Educational Fun",
      description: "Learn about ancient history while having an amazing time"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/mypics/camps.jpeg')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("home.featured.familyAdventures.title")}
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              {t("home.featured.familyAdventures.description")}
            </p>
            
            {/* Activities Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {familyActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <activity.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{activity.title}</h3>
                    <p className="text-sm text-gray-300">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/things-to-do">
                  Explore Family Activities
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="/plan-your-trip">
                  Plan Family Trip
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kid-Friendly Pyramids Tour</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Special guided tours designed for families with interactive storytelling and fun facts for children.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>4.8 • Perfect for ages 6+</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Desert Family Camp</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Safe desert camping experience with family tents, camel rides, and stargazing activities.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>4.9 • All ages welcome</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Nile Family Cruise</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Gentle Nile cruise with family cabins, kids' activities, and educational programs about ancient Egypt.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>4.7 • Family suites available</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 