import { bool, object, string } from "prop-types";
import { getLongDate } from "../helpers/dateUtilities.js";
import { SyncLoader } from "react-spinners";

export default function WeatherSummary({ data, units, cityName, isLoading }) {
  return (
    <section className="lg:col-span-2 space-y-8">
      {isLoading ? (
        <div className="bg-neutral-700 py-32 md:px-8 md:py-14 rounded-2xl flex flex-col items-center justify-center gap-4">
          <div>
            <SyncLoader loading={isLoading} color="#ffffffb3" />
          </div>
          <span className="text-neutral-0 opacity-70">Loading...</span>
        </div>
      ) : (
        <div className="bg-blue-500 rounded-2xl bg-[url('/images/bg-today-small.svg')] md:bg-[url('/images/bg-today-large.svg')] bg-no-repeat bg-cover bg-center py-12 md:px-8 md:py-14 flex flex-col md:flex-row items-center justify-between">
          <div className="*:text-center">
            <p className="capitalize text-3xl font-bold">{cityName ?? "- -"}</p>
            <p className="text-neutral-0 opacity-70">
              {data?.time ? getLongDate(data.time) : "- -"}
            </p>
          </div>
          <div className="flex items-center justify-around">
            <span className="size-24 md:size-32">
              <img src="/images/icon-sunny.webp" alt="" />
            </span>
            <span className="text-[72px] md:text-[90px] font-extrabold italic">
              {data?.temperature_2m ?? "- -"}°
            </span>
          </div>
        </div>
      )}
      <div className="*:rounded-xl *:bg-neutral-700 *:flex *:flex-col grid grid-cols-2 md:grid-cols-4 *:gap-3 *:flex-1 gap-3 *:p-3">
        <div>
          <p className="text-neutral-400 capitalize text-xs md:text-sm font-medium">
            feels like
          </p>
          <p className="text-lg md:text-xl text-neutral-100">
            {isLoading ? (
              <span className="text-4xl opacity-70">-</span>
            ) : (
              <>
                {data?.apparent_temperature ?? "- -"}
                {units?.apparent_temperature ?? ""}
              </>
            )}
          </p>
        </div>

        <div>
          <p className="text-neutral-400 capitalize text-xs md:text-sm font-medium">
            humidity
          </p>
          <p className="text-lg md:text-xl text-neutral-100">
            {isLoading ? (
              <span className="text-4xl opacity-70">-</span>
            ) : (
              <>
                {data?.relative_humidity_2m ?? "- -"}
                {units?.relative_humidity_2m ?? ""}
              </>
            )}
          </p>
        </div>

        <div>
          <p className="text-neutral-400 capitalize text-xs md:text-sm font-medium">
            wind speed
          </p>
          <p className="text-lg md:text-xl text-neutral-100">
            {isLoading ? (
              <span className="text-4xl opacity-70">-</span>
            ) : (
              <>
                {data?.wind_speed_10m ?? "- -"}
                {units?.wind_speed_10m ?? ""}
              </>
            )}
          </p>
        </div>

        <div>
          <p className="text-neutral-400 capitalize text-xs md:text-sm font-medium">
            precipitation
          </p>
          <p className="text-lg md:text-xl text-neutral-100">
            {isLoading ? (
              <span className="text-4xl opacity-70">-</span>
            ) : (
              <>
                {data?.precipitation ?? "- -"}
                {units?.precipitation ?? ""}
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

WeatherSummary.propTypes = {
  data: object,
  units: object,
  cityName: string,
  isLoading: bool,
};
