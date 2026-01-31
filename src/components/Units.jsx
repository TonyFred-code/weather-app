import { useState } from "react";
import { UNIT_SYSTEMS } from "../constants/unitsSystems.js";

export default function Units() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [activeUnitSystem, setActiveUnitSystem] = useState(UNIT_SYSTEMS.METRIC);
  const metricUnitSystemActive = activeUnitSystem === UNIT_SYSTEMS.METRIC;
  const imperialUnitSystemActive = activeUnitSystem === UNIT_SYSTEMS.IMPERIAL;

  function switchUnitSystem() {
    if (activeUnitSystem === UNIT_SYSTEMS.IMPERIAL) {
      setActiveUnitSystem(UNIT_SYSTEMS.METRIC);
    } else {
      setActiveUnitSystem(UNIT_SYSTEMS.IMPERIAL);
    }
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
          Switch to {imperialUnitSystemActive ? "Metric" : "Imperial"}
        </button>
        <div className="space-y-2">
          <div className="space-y-2">
            <h2 className="text-sm capitalize pl-1 text-neutral-300">
              temperature
            </h2>
            <p
              className={`transition-colors duration-200 items-center p-2 rounded-md capitalize text-base flex justify-between ${metricUnitSystemActive ? "bg-neutral-600/50" : ""}`}
            >
              <span>celsius (°c)</span>
              {metricUnitSystemActive && (
                <span>
                  <img src="/images/icon-checkmark.svg" alt="" />
                </span>
              )}
            </p>

            <p
              className={`transition-colors duration-200 items-center p-2 rounded-md capitalize text-base flex justify-between ${imperialUnitSystemActive ? "bg-neutral-600/50" : ""}`}
            >
              <span>fahrenheit (°f)</span>
              {imperialUnitSystemActive && (
                <span>
                  <img src="/images/icon-checkmark.svg" alt="" />
                </span>
              )}
            </p>
          </div>
          <hr />
          <div className="space-y-2">
            <h2 className="capitalize text-neutral-300 pl-2 text-sm">
              precipitation
            </h2>
            <p
              htmlFor="km_h"
              className={`transition-colors duration-200 items-center p-2 rounded-md text-base flex justify-between ${metricUnitSystemActive ? "bg-neutral-600/50" : ""}`}
            >
              <span>km/h</span>
              {metricUnitSystemActive && (
                <span>
                  <img src="/images/icon-checkmark.svg" alt="" />
                </span>
              )}
            </p>

            <p
              className={`transition-colors duration-200 items-center p-2 rounded-md text-base flex justify-between ${imperialUnitSystemActive ? "bg-neutral-600/50" : ""}`}
            >
              <span>mph</span>
              {imperialUnitSystemActive && (
                <span>
                  <img src="/images/icon-checkmark.svg" alt="" />
                </span>
              )}
            </p>
          </div>
          <hr />
          <div className="space-y-2">
            <h2 className="capitalize pl-1 text-base text-neutral-300">
              precipitation
            </h2>
            <div className="space-y-2">
              <p
                className={`transition-colors duration-200 items-center p-2 rounded-md text-base flex justify-between ${metricUnitSystemActive ? "bg-neutral-600/50" : ""}`}
              >
                <span>Millimeters (mm)</span>
                {metricUnitSystemActive && (
                  <span>
                    <img src="/images/icon-checkmark.svg" alt="" />
                  </span>
                )}
              </p>

              <p
                className={`transition-colors duration-200 items-center p-2 rounded-md text-base flex justify-between ${imperialUnitSystemActive ? "bg-neutral-600/50" : ""}`}
              >
                <span>inches (in)</span>
                {imperialUnitSystemActive && (
                  <span>
                    <img src="/images/icon-checkmark.svg" alt="" />
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
