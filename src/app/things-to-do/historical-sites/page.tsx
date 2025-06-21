"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Ticket, Info, Landmark, Building2, Castle } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from '@/hooks/use-translation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const historicalSites = [
  {
    name: "Karnak Temple",
    location: "Luxor",
    description: "The largest religious building ever constructed, featuring the Great Hypostyle Hall with 134 massive columns.",
    image: "/images/karnak-temple.jpg",
    coordinates: "25.7188,32.6575",
    period: "New Kingdom",
    openingHours: "6:00 AM - 5:30 PM",
    entranceFee: "200 EGP",
    region: "Upper Egypt"
  },
  {
    name: "Temple of Hatshepsut",
    location: "Luxor",
    description: "A stunning mortuary temple built into the cliffs of Deir el-Bahari, dedicated to the female pharaoh Hatshepsut.",
    image: "/images/hatshepsut-temple.jpg",
    coordinates: "25.7381,32.6067",
    period: "New Kingdom",
    openingHours: "6:00 AM - 5:00 PM",
    entranceFee: "100 EGP",
    region: "Upper Egypt"
  },
  {
    name: "Philae Temple",
    location: "Aswan",
    description: "A beautiful island temple dedicated to the goddess Isis, relocated to Agilkia Island after the construction of the Aswan High Dam.",
    image: "/images/philae-temple.jpg",
    coordinates: "24.0250,32.8833",
    period: "Ptolemaic",
    openingHours: "7:00 AM - 4:00 PM",
    entranceFee: "150 EGP",
    region: "Upper Egypt"
  },
  {
    name: "Saqqara Necropolis",
    location: "Giza",
    description: "Home to the Step Pyramid of Djoser, the oldest stone pyramid in Egypt, and numerous other tombs and temples.",
    image: "/images/saqqara.jpg",
    coordinates: "29.8711,31.2164",
    period: "Old Kingdom",
    openingHours: "8:00 AM - 4:00 PM",
    entranceFee: "180 EGP",
    region: "Cairo"
  },
  {
    name: "Temple of Edfu",
    location: "Edfu",
    description: "One of the best-preserved temples in Egypt, dedicated to the falcon god Horus.",
    image: "/images/edfu-temple.jpg",
    coordinates: "24.9781,32.8739",
    period: "Ptolemaic",
    openingHours: "7:00 AM - 4:00 PM",
    entranceFee: "140 EGP",
    region: "Upper Egypt"
  },
  {
    name: "Valley of the Kings",
    location: "Luxor", 
    description: "The burial place of Egypt's New Kingdom pharaohs, including Tutankhamun's tomb.",
    image: "/images/valley-of-kings.jpg",
    coordinates: "25.7403,32.6014",
    period: "New Kingdom",
    openingHours: "6:00 AM - 5:00 PM",
    entranceFee: "240 EGP",
    region: "Upper Egypt"
  },
  {
    name: "Citadel of Saladin",
    location: "Cairo",
    description: "A medieval Islamic fortification with the stunning Muhammad Ali Mosque and panoramic views of Cairo.",
    image: "/images/citadel.jpg",
    coordinates: "30.0294,31.2614",
    period: "Islamic",
    openingHours: "8:00 AM - 4:00 PM",
    entranceFee: "180 EGP",
    region: "Cairo"
  }
];

const historicalPeriods = [
  {
    name: "Old Kingdom",
    period: "2686-2181 BCE",
    description: "The age of pyramid building, including the Great Pyramids of Giza and the Step Pyramid of Djoser.",
    icon: Building2
  },
  {
    name: "New Kingdom",
    period: "1550-1070 BCE",
    description: "The golden age of Egyptian power, featuring the Valley of the Kings and the temples of Luxor and Karnak.",
    icon: Landmark
  },
  {
    name: "Ptolemaic Period",
    period: "332-30 BCE",
    description: "Greek and Roman influence on Egyptian architecture, including the temples of Edfu and Philae.",
    icon: Castle
  }
];

const travelTips = [
  {
    title: "Best Time to Visit",
    description: "October to April offers the most comfortable temperatures for exploring historical sites. Summer months can be extremely hot, especially in Luxor and Aswan.",
    icon: Calendar
  },
  {
    title: "Opening Hours",
    description: "Most sites open early (6-8 AM) and close by 5 PM. Some sites have different hours during Ramadan. Check specific sites for current schedules.",
    icon: Clock
  },
  {
    title: "Entrance Fees",
    description: "Fees vary by site and can change. Many sites offer student discounts with valid ID. Consider purchasing a Luxor Pass for multiple sites.",
    icon: Ticket
  },
  {
    title: "Guided Tours",
    description: "Consider hiring a licensed guide for deeper insights into the history and architecture. Many sites offer audio guides in multiple languages.",
    icon: Info
  }
];

export default function HistoricalSites() {
  const { t } = useTranslation()

  const openGoogleMaps = (coordinates: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates}`;
    window.open(url, '_blank');
  };

  const sites = [
    {
      id: 'ancient',
      title: t('historicalSites.ancient.title'),
      description: t('historicalSites.ancient.description'),
      image: '/images/mypics/pyramidsZoomOut.jpeg',
      link: '/things-to-do/historical-sites/ancient-egypt'
    },
    {
      id: 'islamic',
      title: t('historicalSites.islamic.title'),
      description: t('historicalSites.islamic.description'),
      image: '/images/mypics/coo-mosc.jpeg',
      link: '/things-to-do/historical-sites/islamic-heritage'
    },
    {
      id: 'coptic',
      title: t('historicalSites.coptic.title'),
      description: t('historicalSites.coptic.description'),
      image: '/images/mypics/coptic.jpeg',
      link: '/things-to-do/historical-sites/coptic-sites'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full min-w-full object-contain bg-gold"
          poster="/images/mypics/pyramids_bttswr.jpeg"
        >
          <source src="/images/mypics/4205790-uhd_2880_2160_30fps.mp4" type="video/mp4" />
          {/* Fallback Image */}
          <Image
            src="/images/mypics/pyramids_bttswr.jpeg"
            alt={t('historicalSites.title')}
            fill
            className="object-cover"
            priority
          />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              {t('historicalSites.title')}
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl">
              {t('historicalSites.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Sites Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sites.map((site) => (
            <Link key={site.id} href={site.link}>
              <Card className="h-full overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-48 w-full">
                  <Image
                    src={site.image}
                    alt={site.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{site.title}</CardTitle>
                  <CardDescription>{site.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    {t('common.explore')}
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function SiteCard({ site, onMapClick }: { site: any; onMapClick: (coordinates: string) => void }) {
  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onMapClick(site.coordinates)}
    >
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <Image
          src={site.image}
          alt={site.name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{site.name}</CardTitle>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-1" />
          <CardDescription>{site.location}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{site.description}</p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{site.openingHours}</span>
          </div>
          <div className="flex items-center">
            <Ticket className="w-4 h-4 mr-2" />
            <span>{site.entranceFee}</span>
          </div>
          <div className="flex items-center">
            <Landmark className="w-4 h-4 mr-2" />
            <span>{site.period}</span>
          </div>
        </div>
        <p className="text-sm text-blue-600 mt-4">Click to view on Google Maps</p>
      </CardContent>
    </Card>
  );
} 