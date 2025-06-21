"use client";

import { useState, useEffect } from 'react';
import { getWeatherForCity } from '@/lib/weather';
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets } from 'lucide-react';
import Image from 'next/image';

interface WeatherCardProps {
  cityId: string;
  cityName: string;
  isVisible: boolean;
}

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export function WeatherCard({ cityId, cityName, isVisible }: WeatherCardProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isVisible && !weather) {
      fetchWeather();
    }
  }, [isVisible, cityId]);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const weatherData = await getWeatherForCity(cityId);
      if (weatherData) {
        setWeather(weatherData);
      } else {
        setError('Unable to fetch weather data');
      }
    } catch (err) {
      setError('Failed to load weather information');
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (iconCode: string) => {
    // Use OpenWeatherMap icons
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    return (
      <Image
        src={iconUrl}
        alt="Weather icon"
        width={48}
        height={48}
        className="w-12 h-12"
      />
    );
  };

  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-20 rounded-xl">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4 shadow-2xl">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">Loading weather...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <Cloud className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300 text-sm">{error}</p>
          </div>
        ) : weather ? (
          <div className="space-y-4">
            {/* Header */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {cityName}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Current Weather
              </p>
            </div>

            {/* Temperature */}
            <div className="flex items-center justify-center space-x-3">
              {getWeatherIcon(weather.icon)}
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {weather.temperature}°C
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                  {weather.description}
                </div>
              </div>
            </div>

            {/* Weather Details */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Droplets className="w-4 h-4 text-blue-500" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Humidity</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {weather.humidity}%
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Wind className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Wind</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {weather.windSpeed} km/h
                  </p>
                </div>
              </div>
            </div>

            {/* Refresh Button */}
            <button
              onClick={fetchWeather}
              className="w-full mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Refresh
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
} 