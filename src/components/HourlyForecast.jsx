import { object } from "prop-types";
import WeekDay from "./WeekDay.jsx";
import { formatHourlyWeatherData } from "../helpers/weatherDataUtilities.js";
import { useState } from "react";

export default function HourlyForecast({ hourlyData }) {
  const { hourly_data, week_days } = formatHourlyWeatherData(hourlyData);
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
        />
      </header>
      <ul className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 max-h-110 py-2 overflow-auto scrollbar-custom overscroll-contain">
        {activeDay.hours.map((hourData, index) => {
          return (
            <li
              key={`data-${index}`}
              className="flex justify-between items-center h-12 rounded-md bg-neutral-700 text-sm md:text-base py-3 px-2.5 shrink-0"
            >
              <p className="flex items-center">
                <span className="size-10 flex items-center justify-center">
                  <img src="/images/icon-fog.webp" alt="" />
                </span>
                <span>{hourData.hour}</span>
              </p>
              <span>{hourData.apparentTemperature}°</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

HourlyForecast.propTypes = {
  hourlyData: object.isRequired,
};
