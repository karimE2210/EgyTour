"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Tent, 
  Star, 
  Mountain, 
  Bird, 
  Wind, 
  Sparkles,
  MapPin,
  ArrowRight,
  Info
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const natureDestinations = [
  {
    id: "white-desert",
    title: "White Desert National Park",
    description: "A surreal landscape of chalk-rock formations, sculpted by nature into mushroom-like shapes.",
    image: "/images/white-desert.jpg",
    location: "Western Desert",
  },
  {
    id: "valley-whales",
    title: "Wadi El Hitan (Valley of the Whales)",
    description: "A UNESCO World Heritage site featuring prehistoric whale fossils in the heart of the desert.",
    image: "/images/valley-whales.jpg",
    location: "Fayoum",
  },
  {
    id: "siwa-oasis",
    title: "Siwa Oasis",
    description: "A remote paradise of date palms, freshwater springs, and ancient ruins surrounded by endless dunes.",
    image: "/images/siwa-oasis.jpg",
    location: "Western Desert",
  },
  {
    id: "colored-canyon",
    title: "The Colored Canyon",
    description: "A natural palette of red, purple, and gold in narrow sandstone corridors.",
    image: "/images/colored-canyon.jpg",
    location: "Sinai",
  },
  {
    id: "saint-catherine",
    title: "Saint Catherine Mountains",
    description: "Sacred peaks and ancient trails offering spectacular hiking and sunrise views.",
    image: "/images/saint-catherine.jpg",
    location: "Sinai",
  },
  {
    id: "wadi-rayan",
    title: "Wadi El Rayan",
    description: "A protected area featuring waterfalls, lakes, and diverse wildlife.",
    image: "/images/wadi-rayan.jpg",
    location: "Fayoum",
  },
];

const activities = [
  {
    icon: <Tent className="h-8 w-8" />,
    title: "Desert Camping",
    description: "Sleep under the stars in traditional Bedouin camps",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Stargazing",
    description: "Experience the clearest night skies in the world",
  },
  {
    icon: <Mountain className="h-8 w-8" />,
    title: "Hiking",
    description: "Trek through ancient valleys and mountain trails",
  },
  {
    icon: <Bird className="h-8 w-8" />,
    title: "Bird Watching",
    description: "Spot migratory birds in protected wetlands",
  },
  {
    icon: <Wind className="h-8 w-8" />,
    title: "Sandboarding",
    description: "Surf the golden dunes of the Great Sand Sea",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Solitude/Meditation",
    description: "Find peace in nature's most serene settings",
  },
];

const ecoLodges = [
  {
    id: "adrere-amellal",
    name: "Adrere Amellal",
    location: "Siwa Oasis",
    description: "An eco-lodge built from traditional materials, offering a luxurious yet sustainable desert experience. No electricity - only candlelight and starlight.",
    image: "/images/adrere-amellal.jpg",
  },
  {
    id: "fayoum-lodge",
    name: "Fayoum Eco-lodge",
    location: "Tunis Village, Fayoum",
    description: "Overlooking Lake Qarun, this eco-lodge combines traditional architecture with modern comfort, perfect for bird watching and pottery workshops.",
    image: "/images/fayoum-lodge.jpg",
  },
  {
    id: "desert-camp",
    name: "Authentic Bedouin Camp",
    location: "White Desert",
    description: "Experience traditional Bedouin hospitality under the stars, with comfortable tents and authentic desert cuisine.",
    image: "/images/bedouin-camp.jpg",
  },
];

const regions = [
  {
    name: "Western Desert",
    description: "Vast expanses of sand dunes and limestone formations",
    coordinates: { x: 20, y: 30 },
  },
  {
    name: "Fayoum",
    description: "Egypt's oldest city, rich in natural and archaeological wonders",
    coordinates: { x: 40, y: 40 },
  },
  {
    name: "Sinai",
    description: "Mountains, canyons, and coastal reserves",
    coordinates: { x: 60, y: 20 },
  },
  {
    name: "Eastern Desert",
    description: "Rugged mountain ranges and ancient quarries",
    coordinates: { x: 50, y: 50 },
  },
];

export default function WildSide() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px]">
        <Image
          src="/images/desert-stars.jpg"
          alt="Egyptian Desert at Night"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Walk on the Wild Side
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Lose yourself in Egypt's rawest, most natural landscapes — deserts, mountains, and oases untouched by time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-16">
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-center">
          Beyond the pyramids and ancient temples lies another Egypt—one of boundless natural wonder. 
          Here, in the embrace of endless dunes and star-filled skies, you'll find a different kind of magic. 
          A place where silence speaks louder than words, and where the raw beauty of the desert landscape 
          tells stories as old as time itself.
        </p>
      </section>

      {/* Top Nature Destinations */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Top Nature Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {natureDestinations.map((destination) => (
              <Card key={destination.id} className="group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-white shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold text-white">{destination.title}</h3>
                          <p className="text-white/80 text-sm">{destination.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-muted-foreground">{destination.description}</p>
                    <Button variant="link" className="mt-2 p-0">
                      Learn more <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Desert Activities</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {activities.map((activity) => (
                <CarouselItem key={activity.title} className="sm:basis-1/2 md:basis-1/3">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <div className="mb-4 text-primary">{activity.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                      <p className="text-muted-foreground">{activity.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Explore by Region Map */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Explore by Region</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square">
              <Image
                src="/images/wild-side/egypt-map.png"
                alt="Map of Egypt's Natural Regions"
                fill
                className="object-contain"
              />
              <TooltipProvider>
                {regions.map((region) => (
                  <Tooltip key={region.name}>
                    <TooltipTrigger asChild>
                      <button
                        className="absolute group"
                        style={{ left: `${region.coordinates.x}%`, top: `${region.coordinates.y}%` }}
                      >
                        <div className="relative">
                          <div className="w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full animate-ping" />
                        </div>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-sm">
                        <p className="font-semibold">{region.name}</p>
                        <p className="text-muted-foreground">{region.description}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Discover Egypt's Natural Wonders</h3>
              <p className="text-muted-foreground">
                Egypt's diverse landscapes offer unique experiences in each region. From the vast Western Desert 
                to the rugged mountains of Sinai, every area has its own distinct character and natural wonders 
                waiting to be explored.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {regions.map((region) => (
                  <Card key={region.name} className="bg-background/50">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold">{region.name}</h4>
                          <p className="text-sm text-muted-foreground">{region.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Lodges Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Eco-Lodges & Desert Stays</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecoLodges.map((lodge) => (
              <Card key={lodge.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={lodge.image}
                      alt={lodge.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{lodge.name}</h3>
                    <p className="text-sm text-primary mb-3">{lodge.location}</p>
                    <p className="text-muted-foreground mb-4">{lodge.description}</p>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative h-[400px] my-16">
        <Image
          src="/images/white-desert-night.jpg"
          alt="White Desert at Night"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl text-white italic mb-4">
                "I spent the night under the stars in the White Desert — it was the most peaceful moment of my life."
              </p>
              <footer className="text-white/80">— Sarah M., Travel Photographer</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Leave the noise behind. Plan your escape into the wild.
          </h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Plan My Nature Trip
          </Button>
        </div>
      </section>
    </div>
  );
} 