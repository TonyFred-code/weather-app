import { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import WeatherOutput from "./components/WeatherOutput.jsx";
import Loading from "./components/Loading.jsx";
import { fetchWeatherData } from "./helpers/fetchWeatherData.js";
import { fetchLocationData } from "./helpers/fetchLocationData.js";
import { METRIC_UNITS } from "./constants/unitsSystems.js";
import { DEFAULT_CITIES } from "./constants/defaultCities.js";
import WeatherError from "./components/errors/WeatherError.jsx";

export default function App() {
  const [query, setQuery] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [units, setUnits] = useState(METRIC_UNITS);
  const [isLoading, setIsLoading] = useState(true);
  const [weatherDataLoading, setWeatherDataLoading] = useState(false);
  const [weatherError, setWeatherError] = useState(null);

  useEffect(() => {
    async function getDefaultWeather() {
      const randomCity =
        DEFAULT_CITIES[Math.floor(Math.random() * DEFAULT_CITIES.length)];

      try {
        const result = await fetchWeatherData(
          randomCity.lon,
          randomCity.lat,
          METRIC_UNITS
        );

        setWeatherData({ ...result, cityName: randomCity.cityName });
      } catch (error) {
        setWeatherError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getDefaultWeather();
  }, []);

  async function handleSelectCity(cityData) {
    const { name, country, latitude, longitude } = cityData;
    setWeatherDataLoading(true);
    const cityName = `${name}, ${country}`;
    setQuery(cityName);

    try {
      const result = await fetchWeatherData(longitude, latitude, units);
      console.log(result);
      setWeatherData({ ...result, cityName });
    } catch (error) {
      setWeatherError(error);
    } finally {
      setWeatherDataLoading(false);
      setQuery("");
      setShowDropDown(false);
    }
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    setFormLoading(true);

    const formData = new FormData(event.target);

    const location = formData.get("search").trim();

    if (!location) {
      setSearchResults([]);
      setWeatherError("Error");
      setShowDropDown(false);
      return;
    }

    try {
      const result = await fetchLocationData(location);
      setSearchResults(result);
      setShowDropDown(true);
    } catch (error) {
      setWeatherError(error);
    } finally {
      setFormLoading(false);
    }
  }

  function handleSearchInput(e) {
    setQuery(e.target.value);
  }

  function updateUnits(nextUnits) {
    setUnits(nextUnits);
  }

  function resetError() {
    setWeatherError(null);
  }

  if (isLoading) {
    return <Loading loading={isLoading} />;
  }

  return (
    <div className="px-2 py-3 xs:p-4 mx-auto max-w-5xl flex flex-col gap-8 items-center">
      <Header units={units} setUnits={updateUnits} />
      {weatherError ? (
        <WeatherError resetError={resetError} />
      ) : (
        <>
          <Form
            formLoading={formLoading}
            handleFormSubmit={handleFormSubmit}
            handleSearchInput={handleSearchInput}
            search={query}
            searchResults={searchResults}
            showDropDown={showDropDown}
            handleSelectCity={handleSelectCity}
            weatherDataLoading={weatherDataLoading}
          />
          <WeatherOutput
            weatherData={weatherData}
            weatherDataLoading={weatherDataLoading}
          />
        </>
      )}
    </div>
  );
}
