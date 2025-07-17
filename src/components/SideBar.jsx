import { NavLink } from "react-router";
import { navBarLinks } from "../data/navBarLinks";
import { MdLogout } from "react-icons/md";
import { ClipLoader } from "react-spinners";

import { useLogout } from "../hooks/useLogout";
// import { cn } from "@/utils/cn"; " "

import PropTypes from "prop-types";
import { forwardRef } from "react";
import ToolTip from "./Tooltip";
import { AnimatePresence, motion } from "framer-motion";

export const SideBar = forwardRef(({ collapsed, handleSidebar }, ref) => {
  const { logout, isLoading: isLoggingOut } = useLogout();
  return (
    <AnimatePresence>
      {!collapsed && (
        <motion.aside
          ref={ref}
          key="sidebar"
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -250, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed z-[1000] flex top-0 bottom-0 p-2 w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900 ${
            collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]"
          } ${collapsed ? "max-md:-left-full" : "max-md:left-0"}
      `}
        >
          <div>
            <div className="flex gap-x-3  p-3">
              <img
                src="../logo.svg"
                alt="Logoipsum"
                className="dark:hidden cursor-pointer"
              />
              <img
                src="../logo.svg"
                alt="Logoipsum"
                className="hidden dark:block cursor-pointer"
              />
              {!collapsed && (
                <p className=" font-medium text-stone-700 transition-colors dark:text-slate-50 text-2xl">
                  Horizon
                </p>
              )}
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mt-5">
              {navBarLinks.map((link, index) => (
                // <motion.div
                //   key={link.label}
                //   initial={{ x: -10, opacity: 0 }}
                //   animate={{ x: 0, opacity: 1 }}
                //   transition={{ delay: 0.1 * index }}
                // >
                <ToolTip
                  label={link.label}
                  key={index}
                  titleValidation={collapsed}
                >
                  <NavLink
                    to={link.path}
                    className={`sidebar-item  ${
                      collapsed &&
                      "md:w-[45px] flex items-center justify-center "
                    } `}
                    onClick={handleSidebar}
                  >
                    <link.icon size={22} className="flex-shrink-0" />
                    {!collapsed && (
                      <p className="whitespace-nowrap">{link.label}</p>
                    )}
                  </NavLink>
                </ToolTip>
                // </motion.div>
              ))}
            </div>
          </div>

          <ToolTip label="Logout" titleValidation={collapsed}>
            <button
              className={`sidebar-item absolute bottom-4 cursor-pointer disabled:opacity-50 w-[90%] ${
                collapsed && "md:w-[45px] flex items-center justify-center "
              } `}
              onClick={logout}
              disabled={isLoggingOut}
            >
              <MdLogout className={"opacity-75 text-2xl"} />
              {!collapsed && (
                <p className="whitespace-nowrap flex items-center gap-3">
                  {isLoggingOut ? (
                    <>
                      <ClipLoader size={20} color="#fff" />
                      <span>Logging out...</span>
                    </>
                  ) : (
                    <span>Logout</span>
                  )}
                </p>
              )}
            </button>
          </ToolTip>
        </motion.aside>
      )}
    </AnimatePresence>
  );
});

SideBar.displayName = "SideBar";

SideBar.propTypes = {
  collapsed: PropTypes.bool,
  handleSidebar: PropTypes.func,
};
