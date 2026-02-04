import { useState } from "react";
import { WEEK_DAYS } from "../constants/weekDays.js";

export default function WeekDay() {
  const [activeDayOfWeek, setActiveDayOfWeek] = useState(WEEK_DAYS.MONDAY);
  const [showDaysOfWeekDropDown, setShowDaysOfWeekDropDown] = useState(false);

  function updateActiveDayOfWeek(value) {
    setActiveDayOfWeek(value);
    setShowDaysOfWeekDropDown(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        className="capitalize flex items-center gap-2 py-1.5 px-2.5 bg-neutral-700 rounded-md cursor-pointer text-sm"
        onClick={() => setShowDaysOfWeekDropDown(!showDaysOfWeekDropDown)}
      >
        <span>{activeDayOfWeek}</span>
        <span>
          <img src="/images/icon-dropdown.svg" alt="" />
        </span>
      </button>
      <ul
        className={`${showDaysOfWeekDropDown ? "scale-y-100" : "scale-y-0"} absolute z-30 bg-neutral-800 rounded-lg top-[calc(100%+7px)] w-[200%] right-0 p-1.5 flex flex-col gap-1.5 transition-transform duration-300 origin-top`}
      >
        {Object.values(WEEK_DAYS).map((weekDay) => {
          return (
            <li
              onClick={() => updateActiveDayOfWeek(weekDay)}
              key={`data-${weekDay}`}
              className={`${activeDayOfWeek === weekDay ? "bg-neutral-700" : ""} capitalize p-1.5 cursor-pointer rounded-md text-xs hover:bg-neutral-700/90`}
            >
              {weekDay}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
