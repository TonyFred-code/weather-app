import { object } from "prop-types";
import { getWeatherInfo } from "../helpers/weatherDataUtilities.js";

export default function LiveHourlyData({ data }) {
  return (
    <ul className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 max-h-110 py-2 overflow-auto scrollbar-custom overscroll-contain">
      {data.hours.map((hourData, index) => {
        const { hour, apparentTemperature, weatherCode } = hourData;
        const { icon, description } = getWeatherInfo(weatherCode);
        return (
          <li
            key={`data-${index}`}
            className="flex justify-between items-center h-12 rounded-md bg-neutral-700 text-sm md:text-base py-3 px-2.5 shrink-0"
          >
            <p className="flex items-center">
              <span className="size-10 flex items-center justify-center">
                <img src={icon} alt={description} />
              </span>
              <span>{hour}</span>
            </p>
            <span>{apparentTemperature}°</span>
          </li>
        );
      })}
    </ul>
  );
}

LiveHourlyData.propTypes = {
  data: object,
};
