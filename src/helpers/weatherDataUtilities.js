import { formatHoursAmPm, getDayOfWeek } from "./dateUtilities.js";

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

function formatHourlyWeatherData(hourlyWeatherData) {
  const formattedHourlyWeatherData = {};
  const weekDays = new Set();

  const { time, weather_code, apparent_temperature } = hourlyWeatherData;

  time.forEach((timeStamp, index) => {
    const dayKey = getDayOfWeek(timeStamp);
    weekDays.add(dayKey);
    const hourlyData = {
      timeStamp,
      hour: formatHoursAmPm(timeStamp),
      apparentTemperature: Math.round(apparent_temperature[index]),
      weatherCode: weather_code[index],
    };

    if (!formattedHourlyWeatherData[dayKey]) {
      formattedHourlyWeatherData[dayKey] = {
        date: dayKey,
        dayOfWeek: getDayOfWeek(timeStamp),
        hours: [],
      };
    }

    formattedHourlyWeatherData[dayKey].hours.push(hourlyData);
  });

  return {
    hourly_data: Object.values(formattedHourlyWeatherData),
    week_days: [...weekDays],
  };
}

function getWeatherInfo(weatherCode) {
  const weatherMap = {
    0: { icon: "icon-sunny.webp", description: "Clear sky" },
    1: { icon: "icon-partly-cloudy.webp", description: "Mainly clear" },
    2: { icon: "icon-partly-cloudy.webp", description: "Partly cloudy" },
    3: { icon: "icon-overcast.webp", description: "Overcast" },
    45: { icon: "icon-fog.webp", description: "Fog" },
    48: { icon: "icon-fog.webp", description: "Depositing rime fog" },
    51: { icon: "icon-drizzle.webp", description: "Light drizzle" },
    53: { icon: "icon-drizzle.webp", description: "Moderate drizzle" },
    55: { icon: "icon-drizzle.webp", description: "Dense drizzle" },
    56: { icon: "icon-drizzle.webp", description: "Light freezing drizzle" },
    57: { icon: "icon-drizzle.webp", description: "Dense freezing drizzle" },
    61: { icon: "icon-rain.webp", description: "Slight rain" },
    63: { icon: "icon-rain.webp", description: "Moderate rain" },
    65: { icon: "icon-rain.webp", description: "Heavy rain" },
    66: { icon: "icon-rain.webp", description: "Light freezing rain" },
    67: { icon: "icon-rain.webp", description: "Heavy freezing rain" },
    71: { icon: "icon-snow.webp", description: "Slight snow" },
    73: { icon: "icon-snow.webp", description: "Moderate snow" },
    75: { icon: "icon-snow.webp", description: "Heavy snow" },
    77: { icon: "icon-snow.webp", description: "Snow grains" },
    80: { icon: "icon-rain.webp", description: "Slight rain showers" },
    81: { icon: "icon-rain.webp", description: "Moderate rain showers" },
    82: { icon: "icon-rain.webp", description: "Violent rain showers" },
    85: { icon: "icon-snow.webp", description: "Slight snow showers" },
    86: { icon: "icon-snow.webp", description: "Heavy snow showers" },
    95: { icon: "icon-storm.webp", description: "Thunderstorm" },
    96: {
      icon: "icon-storm.webp",
      description: "Thunderstorm with slight hail",
    },
    99: {
      icon: "icon-storm.webp",
      description: "Thunderstorm with heavy hail",
    },
  };

  const info = weatherMap[weatherCode] || {
    icon: "icon-sunny.webp",
    description: "Unknown",
  };

  return {
    icon: `/images/${info.icon}`,
    description: info.description,
  };
}

export { formatDailyWeatherData, formatHourlyWeatherData, getWeatherInfo };
