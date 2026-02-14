import { bool, object } from "prop-types";
import WeekDay from "./WeekDay.jsx";
import { formatHourlyWeatherData } from "../helpers/weatherDataUtilities.js";
import { useState } from "react";
import LiveHourlyData from "./LiveHourlyData.jsx";
import LoadingHourlyData from "./LoadingHourlyData.jsx";

export default function HourlyForecast({ hourlyData, isLoading }) {
  const { hourly_data, week_days } = isLoading
    ? { hourly_data: [], week_days: [] }
    : formatHourlyWeatherData(hourlyData);
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  const activeDay = hourly_data[activeDayIndex];

  return (
    <section className="lg:col-start-3 lg:row-span-2 h-full bg-neutral-800 rounded-lg p-4 space-y-3">
      <header className="shrink-0 flex justify-between items-center">
        <h2 className="text-[15px] font-bold">Hourly forecast</h2>
        <WeekDay
          weekDays={week_days}
          activeDayIndex={activeDayIndex}
          setActiveDayIndex={setActiveDayIndex}
          isLoading={isLoading}
        />
      </header>
      {isLoading ? (
        <LoadingHourlyData />
      ) : (
        <LiveHourlyData data={activeDay.hours} />
      )}{" "}
    </section>
  );
}

HourlyForecast.propTypes = {
  hourlyData: object.isRequired,
  isLoading: bool,
};
