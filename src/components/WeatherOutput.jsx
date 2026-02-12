import { object, shape } from "prop-types";
import DailyForecast from "./DailyForecast.jsx";
import HourlyForecast from "./HourlyForecast.jsx";
import WeatherSummary from "./WeatherSummary.jsx";

export default function WeatherOutput({ weatherData }) {
  return (
    <section className="items-center justify-center w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
      <WeatherSummary
        data={weatherData?.current}
        units={weatherData?.current_units}
        cityName={weatherData?.cityName}
      />
      <DailyForecast data={weatherData?.daily} />
      <HourlyForecast />
    </section>
  );
}

WeatherOutput.propTypes = {
  weatherData: shape({
    current: object,
    current_units: object,
  }),
};
