export interface WeatherData {
  city: string;
  temperature: number;
  forecast: string;
  humidity: number;
  windSpeed: number;
}

export async function getWeatherData(): Promise<WeatherData> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Mock weather data
  return {
    city: "Cairo",
    temperature: 28,
    forecast: "Sunny with clear skies",
    humidity: 45,
    windSpeed: 12,
  };
}
