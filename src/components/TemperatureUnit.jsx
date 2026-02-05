import { IMPERIAL_UNITS, METRIC_UNITS } from "../constants/unitsSystems.js";
import { func, string } from "prop-types";

export default function TemperatureUnits({
  temperatureUnit,
  setTemperatureUnit,
}) {
  const metricUnitSystemActive = temperatureUnit === METRIC_UNITS.TEMPERATURE;
  const imperialUnitSystemActive =
    temperatureUnit === IMPERIAL_UNITS.TEMPERATURE;

  function switchTemperatureUnit(e) {
    setTemperatureUnit(e.currentTarget.dataset.temperatureUnit);
  }

  return (
    <div className="space-y-2">
      <h2 className="text-sm capitalize pl-1 text-neutral-300">temperature</h2>
      <button
        type="button"
        className={`transition-colors duration-200 items-center p-2 hover:bg-neutral-600 w-full cursor-pointer rounded-md capitalize text-base flex justify-between ${metricUnitSystemActive ? "bg-neutral-600/50" : ""}`}
        data-temperature-unit={METRIC_UNITS.TEMPERATURE}
        onClick={switchTemperatureUnit}
      >
        <span>celsius (°c)</span>
        {metricUnitSystemActive && (
          <span>
            <img src="/images/icon-checkmark.svg" alt="" />
          </span>
        )}
      </button>

      <button
        type="button"
        className={`transition-colors duration-200 items-center p-2 rounded-md hover:bg-neutral-600 w-full cursor-pointer capitalize text-base flex justify-between ${imperialUnitSystemActive ? "bg-neutral-600/50" : ""}`}
        data-temperature-unit={IMPERIAL_UNITS.TEMPERATURE}
        onClick={switchTemperatureUnit}
      >
        <span>fahrenheit (°f)</span>
        {imperialUnitSystemActive && (
          <span>
            <img src="/images/icon-checkmark.svg" alt="" />
          </span>
        )}
      </button>
    </div>
  );
}

TemperatureUnits.propTypes = {
  temperatureUnit: string.isRequired,
  setTemperatureUnit: func.isRequired,
};
