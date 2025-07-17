import PropTypes from "prop-types";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const NameInputs = ({ form, handleChange }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {["fName", "lName"].map((field) => (
      <div className="relative" key={field}>
        <label className="block text-sm capitalize">
          {field === "fName" ? "First Name" : "Last Name"}
        </label>
        <input
          type="text"
          name={field}
          value={form[field]}
          onChange={handleChange}
          className="mt-1 w-full border rounded px-3 py-2 dark:bg-slate-800 dark:border-slate-700 capitalize bg-white focus:outline-none"
        />
        <PencilSquareIcon className="w-4 h-4 absolute top-9 right-3 text-gray-400" />
      </div>
    ))}
  </div>
);

NameInputs.propTypes = {
  form: PropTypes.shape({
    fName: PropTypes.string.isRequired,
    lName: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default NameInputs;
