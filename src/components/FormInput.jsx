import PropTypes from "prop-types";

function FormInput({
  label,
  name,
  type = "text",
  register,
  rules,
  errors,
  placeholder,
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-gray-700 dark:text-stone-50 font-medium mb-1"
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        id={name}
        type={type}
        {...(register && typeof register === "function"
          ? register(name, rules)
          : {})}
        className="border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 md:py-4 md:text-lg"
      />
      {errors?.[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  register: PropTypes.func.isRequired,
  rules: PropTypes.object,
  errors: PropTypes.object,
  placeholder: PropTypes.string,
};

export default FormInput;
