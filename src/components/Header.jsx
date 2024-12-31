// import { } from "framer-;
import gsap from "gsap";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    gsap.fromTo(".links", { y: 20 }, { y: 0, duration: 1, stagger: 0.2 });

    gsap.fromTo(
      ".links",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, stagger: 0.2 }
    );
  }, [showMenu]);

  return (
    <>
      {/* // header */}
      <header className="flex lg:px-16 items-center justify-between p-8 relative font-jost md:py-20 md:px-16 sm:py-10 z-[90]">
        <Link to={"/Designo/"}>
          <img src="./logo-dark.webp" alt="Logo" className="w-[200px]" />
        </Link>
        {!showMenu && (
          <FaBars
            className="text-3xl font-semibold md:hidden cursor-pointer"
            onClick={() => setShowMenu((is) => !is)}
          />
        )}

        {showMenu && (
          <FaTimes
            className="text-3xl font-semibold md:hidden cursor-pointer"
            onClick={() => setShowMenu((is) => !is)}
          />
        )}
        <ul className="hidden md:flex gap-12 tracking-widest text-neutral-800">
          <Link to={"/About"}>
            <li className="links">OUR COMPANY</li>
          </Link>
          <Link to={"/Location"}>
            <li className="links">LOCATIONS</li>
          </Link>
          <Link to={"/Contact"}>
            <li className="links">CONTACT</li>
          </Link>
        </ul>
      </header>
      {/* // PopUp Menu */}
      <div
        className={`bg-zinc-900 duration-300 absolute left-0 right-0 z-50 ${
          showMenu ? " opacity-100 scale-100" : "opacity-0 scale-90"
        } ${showMenu ? "z-[90]" : "z-0"}`}
      >
        <ul
          className={`text-neutral-300 font-medium tracking-wider p-14 flex flex-col gap-6 text-xl 
           `}
        >
          <Link to={"/About"} onClick={() => setShowMenu((is) => !is)}>
            <li className="links">OUR COMPANY</li>
          </Link>
          <Link to={"/Location"} onClick={() => setShowMenu((is) => !is)}>
            <li className="links">LOCATIONS</li>
          </Link>
          <Link to={"/Contact"} onClick={() => setShowMenu((is) => !is)}>
            <li className="links">CONTACT</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
