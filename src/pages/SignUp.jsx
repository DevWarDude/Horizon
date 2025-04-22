// import Map from "../components/Map";

import { useEffect, useState } from "react";
import Map from "../components/Map";
import { Link, useNavigate, useSearchParams } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGeolocation } from "../hooks/useGeolocation";
import { BeatLoader } from "react-spinners";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function SignUp() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);

  const [geocodingError, setGeocodingError] = useState("");
  const [searchParams] = useSearchParams();
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);

      if (geolocationPosition !== null)
        navigate(
          `?lat=${geolocationPosition.lat}&lng=${geolocationPosition.lng}`
        );
    },
    [geolocationPosition, navigate]
  );

  console.log(geocodingError);
  
  useEffect(
    function () {
      if (!mapLat && !mapLng) return;

      async function fetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError("");

          const res = await fetch(
            `${BASE_URL}?latitude=${mapLat}&longitude=${mapLng}`
          );
          const data = await res.json();

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere else 😉"
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
    [setCountry, setCityName, mapLat, mapLng]
  );

  return (
    <div className="flex font-jost  flex-col py-10 mx-6">
      <header className="flex flex-col ">
        <div className="flex items-center gap-1">
          <img src="logo.svg" alt="" />
          <h1 className="font-semibold  text-2xl font-serif">Horizon</h1>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-2xl font-semibold text-slate-700">Sign Up</p>
          <span className="opacity-70  tracking-wide text-lg placeholder:text-gray-500">
            Please enter your details
          </span>
        </div>
      </header>
      <form action="" className="mt-5 flex flex-col gap-5">
        <div className="grid grid-cols-2 mt-4 gap-2">
          <div className="flex flex-col gap-1 ">
            <label htmlFor="firstName" className="label">
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id=""
              placeholder="Enter your first name"
              className="input"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName" className="label">
              Last Name
            </label>
            <input
              type="text"
              name="fName"
              id=""
              placeholder="Enter your last name"
              className="input"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="label">Date of birth</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Choose your birth date"
            className="input w-[100%]"
          />
        </div>

        {!isLoadingGeocoding ? (
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1 ">
              <label htmlFor="firstName" className="label">
                Country
              </label>
              <input
                type="text"
                name="country"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                id=""
                placeholder="Country"
                className="input"
                disabled={isLoadingGeocoding}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName" className="label">
                City
              </label>
              <input
                type="text"
                name="city"
                id=""
                disabled={isLoadingGeocoding}
                value={cityName}
                placeholder="City"
                onChange={(e) => setCityName(e.target.value)}
                className="input"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <BeatLoader />
          </div>
        )}

        <div>
          <div className="label">Use the Map to choose your location.</div>
          <Map
            geolocationPosition={geolocationPosition}
            getPosition={getPosition}
            isLoadingPosition={isLoadingPosition}
            mapPosition={mapPosition}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="1"
            placeholder="Enter your email"
            className="input"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="2"
            placeholder="Enter your password"
            className="input"
          />
        </div>

        <button className="bg-[#4893ff] text-white font-semibold text-lg rounded-lg p-2 tracking-wide mt-3">
          Sign Up
        </button>
      </form>
      <p className="text-center mt-4 text-gray-600 flex justify-center items-center gap-1">
        <p>Don`t have an account? </p>

        <Link to={"/sign-in"}>
          <span className="text-[#4893ff] opacity-100">Sign in</span>
        </Link>
      </p>
    </div>
  );
}

export default SignUp;

// kennywise967
