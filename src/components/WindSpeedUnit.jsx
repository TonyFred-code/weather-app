import { func, string } from "prop-types";
import { IMPERIAL_UNITS, METRIC_UNITS } from "../constants/unitsSystems.js";

export default function WindSpeedUnits({ windSpeedUnit, setWindSpeedUnit }) {
  const metricUnitSystemActive = windSpeedUnit === METRIC_UNITS.WIND_SPEED;
  const imperialUnitSystemActive = windSpeedUnit === IMPERIAL_UNITS.WIND_SPEED;

  function switchWindSpeedUnit(e) {
    setWindSpeedUnit(e.currentTarget.dataset.windSpeedUnit);
  }
  return (
    <div className="space-y-2">
      <h2 className="capitalize text-neutral-300 pl-2 text-sm">
        precipitation
      </h2>
      <button
        type="button"
        className={`transition-colors duration-200 items-center p-2 rounded-md hover:bg-neutral-600 w-full cursor-pointer text-base flex justify-between ${metricUnitSystemActive ? "bg-neutral-600/50" : ""}`}
        data-wind-speed-unit={METRIC_UNITS.WIND_SPEED}
        onClick={switchWindSpeedUnit}
      >
        <span>km/h</span>
        {metricUnitSystemActive && (
          <span>
            <img src="/images/icon-checkmark.svg" alt="" />
          </span>
        )}
      </button>

      <button
        type="button"
        className={`transition-colors duration-200 items-center p-2 rounded-md hover:bg-neutral-600 w-full cursor-pointer text-base flex justify-between ${imperialUnitSystemActive ? "bg-neutral-600/50" : ""}`}
        data-wind-speed-unit={IMPERIAL_UNITS.WIND_SPEED}
        onClick={switchWindSpeedUnit}
      >
        <span>mph</span>
        {imperialUnitSystemActive && (
          <span>
            <img src="/images/icon-checkmark.svg" alt="" />
          </span>
        )}
      </button>
    </div>
  );
}

WindSpeedUnits.propTypes = {
  windSpeedUnit: string.isRequired,
  setWindSpeedUnit: func.isRequired,
};
