export default function LoadingDailyData() {
  const fillers = Array(7).fill(null);

  return (
    <div className="*:rounded-lg *:flex *:flex-col *:items-center *:bg-neutral-700 grid grid-cols-3 md:grid-cols-7 gap-3 *:p-2 *:gap-3">
      {fillers.map((filler, index) => {
        return (
          <div className="*:h-5.5" key={`filler-${index}`}>
            <p></p>
            <p></p>
            <p></p>
          </div>
        );
      })}
    </div>
  );
}
