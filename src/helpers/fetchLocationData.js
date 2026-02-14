async function fetchLocationData(location) {
  try {
    const URL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location.trim())}&count=4&language=en&format=json`;

    const response = await fetch(URL, { mode: "cors" });
    const data = await response.json();

    // API specific errors
    if (data.error) {
      throw new Error(data.reason || "Unknown API error");
    }

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    if (!data.results || data.results.length === 0) {
      throw new Error("location data not found");
    }

    return data.results;
  } catch (error) {
    console.error("Location data failed with error: ", error);
    throw error;
  }
}

export { fetchLocationData };
