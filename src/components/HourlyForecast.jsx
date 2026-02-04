import { formatHoursAmPm } from "../helpers/formatHours.js";
import WeekDay from "./WeekDay.jsx";

export default function HourlyForecast() {
  const hourly_data = [
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },

    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },

    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
    {
      temperature: "20°",
      icon: "/images/icon-fog.webp",
    },
  ];

  return (
    <section className="lg:col-start-3 lg:row-span-2 h-full bg-neutral-800 rounded-lg p-4 space-y-3">
      <header className="shrink-0 flex justify-between items-center">
        <h2 className="text-[15px] font-bold">Hourly forecast</h2>
        <WeekDay />
      </header>
      <ul className="flex-col gap-3 flex max-h-110 py-2 overflow-auto scrollbar-custom overscroll-contain">
        {hourly_data.map((data, index) => {
          return (
            <li
              key={`data-${index}`}
              className="flex justify-between items-center h-12 rounded-md bg-neutral-700 py-3 px-2.5 shrink-0"
            >
              <p className="flex items-center">
                <span className="size-10 flex items-center justify-center">
                  <img src={data.icon} alt="" />
                </span>
                <span>{formatHoursAmPm(index)}</span>
              </p>
              <span>{data.temperature}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
