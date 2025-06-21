import { NextRequest, NextResponse } from 'next/server';

// Egyptian cities with their coordinates for weather API
const cityCoordinates: Record<string, { lat: number; lon: number }> = {
  cairo: { lat: 30.0444, lon: 31.2357 },
  luxor: { lat: 25.6872, lon: 32.6396 },
  aswan: { lat: 24.0889, lon: 32.8998 },
  siwa: { lat: 29.2041, lon: 25.5195 },
  fayoum: { lat: 29.3084, lon: 30.8428 },
  alexandria: { lat: 31.2001, lon: 29.9187 },
  hurghada: { lat: 27.2579, lon: 33.8116 },
  "sharm-el-sheikh": { lat: 27.9158, lon: 34.3299 },
};

export async function GET(
  request: NextRequest,
  { params }: { params: { city: string } }
) {
  try {
    console.log('Weather API called for city:', params.city);
    
    const cityId = params.city;
    const coords = cityCoordinates[cityId];
    
    if (!coords) {
      console.log('City not found:', cityId);
      return NextResponse.json(
        { error: `City not found: ${cityId}` },
        { status: 404 }
      );
    }

    console.log('Fetching weather for coordinates:', coords);

    const API_KEY = "a4955dc7ed085e8a08468ae85d749f7a"; // Working API key
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`;
    
    console.log('Calling OpenWeatherMap API...');
    
    const response = await fetch(weatherUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log('OpenWeatherMap response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenWeatherMap API error:', response.status, errorText);
      
      // If it's an API key error, return a specific message
      if (response.status === 401) {
        return NextResponse.json(
          { 
            error: "API key authentication failed", 
            details: "Please check your OpenWeatherMap API key. It may need to be activated or is invalid.",
            fallback: true 
          },
          { status: 401 }
        );
      }
      
      throw new Error(`Weather API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Weather data received:', data);
    
    const weatherData = {
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
      icon: data.weather[0].icon,
    };

    console.log('Processed weather data:', weatherData);

    return NextResponse.json(weatherData);
  } catch (error) {
    console.error("Error in weather API route:", error);
    return NextResponse.json(
      { error: "Failed to fetch weather data", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 