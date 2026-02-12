import { getDayOfWeek } from "./dateUtilities.js";

function formatDailyWeatherData(dailyWeatherData) {
  const formattedDailyWeatherData = [];

  const { time, temperature_2m_max, temperature_2m_min } = dailyWeatherData;

  for (const index in time) {
    formattedDailyWeatherData.push({
      date: getDayOfWeek(time[index], "short"),
      maxTemperature: temperature_2m_max[index],
      minTemperature: temperature_2m_min[index],
    });
  }

  return formattedDailyWeatherData;
}

export { formatDailyWeatherData };
