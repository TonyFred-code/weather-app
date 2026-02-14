import { useState } from "react";
import { array, bool, func, number } from "prop-types";

export default function WeekDay({
  activeDayIndex,
  weekDays,
  setActiveDayIndex,
  isLoading,
}) {
  const [showDaysOfWeekDropDown, setShowDaysOfWeekDropDown] = useState(false);

  function updateActiveDayOfWeek(dayIndex) {
    setActiveDayIndex(dayIndex);
    setShowDaysOfWeekDropDown(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        className={`capitalize flex items-center gap-2 ${isLoading ? "py-1 px-3" : "py-1.5 px-2.5"} bg-neutral-700 rounded-md cursor-pointer text-sm`}
        onClick={() => setShowDaysOfWeekDropDown(!showDaysOfWeekDropDown)}
      >
        {isLoading ? (
          <span className="text-2xl text-neutral-0 opacity-70">-</span>
        ) : (
          <>
            <span>{weekDays[activeDayIndex]}</span>
          </>
        )}
        <span>
          <img
            src="/images/icon-dropdown.svg"
            className={`${showDaysOfWeekDropDown ? "rotate-180" : ""} transition-transform duration-150`}
            alt=""
          />
        </span>
      </button>
      {!isLoading && (
        <ul
          className={`${showDaysOfWeekDropDown ? "scale-y-100" : "scale-y-0"} absolute z-30 bg-neutral-800 rounded-lg top-[calc(100%+7px)] w-[200%] right-0 p-1.5 flex flex-col gap-1.5 transition-transform duration-300 origin-top`}
        >
          {weekDays.map((weekDay, index) => {
            return (
              <li key={`data-${weekDay}`}>
                <button
                  onClick={() => updateActiveDayOfWeek(index)}
                  type="button"
                  className={`${activeDayIndex === index ? "bg-neutral-700" : ""} capitalize p-1.5 cursor-pointer rounded-md text-xs hover:bg-neutral-700/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800 w-full text-left`}
                >
                  {weekDay}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

WeekDay.propTypes = {
  activeDayIndex: number,
  setActiveDayIndex: func,
  weekDays: array,
  isLoading: bool,
};
