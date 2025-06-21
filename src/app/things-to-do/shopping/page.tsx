"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useTranslation } from '@/hooks/use-translation';

export default function ShoppingPage() {
  const { t } = useTranslation();
  
  const malls = [
    {
      id: "cityStars",
      name: t('shopping.malls.cityStars.name'),
      location: t('shopping.malls.cityStars.location'),
      description: t('shopping.malls.cityStars.description'),
      image: "/images/mypics/City Stars mall.jpeg",
      coordinates: "30.07374999811951, 31.347962931966112"
    },
    {
      id: "mallOfEgypt", 
      name: t('shopping.malls.mallOfEgypt.name'),
      location: t('shopping.malls.mallOfEgypt.location'),
      description: t('shopping.malls.mallOfEgypt.description'),
      image: "/images/mypics/mm.jpeg",
      coordinates: "Mall of Egypt, El Wahat Rd, First 6th of October, Giza Governorate 12573"
    },
    {
      id: "cairoFestivalCity",
      name: t('shopping.malls.cairoFestivalCity.name'),
      location: t('shopping.malls.cairoFestivalCity.location'),
      description: t('shopping.malls.cairoFestivalCity.description'),
      image: "/images/mypics/cfc.jpeg",
      coordinates: "Cairo Festival City, Nasr City, Cairo Governorate"
    },
    {
      id: "cityCenter",
      name: t('shopping.malls.cityCenter.name'),
      location: t('shopping.malls.cityCenter.location'),
      description: t('shopping.malls.cityCenter.description'),
      image: "/images/mypics/cent.jpeg",
      coordinates: "City Centre Almaza, Passage Inside Almaza Airport, Sheraton Al Matar, El Nozha, Cairo Governorate 4472001"
    },
    {
      id: "arkanPlaza",
      name: t('shopping.malls.arkanPlaza.name'),
      location: t('shopping.malls.arkanPlaza.location'),
      description: t('shopping.malls.arkanPlaza.description'),
      image: "/images/mypics/arkane.jpeg",
      coordinates: "Arkan Plaza, El-Bostan, First Al Sheikh Zayed, Giza Governorate 3242304"
    }
  ];

  const openGoogleMaps = (coordinates: string, mallName: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates}`;
    window.open(url, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{t('shopping.title')}</h1>
      <p className="text-lg text-center mb-4 max-w-3xl mx-auto">
        {t('shopping.subtitle')}
      </p>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        {t('shopping.description')}
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
              <p className="text-sm text-blue-600 mt-2">{t('shopping.clickToView')}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 