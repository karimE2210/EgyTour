"use client";

import { Palette, Clapperboard, Music, Sprout, Hand, Users, Drama, MapPin, Utensils, ArrowRight } from 'lucide-react';
import Image from "next/image";
import { MusicPlayer } from '@/components/music-player';
import SoundWave from '@/components/ui/sound-wave';
import { ReactNode } from 'react';
import Link from 'next/link';

// A reusable card component for consistent section styling
const ArtCard = ({ icon, title, children }: { icon: ReactNode, title: string, children: ReactNode }) => (
  <div className="bg-stone-50/60 dark:bg-stone-900/60 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-black/5 dark:border-white/5">
    <div className="flex items-center gap-4 mb-4">
      <div className="text-amber-800 dark:text-amber-500">{icon}</div>
      <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-200">{title}</h2>
    </div>
    <div className="prose prose-stone dark:prose-invert max-w-none">
      {children}
    </div>
  </div>
);

export default function ArtAndCulturePage() {
  const artLegacy = [
    { 
      icon: Palette, 
      title: "Ancient Egyptian Art", 
      description: "Art was not for art's sake; it was a sacred tool for eternity. The monolithic temples, intricate tomb paintings, and symbolic hieroglyphs were designed to guide souls, honor deities, and preserve cosmic order. Every color and form had a profound spiritual meaning.",
      image: "/images/mypics/ancient.jpeg",
      link: "/art-culture/ancient-egyptian-art"
    },
    { 
      icon: Drama, 
      title: "Greco-Roman Influence", 
      description: "With the arrival of Alexander the Great, Egyptian art began a dialogue with Hellenistic culture. Alexandria became a hub of creativity where classical sculpture, detailed mosaics, and funerary portraits like the Fayum mummy portraits blended styles to reflect a new, cosmopolitan identity.",
      image: "/images/mypics/rom.jpeg",
      link: "/art-culture/Greco-Roman-Influence"
    },
    { 
      icon: Hand, 
      title: "Islamic Art", 
      description: "Under Islamic rule, art found new expression in the spiritual pursuit of geometry and calligraphy. Mosques, palaces, and public fountains were adorned with breathtaking arabesques, kufic script, and mashrabiya woodwork, turning mathematics into divine beauty.",
      image: "/images/mypics/sul.jpeg",
      link: "/art-culture/Islamic-Art"
    }
  ];

  const cinemaPosters = [
    { image: "/images/mypics/movies/The Nightingale's Prayer.jpeg", alt: "The Nightingale's Prayer movie poster" },
    { image: "/images/mypics/movies/The Land.jpeg", alt: "The Land movie poster" },
    { image: "/images/mypics/movies/cairo station movie.jpeg", alt: "Cairo Station movie poster" },
    { image: "/images/mypics/movies/Al-Mummia.jpeg", alt: "The Mummy (Al-Mummia) movie poster" },
    { image: "/images/mypics/movies/blue elphant.jpeg", alt: "The Blue Elephant movie poster" },
  ];
  
  const cuisineItems = [
    { name: 'Koshary', image: '/images/mypics/food/Koshari.jpeg', recipe: '1. Cook rice, lentils, and macaroni separately. 2. Layer them in a bowl. 3. Top with chickpeas and fried onions. 4. Drizzle with spicy tomato-vinegar sauce.' },
    { name: 'Ful Medames', image: '/images/mypics/food/ful medamas.jpeg', recipe: '1. Slow-cook fava beans until tender. 2. Mash lightly. 3. Season with salt, cumin, and olive oil. 4. Garnish with parsley and serve with bread.' },
    { name: 'Molokhia', image: '/images/mypics/food/molkhia.jpeg', recipe: '1. Sauté minced garlic in butter until golden. 2. Add chopped jute leaves and chicken broth. 3. Simmer until thickened. 4. Serve hot over rice.' },
    { name: 'Fattah', image: '/images/mypics/food/fattah.jpeg', recipe: '1. Layer torn, fried flatbread in a dish. 2. Cover with cooked rice. 3. Pour a garlic & vinegar infused tomato sauce over the top. 4. Garnish with toasted nuts.' },
  ];

  const folklore = [
    { title: "Tanoura & Belly Dancing" },
    { title: "Nubian Musical Instruments" },
    { title: "Bedouin Embroidery (Talli)" },
    { title: "Moulid Festivals & Chants" },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-200 via-amber-100 to-stone-200 dark:from-gray-900 dark:via-stone-900 dark:to-gray-900 text-stone-800 dark:text-stone-200 font-serif">
      <main className="container mx-auto px-4 py-20 space-y-20">
        
        {/* Intro Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-stone-700 dark:from-amber-400 dark:to-stone-300">
            The Art & Soul of Egypt
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-stone-700 dark:text-stone-300">
            Egypt's spirit spans millennia—from temple grandeur and hieroglyphs to Islamic geometry, vibrant Nubian murals, and the pulse of contemporary life. Explore a culture breathing through every mosaic, melody, and marketplace.
          </p>
        </section>
        
        {/* Art Legacy */}
        <ArtCard icon={<Palette size={28}/>} title="Egypt's Artistic Legacy">
          <p>Art in Egypt is a conversation across civilizations. Each era left its indelible mark, creating a layered identity that is both ancient and alive.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {artLegacy.map(item => {
              const Icon = item.icon; 
              return (
                <div key={item.title} className="relative h-80 rounded-lg overflow-hidden group shadow-lg">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={20} className="text-amber-400" />
                      <h3 className="font-bold text-lg">{item.title}</h3>
                    </div>
                    <p className="text-sm text-stone-200 mb-3">{item.description}</p>
                    {item.link && (
                      <Link 
                        href={item.link}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/90 text-white rounded-lg shadow-md hover:bg-amber-600 transition-colors text-sm font-medium"
                      >
                        Explore More
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ArtCard>
        
        {/* Cinema */}
        <ArtCard icon={<Clapperboard size={28}/>} title="Silver Screen Legacy">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p>Once dubbed the "Hollywood of the Middle East," Egyptian cinema's Golden Age in the 1940s-60s produced a wave of films that shaped the region's cultural identity. These movies were more than entertainment; they were powerful reflections of society, tackling themes of love, nationalism, and social justice with a unique blend of drama, comedy, and music that has captivated audiences for generations.</p>
              <ul className="list-disc list-inside mt-4 space-y-1">
                <li><span className="font-bold">Stars:</span> Faten Hamama, Omar Sharif, Soad Hosny, Rushdy Abaza, Shadia</li>
                <li><span className="font-bold">Iconic Films:</span> The Nightingale's Prayer, The Land, Cairo Station, The Mummy (Al-Mummia)</li>
                <li><span className="font-bold">Hubs:</span> The historic studios of Cairo & Alexandria</li>
              </ul>
              <a 
                href="https://letterboxd.com/kanafani/list/top-100-egyptian-movies/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6 px-4 py-2 bg-amber-800/90 text-white rounded-lg shadow-md hover:bg-amber-800 transition-colors"
              >
                Explore the Top 100 Films
              </a>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {cinemaPosters.map((poster, index) => (
                <div key={index} className="flex-none w-40 h-56 rounded-md overflow-hidden shadow-xl transform hover:scale-105 transition-transform">
                  <Image src={poster.image} alt={poster.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </ArtCard>

        {/* Music */}
        <ArtCard icon={<Music size={28}/>} title="Echoes of Egypt">
          <div className="md:w-3/4 mx-auto text-center">
            <p className="mb-8">From ancient rhythms and Sufi chants to the timeless voice of Umm Kulthum and modern indie pop, music is the heartbeat of Egypt.</p>
            <div className="flex items-center justify-center gap-8 md:gap-16">
              <div className="hidden md:block">
                <SoundWave />
              </div>
              <div className="max-w-md mx-auto">
                <MusicPlayer />
              </div>
              <div className="hidden md:block">
                <SoundWave />
              </div>
            </div>
          </div>
        </ArtCard>

        {/* Cuisine */}
        <ArtCard icon={<Utensils size={28}/>} title="A Taste of Tradition">
          <p className="text-center mb-8">Egyptian cuisine is a rich tapestry of flavors inherited from generations of home cooks. Centered around legumes, vegetables, and hearty grains, it's a cuisine built on shared meals and recipes passed down with love.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cuisineItems.map(item => (
              <div key={item.name} className="relative h-64 rounded-lg overflow-hidden group shadow-lg">
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                {/* Always visible title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-bold text-lg text-white">{item.name}</h3>
                </div>
                {/* Hover overlay for recipe */}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <h4 className="font-bold mb-2 border-b border-amber-500/50 pb-1">{item.name} Recipe</h4>
                    <p className="text-xs leading-relaxed">{item.recipe}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ArtCard>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Culture & Identity */}
          <div className="md:col-span-3">
            <ArtCard icon={<Users size={28}/>} title="Culture & Everyday Traditions">
              <p>Beyond the monuments, Egypt's true essence is found in its daily rhythms, its shared meals, and the resilient warmth of its people.</p>
              <div className="grid md:grid-cols-2 gap-x-6 mt-4">
                <div>
                  <h4 className="font-bold mt-4">Daily Life</h4>
                  <p className="text-sm">Vibrant souks, the aroma of koshary, endless cups of tea, and animated storytelling.</p>
                </div>
                <div>
                  <h4 className="font-bold mt-4">Languages & Faith</h4>
                  <p className="text-sm">Arabic is the official language, with unique regional dialects. Islam and Coptic Christianity have coexisted for centuries.</p>
                </div>
              </div>
            </ArtCard>
          </div>
          
          {/* Folklore */}
          <div className="md:col-span-2">
            <ArtCard icon={<MapPin size={28}/>} title="Folklore & Local Rituals">
              <p className="mb-4">Egypt's heritage is alive in its diverse folk traditions, which vary from the deserts to the Nile Delta.</p>
              <ul className="space-y-2">
                {folklore.map(item => (
                  <li key={item.title} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-700 dark:bg-amber-500 flex-shrink-0"></span>
                    {item.title}
                  </li>
                ))}
              </ul>
            </ArtCard>
          </div>
        </div>
        
      </main>
    </div>
  );
} 