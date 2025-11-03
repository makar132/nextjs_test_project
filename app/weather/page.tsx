import { getWeatherData } from "@/lib/weather-data";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const weather = await getWeatherData();
    return {
        title: `Weather in ${weather.city}`,
        description: `Current weather: ${weather.forecast}, ${weather.temperature}°C`,
    };
}
import React from 'react'

async function WeatherPage() {
    const weather = await getWeatherData();
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Weather Information</h1>
                <div className="bg-gray-700 rounded-lg shadow-2xl p-8 text-white">
                    <div className="text-center mb-8">
                        <div className="text-8xl mb-4">☀️</div>
                        <h2 className="text-3xl font-bold">{weather.city}</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-5xl font-bold mb-2">{weather.temperature}°C</div>
                            <div className="text-lg opacity-90">Temperature</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold mb-2">{weather.humidity}%</div>
                            <div className="text-lg opacity-90">Humidity</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 col-span-2">
                            <div className="text-xl font-semibold mb-2">{weather.forecast}</div>
                            <div className="text-sm opacity-90">Forecast</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 col-span-2">
                            <div className="text-2xl font-bold mb-2">{weather.windSpeed} km/h</div>
                            <div className="text-lg opacity-90">Wind Speed</div>
                        </div>
                    </div>
                    <div className="mt-6 text-center text-sm opacity-75">
                        Data fetched using Server-Side Rendering (SSR)
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherPage