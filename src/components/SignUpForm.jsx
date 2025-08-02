import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";

import FormInput from "./FormInput";
import DateInput from "./DateInput";
import LocationFields from "./LocationFields";

import { useGeolocation } from "../hooks/useGeolocation";
import { useSignUp } from "../hooks/useSignUP";
import { addTransaction } from "../services/transactionService";
import { useAuth } from "../context/AuthContext";
import { useUserProfile } from "../hooks/useUserProfile";
import MapSelector from "./MapSelectore";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export default function SignUpForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dobError, setDobError] = useState("");
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { data: profile } = useUserProfile(user?.id);
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const {
    position: geolocationPosition,
    getPosition,
    isLoading: isLoadingPosition,
  } = useGeolocation();

  const signUp = useSignUp();

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition) {
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
      navigate(
        `?lat=${geolocationPosition.lat}&lng=${geolocationPosition.lng}`
      );
    }
  }, [geolocationPosition, navigate]);

  useEffect(() => {
    if (!mapLat || !mapLng) return;
    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true);
        const res = await fetch(
          `${BASE_URL}?latitude=${mapLat}&longitude=${mapLng}`
        );
        const data = await res.json();
        if (!data.city) throw new Error("That doesn't seem to be a city.");
        setValue("city", data.city);
        setValue("country", data.countryName);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    fetchCityData();
  }, [mapLat, mapLng, setValue]);

  const onSubmit = async (formData) => {
    if (!selectedDate) {
      setDobError("Date of birth is required.");
      return;
    }

    setDobError("");
    try {
      const { email, password, fName, lName, country, city } = formData;
      const user = await signUp.mutateAsync({
        email,
        password,
        dob: selectedDate,
        fName,
        lName,
        country,
        city,
      });

      await addTransaction({
        user_id: user.id,
        type: "deposit",
        amount: 20,
        description: "🎁 Welcome bonus",
      });

      toast.success("Account created successfully! Redirecting...");
      navigate(`/${profile.fName.toLowerCase()}/dashboard`, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  // useEffect(() => {
  //   if (user && profile?.fName) {
  //     navigate(`/${profile.fName.toLowerCase()}/dashboard`, { replace: true });
  //   }
  // }, [user, profile, navigate]);

  if (signUp.isSuccess && (!user || !profile)) {
    return (
      <div className="h-screen flex justify-center items-center text-lg dark:text-white">
        <PulseLoader size={12} color="#1D4ED8" />
        <span className="ml-2">Setting up your account...</span>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput
          label="First Name"
          name="fName"
          register={register}
          rules={{ required: "First name is required" }}
          errors={errors}
          placeholder="Enter your first name"
        />
        <FormInput
          label="Last Name"
          name="lName"
          register={register}
          rules={{ required: "Last name is required" }}
          errors={errors}
          placeholder="Enter your last name"
        />
      </div>

      <DateInput
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        dobError={dobError}
      />

      <LocationFields
        register={register}
        errors={errors}
        isLoadingGeocoding={isLoadingGeocoding}
      />

      <MapSelector
        geolocationPosition={geolocationPosition}
        getPosition={getPosition}
        isLoadingPosition={isLoadingPosition}
        mapPosition={mapPosition}
      />

      <FormInput
        label="Email"
        name="email"
        type="email"
        register={register}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/,
            message: "Enter a valid email",
          },
        }}
        errors={errors}
        placeholder="Enter your email"
      />

      <FormInput
        label="Password"
        name="password"
        type="password"
        register={register}
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        }}
        errors={errors}
        placeholder="Enter your password"
      />

      <button
        type="submit"
        disabled={signUp.isPending}
        className="bg-[#4893ff] text-white font-semibold text-lg rounded-lg py-2 hover:shadow-lg w-full transition-all md:w-fit md:px-8 disabled:opacity-50"
      >
        {signUp.isPending ? "Creating account..." : "Sign Up"}
      </button>
    </form>
  );
}
