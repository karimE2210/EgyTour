"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from '@/hooks/use-translation';
import { 
  Sparkles, Sun, Waves, Mountain, Leaf, Heart, Clock, Info, Star, MapPin, 
  Play, Pause, Volume2, VolumeX, Check, Tag, Droplets, Moon, ListChecks, 
  Shirt, Crown, Flower2, Building2, History, CalendarDays
} from "lucide-react";
import { FavoriteButton } from '@/components/ui/favorite-button';
import ReviewsDisplay from '@/components/shared/reviews-display';
import { useState, useRef, useEffect } from 'react';

export default function WellnessAndRelaxation() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Audio sources for different relaxing sounds
  const audioSources = [
    {
      name: t('wellness.audio.desertWind'),
      url: "/audio/desert-wind-2-350417.mp3", // Desert wind sound file
      description: t('wellness.audio.desertWindDesc')
    },
    {
      name: t('wellness.audio.oceanWaves'),
      url: "/audio/ocean-waves-250310.mp3", // Ocean waves sound file
      description: t('wellness.audio.oceanWavesDesc')
    },
    {
      name: t('wellness.audio.meditationBells'),
      url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder - you can replace with actual meditation bells sound
      description: t('wellness.audio.meditationBellsDesc')
    }
  ];

  const handlePlayPause = async (index: number) => {
    if (!audioRef.current) return;

    if (currentTrack === index) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        }
      }
    } else {
      audioRef.current.src = audioSources[index].url;
      try {
        await audioRef.current.play();
        setCurrentTrack(index);
        setIsPlaying(true);
      } catch (error) {
        console.error("Error switching audio track:", error);
        setIsPlaying(false);
        setCurrentTrack(null);
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const changeAudio = (index: number) => {
    setCurrentTrack(index);
    if (isPlaying && audioRef.current) {
      audioRef.current.src = audioSources[index].url;
      audioRef.current.play();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const luxurySpas = [
    {
      id: "fourSeasonsCairo",
      name: t('wellness.luxurySpas.fourSeasonsCairo.name'),
      description: t('wellness.luxurySpas.fourSeasonsCairo.description'),
      image: "/images/mypics/hiltonx.jpeg",
      features: [
        t('wellness.features.luxuryTreatments'),
        t('wellness.features.aromatherapy'),
        t('wellness.features.fiveStarService'),
        t('wellness.features.cityViews')
      ]
    },
    {
      id: "oberoiSahlHasheesh",
      name: t('wellness.luxurySpas.oberoiSahlHasheesh.name'),
      description: t('wellness.luxurySpas.oberoiSahlHasheesh.description'),
      image: "/images/mypics/ob.jpeg",
      features: [
        t('wellness.features.oceanfrontLocation'),
        t('wellness.features.holisticRituals'),
        t('wellness.features.beachAccess'),
        t('wellness.features.meditationGardens')
      ]
    },
    {
      id: "kempinskiSomaBay",
      name: t('wellness.luxurySpas.kempinskiSomaBay.name'),
      description: t('wellness.luxurySpas.kempinskiSomaBay.description'),
      image: "/images/mypics/kem.jpeg",
      features: [
        t('wellness.features.thalassotherapy'),
        t('wellness.features.seawaterPools'),
        t('wellness.features.naturalTreatments'),
        t('wellness.features.coastalWellness')
      ]
    }
  ];

  const yogaSpots = [
    {
      id: "desertYoga",
      name: t('wellness.yogaSpots.desertYoga.name'),
      location: t('wellness.yogaSpots.desertYoga.location'),
      description: t('wellness.yogaSpots.desertYoga.description'),
      image: "/images/mypics/desert.jpeg",
      type: t('wellness.yogaSpots.desertYoga.type'),
      bestTime: t('wellness.yogaSpots.desertYoga.bestTime')
    },
    {
      id: "redSeaMeditation",
      name: t('wellness.yogaSpots.redSeaMeditation.name'),
      location: t('wellness.yogaSpots.redSeaMeditation.location'),
      description: t('wellness.yogaSpots.redSeaMeditation.description'),
      image: "/images/mypics/Dahab, Egypt.jpeg",
      type: t('wellness.yogaSpots.redSeaMeditation.type'),
      bestTime: t('wellness.yogaSpots.redSeaMeditation.bestTime')
    },
    {
      id: "rooftopYoga",
      name: t('wellness.yogaSpots.rooftopYoga.name'),
      location: t('wellness.yogaSpots.rooftopYoga.location'),
      description: t('wellness.yogaSpots.rooftopYoga.description'),
      image: "/images/mypics/roof.jpeg",
      type: t('wellness.yogaSpots.rooftopYoga.type'),
      bestTime: t('wellness.yogaSpots.rooftopYoga.bestTime')
    }
  ];

  const naturalOases = [
    {
      id: "siwaOasis",
      name: t('wellness.naturalOases.siwaOasis.name'),
      description: t('wellness.naturalOases.siwaOasis.description'),
      image: "/images/mypics/siwa.jpeg",
      features: [
        t('wellness.features.saltLakes'),
        t('wellness.features.cleopatrasPool'),
        t('wellness.features.ecoLodges'),
        t('wellness.features.naturalSprings')
      ]
    },
    {
      id: "bahariyaOasis",
      name: t('wellness.naturalOases.bahariyaOasis.name'),
      description: t('wellness.naturalOases.bahariyaOasis.description'),
      image: "/images/mypics/bah.jpeg",
      features: [
        t('wellness.features.blackSandDunes'),
        t('wellness.features.hotSprings'),
        t('wellness.features.desertViews'),
        t('wellness.features.therapeuticWaters')
      ]
    },
    {
      id: "fayoum",
      name: t('wellness.naturalOases.fayoum.name'),
      description: t('wellness.naturalOases.fayoum.description'),
      image: "/images/mypics/fayoum.jpeg",
      features: [
        t('wellness.features.lakesideSetting'),
        t('wellness.features.herbalRemedies'),
        t('wellness.features.birdWatching'),
        t('wellness.features.peacefulAtmosphere')
      ]
    }
  ];

  const wellnessRetreats = [
    {
      id: "siwaHealing",
      name: t('wellness.wellnessRetreats.siwaHealing.name'),
      description: t('wellness.wellnessRetreats.siwaHealing.description'),
      image: "/images/mypics/siwaEye.jpeg",
      duration: t('wellness.wellnessRetreats.siwaHealing.duration'),
      activities: [
        t('wellness.activities.dailyYoga'),
        t('wellness.activities.detoxMeals'),
        t('wellness.activities.saltCaveMeditation'),
        t('wellness.activities.desertWalks')
      ]
    },
    {
      id: "sinaiSoul",
      name: t('wellness.wellnessRetreats.sinaiSoul.name'),
      description: t('wellness.wellnessRetreats.sinaiSoul.description'),
      image: "/images/mypics/Dahab vibes 🇪🇬.jpeg",
      duration: t('wellness.wellnessRetreats.sinaiSoul.duration'),
      activities: [
        t('wellness.activities.guidedHikes'),
        t('wellness.activities.soundTherapy'),
        t('wellness.activities.mountainMeditation'),
        t('wellness.activities.stargazing')
      ]
    },
    {
      id: "nileReset",
      name: t('wellness.wellnessRetreats.nileReset.name'),
      description: t('wellness.wellnessRetreats.nileReset.description'),
      image: "/images/mypics/feluca.jpeg",
      duration: t('wellness.wellnessRetreats.nileReset.duration'),
      activities: [
        t('wellness.activities.feluccaSailing'),
        t('wellness.activities.mindfulnessPractice'),
        t('wellness.activities.riverMeditation'),
        t('wellness.activities.sunsetYoga')
      ]
    }
  ];

  const wellnessTips = [
    t('wellness.tips.stayHydrated'),
    t('wellness.tips.bookSpaSessions'),
    t('wellness.tips.expectNoWifi'),
    t('wellness.tips.respectQuietZones')
  ];

  const funFacts = [
    t('wellness.funFacts.cleopatra'),
    t('wellness.funFacts.ancientEgyptians'),
    t('wellness.funFacts.siwaSaltLakes')
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-sand-50 to-sage-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Luxury Spas Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">{t('wellness.title')}</h1>
          <h2 className="mb-6 text-3xl font-semibold text-teal-800 dark:text-teal-300">{t('wellness.luxurySpas.title')}</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700 dark:text-gray-300">
            {t('wellness.luxurySpas.description')}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {luxurySpas.map((spa) => (
            <Card key={spa.id} className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="relative aspect-[4/3]">
                <Image
                  src={spa.image}
                  alt={spa.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <FavoriteButton itemId={spa.id} itemType="spa" className="absolute top-4 right-4 z-10" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{spa.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{spa.description}</p>
                <div className="space-y-2">
                  {spa.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200">
                      <Check className="h-4 w-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Relaxing Sound Player - Centered in Content */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-teal-200 dark:border-teal-700 shadow-sm rounded-lg mx-4 mb-8">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-6">
            {/* Sound Selection */}
            <div className="flex items-center gap-2">
              <Waves className="h-4 w-4 text-teal-600 dark:text-teal-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('wellness.audio.sound')}</span>
              <div className="flex gap-1">
                {audioSources.map((source, index) => (
                  <button
                    key={index}
                    onClick={() => handlePlayPause(index)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      currentTrack === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {source.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => currentTrack !== null && handlePlayPause(currentTrack)}
              disabled={currentTrack === null}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${
                isPlaying 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                title={isMuted ? t('wellness.audio.unmute') : t('wellness.audio.mute')}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #0d9488 0%, #0d9488 ${volume * 100}%, ${isMuted ? '#6b7280' : '#e5e7eb'} ${volume * 100}%, ${isMuted ? '#6b7280' : '#e5e7eb'} 100%)`
                }}
                title={`${t('wellness.audio.volume')} ${Math.round(volume * 100)}%`}
              />
            </div>

            {/* Current Track Info */}
            <div className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
              {audioSources[currentTrack || 0].name} • {isPlaying ? t('wellness.audio.playing') : t('wellness.audio.paused')}
            </div>
          </div>
        </div>
      </div>

      {/* Yoga & Meditation Spots Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-white">{t('wellness.yogaSpots.title')}</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700 dark:text-gray-300">
              {t('wellness.yogaSpots.description')}
            </p>
          </div>
          
          <div className="space-y-8">
            {yogaSpots.map((spot, index) => (
              <Card key={spot.id} className={`group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700`}>
                <div className="relative aspect-[16/9] md:w-1/2">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <FavoriteButton itemId={spot.id} itemType="yogaSpot" className="absolute top-4 right-4 z-10" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div className="flex flex-col justify-center p-6 md:w-1/2">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200">{spot.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{spot.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{spot.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Sun className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200">{spot.bestTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200">{spot.type}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Natural Wellness Oases Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-white">{t('wellness.naturalOases.title')}</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {naturalOases.map((oasis) => (
            <Card key={oasis.id} className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="relative aspect-[4/3]">
                <Image
                  src={oasis.image}
                  alt={oasis.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <FavoriteButton itemId={oasis.id} itemType="oasis" className="absolute top-4 right-4 z-10" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{oasis.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{oasis.description}</p>
                <div className="space-y-2">
                  {oasis.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200">
                      <Check className="h-4 w-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Wellness Retreats Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-white">{t('wellness.wellnessRetreats.title')}</h2>
          </div>
          
          <div className="space-y-12">
            {wellnessRetreats.map((retreat, index) => (
              <Card key={retreat.id} className={`group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700`}>
                <div className="relative aspect-[16/9] md:w-1/2">
                  <Image
                    src={retreat.image}
                    alt={retreat.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <FavoriteButton itemId={retreat.id} itemType="retreat" className="absolute top-4 right-4 z-10" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div className="flex flex-col justify-center p-6 md:w-1/2">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200">{retreat.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{retreat.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{retreat.description}</p>
                  <div className="space-y-2">
                    {retreat.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200">
                        <Check className="h-4 w-4" />
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Tips Section */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">{t('wellness.tips.title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: t('wellness.tips.bestTime.title'),
              description: t('wellness.tips.bestTime.description'),
              icon: <CalendarDays className="h-6 w-6 text-primary" />
            },
            {
              title: t('wellness.tips.preparation.title'),
              description: t('wellness.tips.preparation.description'),
              icon: <ListChecks className="h-6 w-6 text-primary" />
            },
            {
              title: t('wellness.tips.clothing.title'),
              description: t('wellness.tips.clothing.description'),
              icon: <Shirt className="h-6 w-6 text-primary" />
            }
          ].map((tip, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                {tip.icon}
                <h3 className="text-lg font-semibold">{tip.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">{t('wellness.funFacts.title')}</h2>
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="grid gap-4 md:grid-cols-3">
              {funFacts.map((fact, index) => (
                <Card key={index} className="border-2 border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-900/20 p-6 text-center shadow-md">
                  <CardContent className="p-0">
                    <p className="text-gray-700 dark:text-gray-300">{fact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">
          {t('wellness.reviews.title')}
        </h2>
        <div className="mx-auto max-w-md">
          <ReviewsDisplay 
            maxReviews={3} 
            showHeader={false}
            className="shadow-lg"
            location="Wellness & Relaxation"
          />
        </div>
      </section>

      {/* Traditional Wellness Practices Section */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
          {t('wellness.traditional.title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {t('wellness.traditional.description')}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: t('wellness.traditional.practices.hammam.title'),
              description: t('wellness.traditional.practices.hammam.description'),
              icon: <Droplets className="h-6 w-6 text-primary" />,
              benefits: t('wellness.traditional.practices.hammam.benefits'),
            },
            {
              title: t('wellness.traditional.practices.sandTherapy.title'),
              description: t('wellness.traditional.practices.sandTherapy.description'),
              icon: <Sun className="h-6 w-6 text-primary" />,
              benefits: t('wellness.traditional.practices.sandTherapy.benefits'),
            },
            {
              title: t('wellness.traditional.practices.herbalism.title'),
              description: t('wellness.traditional.practices.herbalism.description'),
              icon: <Leaf className="h-6 w-6 text-primary" />,
              benefits: t('wellness.traditional.practices.herbalism.benefits'),
            },
            {
              title: t('wellness.traditional.practices.meditation.title'),
              description: t('wellness.traditional.practices.meditation.description'),
              icon: <Moon className="h-6 w-6 text-primary" />,
              benefits: t('wellness.traditional.practices.meditation.benefits'),
            }
          ].map((practice, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                {practice.icon}
                <h3 className="text-xl font-semibold">{practice.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{practice.description}</p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>{t('wellness.traditional.benefitsLabel')}:</strong> {practice.benefits}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={audioSources[currentTrack || 0].url}
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onError={(e) => {
          console.log('Audio error:', e);
          setIsPlaying(false);
        }}
      />
    </div>
  );
} 