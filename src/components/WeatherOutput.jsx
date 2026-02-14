import { bool, object, shape } from "prop-types";
import DailyForecast from "./DailyForecast.jsx";
import HourlyForecast from "./HourlyForecast.jsx";
import WeatherSummary from "./WeatherSummary.jsx";

export default function WeatherOutput({ weatherData, weatherDataLoading }) {
  return (
    <section className="items-center justify-center w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
      <WeatherSummary
        data={weatherData?.current}
        units={weatherData?.current_units}
        cityName={weatherData?.cityName}
        isLoading={weatherDataLoading}
      />
      <DailyForecast data={weatherData?.daily} isLoading={weatherDataLoading} />
      <HourlyForecast
        hourlyData={weatherData?.hourly}
        isLoading={weatherDataLoading}
      />
    </section>
  );
}

WeatherOutput.propTypes = {
  weatherData: shape({
    current: object,
    current_units: object,
  }),
  weatherDataLoading: bool,
};
