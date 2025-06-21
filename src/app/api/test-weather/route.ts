import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('Testing OpenWeatherMap API...');
    
    const API_KEY = "a4955dc7ed085e8a08468ae85d749f7a"; // Working API key
    const testUrl = `https://api.openweathermap.org/data/2.5/weather?lat=30.0444&lon=31.2357&appid=${API_KEY}&units=metric`;
    
    console.log('Test URL:', testUrl);
    
    const response = await fetch(testUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log('Test response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Test API error:', response.status, errorText);
      
      if (response.status === 401) {
        return NextResponse.json(
          { 
            error: `API key authentication failed (${response.status})`, 
            details: errorText,
            message: "Your OpenWeatherMap API key needs to be activated. Please check your account."
          },
          { status: 401 }
        );
      }
      
      return NextResponse.json(
        { error: `Test failed: ${response.status}`, details: errorText },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log('Test data received:', data);
    
    return NextResponse.json({
      success: true,
      data: data,
      message: 'OpenWeatherMap API is working correctly'
    });
  } catch (error) {
    console.error("Test error:", error);
    return NextResponse.json(
      { error: "Test failed", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 