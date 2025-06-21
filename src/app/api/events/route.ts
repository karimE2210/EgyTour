import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';
import type { Event } from '@/types/events';

async function scrapeTicketsMarche(): Promise<Event[]> {
  try {
    const response = await axios.get('https://www.ticketsmarche.com', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    const $ = cheerio.load(response.data);
    const events: Event[] = [];

    // Updated selectors based on the actual TicketsMarche HTML structure
    $('.splide__slide').each((_: number, element: cheerio.Element) => {
      const $element = $(element);
      
      const title = $element.find('.event-name').text().trim();
      const date = $element.find('.event-date').text().trim();
      const priceText = $element.find('.event-price').text().trim();
      const price = priceText.replace('Price: ', '').trim();
      const image = $element.find('.category_image').attr('src') || '';
      const linkHref = $element.find('a').attr('href') || '';
      const link = linkHref.startsWith('http') ? linkHref : `https://www.ticketsmarche.com${linkHref}`;

      if (title && date) {
        events.push({
          title,
          date,
          price: price || 'Price not available',
          image,
          link,
          source: 'ticketsmarche'
        });
      }
    });

    return events;
  } catch (error) {
    console.error('Error scraping TicketsMarche:', error);
    return [];
  }
}

async function scrapeTazkarti(): Promise<Event[]> {
  try {
    // Since Tazkarti uses JavaScript rendering, we'll return mock data for now
    // In production, you would need Puppeteer or a different approach
    const mockEvents: Event[] = [
      {
        title: "Cairokee Empire - Stadium Edition",
        date: "Date TBA",
        price: "Check website for pricing",
        image: "https://www.tazkarti.com/assets/images/imagesref/ef0970e3-6930-4223-b69e-9aa60e3416cd.png",
        link: "https://www.tazkarti.com/#/events/category/68",
        source: 'tazkarti'
      },
      {
        title: "El Gouna Film Festival 2024",
        date: "October 2024",
        price: "Various pricing",
        image: "https://www.tazkarti.com/assets/images/placeholder.jpg",
        link: "https://www.tazkarti.com/#/events/category/film",
        source: 'tazkarti'
      },
      {
        title: "Cairo Opera House - Classical Night",
        date: "Coming Soon",
        price: "EGP 200 - 800",
        image: "https://www.tazkarti.com/assets/images/placeholder.jpg",
        link: "https://www.tazkarti.com/#/events/category/opera",
        source: 'tazkarti'
      }
    ];

    console.log('Returning mock Tazkarti events:', mockEvents.length);
    return mockEvents;
  } catch (error) {
    console.error('Error with Tazkarti mock events:', error);
    return [];
  }
}

export async function GET() {
  try {
    // Fetch events from both sources in parallel
    const [ticketsMarcheEvents, tazkartiEvents] = await Promise.all([
      scrapeTicketsMarche(),
      scrapeTazkarti()
    ]);
    
    // Combine events from different sources
    const allEvents = [...ticketsMarcheEvents, ...tazkartiEvents];
    
    // Sort events by date (optional)
    allEvents.sort((a, b) => {
      // Simple date comparison - you might want to improve this
      return a.date.localeCompare(b.date);
    });
    
    return NextResponse.json(allEvents);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
} 