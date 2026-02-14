import { METRIC_UNITS } from "../constants/unitsSystems.js";

async function fetchWeatherData(longitude, latitude, units) {
  const temperatureUnitQuery = `${units.TEMPERATURE === METRIC_UNITS.TEMPERATURE ? "" : `&temperature_unit=${units.TEMPERATURE}`}`;
  const precipitationUnitQuery = `${units.PRECIPITATION === METRIC_UNITS.PRECIPITATION ? "" : `&precipitation_unit=${units.PRECIPITATION}`}`;
  const windSpeedUnitQuery = `${units.WIND_SPEED === METRIC_UNITS.WIND_SPEED ? "" : `&wind_speed_unit=${units.WIND_SPEED}`}`;

  try {
    const URL =
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=weather_code,apparent_temperature&current=precipitation,relative_humidity_2m,wind_speed_10m,temperature_2m,apparent_temperature&timezone=auto${temperatureUnitQuery}${precipitationUnitQuery}${windSpeedUnitQuery}`.trim();

    const response = await fetch(URL, { mode: "cors" });
    const data = await response.json();

    // API specific errors
    if (data.error) {
      throw new Error(data.reason || "Unknown API error");
    }

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    if (!data) {
      throw new Error("Failed to retrieve weather data");
    }

    return data;
  } catch (error) {
    console.error("Weather data fetching failed with error: ", error);
    throw error;
  }
}

export { fetchWeatherData };
