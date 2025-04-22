import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Header({ setCollapsed, collapsed }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900 ">
      <div className="flex items-center gap-x-3">
        <img src="../logo.svg" alt="" className={`${"md:hidden"}`} />
        <button
          className="btn-ghost size-10"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronsLeft className={`${collapsed && "rotate-180"}`} />
        </button>
        <div className="hidden h-10 flex-shrink-0 items-center gap-x-2 rounded-lg border border-slate-300 px-2 text-base text-slate-900 transition-colors has-[input:focus]:border-blue-500 md:flex md:w-auto lg:w-80 dark:border-slate-700 dark:text-green-900 dark:focus:border-blue-600">
          <Search size={20} className="text-slate-300" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <button size="icon" onClick={toggleTheme}>
          {theme === "dark" ? (
            <Sun className=" dark:text-slate-400 flex h-10 w-fit gap-x-2  flex-shrink-0 items-center justify-center  rounded-lg transition-colors dark:hover:bg-blue-950 p-2 dark:hover:text-slate-300;" />
          ) : (
            <Moon className="text-slate-400 dark:block  flex h-10 flex-shrink-0 items-center justify-center gap-x-2 rounded-lg p-2 w-fit transition-colors hover:bg-blue-50 hover:text-slate-500" />
          )}
        </button>

        <button className="btn-ghost size-10">
          <Bell size={20} />
        </button>
        <button className="size-10 overflow-hidden rounded-full">
          <img
            src="../WarDude.png"
            alt="profile image"
            className="size-full object-cover"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
