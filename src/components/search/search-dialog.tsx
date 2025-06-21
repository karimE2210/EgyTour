"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, X } from "lucide-react";

type SearchResult = {
  id: string;
  title: string;
  description: string;
  image?: string;
  href: string;
  category: string;
};

// Demo search data
const searchData: SearchResult[] = [
  {
    id: "1",
    title: "Sheikh Zayed Grand Mosque",
    description: "One of the world's largest mosques, an architectural masterpiece.",
    image: "/images/egypt-search.jpg",
    href: "/what-to-see/national-attractions/sheikh-zayed-grand-mosque",
    category: "National Attractions",
  },
  {
    id: "2",
    title: "Ferrari World Egypt",
    description: "Home to the world's fastest roller coaster, Formula Rossa.",
    image: "/images/ferrari-world.jpg",
    href: "/where-to-go/adventure-and-theme-parks/ferrari-world-abudhabi",
    category: "Theme Parks",
  },
  {
    id: "3",
    title: "Louvre Egypt",
    description: "The first universal museum in the Arab World.",
    image: "/images/teamlab.jpg",
    href: "/what-to-see/historical-and-cultural-attractions/louvre-abu-dhabi",
    category: "Cultural Attractions",
  },
  {
    id: "4",
    title: "Yas Waterworld",
    description: "A futuristic water park with over 40 rides, slides, and attractions.",
    image: "/images/yas-waterworld.jpg",
    href: "/where-to-go/adventure-and-theme-parks/yas-water-world",
    category: "Theme Parks",
  },
  {
    id: "5",
    title: "Corniche Beach",
    description: "A beautiful beach with pristine white sand and crystal-clear waters.",
    image: "/images/yas-waterworld.jpg",
    href: "/where-to-go/beaches/corniche-beach",
    category: "Beaches",
  },
  {
    id: "6",
    title: "Desert Safari",
    description: "Experience dune bashing, camel riding, and traditional entertainment.",
    image: "/images/egypt-search.jpg",
    href: "/things-to-do/desert-and-outdoor-activities/desert-safari",
    category: "Desert Activities",
  },
  {
    id: "7",
    title: "Qasr Al Watan",
    description: "The Presidential Palace, a cultural landmark housing historical artifacts.",
    image: "/images/egypt-search.jpg",
    href: "/what-to-see/iconic-landmarks/qasr-al-watan",
    category: "Iconic Landmarks",
  },
  {
    id: "8",
    title: "Emirates Palace",
    description: "A luxury hotel known for its impressive architecture and opulent interiors.",
    image: "/images/egypt-search.jpg",
    href: "/what-to-see/iconic-landmarks/emirates-palace",
    category: "Iconic Landmarks",
  },
];

// Popular search queries
const popularSearches = [
  "beaches",
  "theme parks",
  "desert safari",
  "grand mosque",
  "restaurants",
  "hotels",
];

interface SearchDialogProps {
  trigger?: React.ReactNode;
}

export function SearchDialog({ trigger }: SearchDialogProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Simple search function that matches query against title, description, and category
    if (searchQuery.trim().length > 1) {
      const query = searchQuery.toLowerCase();
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && results.length > 0) {
      router.push(results[0].href);
      setOpen(false);
      setSearchQuery("");
    }
  };

  const handleSelectResult = (href: string) => {
    router.push(href);
    setOpen(false);
    setSearchQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="ghost" size="icon">
            <SearchIcon className="h-5 w-5" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 max-h-[80vh] overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <form onSubmit={handleSearch} className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Search for attractions, activities, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </form>
          </div>

          <div className="flex-1 overflow-auto">
            {results.length > 0 ? (
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Results</h3>
                <div className="space-y-3">
                  {results.map((result) => (
                    <div
                      key={result.id}
                      className="flex gap-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                      onClick={() => handleSelectResult(result.href)}
                    >
                      {result.image && (
                        <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={result.image}
                            alt={result.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="font-medium">{result.title}</div>
                        <div className="text-sm text-gray-500 truncate">{result.description}</div>
                        <div className="text-xs text-primary mt-1">{result.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : searchQuery.trim().length > 0 ? (
              <div className="p-6 text-center">
                <p className="text-gray-500">No results found for "{searchQuery}"</p>
                <p className="text-sm mt-2">Try a different search term or browse the site.</p>
              </div>
            ) : (
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                      onClick={() => setSearchQuery(term)}
                    >
                      {term}
                    </Button>
                  ))}
                </div>

                <h3 className="text-sm font-medium text-gray-500 mt-6 mb-3">
                  Top Attractions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {searchData.slice(0, 4).map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md"
                      onClick={() => setOpen(false)}
                    >
                      {item.image && (
                        <div className="relative w-10 h-10 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="font-medium text-sm">{item.title}</div>
                        <div className="text-xs text-primary">{item.category}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t bg-gray-50">
            <div className="text-xs text-gray-500">
              Press <kbd className="px-2 py-1 bg-gray-100 rounded">Enter</kbd> to select first result
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
