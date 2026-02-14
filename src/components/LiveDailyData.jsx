import { object } from "prop-types";
import {
  formatDailyWeatherData,
  getWeatherInfo,
} from "../helpers/weatherDataUtilities.js";

export default function LiveDailyData({ data }) {
  const dailyData = formatDailyWeatherData(data);
  return (
    <div className="*:rounded-lg *:flex *:flex-col *:items-center *:bg-neutral-700 grid grid-cols-3 md:grid-cols-7 gap-3 *:p-2 *:gap-3">
      {dailyData.map((dataObj) => {
        const { date, maxTemperature, minTemperature, weatherCode } = dataObj;
        const { icon, description } = getWeatherInfo(weatherCode);
        return (
          <div key={date}>
            <p className="capitalize text-sm">{date}</p>
            <p className="size-12">
              <img src={icon} alt={description} />
            </p>
            <p className="flex justify-between self-stretch text-xs">
              <span>{Math.round(maxTemperature)}°</span>
              <span>{Math.round(minTemperature)}°</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

LiveDailyData.propTypes = {
  data: object.isRequired,
};
