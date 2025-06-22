"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

interface ChatMessage {
  id: string;
  type: "text" | "card" | "welcome" | "system" | "error";
  content: string;
  image?: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

interface ChatResponse {
  session_id: string;
  text: string;
  response_type: string;
  language: string;
  suggestions?: string[];
  debug_info?: any;
}

type ViewType = "chat" | "mytrip" | "settings" | "itinerary";
type TripType = "ancient-egypt" | "red-sea" | "desert-safari";

interface Props {
  config?: {
    apiUrl?: string;
    theme?: string;
    position?: string;
    language?: string;
  };
}

const EgyptTourismChatbot = ({ config }: Props) => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>("chat");
  const [selectedTrip, setSelectedTrip] = useState<TripType | null>(null);
  const [activeDay, setActiveDay] = useState(1);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const { data: session } = useSession();

  const apiUrl = config?.apiUrl || "http://localhost:5050";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAuthAction = (action: "login" | "signup") => {
    const returnUrl = encodeURIComponent(window.location.href);
    window.open(`/${action}?callbackUrl=${returnUrl}`, "_blank");
  };

  if (!mounted) {
    return null;
  }

  const tripData = {
    "ancient-egypt": {
      title: "Ancient Egypt Explorer",
      subtitle: "Pyramids, Temples & Pharaohs",
      days: 3,
      image:
        "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=450&h=300&fit=crop&auto=format",
    },
    "red-sea": {
      title: "Red Sea Adventure",
      subtitle: "Diving, Snorkeling & Beach Bliss",
      days: 3,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=450&h=300&fit=crop&auto=format",
    },
    "desert-safari": {
      title: "Desert Safari Adventure",
      subtitle: "Camping, Stargazing & Bedouin Culture",
      days: 3,
      image:
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=450&h=300&fit=crop&auto=format",
    },
  };

  const itineraryData = {
    "ancient-egypt": {
      title: "3-Day Ancient Egypt Explorer",
      subtitle:
        "Journey through 5,000 years of history visiting iconic pyramids, ancient temples, and world-class museums.",
      totalDays: 3,
      days: [
        {
          day: 1,
          description:
            "Start your journey with the iconic Giza Pyramids, explore the Great Sphinx, and enjoy a traditional Egyptian lunch with pyramid views.",
          activities: [
            {
              time: "Morning",
              title: "Great Pyramid of Khufu",
              description:
                "Explore the last surviving Wonder of the Ancient World. Bring water and comfortable shoes. Entry to pyramid chamber requires separate ticket.",
              image:
                "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&h=250&fit=crop&auto=format",
              type: "Historical Site",
              location: "Giza Plateau",
              duration: "2 hours",
            },
            {
              time: "Morning",
              title: "Pyramid of Khafre & Menkaure",
              description:
                "Visit the second and third pyramids with excellent photo opportunities. Best views from the panoramic viewpoint behind the complex.",
              image:
                "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&h=250&fit=crop&auto=format",
              type: "Historical Site",
              location: "Giza Plateau",
              duration: "1.5 hours",
            },
            {
              time: "Morning",
              title: "The Great Sphinx",
              description:
                "Marvel at the enigmatic guardian of the pyramids. The Sphinx Temple is included and worth exploring.",
              image:
                "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&h=250&fit=crop&auto=format",
              type: "Monument",
              location: "Giza Plateau",
              duration: "45 minutes",
            },
            {
              time: "Lunch",
              title: "Traditional Egyptian Lunch",
              description:
                "Authentic local cuisine with pyramid views. Try koshari, ful medames, and fresh bread.",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format",
              type: "Dining",
              location: "Local Restaurant",
              duration: "1 hour",
            },
            {
              time: "Afternoon",
              title: "Solar Boat Museum",
              description:
                "See the reconstructed solar boat of Pharaoh Khufu. Fascinating insight into ancient Egyptian burial practices.",
              image:
                "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&h=250&fit=crop&auto=format",
              type: "Museum",
              location: "Giza",
              duration: "1 hour",
            },
          ],
        },
        {
          day: 2,
          description:
            "Explore the Egyptian Museum's treasures, shop in Khan El Khalili bazaar, and visit historic Islamic Cairo sites.",
          activities: [
            {
              time: "Morning",
              title: "Egyptian Museum",
              description:
                "World's finest collection of ancient Egyptian artifacts. Don't miss Tutankhamun's treasures and the Royal Mummy Room.",
              image:
                "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&h=250&fit=crop&auto=format",
              type: "Museum",
              location: "Tahrir Square, Cairo",
              duration: "3 hours",
            },
            {
              time: "Lunch",
              title: "Lunch at Naguib Mahfouz Cafe",
              description:
                "Traditional atmosphere in the heart of Islamic Cairo. Try the mixed grill and mint tea.",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format",
              type: "Dining",
              location: "Khan El Khalili",
              duration: "1 hour",
            },
            {
              time: "Afternoon",
              title: "Khan El Khalili Bazaar",
              description:
                "Shop for authentic Egyptian souvenirs and crafts. Bargain is expected. Start at 30% of asking price.",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format",
              type: "Shopping",
              location: "Islamic Cairo",
              duration: "2 hours",
            },
            {
              time: "Afternoon",
              title: "Al-Azhar Mosque",
              description:
                "One of the oldest and most important mosques in Islam. Dress modestly. Remove shoes before entering.",
              image:
                "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&h=250&fit=crop&auto=format",
              type: "Religious Site",
              location: "Islamic Cairo",
              duration: "45 minutes",
            },
            {
              time: "Evening",
              title: "Sunset at Citadel of Saladin",
              description:
                "Panoramic views of Cairo and beautiful mosque architecture. Perfect for sunset photos of the city.",
              image:
                "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&h=250&fit=crop&auto=format",
              type: "Historical Site",
              location: "Citadel, Cairo",
              duration: "1.5 hours",
            },
          ],
        },
        {
          day: 3,
          description:
            "Visit ancient Saqqara and Memphis, explore the Step Pyramid, and discover the oldest stone pyramid in the world.",
          activities: [
            {
              time: "Morning",
              title: "Step Pyramid of Djoser",
              description:
                "Visit the world's oldest stone pyramid. This is the prototype for all Egyptian pyramids.",
              image:
                "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&h=250&fit=crop&auto=format",
              type: "Historical Site",
              location: "Saqqara",
              duration: "1.5 hours",
            },
            {
              time: "Morning",
              title: "Mastaba Tombs",
              description:
                "Explore decorated tombs of nobles with stunning wall art. Ti and Ptahhotep tombs have the best preserved reliefs.",
              image:
                "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&h=250&fit=crop&auto=format",
              type: "Historical Site",
              location: "Saqqara",
              duration: "1 hour",
            },
            {
              time: "Morning",
              title: "Memphis Open Air Museum",
              description:
                "Ancient capital of Egypt with colossal statues. See the massive statue of Ramesses II and ancient sphinxes.",
              image:
                "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&h=250&fit=crop&auto=format",
              type: "Archaeological Site",
              location: "Memphis",
              duration: "1 hour",
            },
            {
              time: "Lunch",
              title: "Lunch in Village",
              description:
                "Traditional meal with local family. Authentic experience of rural Egyptian hospitality.",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format",
              type: "Cultural Experience",
              location: "Local Village",
              duration: "1 hour",
            },
            {
              time: "Afternoon",
              title: "Dahshur Pyramids",
              description:
                "Visit the Bent and Red Pyramids. Less crowded than Giza with excellent photo opportunities.",
              image:
                "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&h=250&fit=crop&auto=format",
              type: "Historical Site",
              location: "Dahshur",
              duration: "2 hours",
            },
          ],
        },
      ],
    },
    "red-sea": {
      title: "3-Day Red Sea Adventure",
      subtitle:
        "Explore vibrant coral reefs, encounter marine life, and relax on pristine beaches in Hurghada.",
      totalDays: 3,
      days: [
        {
          day: 1,
          description:
            "Begin your underwater adventure with snorkeling, enjoy fresh seafood, and relax on white sandy beaches.",
          activities: [
            {
              time: "Morning",
              title: "Hotel Check-in & Briefing",
              description:
                "Settle in and receive diving/snorkeling orientation. Bring reef-safe sunscreen and underwater camera.",
              image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop&auto=format",
              type: "Accommodation",
              location: "Hurghada Resort",
              duration: "1 hour",
            },
            {
              time: "Morning",
              title: "Giftun Island Snorkeling",
              description:
                "Boat trip to pristine coral reefs. Two snorkeling stops with equipment provided.",
              image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop&auto=format",
              type: "Water Activity",
              location: "Giftun Island",
              duration: "4 hours",
            },
            {
              time: "Afternoon",
              title: "Beach Relaxation",
              description:
                "White sandy beaches and crystal-clear waters. Perfect for swimming and sunbathing.",
              image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop&auto=format",
              type: "Beach Activity",
              location: "Giftun Island",
              duration: "2 hours",
            },
            {
              time: "Evening",
              title: "Seafood Dinner",
              description:
                "Fresh catch of the day with sea views. Try the grilled red snapper and local shrimp.",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format",
              type: "Dining",
              location: "Beachfront Restaurant",
              duration: "1.5 hours",
            },
            {
              time: "Evening",
              title: "Marina Walk",
              description:
                "Evening stroll through Hurghada Marina. Great for shopping and people watching.",
              image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop&auto=format",
              type: "Leisure",
              location: "Hurghada Marina",
              duration: "1 hour",
            },
          ],
        },
        {
          day: 2,
          description:
            "Advanced diving experience with wreck exploration, dolphin encounters, and relaxing spa treatment.",
          activities: [
            {
              time: "Morning",
              title: "Dive Boat Departure",
              description:
                "Head to world-famous dive sites. Light breakfast provided on board.",
              image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop&auto=format",
              type: "Transportation",
              location: "Hurghada Marina",
              duration: "30 minutes",
            },
            {
              time: "Morning",
              title: "Shaab Abu Nuhas Wreck Dive",
              description:
                "Explore sunken ships and marine life. Famous for its historic shipwrecks and coral gardens.",
              image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop&auto=format",
              type: "Scuba Diving",
              location: "Red Sea",
              duration: "1 hour",
            },
            {
              time: "Morning",
              title: "Small Giftun Reef Dive",
              description:
                "Pristine coral formations and tropical fish. Excellent visibility and diverse marine life.",
              image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop&auto=format",
              type: "Scuba Diving",
              location: "Red Sea",
              duration: "1 hour",
            },
            {
              time: "Lunch",
              title: "Lunch on Boat",
              description:
                "Fresh seafood and Egyptian specialties. Relax between dives and share experiences.",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format",
              type: "Dining",
              location: "Dive Boat",
              duration: "1 hour",
            },
            {
              time: "Afternoon",
              title: "Dolphin House Snorkeling",
              description:
                "Chance to swim with wild dolphins. Respect the dolphins - observe but don't chase.",
              image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop&auto=format",
              type: "Wildlife Experience",
              location: "Sha'ab El Erg",
              duration: "1.5 hours",
            },
            {
              time: "Evening",
              title: "Traditional Hammam Spa",
              description:
                "Relaxing Turkish bath experience. Perfect way to unwind after a day of diving.",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format",
              type: "Wellness",
              location: "Local Spa",
              duration: "2 hours",
            },
          ],
        },
        {
          day: 3,
          description:
            "Desert safari adventure with Bedouin village visit, camel riding, and stunning sunset views.",
          activities: [
            {
              time: "Morning",
              title: "Desert Safari Departure",
              description:
                "Adventure into the Eastern Desert. Bring hat, sunglasses, and closed shoes.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Transportation",
              location: "Hotel Pickup",
              duration: "30 minutes",
            },
            {
              time: "Morning",
              title: "Bedouin Village Visit",
              description:
                "Experience traditional desert culture. Learn about traditional crafts and lifestyle.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Cultural Experience",
              location: "Bedouin Village",
              duration: "2 hours",
            },
            {
              time: "Morning",
              title: "Camel Riding",
              description:
                "Traditional desert transportation. Hold tight and enjoy the swaying motion.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Adventure Activity",
              location: "Desert",
              duration: "1 hour",
            },
            {
              time: "Lunch",
              title: "Traditional Bedouin Lunch",
              description:
                "Authentic desert cuisine. Try mansaf and fresh flatbread cooked in sand ovens.",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format",
              type: "Dining",
              location: "Bedouin Camp",
              duration: "1 hour",
            },
            {
              time: "Afternoon",
              title: "Quad Biking Adventure",
              description:
                "Explore desert dunes and landscapes. Follow the guide and wear provided safety gear.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Adventure Activity",
              location: "Desert",
              duration: "1.5 hours",
            },
            {
              time: "Evening",
              title: "Sunset Views & Tea",
              description:
                "Watch sunset over the Red Sea mountains. Magical photo opportunities as the sun sets.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Scenic Experience",
              location: "Desert Viewpoint",
              duration: "1 hour",
            },
          ],
        },
      ],
    },
    "desert-safari": {
      title: "3-Day Desert Safari Adventure",
      subtitle:
        "Experience the magic of Egypt's deserts with camping under the stars, thrilling adventures, and authentic Bedouin culture.",
      totalDays: 3,
      days: [
        {
          day: 1,
          description:
            "Journey into the Western Desert, meet Bedouin guides, and experience your first taste of desert life with camel trekking and traditional meals.",
          activities: [
            {
              time: "Morning",
              title: "Desert Safari Departure",
              description:
                "Pick up from Cairo and drive to Bahariya Oasis. Scenic journey through desert landscapes.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Transportation",
              location: "Cairo to Bahariya Oasis",
              duration: "4 hours",
            },
            {
              time: "Morning",
              title: "Bahariya Oasis Exploration",
              description:
                "Visit natural hot springs and palm groves. Learn about oasis life and agriculture.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Nature Experience",
              location: "Bahariya Oasis",
              duration: "2 hours",
            },
            {
              time: "Lunch",
              title: "Traditional Bedouin Lunch",
              description:
                "Authentic desert cuisine prepared by local Bedouins. Fresh bread, grilled meats, and herbal tea.",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format",
              type: "Dining",
              location: "Bedouin Camp",
              duration: "1 hour",
            },
            {
              time: "Afternoon",
              title: "Camel Trekking Adventure",
              description:
                "Experience traditional desert transport. Gentle ride through sand dunes and rocky formations.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Adventure Activity",
              location: "Western Desert",
              duration: "3 hours",
            },
            {
              time: "Evening",
              title: "Desert Camp Setup & Dinner",
              description:
                "Help set up traditional Bedouin tents. Enjoy dinner around campfire with live music.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Cultural Experience",
              location: "Desert Camp",
              duration: "3 hours",
            },
            {
              time: "Evening",
              title: "Stargazing Experience",
              description:
                "Marvel at the clearest night sky you'll ever see. Learn constellations from Bedouin guides.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Stargazing",
              location: "Desert Camp",
              duration: "2 hours",
            },
          ],
        },
        {
          day: 2,
          description:
            "Experience thrilling desert adventures with sandboarding, dune bashing, and discover the incredible White Desert formations.",
          activities: [
            {
              time: "Morning",
              title: "Sunrise & Desert Breakfast",
              description:
                "Wake up to stunning desert sunrise. Traditional Bedouin breakfast with fresh bread and honey.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Dining",
              location: "Desert Camp",
              duration: "1 hour",
            },
            {
              time: "Morning",
              title: "4WD Dune Bashing",
              description:
                "Thrilling ride over sand dunes in specialized desert vehicles. Hold on tight for the adventure!",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Adventure Activity",
              location: "Western Desert",
              duration: "2 hours",
            },
            {
              time: "Morning",
              title: "Sandboarding Experience",
              description:
                "Surf the sand dunes! Learn to sandboard down massive dunes - like snowboarding but warmer.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Adventure Activity",
              location: "Sand Dunes",
              duration: "2 hours",
            },
            {
              time: "Lunch",
              title: "Picnic Lunch in Oasis",
              description:
                "Refreshing break at a natural oasis. Swimming in freshwater spring surrounded by palm trees.",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format",
              type: "Dining",
              location: "Natural Oasis",
              duration: "2 hours",
            },
            {
              time: "Afternoon",
              title: "White Desert National Park",
              description:
                "Explore surreal chalk rock formations. Nature's sculptures in the middle of the desert.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Nature Experience",
              location: "White Desert",
              duration: "3 hours",
            },
            {
              time: "Evening",
              title: "Traditional Bedouin Entertainment",
              description:
                "Evening of storytelling, traditional music, and dance around the campfire.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Cultural Experience",
              location: "Desert Camp",
              duration: "3 hours",
            },
          ],
        },
        {
          day: 3,
          description:
            "Final day of desert adventures with fossil hunting, more Bedouin cultural experiences, and a spectacular return journey through the desert.",
          activities: [
            {
              time: "Morning",
              title: "Fossil Hunting Adventure",
              description:
                "Search for ancient marine fossils in the desert. Discover seashells and coral from when this was ocean floor.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Adventure Activity",
              location: "Fossil Valley",
              duration: "2 hours",
            },
            {
              time: "Morning",
              title: "Black Desert Exploration",
              description:
                "Visit the dramatic Black Desert with its volcanic landscape and dark rock formations.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Nature Experience",
              location: "Black Desert",
              duration: "2 hours",
            },
            {
              time: "Morning",
              title: "Crystal Mountain Visit",
              description:
                "Marvel at the sparkling Crystal Mountain - a natural formation covered in quartz crystals.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Nature Experience",
              location: "Crystal Mountain",
              duration: "1 hour",
            },
            {
              time: "Lunch",
              title: "Final Bedouin Feast",
              description:
                "Celebration lunch with traditional Bedouin dishes. Learn to make bread in sand ovens.",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format",
              type: "Cultural Experience",
              location: "Bedouin Settlement",
              duration: "2 hours",
            },
            {
              time: "Afternoon",
              title: "Desert Photography Workshop",
              description:
                "Capture perfect desert shots with expert guidance. Learn landscape photography techniques.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Workshop",
              location: "Various Desert Locations",
              duration: "2 hours",
            },
            {
              time: "Afternoon",
              title: "Return Journey to Cairo",
              description:
                "Scenic drive back to Cairo with stops at viewpoints. Share memories and exchange contacts.",
              image:
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=250&fit=crop&auto=format",
              type: "Transportation",
              location: "Desert to Cairo",
              duration: "4 hours",
            },
            {
              time: "Evening",
              title: "Farewell Dinner in Cairo",
              description:
                "Celebratory dinner back in Cairo. Share photos and stories from your desert adventure.",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format",
              type: "Dining",
              location: "Cairo Restaurant",
              duration: "2 hours",
            },
          ],
        },
      ],
    },
  };

  const sendMessageToAPI = async (message: string): Promise<ChatResponse> => {
    const response = await fetch(`${apiUrl}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
        session_id: sessionId,
        language: config?.language || "en",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "text",
      content: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await sendMessageToAPI(inputMessage);

      if (response.session_id && !sessionId) {
        setSessionId(response.session_id);
      }

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "text",
        content: response.text,
        isBot: true,
        timestamp: new Date(),
        suggestions: response.suggestions,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "error",
        content:
          "Sorry, I'm having trouble connecting. Please try again later.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardClick = (text: string) => {
    setInputMessage(text);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleTripClick = (tripId: TripType) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedTrip(tripId);
      setCurrentView("itinerary");
      setActiveDay(1);
      setExpandedDay(1);
      setIsLoading(false);
    }, 1500);
  };

  const handleBackClick = () => {
    if (currentView === "itinerary") {
      setCurrentView("mytrip");
      setSelectedTrip(null);
    } else if (currentView === "settings") {
      setCurrentView("chat");
    }
  };

  return (
    <div
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontWeight: "400",
      }}
    >
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen ? (
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-[480px] h-[700px] max-h-[calc(100vh-6rem)] flex flex-col overflow-hidden">
            {/* Header with fully visible rounded top */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white rounded-t-3xl">
              <div className="flex items-center gap-1">
                {currentView === "itinerary" ? (
                  <button
                    onClick={handleBackClick}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                ) : currentView === "settings" ? (
                  <button
                    onClick={handleBackClick}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentView("settings")}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {currentView === "chat" || currentView === "mytrip" ? (
                <div className="flex bg-gray-100 rounded-full p-1">
                  <button
                    onClick={() => setCurrentView("chat")}
                    className={`px-6 py-2 rounded-full text-sm font-normal transition-colors ${
                      currentView === "chat"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Chat
                  </button>
                  <button
                    onClick={() => setCurrentView("mytrip")}
                    className={`px-6 py-2 rounded-full text-sm font-normal transition-colors ${
                      currentView === "mytrip"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    My Trip
                  </button>
                </div>
              ) : null}

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto">
              {currentView === "chat" ? (
                <div className="p-6 space-y-6">
                  {/* Welcome Message */}
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-normal text-[#DC143C]">
                      Ahlan wa Sahlan!
                    </h2>
                    <p className="text-base text-gray-600 leading-relaxed px-4 font-normal">
                      I'm Visit Egypt's travel expert. Use the prompts below for
                      quick answers or ask me anything about Egypt!
                    </p>
                  </div>

                  {/* Authentication Button/Welcome - Only show if no messages */}
                  {messages.length === 0 && (
                    <div className="flex justify-center pt-2">
                      {!session ? (
                        <button
                          onClick={() => handleAuthAction("login")}
                          className="text-[#DC143C] border border-[#DC143C] hover:bg-[#DC143C] hover:text-white px-6 py-2 text-sm font-normal rounded-full transition-colors flex items-center space-x-2"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          <span>Log in to view your existing trip</span>
                        </button>
                      ) : (
                        <div className="flex items-center space-x-2 text-[#DC143C]">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-medium">
                            Welcome back,{" "}
                            {session.user?.name ||
                              session.user?.email?.split("@")[0]}
                            !
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Main Featured Card - Only show if no messages */}
                  {messages.length === 0 && (
                    <div
                      className="relative rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() =>
                        handleCardClick("Best Nile cruise experiences?")
                      }
                    >
                      <img
                        src="/images/nile-cruise.jpg"
                        alt="Traditional felucca boats sailing on the Nile River at sunset with golden light"
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=450&h=280&fit=crop&auto=format&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <p className="text-white font-medium text-lg">
                          Best Nile cruise experiences?
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Suggestion Cards - Only show if no messages */}
                  {messages.length === 0 && (
                    <div className="grid grid-cols-2 gap-4">
                      <div
                        className="bg-gray-50 rounded-xl p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={() => handleCardClick("Best shopping offers")}
                      >
                        <img
                          src="/images/shopping-bazaar.jpg"
                          alt="Vibrant Khan El Khalili bazaar with colorful spices, textiles and traditional crafts"
                          className="w-full h-24 object-cover rounded-lg mb-3"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=180&h=120&fit=crop&auto=format&q=80";
                          }}
                        />
                        <p className="text-sm font-normal text-gray-800">
                          Best Bazaars in Cairo
                        </p>
                      </div>

                      <div
                        className="bg-gray-50 rounded-xl p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={() =>
                          handleCardClick("Find family activities")
                        }
                      >
                        <img
                          src="/images/pyramids.jpg"
                          alt="The Great Pyramids of Giza and the Sphinx under dramatic sky"
                          className="w-full h-24 object-cover rounded-lg mb-3"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=180&h=120&fit=crop&auto=format&q=80";
                          }}
                        />
                        <p className="text-sm font-normal text-gray-800">
                          The pyramid of Giza
                        </p>
                      </div>
                    </div>
                  )}

                  {/* AI Assistant Card - Only show if no messages */}
                  {messages.length === 0 && (
                    <div
                      className="relative rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() =>
                        handleCardClick("Discover hidden gems with AI")
                      }
                    >
                      <div className="bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 h-32 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                        <div className="flex items-center gap-4 z-10">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                              <div className="w-4 h-4 bg-gradient-to-br from-amber-500 to-red-500 rounded-full"></div>
                            </div>
                          </div>
                          <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-orange-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-4">
                        <p className="text-white font-medium text-base">
                          Discover hidden gems with AI
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Chat Messages */}
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.isBot ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isBot
                            ? message.type === "error"
                              ? "bg-red-100 text-red-800 border border-red-200"
                              : "bg-gray-100 text-gray-900"
                            : "bg-[#DC143C] text-white"
                        }`}
                      >
                        <div className="text-sm whitespace-pre-wrap">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Loading indicator */}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : currentView === "mytrip" ? (
                <div className="p-6 space-y-6">
                  {/* My Trip Content */}
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-normal text-[#DC143C] leading-tight">
                      Plan your next
                      <br />
                      Egyptian adventure
                    </h2>
                    {!session ? (
                      <button
                        onClick={() => handleAuthAction("login")}
                        className="text-[#DC143C] border border-[#DC143C] hover:bg-[#DC143C] hover:text-white px-6 py-2 text-sm font-normal rounded-full transition-colors flex items-center space-x-2 mx-auto"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>Log in to view trip</span>
                      </button>
                    ) : (
                      <div className="flex items-center justify-center space-x-2 text-[#DC143C]">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">
                          Welcome back,{" "}
                          {session.user?.name ||
                            session.user?.email?.split("@")[0]}
                          !
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Trip Cards */}
                  <div className="space-y-4">
                    {Object.entries(tripData).map(([tripId, trip]) => (
                      <div
                        key={tripId}
                        onClick={() => handleTripClick(tripId as TripType)}
                        className="relative rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow border border-gray-100"
                      >
                        <img
                          src={trip.image}
                          alt={trip.title}
                          className="w-full h-48 object-cover"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=450&h=280&fit=crop&auto=format&q=80";
                          }}
                        />
                        <div className="p-4 bg-white">
                          <h3 className="text-lg font-medium text-gray-800 mb-1">
                            {trip.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {trip.subtitle}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span>{trip.days} days</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentView("chat")}
                    className="w-full bg-[#B8860B] hover:bg-[#A0750A] text-white py-4 rounded-xl font-normal text-base transition-colors"
                  >
                    Take me to the chat
                  </button>
                </div>
              ) : currentView === "settings" ? (
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="flex items-center gap-4 mb-8">
                    <h1 className="text-2xl font-normal text-gray-800">
                      Settings and support
                    </h1>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl cursor-pointer">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 mb-1">
                          Clear all history
                        </h3>
                        <p className="text-sm text-gray-600">
                          This will delete your chat history, as well as your
                          saved trips.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl cursor-pointer">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 mb-1">
                          Send us a message
                        </h3>
                        <p className="text-sm text-gray-600">
                          Please fill in our contact form, and we'll get back to
                          you as soon as possible.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl cursor-pointer">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 mb-1">
                          Talk to a real person
                        </h3>
                        <p className="text-sm text-gray-600">
                          Call us between 8 am - 17 pm on +20 2 2574 9999 if
                          you're outside Egypt.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl cursor-pointer">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 mb-1">
                          Review our terms
                        </h3>
                        <p className="text-sm text-gray-600">
                          See our privacy policy and T&Cs
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 text-center">
                    <span className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-normal">
                      v1.0.0
                    </span>
                  </div>
                </div>
              ) : currentView === "itinerary" ? (
                <div className="flex-1 overflow-y-auto">
                  {isLoading ? (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-12 h-12 border-4 border-[#DC143C] border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <p className="text-gray-600 font-normal">
                          Loading your itinerary...
                        </p>
                      </div>
                    </div>
                  ) : selectedTrip && itineraryData[selectedTrip] ? (
                    <div>
                      {/* Header with Title */}
                      <div className="p-6 text-center border-b border-gray-200">
                        <h1 className="text-2xl font-normal text-[#0066CC] mb-2">
                          {itineraryData[selectedTrip].title}
                        </h1>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {itineraryData[selectedTrip].subtitle}
                        </p>
                      </div>

                      {/* Day Navigation Tabs */}
                      <div className="px-6 py-4 border-b border-gray-200">
                        <div className="flex gap-1">
                          {Array.from(
                            { length: itineraryData[selectedTrip].totalDays },
                            (_, i) => i + 1
                          ).map((day) => (
                            <button
                              key={day}
                              onClick={() => setActiveDay(day)}
                              className={`px-4 py-2 text-sm font-normal transition-colors ${
                                activeDay === day
                                  ? "text-[#0066CC] border-b-2 border-[#0066CC]"
                                  : "text-gray-600 hover:text-gray-800"
                              }`}
                            >
                              Day {day}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Day Content */}
                      <div className="p-6 space-y-6">
                        {itineraryData[selectedTrip].days
                          .filter((dayData) => dayData.day === activeDay)
                          .map((dayData) => (
                            <div key={dayData.day} className="space-y-6">
                              {/* Expandable Day Section */}
                              <div className="border border-gray-200 rounded-xl overflow-hidden">
                                <button
                                  onClick={() =>
                                    setExpandedDay(
                                      expandedDay === dayData.day
                                        ? null
                                        : dayData.day
                                    )
                                  }
                                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 text-left"
                                >
                                  <span className="font-medium text-gray-800">
                                    Day {dayData.day}
                                  </span>
                                  {expandedDay === dayData.day ? (
                                    <svg
                                      className="w-5 h-5 text-gray-500"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 15l7-7 7 7"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      className="w-5 h-5 text-gray-500"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                      />
                                    </svg>
                                  )}
                                </button>

                                {expandedDay === dayData.day && (
                                  <div className="border-t border-gray-200 p-4">
                                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                      {dayData.description}
                                    </p>

                                    {/* Individual Activity Cards */}
                                    <div className="space-y-8">
                                      {dayData.activities.map(
                                        (activity, index) => (
                                          <div
                                            key={index}
                                            className="space-y-4"
                                          >
                                            <h4 className="font-medium text-gray-800 text-lg">
                                              {activity.time}
                                            </h4>

                                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                              <div className="relative">
                                                <img
                                                  src={activity.image}
                                                  alt={activity.title}
                                                  className="w-full h-48 object-cover"
                                                  onError={(e) => {
                                                    e.currentTarget.src =
                                                      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=250&fit=crop&auto=format";
                                                  }}
                                                />
                                                <div className="absolute top-4 right-4">
                                                  <button className="bg-white text-gray-800 hover:bg-gray-100 px-3 py-1 text-sm font-normal rounded-lg transition-colors flex items-center">
                                                    <svg
                                                      className="w-4 h-4 mr-1"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      viewBox="0 0 24 24"
                                                    >
                                                      <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                      />
                                                      <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                      />
                                                    </svg>
                                                    Map
                                                  </button>
                                                </div>
                                                {activity.dates && (
                                                  <div className="absolute top-4 left-4 flex gap-2">
                                                    {activity.dates.map(
                                                      (date, dateIndex) => (
                                                        <div
                                                          key={dateIndex}
                                                          className="bg-teal-600 text-white px-2 py-1 rounded text-xs text-center leading-tight"
                                                        >
                                                          {date
                                                            .split("\n")
                                                            .map(
                                                              (
                                                                line,
                                                                lineIndex
                                                              ) => (
                                                                <div
                                                                  key={
                                                                    lineIndex
                                                                  }
                                                                >
                                                                  {line}
                                                                </div>
                                                              )
                                                            )}
                                                        </div>
                                                      )
                                                    )}
                                                  </div>
                                                )}
                                              </div>

                                              <div className="p-4 space-y-3">
                                                <div className="flex items-center gap-2">
                                                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-normal">
                                                    {activity.type}
                                                  </span>
                                                </div>

                                                <h3 className="text-lg font-medium text-gray-800">
                                                  {activity.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                  {activity.description}
                                                </p>

                                                {activity.duration && (
                                                  <p className="text-sm text-gray-500">
                                                    {activity.duration}
                                                  </p>
                                                )}

                                                <div className="flex items-center justify-between pt-2">
                                                  <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <svg
                                                      className="w-4 h-4"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      viewBox="0 0 24 24"
                                                    >
                                                      <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                      />
                                                      <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                      />
                                                    </svg>
                                                    <span>
                                                      {activity.location}
                                                    </span>
                                                  </div>
                                                  <div className="flex gap-2">
                                                    {activity.time ===
                                                      "Lunch" ||
                                                    activity.time ===
                                                      "Evening" ? (
                                                      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-normal rounded-lg transition-colors">
                                                        Book
                                                      </button>
                                                    ) : null}
                                                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 text-sm font-normal rounded-lg transition-colors">
                                                      Replace
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* Feedback Buttons */}
                              <div className="flex items-center justify-center gap-4 pt-4">
                                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                  <svg
                                    className="w-5 h-5 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V18m-7-8a2 2 0 01-2-2V6a2 2 0 012-2h2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                    />
                                  </svg>
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                  <svg
                                    className="w-5 h-5 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06L17 4m-7 10v2m-7-10a2 2 0 012-2h2.343m0 0L10 2l1.657 1.657a2 2 0 000 2.828l-8.486 8.485"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>

            {/* Input Area - Only show in chat view */}
            {currentView === "chat" && (
              <div className="p-6 border-t border-gray-200">
                <div className="flex items-center gap-3 bg-gray-50 rounded-full px-5 py-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Start a conversation..."
                    className="flex-1 border-none bg-transparent focus:outline-none placeholder:text-gray-500 text-base font-normal"
                    disabled={isLoading}
                  />
                  <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputMessage.trim()}
                    className="w-10 h-10 bg-[#DC143C] rounded-full flex items-center justify-center disabled:opacity-50"
                  >
                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-[#DC143C]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <p className="text-sm text-gray-500 text-center mt-3 font-normal">
                  AI assistance in use. Check official travel sources
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Collapsed widget with milky background and circular Egypt banner */
          <div
            className="bg-gray-50/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-3 cursor-pointer hover:shadow-xl transition-shadow w-64"
            onClick={() => setIsOpen(true)}
          >
            <div className="flex items-center gap-3">
              {/* Circular Egypt Banner */}
              <div className="w-12 h-12 bg-[#DC143C] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-medium text-sm">EGYPT</span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 mb-1">
                  Need some help?
                </p>
                <p className="text-xs text-gray-600 font-normal">Let's chat</p>
              </div>

              {/* Online indicator */}
              <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EgyptTourismChatbot;
