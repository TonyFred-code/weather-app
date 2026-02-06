async function fetchLocationData(location) {
  try {
    const URL = `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=4&language=en&format=json`;
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Failed to fetch location data");
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      throw new Error("Location data fetch failed");
    }

    if (data.error) {
      throw new Error(data.reason);
    }

    return data.results;
  } catch (error) {
    console.error("Location data failed with error: ", error);
  }
}

export { fetchLocationData };
