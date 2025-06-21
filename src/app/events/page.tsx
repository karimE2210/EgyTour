"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeroBanner } from "@/components/shared/hero-banner";
import { useTranslation } from '@/hooks/use-translation';
import type { Event } from "@/types/events";

export default function EventsPage() {
  const { t } = useTranslation();
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [displayedEvents, setDisplayedEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'date' | 'price' | 'name'>('date');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'concerts' | 'theater'>('all');
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  // Fetch events function (made reusable)
  const fetchEvents = useCallback(async (showLoading = true) => {
    try {
      if (showLoading) setLoading(true);
      setError(null);
      
      const response = await fetch('/api/events');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      
      // Filter out past events
      const upcomingEvents = filterPastEvents(data);
      
      setAllEvents(upcomingEvents);
      setLastRefresh(new Date());
      console.log(`Events refreshed at ${new Date().toLocaleTimeString()}. ${upcomingEvents.length} upcoming events loaded.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching events:', err);
    } finally {
      if (showLoading) setLoading(false);
    }
  }, []);

  // Filter out events that have already passed
  const filterPastEvents = (events: Event[]): Event[] => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Start of today
    
    return events.filter(event => {
      const eventDate = parseEventDate(event.date);
      
      // If we can't parse the date, keep the event (might be "TBA" or future event)
      if (!eventDate) {
        return true;
      }
      
      // Keep events that are today or in the future
      return eventDate >= today;
    });
  };

  // Initial fetch
  useEffect(() => {
    fetchEvents(true);
  }, [fetchEvents]);

  // Auto-refresh every 30 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Auto-refreshing events...');
      fetchEvents(false); // Don't show loading spinner for background refresh
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearInterval(interval);
  }, [fetchEvents]);

  // Sorting function
  const sortEvents = (events: Event[], sortType: 'date' | 'price' | 'name') => {
    return [...events].sort((a, b) => {
      switch (sortType) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price':
          // Extract numeric price for comparison
          const priceA = extractPrice(a.price);
          const priceB = extractPrice(b.price);
          
          // If both have no price (0), maintain original order
          if (priceA === 0 && priceB === 0) return 0;
          // If only A has no price, put it last
          if (priceA === 0) return 1;
          // If only B has no price, put it last
          if (priceB === 0) return -1;
          // Both have prices, sort ascending
          return priceA - priceB;
        case 'date':
        default:
          // Check if dates are placeholder/empty values
          const hasDateA = hasValidDate(a.date);
          const hasDateB = hasValidDate(b.date);
          
          // If both have no valid date, maintain original order
          if (!hasDateA && !hasDateB) return 0;
          // If only A has no valid date, put it last
          if (!hasDateA) return 1;
          // If only B has no valid date, put it last
          if (!hasDateB) return -1;
          
          // Both have valid dates, parse and sort chronologically
          const dateA = parseEventDate(a.date);
          const dateB = parseEventDate(b.date);
          
          // If parsing failed for either, fall back to string comparison
          if (!dateA || !dateB) {
            return a.date.localeCompare(b.date);
          }
          
          // Sort chronologically (earliest first)
          return dateA.getTime() - dateB.getTime();
      }
    });
  };

  // Parse event date string to Date object
  const parseEventDate = (dateString: string): Date | null => {
    try {
      const currentYear = new Date().getFullYear();
      
      // Clean the string and extract the first date mentioned
      const cleanDate = dateString.trim();
      
      // Format: "Jun 17 | 08:00 PM" or "Jun 19 | 06:00 PM" (Month Day)
      const shortMonthMatch = cleanDate.match(/([A-Za-z]{3})\s+(\d{1,2})/);
      if (shortMonthMatch) {
        const [, month, day] = shortMonthMatch;
        const dateStr = `${month} ${day}, ${currentYear}`;
        const parsed = new Date(dateStr);
        if (!isNaN(parsed.getTime())) {
          return parsed;
        }
      }
      
      // Format: "20 & 21 June | 10:00 AM" (Day Month) - be more specific
      const dayMonthMatch = cleanDate.match(/^(\d{1,2})\s*[&\w\s]*?\s*([A-Za-z]{3,})/);
      if (dayMonthMatch) {
        const [, day, monthPart] = dayMonthMatch;
        // Extract just the month name (in case there's extra text)
        const monthMatch = monthPart.match(/^([A-Za-z]{3,})/);
        if (monthMatch) {
          const month = monthMatch[1];
          const dateStr = `${month} ${day}, ${currentYear}`;
          const parsed = new Date(dateStr);
          if (!isNaN(parsed.getTime())) {
            return parsed;
          }
        }
      }
      
      // Format: "June 24 and 25 | 8:00 PM" - use first date (Full month name)
      const longMonthMatch = cleanDate.match(/([A-Za-z]{4,})\s+(\d{1,2})/);
      if (longMonthMatch) {
        const [, month, day] = longMonthMatch;
        const dateStr = `${month} ${day}, ${currentYear}`;
        const parsed = new Date(dateStr);
        if (!isNaN(parsed.getTime())) {
          return parsed;
        }
      }
      
      // Format: "19, 21 and 27th of June 2025" - extract first number, month and year
      const complexYearMatch = cleanDate.match(/(\d{1,2})[,\s]+.*?([A-Za-z]{3,})\s+(\d{4})/);
      if (complexYearMatch) {
        const [, day, month, year] = complexYearMatch;
        const dateStr = `${month} ${day}, ${year}`;
        const parsed = new Date(dateStr);
        if (!isNaN(parsed.getTime())) {
          return parsed;
        }
      }
      
      return null;
    } catch (error) {
      return null;
    }
  };

  // Check if date is valid (not placeholder text)
  const hasValidDate = (dateString: string): boolean => {
    const lowercaseDate = dateString.toLowerCase();
    return !lowercaseDate.includes('tba') && 
           !lowercaseDate.includes('coming soon') && 
           !lowercaseDate.includes('date not available') &&
           dateString.trim() !== '';
  };

  // Extract numeric price from price string
  const extractPrice = (priceString: string): number => {
    // Return 0 for placeholder prices
    const lowercasePrice = priceString.toLowerCase();
    if (lowercasePrice.includes('not available') || 
        lowercasePrice.includes('check website') || 
        lowercasePrice.includes('various') ||
        lowercasePrice.includes('tba')) {
      return 0;
    }
    
    // Extract all number patterns including those with commas
    const numberMatches = priceString.match(/\d{1,3}(?:,\d{3})*|\d+/g);
    if (!numberMatches || numberMatches.length === 0) {
      return 0;
    }
    
    // Convert to integers (removing commas) and find the minimum
    const prices = numberMatches.map(num => parseInt(num.replace(/,/g, ''), 10));
    return Math.min(...prices);
  };

  // Filter events based on category
  const filterEvents = (events: Event[], filter: 'all' | 'concerts' | 'theater') => {
    if (filter === 'all') return events;
    
    return events.filter(event => {
      const title = event.title.toLowerCase();
      switch (filter) {
        case 'concerts':
          return title.includes('concert') || 
                 title.includes('music') || 
                 title.includes('brothers') || 
                 title.includes('diab') ||
                 title.includes('cairokee') ||
                 title.includes('festival');
        case 'theater':
          return title.includes('theater') || 
                 title.includes('show') || 
                 title.includes('comedy') || 
                 title.includes('brilliant') ||
                 title.includes('theatro');
        default:
          return true;
      }
    });
  };

  // Apply sorting and filtering when dependencies change
  useEffect(() => {
    let filtered = filterEvents(allEvents, selectedFilter);
    let sorted = sortEvents(filtered, sortBy);
    
    setDisplayedEvents(sorted);
  }, [allEvents, sortBy, selectedFilter]);

  const handleSortChange = (newSort: 'date' | 'price' | 'name') => {
    setSortBy(newSort);
  };

  const handleFilterChange = (newFilter: 'all' | 'concerts' | 'theater') => {
    setSelectedFilter(newFilter);
  };

  // Manual refresh function
  const handleManualRefresh = () => {
    fetchEvents(true);
  };

  if (loading) {
    return (
      <div className="container-custom py-12">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-custom py-12">
        <div className="text-center text-red-500">
          <p>Error: {error}</p>
          <Button 
            onClick={handleManualRefresh} 
            className="mt-4"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-12">
      {/* Custom Hero Section with Video Background */}
      <section className="relative h-[70vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/mypics/2361938-uhd_3840_2160_30fps.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="/images/mypics/events-banner.jpg"
              alt="Events Hero"
              fill
              className="object-cover"
              priority
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
        </div>
        <div className="container-custom relative z-10 h-full flex flex-col justify-center text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('events.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {t('events.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="container-custom py-12">
        {/* Filters Section */}
        <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4">
            <Button 
              variant={selectedFilter === 'all' ? 'default' : 'outline'} 
              className="rounded-full"
              onClick={() => handleFilterChange('all')}
            >
              {t('events.filters.all')}
            </Button>
            <Button 
              variant={selectedFilter === 'concerts' ? 'default' : 'outline'} 
              className="rounded-full"
              onClick={() => handleFilterChange('concerts')}
            >
              {t('events.filters.concerts')}
            </Button>
            <Button 
              variant={selectedFilter === 'theater' ? 'default' : 'outline'} 
              className="rounded-full"
              onClick={() => handleFilterChange('theater')}
            >
              {t('events.filters.theater')}
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {t('events.sortBy')}
            </span>
            <select 
              className="border rounded-md px-3 py-1 text-sm"
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value as 'date' | 'price' | 'name')}
            >
              <option value="date">{t('events.sort.date')}</option>
              <option value="price">{t('events.sort.price')}</option>
              <option value="name">{t('events.sort.name')}</option>
            </select>
          </div>
        </div>

        {/* Status Bar with Refresh Info */}
        <div className="mb-4 flex flex-wrap gap-4 items-center justify-between text-sm text-gray-600">
          <div>
            {displayedEvents.length} upcoming events found
            {selectedFilter !== 'all' && ` in ${selectedFilter}`}
            {sortBy && ` sorted by ${sortBy}`}
          </div>
          <div className="flex items-center gap-4">
            <span>Last updated: {lastRefresh.toLocaleTimeString()}</span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleManualRefresh}
              disabled={loading}
            >
              {loading ? 'Refreshing...' : 'Refresh Now'}
            </Button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedEvents.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={event.image || '/images/placeholder-event.jpg'}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {event.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {event.price}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className={`inline-block w-2 h-2 rounded-full ${
                        event.source === 'ticketsmarche' ? 'bg-blue-500' : 'bg-green-500'
                      }`}></span>
                      <span className="text-xs capitalize">{event.source}</span>
                    </div>
                  </div>
                  <Link
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block"
                  >
                    <Button className="w-full">
                      {t('events.bookNow')}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {displayedEvents.length === 0 && !loading && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">
              {selectedFilter === 'all' ? 'No upcoming events found' : `No upcoming ${selectedFilter} events found`}
            </h3>
            <p className="text-gray-600 mb-4">
              {selectedFilter === 'all' ? 'All events may have passed or new events haven\'t been added yet.' : 'Try selecting a different category or check back later.'}
            </p>
            <div className="flex gap-4 justify-center">
              {selectedFilter !== 'all' && (
                <Button 
                  onClick={() => handleFilterChange('all')} 
                  variant="outline"
                >
                  Show All Events
                </Button>
              )}
              <Button onClick={handleManualRefresh}>
                Refresh Events
              </Button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
} 