import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateInput({ selectedDate, setSelectedDate, dobError }) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 dark:text-stone-50 font-medium mb-1">
        Date of Birth
      </label>
      <DatePicker
        showYearDropdown
        showMonthDropdown
        minDate={new Date("1960-01-01")}
        maxDate={new Date("2010-12-31")}
        mode="single"
        captionLayout="dropdown"
        dropdownMode="select"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Choose your birth date"
        className="border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-400 px-4  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 md:py-4 md:text-lg py-3 w-full z-[1000]"
      />
      {dobError && <p className="text-red-500">{dobError}</p>}
    </div>
  );
}

DateInput.propTypes = {
  selectedDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.oneOf([null]),
  ]),
  setSelectedDate: PropTypes.func.isRequired,
  dobError: PropTypes.string,
};

export default DateInput;
