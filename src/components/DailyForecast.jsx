import { object } from "prop-types";
import { formatDailyWeatherData } from "../helpers/weatherDataUtilities.js";

export default function DailyForecast({ data }) {
  const dailyData = formatDailyWeatherData(data);
  return (
    <section className="lg:col-span-2 row-start-2 space-y-3.5">
      <h2 className="text-lg">Daily forecast</h2>
      <div className="*:rounded-lg *:flex *:flex-col *:items-center *:bg-neutral-700 grid grid-cols-3 md:grid-cols-7 gap-3 *:p-2 *:gap-3">
        {dailyData.map((dataObj) => {
          const { date, maxTemperature, minTemperature } = dataObj;

          return (
            <div key={date}>
              <p className="capitalize text-sm">{date}</p>
              <p className="size-12">
                <img src="/images/icon-rain.webp" alt="Rainy weather" />
              </p>
              <p className="flex justify-between self-stretch text-xs">
                <span>{maxTemperature}°</span>
                <span>{minTemperature}°</span>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

DailyForecast.propTypes = {
  data: object.isRequired,
};
