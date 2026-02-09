import { func, shape, string } from "prop-types";
import Units from "./Units.jsx";

export default function Header({ units, setUnits }) {
  return (
    <header className="flex justify-between items-center w-full">
      <h1 className="max-w-3/6  md:w-3/12 md:max-w-75">
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
        <span className="sr-only">weather now</span>
      </h1>
      <Units units={units} setUnits={setUnits} />
    </header>
  );
}

Header.propTypes = {
  units: shape({
    TEMPERATURE: string,
    WIND_SPEED: string,
    PRECIPITATION: string,
  }),
  setUnits: func,
};
