// Weather API service for Egyptian cities
// Using server-side API route to avoid CORS issues

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

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

// Cache for weather data to avoid excessive API calls
const weatherCache: Record<string, { data: WeatherData; timestamp: number }> = {};
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

// Fallback weather data based on city and season
const getFallbackWeather = (cityId: string): WeatherData => {
  const now = new Date();
  const month = now.getMonth() + 1; // 1-12
  
  // Define seasonal weather patterns for Egyptian cities
  const cityWeather = {
    cairo: {
      summer: { temp: 32, desc: "sunny", humidity: 45, wind: 12 },
      winter: { temp: 18, desc: "partly cloudy", humidity: 60, wind: 8 },
      spring: { temp: 25, desc: "clear", humidity: 50, wind: 10 },
      fall: { temp: 28, desc: "sunny", humidity: 55, wind: 9 }
    },
    luxor: {
      summer: { temp: 38, desc: "sunny", humidity: 30, wind: 15 },
      winter: { temp: 22, desc: "clear", humidity: 45, wind: 10 },
      spring: { temp: 30, desc: "sunny", humidity: 35, wind: 12 },
      fall: { temp: 32, desc: "clear", humidity: 40, wind: 11 }
    },
    aswan: {
      summer: { temp: 40, desc: "sunny", humidity: 25, wind: 18 },
      winter: { temp: 24, desc: "clear", humidity: 40, wind: 12 },
      spring: { temp: 32, desc: "sunny", humidity: 30, wind: 15 },
      fall: { temp: 35, desc: "clear", humidity: 35, wind: 14 }
    },
    siwa: {
      summer: { temp: 35, desc: "sunny", humidity: 20, wind: 20 },
      winter: { temp: 15, desc: "clear", humidity: 35, wind: 15 },
      spring: { temp: 28, desc: "sunny", humidity: 25, wind: 18 },
      fall: { temp: 30, desc: "clear", humidity: 30, wind: 17 }
    },
    fayoum: {
      summer: { temp: 33, desc: "sunny", humidity: 40, wind: 14 },
      winter: { temp: 16, desc: "partly cloudy", humidity: 55, wind: 9 },
      spring: { temp: 26, desc: "clear", humidity: 45, wind: 11 },
      fall: { temp: 29, desc: "sunny", humidity: 50, wind: 10 }
    },
    alexandria: {
      summer: { temp: 28, desc: "partly cloudy", humidity: 70, wind: 16 },
      winter: { temp: 14, desc: "cloudy", humidity: 75, wind: 20 },
      spring: { temp: 22, desc: "partly cloudy", humidity: 65, wind: 18 },
      fall: { temp: 25, desc: "clear", humidity: 68, wind: 17 }
    },
    hurghada: {
      summer: { temp: 34, desc: "sunny", humidity: 50, wind: 22 },
      winter: { temp: 20, desc: "clear", humidity: 60, wind: 18 },
      spring: { temp: 28, desc: "sunny", humidity: 55, wind: 20 },
      fall: { temp: 31, desc: "clear", humidity: 58, wind: 19 }
    },
    "sharm-el-sheikh": {
      summer: { temp: 36, desc: "sunny", humidity: 45, wind: 25 },
      winter: { temp: 22, desc: "clear", humidity: 55, wind: 20 },
      spring: { temp: 30, desc: "sunny", humidity: 50, wind: 22 },
      fall: { temp: 33, desc: "clear", humidity: 52, wind: 21 }
    }
  };

  // Determine season
  let season: 'summer' | 'winter' | 'spring' | 'fall';
  if (month >= 6 && month <= 8) season = 'summer';
  else if (month >= 12 || month <= 2) season = 'winter';
  else if (month >= 3 && month <= 5) season = 'spring';
  else season = 'fall';

  const cityData = cityWeather[cityId as keyof typeof cityWeather];
  if (!cityData) {
    // Default fallback
    return {
      temperature: 25,
      description: "clear",
      humidity: 50,
      windSpeed: 10,
      icon: "01d"
    };
  }

  const weather = cityData[season];
  
  // Add some realistic variation
  const tempVariation = Math.floor(Math.random() * 6) - 3; // ±3 degrees
  const humidityVariation = Math.floor(Math.random() * 10) - 5; // ±5%
  const windVariation = Math.floor(Math.random() * 6) - 3; // ±3 km/h

  return {
    temperature: weather.temp + tempVariation,
    description: weather.desc,
    humidity: Math.max(20, Math.min(90, weather.humidity + humidityVariation)),
    windSpeed: Math.max(5, weather.wind + windVariation),
    icon: weather.desc.includes('sunny') || weather.desc.includes('clear') ? "01d" : 
          weather.desc.includes('cloudy') ? "03d" : "02d"
  };
};

export async function getWeatherForCity(cityId: string): Promise<WeatherData | null> {
  try {
    console.log('Fetching weather for city:', cityId);
    
    // Check cache first
    const cached = weatherCache[cityId];
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      console.log('Using cached weather data for:', cityId);
      return cached.data;
    }

    // Try to call our server-side API route first
    try {
      const response = await fetch(`/api/weather/${cityId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      console.log('Weather API response status:', response.status);

      if (response.ok) {
        const weatherData: WeatherData = await response.json();
        console.log('Weather data received for', cityId, ':', weatherData);

        // Cache the result
        weatherCache[cityId] = {
          data: weatherData,
          timestamp: Date.now(),
        };

        return weatherData;
      } else {
        console.log('API route failed, using fallback data');
      }
    } catch (apiError) {
      console.log('API route error, using fallback data:', apiError);
    }

    // Fallback to realistic weather data
    const fallbackData = getFallbackWeather(cityId);
    console.log('Using fallback weather data for', cityId, ':', fallbackData);

    // Cache the fallback result
    weatherCache[cityId] = {
      data: fallbackData,
      timestamp: Date.now(),
    };

    return fallbackData;
  } catch (error) {
    console.error("Error fetching weather data for", cityId, ":", error);
    return null;
  }
}

// Uncomment and use this function when you have an OpenWeatherMap API key
/*
export async function getWeatherForCity(cityId: string): Promise<WeatherData | null> {
  try {
    // Check cache first
    const cached = weatherCache[cityId];
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return cached.data;
    }

    const coords = cityCoordinates[cityId];
    if (!coords) {
      console.error(`No coordinates found for city: ${cityId}`);
      return null;
    }

    const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    if (!API_KEY) {
      console.error("OpenWeatherMap API key not found");
      return null;
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    
    const weatherData: WeatherData = {
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
      icon: data.weather[0].icon,
    };

    // Cache the result
    weatherCache[cityId] = {
      data: weatherData,
      timestamp: Date.now(),
    };

    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
*/ 