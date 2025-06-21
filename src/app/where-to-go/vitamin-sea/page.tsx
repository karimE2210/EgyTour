"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Waves,
  Anchor,
  Wind,
  Ship,
  Palmtree,
  Sun,
  Shell,
  Users,
  Heart,
  MapPin,
  Tag,
  ArrowRight,
  CalendarDays,
  PackageOpen,
  ScrollText
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HeroBanner } from "@/components/shared/hero-banner";

const beachDestinations = [
  {
    id: "agiba",
    name: "Agiba Beach",
    region: "Mediterranean Coast",
    description: "A hidden paradise with crystal-clear waters and dramatic cliffs.",
    image: "/images/vitamin-sea/agiba.jpg",
    tags: ["Hidden Gem", "Natural Beauty"],
  },
  {
    id: "blue-lagoon",
    name: "Blue Lagoon",
    region: "Red Sea Coast",
    description: "Shallow turquoise waters perfect for families and snorkeling.",
    image: "/images/vitamin-sea/blue-lagoon.jpg",
    tags: ["Family Friendly", "Snorkeling"],
  },
  {
    id: "ras-um-sid",
    name: "Ras Um Sid",
    region: "Red Sea Coast",
    description: "Famous for its coral reefs and vibrant marine life.",
    image: "/images/vitamin-sea/ras-um-sid.jpg",
    tags: ["Diving", "Coral Reefs"],
  },
  {
    id: "nuweiba",
    name: "Nuweiba Beach",
    region: "Sinai",
    description: "Tranquil shores with Bedouin camps and mountain views.",
    image: "/images/vitamin-sea/nuweiba.jpg",
    tags: ["Peace & Quiet", "Culture"],
  },
  {
    id: "soma-bay",
    name: "Soma Bay",
    region: "Red Sea Coast",
    description: "Luxury resorts and world-class water sports facilities.",
    image: "/images/vitamin-sea/soma-bay.jpg",
    tags: ["Luxury", "Water Sports"],
  },
];

const beachClubs = [
  {
    id: "seasalt",
    name: "SeaSalt",
    location: "North Coast",
    description: "Chic Mediterranean vibes with infinity pools and gourmet dining.",
    image: "/images/vitamin-sea/seasalt.jpg",
    features: ["Infinity Pool", "Beach Restaurant", "DJ Sets"],
  },
  {
    id: "kikis",
    name: "Kiki's Beach Bar",
    location: "El Gouna",
    description: "Laid-back atmosphere with great music and sunset views.",
    image: "/images/vitamin-sea/kikis.jpg",
    features: ["Live Music", "Cocktail Bar", "Water Sports"],
  },
  {
    id: "smokery",
    name: "The Smokery",
    location: "El Gouna",
    description: "Upscale beach club known for its seafood and sophistication.",
    image: "/images/vitamin-sea/smokery.jpg",
    features: ["Fine Dining", "Private Beach", "VIP Service"],
  },
];

const beachgoerTypes = [
  {
    icon: <Sun className="h-8 w-8" />,
    title: "Sun Lounger",
    description: "Perfect beaches for those who love to relax and soak up the rays.",
    recommendations: ["Soma Bay", "Sahl Hasheesh"],
  },
  {
    icon: <Shell className="h-8 w-8" />,
    title: "Snorkeler",
    description: "Discover vibrant coral reefs and marine life just off the shore.",
    recommendations: ["Ras Um Sid", "Abu Galum"],
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Social Butterfly",
    description: "Vibrant beach clubs and social scenes for the party lovers.",
    recommendations: ["Marina", "Marassi"],
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Peace Seeker",
    description: "Secluded spots for those seeking tranquility by the sea.",
    recommendations: ["Nuweiba", "Marsa Alam"],
  },
];

const coastlines = [
  {
    id: "red-sea",
    name: "Red Sea Coast",
    description: "World-famous coral reefs, clear waters, and year-round sunshine.",
    beaches: ["Hurghada", "El Gouna", "Marsa Alam", "Soma Bay"],
    image: "/images/vitamin-sea/red-sea-coast.jpg",
  },
  {
    id: "mediterranean",
    name: "Mediterranean Coast",
    description: "Golden sands, historic charm, and vibrant summer culture.",
    beaches: ["Alexandria", "Marina", "Agiba", "Marsa Matruh"],
    image: "/images/vitamin-sea/mediterranean-coast.jpg",
  },
  {
    id: "sinai",
    name: "Sinai Beaches",
    description: "Where mountains meet the sea, offering unique coastal experiences.",
    beaches: ["Dahab", "Nuweiba", "Taba", "Sharm El Sheikh"],
    image: "/images/vitamin-sea/sinai-coast.jpg",
  },
];

const sunsetGallery = [
  {
    image: "/images/vitamin-sea/sunset-1.jpg",
    caption: "Magical sunset at Sahl Hasheesh",
    location: "Red Sea Coast",
  },
  {
    image: "/images/vitamin-sea/sunset-2.jpg",
    caption: "Golden hour in Alexandria",
    location: "Mediterranean Coast",
  },
  {
    image: "/images/vitamin-sea/sunset-3.jpg",
    caption: "Dahab's mountains at dusk",
    location: "Sinai",
  },
  {
    image: "/images/vitamin-sea/sunset-4.jpg",
    caption: "El Gouna marina sunset",
    location: "Red Sea Coast",
  },
];

const activities = [
  {
    icon: <Shell className="h-8 w-8" />,
    name: "Snorkeling",
    description: "Explore vibrant coral reefs",
  },
  {
    icon: <Anchor className="h-8 w-8" />,
    name: "Diving",
    description: "Discover underwater wonders",
  },
  {
    icon: <Ship className="h-8 w-8" />,
    name: "Jet Skiing",
    description: "Thrill-seeking on the waves",
  },
  {
    icon: <Wind className="h-8 w-8" />,
    name: "Kite Surfing",
    description: "Ride the wind and waves",
  },
  {
    icon: <Palmtree className="h-8 w-8" />,
    name: "Beach Yoga",
    description: "Find peace by the sea",
  },
];

const travelTips = [
  {
    icon: <PackageOpen className="h-6 w-6" />,
    title: "What to Pack",
    tips: [
      "Reef-safe sunscreen",
      "Beach footwear",
      "Light cotton clothing",
      "Snorkeling gear",
    ],
  },
  {
    icon: <CalendarDays className="h-6 w-6" />,
    title: "When to Go",
    tips: [
      "Spring (March-May) for perfect weather",
      "Summer (June-August) for beach parties",
      "Winter (Dec-Feb) for fewer crowds",
    ],
  },
  {
    icon: <ScrollText className="h-6 w-6" />,
    title: "Local Etiquette",
    tips: [
      "Respect modest dress codes",
      "Ask before taking photos",
      "Follow beach club rules",
      "Keep beaches clean",
    ],
  },
];

export default function VitaminSea() {
  return (
    <div className="min-h-screen">
      <HeroBanner
        backgroundImage="/images/vitamin-sea/hero-beach.jpg"
        title="Get Your Vitamin Sea"
        subtitle="From golden sands to turquoise shores, Egypt's coastline has a spot for every beach lover."
        height="tall"
      />

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-16">
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-center">
          Where two seas meet, Egypt offers an unparalleled coastal experience. The Red Sea dazzles with 
          its coral reefs and marine life, while the Mediterranean charms with its golden beaches and 
          historic coastal towns. Each shore tells its own story, inviting you to be part of its endless 
          summer tale.
        </p>
      </section>

      {/* Top Beach Destinations */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Top Beach Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beachDestinations.map((beach) => (
              <Card key={beach.id} className="group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64">
                    <Image
                      src={beach.image}
                      alt={beach.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-white shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold text-white">{beach.name}</h3>
                          <p className="text-white/80 text-sm">{beach.region}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex gap-2 mb-3">
                      {beach.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                          <Tag className="h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-3">{beach.description}</p>
                    <Button variant="link" className="p-0">
                      Learn more <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beach Club Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Beach Club Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beachClubs.map((club) => (
              <Card key={club.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={club.image}
                      alt={club.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{club.name}</h3>
                    <p className="text-sm text-primary mb-3">{club.location}</p>
                    <p className="text-muted-foreground mb-4">{club.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {club.features.map((feature) => (
                        <Badge key={feature} variant="outline">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Kind of Beachgoer Are You? */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Kind of Beachgoer Are You?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beachgoerTypes.map((type) => (
              <Card key={type.title} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">{type.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.recommendations.map((rec) => (
                      <Badge key={rec} variant="secondary" className="block">
                        {rec}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Coastline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Explore by Coastline</h2>
          <Tabs defaultValue="red-sea" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {coastlines.map((coast) => (
                <TabsTrigger key={coast.id} value={coast.id}>
                  {coast.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {coastlines.map((coast) => (
              <TabsContent key={coast.id} value={coast.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src={coast.image}
                      alt={coast.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{coast.name}</h3>
                    <p className="text-muted-foreground">{coast.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {coast.beaches.map((beach) => (
                        <Badge key={beach} variant="outline">
                          {beach}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Sunset Gallery */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Sunset Gallery</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {sunsetGallery.map((sunset) => (
                <CarouselItem key={sunset.caption} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative aspect-video">
                    <Image
                      src={sunset.image}
                      alt={sunset.caption}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-medium">{sunset.caption}</p>
                      <p className="text-white/80 text-sm">{sunset.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Watersports & Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Watersports & Activities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {activities.map((activity) => (
              <Card key={activity.name} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">{activity.icon}</div>
                  <h3 className="font-semibold mb-2">{activity.name}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Travel Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelTips.map((tip) => (
              <Card key={tip.title}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{tip.icon}</div>
                    <h3 className="text-xl font-semibold">{tip.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {tip.tips.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to soak up the sun?
          </h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Plan Your Beach Escape
          </Button>
        </div>
      </section>
    </div>
  );
} 