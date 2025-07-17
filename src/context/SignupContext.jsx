import { createContext, useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import { useSearchParams } from "react-router";

const SignUpContext = createContext();

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function SignUpProvider({ children }) {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  useEffect(
    function () {
      if (!mapLat && !mapLng) return;

      async function fetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError("");

          const res = await fetch(
            `${BASE_URL}?latitude=${mapLat}&longitude=${mapLng}`,
          );
          const data = await res.json();
          console.log(data);

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere else 😉",
            );

          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [mapLat, mapLng],
  );

  <SignUpContext.Provider
    value={{
      mapPosition,
      cityName,
      country,
      isLoadingPosition,
      geolocationPosition,
      geocodingError,
      getPosition,
      isLoadingGeocoding,
      setMapPosition,
    }}
  >
    {children}
  </SignUpContext.Provider>;
}

export { SignUpProvider, SignUpContext };
