import { useState } from "react";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import WeatherOutput from "./components/WeatherOutput.jsx";
import { fetchWeatherData } from "./helpers/fetchWeatherData.js";
import { fetchLocationData } from "./helpers/fetchLocationData.js";

export default function App() {
  const [query, setQuery] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function handleSelectCity(cityData) {
    const { name, country, latitude, longitude } = cityData;
    setFormLoading(true);
    setQuery(`${name}, ${country}`);

    try {
      const result = await fetchWeatherData(longitude, latitude);
      console.log(result);
      setWeatherData(result);
    } catch (error) {
      console.error(error); // TODO: extend weather error formatting and display
    } finally {
      setFormLoading(false);
      setQuery("");
    }

    setShowDropDown(false);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    setFormLoading(true);

    const formData = new FormData(event.target);

    const location = formData.get("search").trim();

    if (!location) {
      setSearchResults([]);
      setShowDropDown(false);
      return;
    }
    try {
      const result = await fetchLocationData(location);
      setSearchResults(result);
      setShowDropDown(true);
    } catch (error) {
      console.error(error); // TODO: Extend location data error display
    } finally {
      setFormLoading(false);
    }
  }

  function handleSearchInput(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="px-2 py-3 xs:p-4 mx-auto max-w-5xl flex flex-col gap-8 items-center">
      <Header />
      <Form
        formLoading={formLoading}
        handleFormSubmit={handleFormSubmit}
        handleSearchInput={handleSearchInput}
        search={query}
        searchResults={searchResults}
        showDropDown={showDropDown}
        handleSelectCity={handleSelectCity}
      />
      <WeatherOutput weatherData={weatherData} />
    </div>
  );
}
