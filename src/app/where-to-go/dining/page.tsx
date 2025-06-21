"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { HeroBanner } from "@/components/shared/hero-banner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, Star, Clock, ArrowRight, Search, ChefHat, Store } from "lucide-react";

const streetFood = [
  {
    id: "koshary",
    name: "Koshary",
    description: "Egypt's national dish - a hearty mix of pasta, rice, lentils, chickpeas, and spicy tomato sauce.",
    image: "/images/dining/koshary.jpg",
    location: "Found everywhere in Cairo",
    price: "Budget-friendly",
  },
  {
    id: "taameya",
    name: "Taameya (Egyptian Falafel)",
    description: "Made with fava beans instead of chickpeas, creating a uniquely Egyptian flavor.",
    image: "/images/dining/taameya.jpg",
    location: "Popular breakfast spot",
    price: "Budget-friendly",
  },
  {
    id: "hawawshi",
    name: "Hawawshi",
    description: "Spiced minced meat stuffed in Egyptian bread and baked to perfection.",
    image: "/images/dining/hawawshi.jpg",
    location: "Street food staple",
    price: "Budget-friendly",
  },
  {
    id: "ful",
    name: "Ful Medames",
    description: "Slow-cooked fava beans seasoned with olive oil, lemon juice, and cumin.",
    image: "/images/dining/ful.jpg",
    location: "Traditional breakfast",
    price: "Budget-friendly",
  },
];

const fineDining = [
  {
    id: "nile-maxim",
    name: "Nile Maxim",
    description: "Elegant dining cruise with panoramic Nile views and live entertainment",
    image: "/images/dining/nile-maxim.jpg",
    location: "Cairo",
    cuisine: "Egyptian & International",
    priceRange: "$$$$",
  },
  {
    id: "abou-el-sid",
    name: "Abou El Sid",
    description: "Traditional Egyptian cuisine in a colonial-style setting",
    image: "/images/dining/abou-el-sid.jpg",
    location: "Cairo",
    cuisine: "Egyptian",
    priceRange: "$$$",
  },
  {
    id: "fish-market",
    name: "Fish Market",
    description: "Fresh seafood with Mediterranean views",
    image: "/images/dining/fish-market.jpg",
    location: "Alexandria",
    cuisine: "Seafood",
    priceRange: "$$$",
  },
];

const regionalCuisine = [
  {
    region: "Cairo",
    title: "Urban Fusion & Classics",
    description: "Where traditional meets modern in a vibrant food scene",
    dishes: ["Molokhia", "Hamam Mahshi", "Roz Bel Kholkhal"],
    image: "/images/dining/cairo-cuisine.jpg",
  },
  {
    region: "Upper Egypt",
    title: "Rich & Hearty Flavors",
    description: "Spiced stews and clay-oven specialties",
    dishes: ["Bamya", "Gebna Qadima", "Feteer Meshaltet"],
    image: "/images/dining/upper-egypt-cuisine.jpg",
  },
  {
    region: "Sinai",
    title: "Bedouin Traditions",
    description: "Desert-inspired dishes with unique herbs and spices",
    dishes: ["Zarb", "Bedouin Tea", "Rokak"],
    image: "/images/dining/sinai-cuisine.jpg",
  },
];

const desserts = [
  {
    id: "konafa",
    name: "Konafa",
    description: "Shredded phyllo dough with sweet cream or nuts",
    image: "/images/dining/konafa.jpg",
    season: "Ramadan favorite",
  },
  {
    id: "basbousa",
    name: "Basbousa",
    description: "Semolina cake soaked in sweet syrup",
    image: "/images/dining/basbousa.jpg",
    season: "Year-round",
  },
  {
    id: "om-ali",
    name: "Om Ali",
    description: "Egyptian bread pudding with milk and nuts",
    image: "/images/dining/om-ali.jpg",
    season: "Year-round",
  },
  {
    id: "zalabia",
    name: "Zalabia",
    description: "Fried dough balls soaked in syrup",
    image: "/images/dining/zalabia.jpg",
    season: "Ramadan special",
  },
];

const cafes = [
  {
    id: "el-fishawi",
    name: "El Fishawi",
    description: "Historic café in Khan el-Khalili, serving traditional Egyptian coffee and shisha",
    image: "/images/dining/el-fishawi.jpg",
    type: "Traditional",
    established: "1773",
  },
  {
    id: "beanos",
    name: "Beanos",
    description: "Modern café chain with great views and international coffee selection",
    image: "/images/dining/beanos.jpg",
    type: "Modern",
    established: "Contemporary",
  },
];

export default function DiningPage() {
  return (
    <div className="min-h-screen">
      <HeroBanner
        backgroundImage="/images/dining/hero.jpg"
        title="Savor the Flavors of Egypt"
        subtitle="From bustling street carts to elegant Nile-side restaurants — your culinary journey starts here."
        height="tall"
      />

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-16">
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-center">
          Egyptian cuisine is a tapestry of flavors woven through thousands of years of history. 
          From ancient recipes passed down through generations to modern fusion dishes, 
          discover the tastes that make Egypt a unique culinary destination.
        </p>
      </section>

      {/* Street Food Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Street Food & Local Eats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {streetFood.map((food) => (
              <Card key={food.id} className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={food.image}
                      alt={food.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{food.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{food.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{food.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fine Dining Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Fine Dining & Unique Experiences</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {fineDining.map((restaurant) => (
                <CarouselItem key={restaurant.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-64">
                        <Image
                          src={restaurant.image}
                          alt={restaurant.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <Badge className="mb-2">{restaurant.location}</Badge>
                          <h3 className="text-xl font-semibold text-white mb-1">{restaurant.name}</h3>
                          <p className="text-white/80 text-sm">{restaurant.description}</p>
                        </div>
                      </div>
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

      {/* Regional Flavors Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Regional Flavors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regionalCuisine.map((region) => (
              <Card key={region.region} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={region.image}
                      alt={region.region}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{region.title}</h3>
                    <p className="text-muted-foreground mb-4">{region.description}</p>
                    <div className="space-y-2">
                      {region.dishes.map((dish) => (
                        <Badge key={dish} variant="outline" className="mr-2">
                          {dish}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Desserts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Sweet Endings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {desserts.map((dessert) => (
              <Card key={dessert.id} className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={dessert.image}
                      alt={dessert.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{dessert.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{dessert.description}</p>
                    <Badge variant="secondary">{dessert.season}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cafés & Lounges Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Cafés & Lounges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cafes.map((cafe) => (
              <Card key={cafe.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={cafe.image}
                        alt={cafe.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3">{cafe.type}</Badge>
                      <h3 className="text-xl font-semibold mb-2">{cafe.name}</h3>
                      <p className="text-muted-foreground mb-4">{cafe.description}</p>
                      <div className="text-sm text-muted-foreground">
                        <Clock className="inline-block h-4 w-4 mr-1" />
                        Established {cafe.established}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Start Your Culinary Journey?
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Enter your location"
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <Button className="bg-primary">
                Find Restaurants Nearby
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="flex items-center gap-2">
                <ChefHat className="h-4 w-4" />
                Join a Cooking Class
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                Visit a Food Market
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 