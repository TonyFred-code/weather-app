import { bool, object } from "prop-types";
import LiveDailyData from "./LiveDailyData.jsx";
import LoadingDailyData from "./LoadingDailyData.jsx";

export default function DailyForecast({ data, isLoading }) {
  return (
    <section className="lg:col-span-2 row-start-2 space-y-3.5">
      <h2 className="text-lg">Daily forecast</h2>
      {isLoading ? <LoadingDailyData /> : <LiveDailyData data={data} />}
    </section>
  );
}

DailyForecast.propTypes = {
  data: object.isRequired,
  isLoading: bool,
};
