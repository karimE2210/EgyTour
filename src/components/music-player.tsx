"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music, ChevronDown, SkipForward, Shuffle } from 'lucide-react';
import Image from 'next/image';

const tracks = [
  // 1960s
  { 
    title: "Qaseda Masr", 
    artist: "Umm Kulthum", 
    decade: "1960s",
    artistImage: "/images/mypics/music/Qaseda Masr.jpeg",
    albumCover: "/images/mypics/music/Qaseda Masr.jpeg",
    src: "/audio/1960/Albumaty.com.Om.Kalsoum.qaseda.masr.mp3",
    synopsis: "A patriotic ode to Egypt by the 'Star of the East.' Umm Kulthum's powerful vocals and unmatched emotional delivery cemented her as a cultural icon across the Arab world."
  },
  { 
    title: "Ahwak", 
    artist: "Abdel Halim Hafez", 
    decade: "1960s",
    artistImage: "/images/mypics/music/Ahwak.jpeg",
    albumCover: "/images/mypics/music/Ahwak.jpeg",
    src: "/audio/1960/06.Ahwak.mp3",
    synopsis: "A timeless declaration of love from 'The Dark-Skinned Nightingale.' Abdel Halim's romantic ballads and cinematic presence defined a generation of Egyptian music and film."
  },
  { 
    title: "Ya Habybty Ya Masr", 
    artist: "Shadia", 
    decade: "1960s",
    artistImage: "/images/mypics/music/Ya Habybty Ya Masr.jpeg",
    albumCover: "/images/mypics/music/Ya Habybty Ya Masr.jpeg",
    src: "/audio/1960/Albumaty.Com_shadya_ya_hbybty_ya_msr.mp3",
    synopsis: "An uplifting anthem of love for Egypt, sung by one of its most beloved actresses and singers. Shadia's versatile talent made her a cherished figure in Egyptian cinema and music."
  },
  
  // 1970s
  { 
    title: "Hawel Teftekerny", 
    artist: "Abdel Halim Hafez", 
    decade: "1970s",
    artistImage: "/images/mypics/music/Hawel Teftekerny.jpeg",
    albumCover: "/images/mypics/music/Hawel Teftekerny.jpeg",
    src: "/audio/1970/hawel teftekerny by abdelhaleem hafez.MP3",
    synopsis: "A poignant ballad of love and memory. This song showcases Abdel Halim's ability to convey deep emotion, becoming one of his most iconic and enduring hits."
  },
  { 
    title: "Helwa Ya Balady", 
    artist: "Dalida", 
    decade: "1970s",
    artistImage: "/images/mypics/music/Helwa Ya Balady.jpeg",
    albumCover: "/images/mypics/music/Helwa Ya Balady.jpeg",
    src: "/audio/1970/7lwa.Ya.Balady-Dalida-MaTb3aa.Com.mp3",
    synopsis: "A nostalgic tribute to Egypt's beauty by the internationally acclaimed star. Born in Cairo, Dalida's global success brought a unique glamour to Egyptian music."
  },
  { 
    title: "Alamony Eneky", 
    artist: "Mohamed Mounir", 
    decade: "1970s",
    artistImage: "/images/mypics/music/Alamony Eneky.jpeg",
    albumCover: "/images/mypics/music/Alamony Eneky.jpeg",
    src: "/audio/1970/by mohamed mounir.mp3",
    synopsis: "A soulful blend of Nubian rhythms and poetic lyrics from 'The King.' Mohamed Mounir's music is known for its distinctive sound and socially conscious themes."
  },
  
  // 1980s
  { 
    title: "Habytk", 
    artist: "Anoshka", 
    decade: "1980s",
    artistImage: "/images/mypics/music/Habytk.jpeg",
    albumCover: "/images/mypics/music/Habytk.jpeg",
    src: "/audio/1980/habytk by anoshka.mp3",
    synopsis: "An iconic 80s pop hit with a distinctively Egyptian feel. Anoshka, with her multicultural background, brought a fresh and vibrant energy to the pop scene."
  },
  { 
    title: "Lessa Betesaly", 
    artist: "Hany Shaker", 
    decade: "1980s",
    artistImage: "/images/mypics/music/Lessa Betesaly.jpeg",
    albumCover: "/images/mypics/music/Lessa Betesaly.jpeg",
    src: "/audio/1980/هاني شاكر- لسا بتسالي.mp3",
    synopsis: "A classic tale of lingering love from the 'Prince of Arab Singing.' Hany Shaker is renowned for his powerful vocals and mastery of the romantic ballad."
  },
  { 
    title: "Shams El Maghib", 
    artist: "Mohamed Mounir", 
    decade: "1980s",
    artistImage: "/images/mypics/music/Shams El Maghib.jpeg",
    albumCover: "/images/mypics/music/Shams El Maghib.jpeg",
    src: "/audio/1980/07.Shams_El_Maghib.mp3",
    synopsis: "A philosophical track that blends folk and rock influences. Mounir's introspective lyrics and unique sound defined a new direction for Egyptian music."
  },
  { 
    title: "Shagar El Lamoon", 
    artist: "Mohamed Mounir", 
    decade: "1980s",
    artistImage: "/images/mypics/music/shagar el lamoon.jpeg",
    albumCover: "/images/mypics/music/shagar el lamoon.jpeg",
    src: "/audio/1980/06.Shagar_El_Lamoon.mp3",
    synopsis: "A folk-infused song that captures the essence of Egyptian rural life. This track highlights Mounir's connection to his Nubian roots and his storytelling prowess."
  },
  
  // 1990s
  { 
    title: "Awedony", 
    artist: "Amr Diab", 
    decade: "1990s",
    artistImage: "/images/mypics/music/Awedony.jpeg",
    albumCover: "/images/mypics/music/Awedony.jpeg",
    src: "/audio/1990/01.Awedony.mp3",
    synopsis: "A quintessential 90s pop track from the megastar. Amr Diab, known as 'El Hadaba,' pioneered a new genre of Mediterranean music that achieved global recognition."
  },
  { 
    title: "Nour El Ain", 
    artist: "Amr Diab", 
    decade: "1990s",
    artistImage: "/images/mypics/music/Nour El Ain.jpeg",
    albumCover: "/images/mypics/music/Nour El Ain.jpeg",
    src: "/audio/1990/01-Nour.El-Ain-MaTb3aa.Com.mp3",
    synopsis: "The groundbreaking international hit that fused Spanish guitar with Egyptian pop. This song's massive success made Amr Diab a global phenomenon."
  },
  { 
    title: "En Kont Ghali", 
    artist: "Aida El Ayoubi", 
    decade: "1990s",
    artistImage: "/images/mypics/music/En Kont Ghali.jpeg",
    albumCover: "/images/mypics/music/En Kont Ghali.jpeg",
    src: "/audio/1990/06-En.Kont.Ghali-MaTb3aa.Com.mp3",
    synopsis: "A gentle, heartfelt song that became a 90s indie anthem. Aida El Ayoubi's soft-spoken style and poignant lyrics offered a unique alternative to mainstream pop."
  },
  { 
    title: "Nary Nary", 
    artist: "Hisham Abbas", 
    decade: "1990s",
    artistImage: "/images/mypics/music/Nary Narin.jpeg",
    albumCover: "/images/mypics/music/Nary Narin.jpeg",
    src: "/audio/1990/412v82zD.mp3",
    synopsis: "An infectious, upbeat hit that dominated the charts. Hisham Abbas's catchy hooks and crossover appeal made him one of the most popular artists of the decade."
  },
  
  // 2000s
  { 
    title: "Wa7da Wa7da", 
    artist: "Hamaki", 
    decade: "2000s",
    artistImage: "/images/mypics/music/Wa7da Wa7da.jpeg",
    albumCover: "/images/mypics/music/Wa7da Wa7da.jpeg",
    src: "/audio/2000/wa7da wa7da by hamaki.mp3",
    synopsis: "A smooth, romantic pop song that became a massive hit. Mohamed Hamaki is known for his modern sound and emotionally resonant music videos."
  },
  { 
    title: "Elnour Makano F El2loub", 
    artist: "Medhat Saleh", 
    decade: "2000s",
    artistImage: "/images/mypics/music/Elnour Makano F Elqloub.jpeg",
    albumCover: "/images/mypics/music/Elnour Makano F Elqloub.jpeg",
    src: "/audio/2000/elnour maknao f el2loub by medhat saleh.mp3",
    synopsis: "An inspiring and powerful song about inner light and hope. Medhat Saleh is a veteran singer and actor, celebrated for his rich voice and versatile performances."
  },
  { 
    title: "Kol Mara", 
    artist: "Tamer Hosni", 
    decade: "2000s",
    artistImage: "/images/mypics/music/Kol Mara.jpeg",
    albumCover: "/images/mypics/music/Kol Mara.jpeg",
    src: "/audio/2000/09-Kol.Mara by tamer hosni.mp3",
    synopsis: "An emotional pop-rock ballad from the 'Star of the Generation.' Tamer Hosni's music often blends genres and speaks to the experiences of young listeners."
  },
  { 
    title: "Ala Baly", 
    artist: "Sherine", 
    decade: "2000s",
    artistImage: "/images/mypics/music/Ala Baly.jpeg",
    albumCover: "/images/mypics/music/Ala Baly.jpeg",
    src: "/audio/2000/04-Ala.Baly by shereine.mp3",
    synopsis: "A soaring ballad of longing and love. Sherine Abdel-Wahab is one of Egypt's most powerful and emotive voices, known for her incredible vocal range."
  },
  { 
    title: "Tamaly Maak", 
    artist: "Amr Diab", 
    decade: "2000s",
    artistImage: "/images/mypics/music/Tamaly Maak.jpeg",
    albumCover: "/images/mypics/music/Tamaly Maak.jpeg",
    src: "/audio/2000/tamaly maak by amr diab.mp3",
    synopsis: "An unforgettable romantic anthem that remains one of Amr Diab's most beloved songs worldwide. Its timeless melody and heartfelt lyrics define the era of modern Egyptian pop."
  },
  
  // 2010s
  { 
    title: "Elbosla Da3t", 
    artist: "Marwan Moussa", 
    decade: "2010s",
    artistImage: "/images/mypics/music/elbosla da3t.jpeg",
    albumCover: "/images/mypics/music/elbosla da3t.jpeg",
    src: "/audio/2010/elbosla da3t by marwan moussa.mp3",
    synopsis: "An early track from a trap pioneer, showcasing his clever wordplay. Marwan Moussa would go on to become a leading figure in Egypt's burgeoning rap scene."
  },
  { 
    title: "Dorak Gai", 
    artist: "Wegz", 
    decade: "2010s",
    artistImage: "/images/mypics/music/Dorak Gai.jpeg",
    albumCover: "/images/mypics/music/Dorak Gai.jpeg",
    src: "/audio/2010/dorak gai by wegz.mp3",
    synopsis: "A breakout Mahraganat-infused trap anthem. Wegz quickly became the voice of a new generation with his rebellious energy and instantly recognizable flow."
  },
  { 
    title: "Kalam Eineh", 
    artist: "Sherine", 
    decade: "2010s",
    artistImage: "/images/mypics/music/Kalam Eineh.jpeg",
    albumCover: "/images/mypics/music/Kalam Eineh.jpeg",
    src: "/audio/2010/kalam eineh by shereine.mp3",
    synopsis: "A classic, passionate love song from one of Egypt's premier vocalists. Sherine's ability to convey raw emotion makes her a powerhouse in modern Arabic music."
  },
  { 
    title: "Kan Lak Maaya", 
    artist: "Cairokee", 
    decade: "2010s",
    artistImage: "/images/mypics/music/kan laak maaya.jpeg",
    albumCover: "/images/mypics/music/kan laak maaya.jpeg",
    src: "/audio/2010/kan lak maaya by cairooke.mp3",
    synopsis: "A poignant indie rock ballad about lost love. Cairokee is known for their socially relevant lyrics and for leading the revival of rock music in Egypt."
  },
  { 
    title: "Bent Elgeran", 
    artist: "Hassan Shakoush", 
    decade: "2010s",
    artistImage: "/images/mypics/music/bent elgeran.jpeg",
    albumCover: "/images/mypics/music/bent elgeran.jpeg",
    src: "/audio/2010/bent elgeran by hassan shakoush.mp3",
    synopsis: "The viral Mahraganat hit that took the world by storm. Hassan Shakoush and Omar Kamal's track defined the sound of the streets and the power of digital trends."
  },

  // 2020s
  { 
    title: "Roma", 
    artist: "Cairokee", 
    decade: "2020s",
    artistImage: "/images/mypics/music/roma.jpeg",
    albumCover: "/images/mypics/music/roma.jpeg",
    src: "/audio/2020/10-Roma by cairokee.mp3",
    synopsis: "An introspective rock track reflecting on life and ambition. As one of Egypt's leading bands, Cairokee continues to evolve their sound while staying true to their lyrical depth."
  },
  { 
    title: "Matwhashneesh", 
    artist: "Cairokee", 
    decade: "2020s",
    artistImage: "/images/mypics/music/roma.jpeg",
    albumCover: "/images/mypics/music/roma.jpeg",
    src: "/audio/2020/05-Matwhashneesh by cairokee.mp3",
    synopsis: "A hauntingly beautiful song about separation and memory. This track showcases the band's softer, more melodic side."
  },
  { 
    title: "Yaba Leh", 
    artist: "Marwan Moussa", 
    decade: "2020s",
    artistImage: "/images/mypics/music/yaba leh.jpeg",
    albumCover: "/images/mypics/music/yaba leh.jpeg",
    src: "/audio/2020/yaba leh by marwan moussa.mp3",
    synopsis: "A reflective and personal track from the rap superstar. Marwan Moussa is celebrated for his sophisticated production and witty, introspective bars."
  },
  { 
    title: "TAQATO3", 
    artist: "Marwan Moussa", 
    decade: "2020s",
    artistImage: "/images/mypics/music/taqato3.jpeg",
    albumCover: "/images/mypics/music/taqato3.jpeg",
    src: "/audio/2020/19-TAQATO3 by marwan moussa.mp3",
    synopsis: "A high-energy trap banger with clever rhymes. This song exemplifies the polished, confident sound that made Moussa a leader in the Egyptian hip-hop scene."
  },
  { 
    title: "Elhob Fein", 
    artist: "Marwan Pablo", 
    decade: "2020s",
    artistImage: "/images/mypics/music/elhob fein.jpeg",
    albumCover: "/images/mypics/music/elhob fein.jpeg",
    src: "/audio/2020/elhob fein by marwan pablo.mp3",
    synopsis: "A melancholic and atmospheric trap song from a highly influential artist. Marwan Pablo is known for his unique dark aesthetic and genre-bending sound."
  },
  { 
    title: "Elba5t", 
    artist: "Wegz", 
    decade: "2020s",
    artistImage: "/images/mypics/music/البخت.jpeg",
    albumCover: "/images/mypics/music/البخت.jpeg",
    src: "/audio/2020/elba5t by wegz.mp3",
    synopsis: "A viral sensation that blended trap with a melancholic, romantic theme. This song solidified Wegz's status as a superstar, beloved for his raw honesty and catchy melodies."
  }
];

// Get unique decades from tracks
const decades = Array.from(new Set(tracks.map(track => track.decade))).sort();

// Decade synopses
const decadeSynopses = {
  "1960s": "🎵 1960s – Golden Age of Arabic Music --- The era of Umm Kulthum and Abdel Halim Hafez. Classical Arabic music reaches its peak with orchestral arrangements, emotional depth, and cultural renaissance.",
  "1970s": "🎵 1970s – Folk Revival & Political Expression --- A decade of social change reflected in music. Mohamed Mounir emerges with Nubian influences, while Fairuz brings Lebanese folk traditions to the forefront.",
  "1980s": "🎵 1980s – Pop Revolution & Electronic Fusion --- The rise of Amr Diab and modern Egyptian pop. Synthesizers meet traditional instruments, creating a new sound that bridges East and West.",
  "1990s": "🎵 1990s – Mediterranean Pop & Global Success --- Amr Diab's 'Habibi Ya Nour El Ain' era. Egyptian pop goes international with Mediterranean rhythms and contemporary production.",
  "2000s": "🎵 2000s – Digital Age & Mainstream Dominance --- The peak of Egyptian pop culture. Amr Diab and Hakim dominate charts with polished productions and mass appeal.",
  "2010s": "📱 2010s – Social Media Boom & Mahraganat Rise ----- Mahraganat became the new street anthem. Pop and rap fused with digital influence and virality.",
  "2020s": "🎵 2020s – Trap Shaabi, Indie, and Revival --- A new generation driven by self-expression, trap beats, cultural pride, and independent artistry. Streaming reigns supreme."
};

export function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedDecade, setSelectedDecade] = useState<string>("All Decades");
  const [showDecadeDropdown, setShowDecadeDropdown] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [playQueue, setPlayQueue] = useState(
    tracks.filter(track => track.decade === selectedDecade || selectedDecade === "All Decades")
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = playQueue[currentTrackIndex];

  // Rebuild the play queue only when the decade changes.
  useEffect(() => {
    const filtered = selectedDecade === "All Decades"
      ? tracks
      : tracks.filter(track => track.decade === selectedDecade);
    
    setPlayQueue(filtered);
    setCurrentTrackIndex(0);
    setIsShuffled(false); // Reset shuffle when decade changes
  }, [selectedDecade]);

  // Effect to handle playing/pausing when isPlaying state changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Effect to load new track when index changes
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && currentTrack) {
      audio.src = currentTrack.src;
      if (isPlaying) {
        audio.play().catch(console.error);
      }
    }
  }, [currentTrack]);
  
  const togglePlayPause = () => {
    if (playQueue.length > 0) {
      setIsPlaying(!isPlaying);
    }
  };

  const playNextTrack = () => {
    if (playQueue.length === 0) return;
    setCurrentTrackIndex((prev) => (prev + 1) % playQueue.length);
  };

  const handleShuffleToggle = () => {
    const newShuffleState = !isShuffled;
    setIsShuffled(newShuffleState);

    const baseTracks = selectedDecade === "All Decades"
      ? tracks
      : tracks.filter(track => track.decade === selectedDecade);

    if (newShuffleState) {
      // === Turning Shuffle ON ===
      const shuffled = [...baseTracks];
      // Fisher-Yates shuffle
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      
      if (shuffled.length > 0) {
        let newIndex = Math.floor(Math.random() * shuffled.length);

        // Avoid playing the same song twice in a row if possible
        if (shuffled.length > 1 && shuffled[newIndex].src === currentTrack?.src) {
          newIndex = (newIndex + 1) % shuffled.length;
        }

        setPlayQueue(shuffled);
        setCurrentTrackIndex(newIndex);
        if (!isPlaying) setIsPlaying(true);
      }
    } else {
      // === Turning Shuffle OFF ===
      const currentTrackIndexInOriginal = baseTracks.findIndex(
        (t) => t.src === currentTrack?.src
      );
      setPlayQueue(baseTracks);
      setCurrentTrackIndex(currentTrackIndexInOriginal > -1 ? currentTrackIndexInOriginal : 0);
    }
  };

  const handleDecadeSelect = (decade: string) => {
    setSelectedDecade(decade);
    setShowDecadeDropdown(false);
  };

  if (!currentTrack) {
    return (
      <div className="flex flex-col items-center gap-6 p-6 rounded-lg bg-stone-50/50 dark:bg-stone-900/50 backdrop-blur-sm border border-stone-300/50 dark:border-stone-700/50 shadow-lg">
        <p className="text-stone-600 dark:text-stone-400">No tracks available for the selected decade.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 p-6 rounded-lg bg-stone-50/50 dark:bg-stone-900/50 backdrop-blur-sm border border-stone-300/50 dark:border-stone-700/50 shadow-lg">
      
      {/* Decade Filter */}
      <div className="relative w-full max-w-xs">
        <button
          onClick={() => setShowDecadeDropdown(!showDecadeDropdown)}
          className="w-full flex items-center justify-between px-4 py-2 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-600 rounded-lg shadow-sm hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
        >
          <span className="text-stone-700 dark:text-stone-300 font-medium">{selectedDecade}</span>
          <ChevronDown 
            size={20} 
            className={`text-stone-500 transition-transform ${showDecadeDropdown ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {showDecadeDropdown && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-600 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            <button
              onClick={() => handleDecadeSelect("All Decades")}
              className={`w-full px-4 py-2 text-left hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors ${
                selectedDecade === "All Decades" 
                  ? "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200" 
                  : "text-stone-700 dark:text-stone-300"
              }`}
            >
              All Decades ({tracks.length} tracks)
            </button>
            {decades.map((decade) => {
              const trackCount = tracks.filter(track => track.decade === decade).length;
              return (
                <button
                  key={decade}
                  onClick={() => handleDecadeSelect(decade)}
                  className={`w-full px-4 py-2 text-left hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors ${
                    selectedDecade === decade 
                      ? "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200" 
                      : "text-stone-700 dark:text-stone-300"
                  }`}
                >
                  {decade} ({trackCount} tracks)
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Decade Synopsis */}
      {selectedDecade !== "All Decades" && decadeSynopses[selectedDecade as keyof typeof decadeSynopses] && (
        <div className="w-full max-w-md p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-lg shadow-sm">
          <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            {decadeSynopses[selectedDecade as keyof typeof decadeSynopses]}
          </p>
        </div>
      )}

      {/* Album Cover and Rotating Disc */}
      <div className="relative">
        <div 
          className={`w-48 h-48 rounded-full bg-gradient-to-br from-stone-800 to-stone-900 dark:from-stone-700 dark:to-stone-800 flex items-center justify-center shadow-inner overflow-hidden ${isPlaying ? 'animate-spin' : ''}`}
          style={{ animationDuration: '3s', animationTimingFunction: 'linear' }}
        >
          {/* Album cover in the center */}
          <div className="w-40 h-40 rounded-full overflow-hidden">
            <Image 
              src={currentTrack.albumCover} 
              alt={`${currentTrack.title} album cover`}
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Track Info */}
      <div className="text-center space-y-4">
        {/* Track Details */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-stone-800 dark:text-stone-200">{currentTrack.title}</h3>
          <p className="text-md text-stone-600 dark:text-stone-400">{currentTrack.artist}</p>
          <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">{currentTrack.decade}</p>
        </div>
        
        {/* Track Counter */}
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Track {currentTrackIndex + 1} of {playQueue.length}
        </p>
      </div>

      {/* Song Synopsis */}
      {currentTrack.synopsis && (
        <div className="w-full max-w-md p-4 bg-stone-100 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-lg">
          <p className="text-sm text-stone-600 dark:text-stone-300 text-center leading-relaxed">
            {currentTrack.synopsis}
          </p>
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleShuffleToggle}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-stone-900 ${
            isShuffled 
              ? 'bg-amber-100/80 dark:bg-amber-900/80 text-amber-600 dark:text-amber-400' 
              : 'bg-stone-200/80 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
          }`}
          aria-label="Shuffle playlist"
        >
          <Shuffle size={22} />
        </button>
        <button 
          onClick={togglePlayPause}
          className="w-16 h-16 rounded-full bg-amber-800/90 text-white flex items-center justify-center shadow-lg hover:bg-amber-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-stone-900"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
        </button>

        <button
          onClick={playNextTrack}
          className="w-12 h-12 rounded-full bg-stone-200/80 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 flex items-center justify-center shadow-md hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-stone-900"
          aria-label="Skip to next track"
        >
          <SkipForward size={22} />
        </button>
      </div>

      <audio 
        ref={audioRef} 
        onEnded={playNextTrack}
        preload="auto" 
      />
    </div>
  );
} 