import { useState } from "react";
import { fetchLocationData } from "../helpers/fetchLocationData.js";
import { LoaderPinwheel } from "lucide-react";

export default function Form() {
  const [query, setQuery] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);

  function showLocationErr(err) {
    console.log(err);
  }

  async function handleSelectCity(cityData) {
    console.log(cityData);
    const { name, country } = cityData;

    setQuery(`${name}, ${country}`);
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
      console.error(error);
      showLocationErr(error);
    } finally {
      setFormLoading(false);
    }
  }

  function handleSearchInput(e) {
    setQuery(e.target.value);
  }

  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-center my-8 font-bricolage-grotesque text-[60px]">
        How&apos;s the sky looking today?
      </h2>
      <form
        className="flex flex-col md:flex-row gap-4 md:w-10/12 max-w-xl w-full"
        onSubmit={handleFormSubmit}
      >
        <div className="flex-1 relative">
          <div className="flex xs:gap-2 gap-4 items-center bg-neutral-800 p-3 rounded-xl">
            <label htmlFor="search">
              <span className="flex size-3.5">
                <img src="/images/icon-search.svg" alt="" />
              </span>
            </label>
            <input
              type="text"
              name="search"
              autoComplete="off"
              id="search"
              required
              value={query}
              onInput={handleSearchInput}
              placeholder="Search for a place..."
              className="border-none outline-none flex-1 bg-transparent user-invalid:border-b-2 user-invalid:border-neutral-300 autofill:bg-transparent autofill:text-neutral-0 min-w-0"
            />
          </div>
          <ul
            className={`absolute z-30 bg-neutral-800 rounded-lg top-[calc(100%+7px)] w-full right-0 p-1.5 flex flex-col gap-1.5 transition-transform duration-300 origin-top max-h-80 overflow-y-auto scrollbar-custom ${showDropDown ? "scale-y-100" : "scale-y-0"}`}
          >
            {searchResults.map((result) => (
              <li
                key={result.id}
                className="px-2 py-1.5 hover:bg-neutral-700 rounded cursor-pointer transition-colors"
                onClick={() => handleSelectCity(result)}
              >
                <div className="flex flex-col">
                  <span className="font-medium">
                    {result.name}, {result.country}
                  </span>
                  <span className="text-sm text-neutral-400">
                    {result.admin1 && `${result.admin1}, `}
                    {result.country}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="submit"
          className="capitalize text-center text-neutral-0 bg-blue-500 py-3 px-5 md:py-2.5 md:px-6 rounded-xl font-bold cursor-pointer flex items-center gap-2 hover:bg-blue-700"
        >
          {formLoading ? (
            <>
              <LoaderPinwheel className="animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <span>Search</span>
          )}
        </button>
      </form>
    </section>
  );
}
