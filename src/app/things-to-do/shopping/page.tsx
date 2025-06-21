"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const malls = [
  {
    name: "City Stars",
    location: "Nasr City, Cairo",
    description: "One of the largest shopping malls in Egypt, featuring over 650 stores, restaurants, and entertainment venues.",
    image: "/images/mypics/City Stars mall.jpeg",
    coordinates: "30.07374999811951, 31.347962931966112" // City Stars coordinates
  },
  {
    name: "Mall of Egypt",
    location: "6th of October City, Giza",
    description: "A modern shopping destination with over 400 stores, an indoor ski slope, and various entertainment options.",
    image: "/images/mypics/mm.jpeg",
    coordinates: "Mall of Egypt, El Wahat Rd, First 6th of October, Giza Governorate 12573" // Mall of Egypt coordinates
  },
  {
    name: "Cairo Festival City",
    location: "New Cairo",
    description: "A premium shopping experience with luxury brands, restaurants, and a beautiful waterfront promenade.",
    image: "/images/mypics/cfc.jpeg",
    coordinates: "Cairo Festival City, Nasr City, Cairo Governorate" // Cairo Festival City coordinates
  },
  {
    name: "city center almaza",
    location: "Sheraton, Cairo",
    description: "A popular shopping destination in Maadi featuring international brands and a variety of dining options.",
    image: "/images/mypics/cent.jpeg",
    coordinates: "City Centre Almaza, Passage Inside Almaza Airport, Sheraton Al Matar, El Nozha, Cairo Governorate 4472001" // Sun City Mall coordinates
  },
  {
    name: "Arkan Plaza",
    location: "Sheikh Zayed City",
    description: "A modern shopping complex with a mix of retail stores, restaurants, and entertainment facilities.",
    image: "/images/mypics/arkane.jpeg",
    coordinates: "Arkan Plaza, El-Bostan, First Al Sheikh Zayed, Giza Governorate 3242304" // Arkan Plaza coordinates
  }
];

export default function ShoppingPage() {
  const openGoogleMaps = (coordinates: string, mallName: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates}`;
    window.open(url, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Shopping in Egypt</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        Discover the best shopping destinations in Egypt, from luxury malls to traditional markets.
        Here are some of the most famous shopping malls you can visit during your stay.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {malls.map((mall) => (
          <Card 
            key={mall.name} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => openGoogleMaps(mall.coordinates, mall.name)}
          >
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <img
                src={mall.image}
                alt={mall.name}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <CardTitle>{mall.name}</CardTitle>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" />
                <CardDescription>{mall.location}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{mall.description}</p>
              <p className="text-sm text-blue-600 mt-2">Click to view on Google Maps</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 