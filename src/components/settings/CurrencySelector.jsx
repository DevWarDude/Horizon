import PropTypes from "prop-types";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const CurrencySelector = ({ form, handleChange }) => (
  <div className="relative">
    <label htmlFor="currency" className="block text-sm">
      Currency
    </label>
    <select
      id="currency"
      name="currency"
      value={form.currency}
      onChange={handleChange}
      className="mt-1 w-full border rounded px-3 py-2 dark:bg-slate-800 dark:border-slate-700 bg-white focus:outline-none"
    >
      <option value="USD">USD - US Dollar</option>
      <option value="NGN">NGN - Naira</option>
      <option value="EUR">EUR - Euro</option>
      <option value="GBP">GBP - Pound</option>
      <option value="JPY">JPY - Yen</option>
    </select>
    <PencilSquareIcon className="w-4 h-4 absolute top-9 right-3 text-gray-400" />
  </div>
);

CurrencySelector.propTypes = {
  form: PropTypes.shape({
    currency: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CurrencySelector;
