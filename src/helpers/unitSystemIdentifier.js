import { METRIC_UNITS, UNIT_SYSTEMS } from "../constants/unitsSystems.js";

function getAlternateUnitSystemName(unitsSystem) {
  let metricCount = 0;
  let imperialCount = 0;

  if (unitsSystem.TEMPERATURE === METRIC_UNITS.TEMPERATURE) metricCount++;
  else imperialCount++;

  if (unitsSystem.WIND_SPEED === METRIC_UNITS.WIND_SPEED) metricCount++;
  else imperialCount++;

  if (unitsSystem.PRECIPITATION === METRIC_UNITS.PRECIPITATION) metricCount++;
  else imperialCount++;

  // If majority is metric, next unit system name should be imperial
  if (metricCount >= 2) return UNIT_SYSTEMS.IMPERIAL;
  if (imperialCount >= 2) return UNIT_SYSTEMS.METRIC;

  // redundant safe check (no test)
  return UNIT_SYSTEMS.METRIC;
}
export { getAlternateUnitSystemName };
