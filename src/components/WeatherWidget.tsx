import { useEffect, useState } from 'react';
import './WeatherWidget.css';

type WeatherData = {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
};

const forecastUrl = 'https://api.open-meteo.com/v1/forecast?latitude=43.5890&longitude=-79.6441&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&temperature_unit=celsius&timezone=America%2FToronto&forecast_days=1';

const getCondition = (code: number) => {
  if (code === 0) return 'Clear';
  if (code <= 2) return 'Partly cloudy';
  if (code === 3) return 'Cloudy';
  if (code === 45 || code === 48) return 'Foggy';
  if (code <= 57) return 'Drizzle';
  if (code <= 67 || (code >= 80 && code <= 82)) return 'Rain';
  if (code <= 77 || (code >= 85 && code <= 86)) return 'Snow';
  if (code >= 95) return 'Thunderstorms';
  return 'Cloudy';
};

const WeatherGlyph = ({ code }: { code: number }) => {
  if (code === 0 || code === 1) {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="6" fill="currentColor" />
        <g stroke="currentColor" strokeLinecap="round" strokeWidth="2">
          <path d="M16 2v4M16 26v4M2 16h4M26 16h4M6.1 6.1 9 9M23 23l2.9 2.9M25.9 6.1 23 9M9 23l-2.9 2.9" />
        </g>
      </svg>
    );
  }

  if (code === 2) {
    return (
      <svg viewBox="0 0 40 32" aria-hidden="true">
        <circle cx="27" cy="10" r="6" fill="currentColor" opacity=".9" />
        <path d="M11 27h20a6 6 0 0 0 0-12 9 9 0 0 0-17-2 7 7 0 0 0-3 14Z" fill="currentColor" />
      </svg>
    );
  }

  if (code >= 51 && code <= 67 || (code >= 80 && code <= 82)) {
    return (
      <svg viewBox="0 0 40 38" aria-hidden="true">
        <path d="M10 23h21a6 6 0 0 0 0-12 9 9 0 0 0-17-2 7 7 0 0 0-4 14Z" fill="currentColor" />
        <g stroke="#a9d7ff" strokeLinecap="round" strokeWidth="3">
          <path d="m14 28-2 5M23 28l-2 5M32 28l-2 5" />
        </g>
      </svg>
    );
  }

  if (code >= 71 && code <= 86) {
    return (
      <svg viewBox="0 0 40 38" aria-hidden="true">
        <path d="M10 23h21a6 6 0 0 0 0-12 9 9 0 0 0-17-2 7 7 0 0 0-4 14Z" fill="currentColor" />
        <g fill="#d8efff">
          <circle cx="13" cy="30" r="2" /><circle cx="22" cy="34" r="2" /><circle cx="31" cy="29" r="2" />
        </g>
      </svg>
    );
  }

  if (code >= 95) {
    return (
      <svg viewBox="0 0 40 38" aria-hidden="true">
        <path d="M10 23h21a6 6 0 0 0 0-12 9 9 0 0 0-17-2 7 7 0 0 0-4 14Z" fill="currentColor" />
        <path d="m22 23-6 8h5l-2 6 8-10h-5l2-4Z" fill="#ffe27a" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 32" aria-hidden="true">
      <path d="M9 25h22a6 6 0 0 0 0-12 9 9 0 0 0-17-2 7 7 0 0 0-5 14Z" fill="currentColor" />
    </svg>
  );
};

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const loadWeather = async () => {
      try {
        const response = await fetch(forecastUrl, { signal: controller.signal });
        if (!response.ok) throw new Error('Weather request failed');

        const data = await response.json() as WeatherData;
        if (!data.current || !data.daily?.temperature_2m_max?.length || !data.daily.temperature_2m_min?.length) {
          throw new Error('Weather response is incomplete');
        }

        setWeather(data);
        setHasError(false);
      } catch {
        if (!controller.signal.aborted) setHasError(true);
      }
    };

    void loadWeather();
    const refreshTimer = window.setInterval(() => void loadWeather(), 15 * 60 * 1000);

    return () => {
      controller.abort();
      window.clearInterval(refreshTimer);
    };
  }, []);

  return (
    <section className="weather-widget" aria-label="Current weather in Mississauga">
      <div className="weather-location">
        <h2>Mississauga</h2>
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M17.7 2.3 10.8 17a1 1 0 0 1-1.8-.1l-1.8-5.4-5.4-1.8a1 1 0 0 1-.1-1.8l14.7-6.9a1 1 0 0 1 1.3 1.3Z" fill="currentColor" />
        </svg>
      </div>

      <div className="weather-temperature" aria-live="polite">
        {weather ? `${Math.round(weather.current.temperature_2m)}°` : '—°'}
      </div>

      <div className="weather-summary" aria-live="polite">
        {weather && <WeatherGlyph code={weather.current.weather_code} />}
        <span>{hasError ? 'Weather unavailable' : weather ? getCondition(weather.current.weather_code) : 'Loading weather'}</span>
      </div>

      <p className="weather-range">
        {weather
          ? `H:${Math.round(weather.daily.temperature_2m_max[0])}° L:${Math.round(weather.daily.temperature_2m_min[0])}°`
          : 'H:—° L:—°'}
      </p>
    </section>
  );
};

export default WeatherWidget;