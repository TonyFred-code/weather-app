import DailyForecast from "./DailyForecast.jsx";
import HourlyForecast from "./HourlyForecast.jsx";
import WeatherSummary from "./WeatherSummary.jsx";

export default function WeatherOutput() {
  return (
    <section className="items-center justify-center w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
      <WeatherSummary />
      <DailyForecast />
      <HourlyForecast />
    </section>
  );
}
