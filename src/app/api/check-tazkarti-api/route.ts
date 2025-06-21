import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    console.log('Analyzing Tazkarti for API endpoints...');
    
    // 1. Check the main page for API calls
    const response = await axios.get('https://www.tazkarti.com', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const html = response.data;
    
    // 2. Look for common API patterns in the HTML/JavaScript
    const apiPatterns = [
      /api[\/\.][\w\/\-\.]+/gi,
      /\/api\/[\w\/\-]+/gi,
      /https?:\/\/[\w\-\.]+\/api/gi,
      /axios\.get\(['"`](.*?)['"`]/gi,
      /fetch\(['"`](.*?)['"`]/gi,
      /\.json\(\)/gi,
      /endpoints?['":\s]*['"`](.*?)['"`]/gi
    ];
    
    const foundEndpoints = new Set<string>();
    
    apiPatterns.forEach(pattern => {
      const matches = html.match(pattern);
      if (matches) {
        matches.forEach((match: string) => foundEndpoints.add(match));
      }
    });
    
    // 3. Try common API endpoint patterns
    const commonEndpoints = [
      'https://www.tazkarti.com/api/events',
      'https://api.tazkarti.com/events',
      'https://www.tazkarti.com/api/v1/events',
      'https://tazkarti.com/api/events',
      'https://backend.tazkarti.com/api/events',
      'https://www.tazkarti.com/events.json',
      'https://www.tazkarti.com/api/public/events'
    ];
    
    const endpointTests = await Promise.allSettled(
      commonEndpoints.map(async (endpoint) => {
        try {
          const testResponse = await axios.get(endpoint, {
            timeout: 5000,
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
          });
          return {
            endpoint,
            status: testResponse.status,
            success: true,
            contentType: testResponse.headers['content-type'],
            dataPreview: JSON.stringify(testResponse.data).substring(0, 200)
          };
        } catch (error) {
          return {
            endpoint,
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
          };
        }
      })
    );
    
    // 4. Check for robots.txt which might reveal API paths
    let robotsTxt = '';
    try {
      const robotsResponse = await axios.get('https://www.tazkarti.com/robots.txt');
      robotsTxt = robotsResponse.data;
    } catch (error) {
      robotsTxt = 'No robots.txt found';
    }
    
    // 5. Look for sitemap which might show API structure
    let sitemap = '';
    try {
      const sitemapResponse = await axios.get('https://www.tazkarti.com/sitemap.xml');
      sitemap = sitemapResponse.data.substring(0, 500);
    } catch (error) {
      sitemap = 'No sitemap found';
    }
    
    return NextResponse.json({
      analysis: {
        htmlSize: html.length,
        foundEndpoints: Array.from(foundEndpoints),
        endpointTests: endpointTests.map(result => 
          result.status === 'fulfilled' ? result.value : { error: result.reason }
        ),
        robotsTxt,
        sitemap,
        recommendations: [
          '1. Check browser Network tab while browsing events',
          '2. Look for XHR/Fetch requests to API endpoints',
          '3. Check if Tazkarti has developer documentation',
          '4. Try contacting Tazkarti for API access',
          '5. Consider using Puppeteer for JavaScript rendering'
        ]
      }
    });
    
  } catch (error) {
    console.error('Error analyzing Tazkarti:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Analysis failed' },
      { status: 500 }
    );
  }
} 