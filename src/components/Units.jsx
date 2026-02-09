import { useState } from "react";
import {
  IMPERIAL_UNITS,
  METRIC_UNITS,
  UNIT_SYSTEMS,
} from "../constants/unitsSystems.js";
import { getAlternateUnitSystemName } from "../helpers/unitSystemIdentifier.js";
import TemperatureUnits from "./TemperatureUnit.jsx";
import WindSpeedUnits from "./WindSpeedUnit.jsx";
import PrecipitationUnit from "./PrecipitationUnit.jsx";
import { func, shape, string } from "prop-types";

export default function Units({ units, setUnits }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const nextUnitSystemName = getAlternateUnitSystemName(units);

  function getUnitSwitchButtonText() {
    return nextUnitSystemName === UNIT_SYSTEMS.METRIC
      ? "Switch to Metric"
      : "Switch to Imperial";
  }

  function switchUnitSystem() {
    const targetUnitSystem =
      nextUnitSystemName === UNIT_SYSTEMS.METRIC
        ? METRIC_UNITS
        : IMPERIAL_UNITS;

    setUnits({
      TEMPERATURE: targetUnitSystem.TEMPERATURE,
      WIND_SPEED: targetUnitSystem.WIND_SPEED,
      PRECIPITATION: targetUnitSystem.PRECIPITATION,
    });
  }

  function switchTemperatureUnit(nextTemperatureUnit) {
    setUnits((prev) => ({ ...prev, TEMPERATURE: nextTemperatureUnit }));
  }

  function switchWindSpeedUnit(nextWindSpeedUnit) {
    setUnits((prev) => ({ ...prev, WIND_SPEED: nextWindSpeedUnit }));
  }

  function switchPrecipitationUnit(nextPrecipitationUnit) {
    setUnits((prev) => ({ ...prev, PRECIPITATION: nextPrecipitationUnit }));
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropDown(!showDropDown)}
        className="flex gap-1.5 rounded-lg border border-neutral-800 bg-neutral-800 text-neutral-0 text-base font-medium items-center w-full focus:outline-none cursor-pointer p-1.5 md:p-2.5"
      >
        <span className="">
          <img src="/images/icon-units.svg" alt="" />
        </span>
        <span className="capitalize">units</span>
        <span>
          <img src="/images/icon-dropdown.svg" alt="" />
        </span>
      </button>
      <div
        className={`p-3 space-y-4 absolute z-40 bg-neutral-800 rounded-lg top-[calc(100%+7px)] w-[200%] right-0 transition-transform duration-300 origin-top ${showDropDown ? "scale-y-100" : "scale-y-0"}`}
        aria-labelledby="dropdownRadioButton"
      >
        <button
          onClick={switchUnitSystem}
          className="w-full text-left rounded-md text-base p-2 hover:bg-neutral-600 active:bg-neutral-600  cursor-pointer"
        >
          {getUnitSwitchButtonText()}
        </button>
        <div className="space-y-2">
          <TemperatureUnits
            temperatureUnit={units.TEMPERATURE}
            setTemperatureUnit={switchTemperatureUnit}
          />
          <hr />
          <WindSpeedUnits
            windSpeedUnit={units.WIND_SPEED}
            setWindSpeedUnit={switchWindSpeedUnit}
          />
          <hr />
          <PrecipitationUnit
            precipitationUnit={units.PRECIPITATION}
            setPrecipitationUnit={switchPrecipitationUnit}
          />
        </div>
      </div>
    </div>
  );
}

Units.propTypes = {
  units: shape({
    TEMPERATURE: string,
    WIND_SPEED: string,
    PRECIPITATION: string,
  }),
  setUnits: func,
};
