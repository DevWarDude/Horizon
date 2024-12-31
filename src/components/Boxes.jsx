import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router";

export function Project(prop) {
  return (
    <div className="hover:bg-[#E7816B] bg-[#ffebe6] hover:text-white mx-6 rounded-2xl md:overflow-hidden duration-500 hover:border-[#ffffff27] text-neutral-700 border-[.0009rem] product cursor-pointer sm:text-lg md:flex md:mx-16 xl:mx-0 xl:flex-col ">
      <img
        src={prop.img}
        alt=""
        className="rounded-t-2xl sm:w-full object-cover sm:h-[340px] md:rounded-t-none   md:w-[50%] xl:w-[100%]"
      />
      <div className="flex flex-col items-center text-center py-10 gap-5 px-8 md:justify-center md:w-[50%] md:px-7 lg:px-16 xl:w-[100%] xl:px-6">
        <div className=" font-medium text-xl tracking-widest text-[#E7816B] name duration-500 md:text-2xl">
          {prop.name}
        </div>
        <div className="">{prop.description}</div>
      </div>
    </div>
  );
}

export function ProjectLink(prop) {
  return (
    <div
      className={`${prop.bg} ${prop.className} bg-cover bg-center relative text-white py-14 rounded-xl shadow-2xl flex flex-col items-center justify-center md:mx-28 md:py-16 `}
    >
      <div className="absolute inset-0 bg-black opacity-5 hover:opacity-30 duration-300 cursor-pointer hover:bg-[#eb765c] rounded-xl"></div>
      <div className="z-10 flex flex-col items-center gap-6">
        <div
          className={`text-2xl ${prop.size} font-semibold tracking-wider md:text-5xl md:font-medium sm:text-3xl`}
        >
          {prop.type}
        </div>
        <div>
          <Link className="flex items-center gap-2" to={prop.link}>
            <span className="tracking-[4px] font-medium text-lg">
              {" "}
              VIEW PROJECTS
            </span>
            <FaAngleRight className="text-[#E7816B] text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Skill(prop) {
  return (
    <div
      className={`${prop.className} flex flex-col justify-center items-center gap-10 md:flex-row lg:flex-col text-center lg:justify-start md:items-start lg:items-center`}
    >
      {prop.svg}
      <div className="flex flex-col md:gap-6 gap-7 md:items-start lg:items-center">
        <div className="tracking-[4px] font-semibold text-xl opacity-70 sm:text-2xl md:font-medium md:tracking-[5px]">
          {prop.title}
        </div>
        <span className="text-center leading-[25px] opacity-85 md:text-start md:leading-8 lg:text-center lg:leading-7 lg:text-lg">
          {prop.description}
        </span>
      </div>
    </div>
  );
}

export function Location(prop) {
  return (
    <div className={`flex flex-col gap-9 items-center ${prop.className}`}>
      {prop.svg}
      <div className="font-semibold tracking-widest sm:tracking-[6px] text-xl">
        {prop.country}
      </div>
      <Link
        className="bg-[#E7816B] text-white py-5 px-6 rounded-xl font-medium tracking-wide"
        to={"/Location"}
      >
        SEE LOCATION
      </Link>
    </div>
  );
}
