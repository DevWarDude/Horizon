import PropTypes from "prop-types";
import { BeatLoader } from "react-spinners";

function LocationFields({ register, errors, isLoadingGeocoding }) {
  if (isLoadingGeocoding) {
    return (
      <div className="flex justify-center items-center gap-3">
        <span>Loading your current location</span>
        <BeatLoader color="#4893ff" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label className="text-gray-700 dark:text-stone-50 font-medium mb-1">
          Country
        </label>
        <input
          type="text"
          {...register("country", { required: "Country is required" })}
          placeholder="Country"
          className="border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 px-4  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 md:py-4 md:text-lg py-3"
        />
        {errors.country && (
          <p className="text-red-500">{errors.country.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 dark:text-stone-50 font-medium mb-1">
          City
        </label>
        <input
          type="text"
          {...register("city", { required: "City is required" })}
          placeholder="City"
          className="border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 px-4  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 md:py-4 md:text-lg py-3"
        />
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
      </div>
    </div>
  );
}

LocationFields.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.shape({
    country: PropTypes.shape({
      message: PropTypes.string,
    }),
    city: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
  isLoadingGeocoding: PropTypes.bool,
};

export default LocationFields;
