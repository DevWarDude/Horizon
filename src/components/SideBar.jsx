import { NavLink } from "react-router";
import { navBarLinks } from "../data/navBarLinks";
import { MdLogout } from "react-icons/md";

// import { cn } from "@/utils/cn";

import PropTypes from "prop-types";
import { forwardRef } from "react";

export const SideBar = forwardRef(({ collapsed, setCollapsed }, ref) => {
  return (
    <aside
      ref={ref}
      className={`fixed z-[1000] flex top-0 bottom-0 p-2 w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900 ${
        collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]"
      } ${collapsed ? "max-md:-left-full" : "max-md:left-0"}
      `}
    >
      <div>
        <div className="flex gap-x-3  p-3">
          <img src="../logo.svg" alt="Logoipsum" className="dark:hidden" />
          <img
            src="../logo.svg"
            alt="Logoipsum"
            className="hidden dark:block"
          />
          {!collapsed && (
            <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">
              Horizon
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {navBarLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={`sidebar-item ${collapsed && "md:w-[45px]"} `}
              onClick={() => setCollapsed((is) => !is)}
            >
              <link.icon size={22} className="flex-shrink-0" />
              {!collapsed && <p className="whitespace-nowrap">{link.label}</p>}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="sidebar-item absolute bottom-4 cursor-pointer">
        <MdLogout />
        <p className="whitespace-nowrap">Logout</p>
      </div>
    </aside>
  );
});

SideBar.displayName = "SideBar";

SideBar.propTypes = {
  collapsed: PropTypes.bool,
};
