import { func, string } from "prop-types";
import { IMPERIAL_UNITS, METRIC_UNITS } from "../constants/unitsSystems.js";

export default function PrecipitationUnit({
  precipitationUnit,
  setPrecipitationUnit,
}) {
  const metricUnitSystemActive =
    precipitationUnit === METRIC_UNITS.PRECIPITATION;
  const imperialUnitSystemActive =
    precipitationUnit === IMPERIAL_UNITS.PRECIPITATION;

  function switchPrecipitationUnit(e) {
    setPrecipitationUnit(e.currentTarget.dataset.precipitationUnit);
  }

  return (
    <div className="space-y-2">
      <h2 className="capitalize pl-1 text-base text-neutral-300">
        precipitation
      </h2>
      <div className="space-y-2">
        <button
          type="button"
          className={`transition-colors duration-200 items-center p-2 rounded-md hover:bg-neutral-600 w-full cursor-pointer text-base flex justify-between ${metricUnitSystemActive ? "bg-neutral-600/50" : ""}`}
          data-precipitation-unit={METRIC_UNITS.PRECIPITATION}
          onClick={switchPrecipitationUnit}
        >
          <span>Millimeters (mm)</span>
          {metricUnitSystemActive && (
            <span>
              <img src="/images/icon-checkmark.svg" alt="" />
            </span>
          )}
        </button>

        <button
          type="button"
          className={`transition-colors duration-200 items-center p-2 rounded-md hover:bg-neutral-600 w-full cursor-pointer text-base flex justify-between ${imperialUnitSystemActive ? "bg-neutral-600/50" : ""}`}
          data-precipitation-unit={IMPERIAL_UNITS.PRECIPITATION}
          onClick={switchPrecipitationUnit}
        >
          <span>inches (in)</span>
          {imperialUnitSystemActive && (
            <span>
              <img src="/images/icon-checkmark.svg" alt="" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

PrecipitationUnit.propTypes = {
  precipitationUnit: string.isRequired,
  setPrecipitationUnit: func.isRequired,
};
