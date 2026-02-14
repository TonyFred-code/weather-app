import { func } from "prop-types";

export default function WeatherError({ resetError }) {
  return (
    <main className="min-h-screen bg-neutral-900 flex flex-col items-center">
      <div className="size-10">
        <img src="/images/icon-error.svg" className="w-full h-full" alt="" />
      </div>
      <h1 className="text-center my-2 font-bricolage-grotesque text-[48px]">
        Something went wrong
      </h1>
      <div className="flex flex-col items-center gap-8">
        <p className="text-neutral-300 text-sm">
          We couldn&apos;t connect to the server (API error). Please try again
          in a few moments
        </p>
        <button
          type="button"
          className="flex gap-2 items-center py-2 px-3 cursor-pointer hover:bg-neutral-600 bg-neutral-700 rounded-lg text-xs"
          onClick={resetError}
        >
          <span className="flex items-center justify-center size-4">
            <img
              src="/images/icon-retry.svg"
              className="h-full w-full"
              alt=""
            />
          </span>
          <span>Retry</span>
        </button>
      </div>
    </main>
  );
}

WeatherError.propTypes = {
  resetError: func,
};
