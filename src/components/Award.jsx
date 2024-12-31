import { Link } from "react-router";
import { useEffect } from "react";
import gsap from "gsap";

function Award() {
  useEffect(() => {
    gsap.fromTo(
      ".award",
      {
        x: -60,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        // ease: "power1",
      }
    );
    gsap.fromTo(
      ".slowshow",
      {
        x: -40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      }
    );
    gsap.fromTo(
      ".link",
      {
        x: -10,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className=" text-white inset-0 bg-[#E7816B] text-center font-jost pt-16 px-5 relative h-[97vh] overflow-hidden md:mx-16 md:rounded-2xl shadow-xl lg:h-[115vh] md:mt-0 sm:h-[85vh] xl:h-[76vh] xl:p-0 z-50">
      <svg
        className="w-[100%] h-[100%] xl:hidden  absolute opacity-100 top-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
            <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
            <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
          </linearGradient>
        </defs>
        <circle
          fill="url(#a)"
          transform="matrix(0 -1 -1 0 640 640)"
          cx="320"
          cy="320"
          r="320"
          fillRule="evenodd"
          opacity=".309"
        />
      </svg>

      <div className="flex flex-col items-center xl:items-start gap-6 lg:px-36 xl:px-10 xl:flex-row ">
        <div className="flex flex-col  xl:items-start xl:text-start xl:h-[76vh] xl:justify-center items-center gap-6 ">
          <div className="text-3xl font-semibold tracking-wide md:text-5xl md:leading-[60px] sm:text-4xl award">
            Award-winning custom designs and digital branding solutions
          </div>
          <span className="md:leading-8 sm:text-lg md:mx-20 lg:mx-20 xl:m-0 slowshow">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaing brand expriences.
            Find out more about our services.
          </span>
          <Link
            className="mt-5 text-stone-600 tracking-wide bg-white rounded-lg px-7 py-4 font-medium shadow-2xl link"
            to={"/About"}
          >
            LEARN MORE
          </Link>
        </div>
        <div className="xl:w-[50%]">
          <svg
            className="w-[600px] bg-black rounded-full opacity-5 h-[600px] hidden xl:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
              </linearGradient>
            </defs>
            <circle
              fill="url(#a)"
              transform="matrix(0 -1 -1 0 640 640)"
              cx="320"
              cy="320"
              r="320"
              fillRule="evenodd"
              opacity=".309"
            />
          </svg>

          <img
            src="./Desktop-Image/image-hero-phone.png"
            className="sm:-mt-32 md:-mt-40 xl:-mt-[575px] -mt-[53px] "
            alt=""
          />
        </div>
      </div>

      {/* <div className="absolute top-0 flex flex-col">
        <svg className="w-[200px] h-[200px]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
              <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
              <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
            </linearGradient>
          </defs>
          <circle
            fill="url(#a)"
            transform="matrix(0 -1 -1 0 640 640)"
            cx="320"
            cy="320"
            r="320"
            fillRule="evenodd"
            opacity=".309"
          />
        </svg>

      </div> */}
    </div>
  );
}

export default Award;
