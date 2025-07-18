import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useClickOutside } from "../hooks/use-click-outside";
import { SideBar } from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router";

const HomeLayout = () => {
  const isDesktopDevice = useMediaQuery("(min-width: 968px)");

  const [collapsed, setCollapsed] = useState(!isDesktopDevice);
  const sidebarRef = useRef(null);

  useEffect(() => {
    setCollapsed(!isDesktopDevice);
  }, [isDesktopDevice]);

  useClickOutside([sidebarRef], () => {
    if (!isDesktopDevice && !collapsed) {
      setCollapsed(true);
    }
  });

  function handleSidebar() {
    if (collapsed === true) return;

    if (collapsed === false) setCollapsed(true);
  }

  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
      <div
        className={`pointer-events-none fixed inset-0 -z-10 bg-black opacity-0 transition-opacity
          ${
            !collapsed &&
            "max-md:pointer-events-auto max-md:z-50 max-md:opacity-30"
          }`}
      />

      <SideBar
        collapsed={collapsed}
        handleSidebar={handleSidebar}
        setCollapsed={setCollapsed}
        ref={sidebarRef}
      />

      <div
        className={`{transition-[margin] duration-300
          ${collapsed ? "md:ml-[0px]" : "md:ml-[240px]"}`}
      >
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
