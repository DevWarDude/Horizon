import PropTypes from "prop-types";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeToggleButton = ({ theme, toggleTheme }) => (
  <button
    type="button"
    onClick={toggleTheme}
    className="flex items-center gap-2 text-sm px-3 py-1 rounded-md border dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-800"
  >
    {theme === "dark" ? (
      <>
        <SunIcon className="h-4 w-4 text-yellow-500" /> Light Mode
      </>
    ) : (
      <>
        <MoonIcon className="h-4 w-4 text-gray-600" /> Dark Mode
      </>
    )}
  </button>
);

ThemeToggleButton.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggleButton;
