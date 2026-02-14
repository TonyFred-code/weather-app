export default function LoadingHourlyData() {
  const filler = Array(24).fill(null);
  return (
    <ul className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 max-h-110 py-2 overflow-auto scrollbar-custom overscroll-contain">
      {filler.map((hourData, index) => {
        return (
          <li
            key={`data-${index}`}
            className="flex justify-between items-center h-12 rounded-md bg-neutral-700 text-sm md:text-base py-3 px-2.5 shrink-0"
          >
            <p></p>
          </li>
        );
      })}
    </ul>
  );
}
