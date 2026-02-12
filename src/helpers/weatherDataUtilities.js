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

export { formatDailyWeatherData, formatHourlyWeatherData };
