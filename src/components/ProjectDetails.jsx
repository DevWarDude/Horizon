import gsap from "gsap";
import { useEffect } from "react";

function ProjectDetails(prop) {
  useEffect(() => {
    gsap.utils.toArray(".top").forEach((text) => {
      gsap.fromTo(
        text,

        { y: -40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text,
            start: "top 100%",
            toggleActions: "play none none ",
          },
        }
      );
    });

    gsap.utils.toArray(".bottom").forEach((location) => {
      gsap.fromTo(
        location,
        { y: 40, opacity: 0 },
        {
          y: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: location,
            start: "top 100%",
            toggleActions: "play none none",
          },
        }
      );
    });
  }, []);
  return (
    <div className="bg-[#E7816B] md:mx-16 md:rounded-2xl md:mb-36">
      <div className="flex flex-col sm:px-12 py-24 sm:py-28 px-7 leading-7 justify-center items-center text-center gap-7 relative overflow-hidden text-white  md:py-20">
        <div className="text-3xl  font-semibold tracking-wide sm:text-4xl md:text-5xl top">
          {prop.title}
        </div>
        <div className="sm:text-lg sm:font-light md:w-[420px] bottom">
          {prop.description}
        </div>

        {/* <svg
          className="w-[480px] h-[475px] absolute"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
              <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
              <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="matrix(-1 0 0 1 876 0)"
            fill="url(#a)"
            fillRule="evenodd"
            opacity=".309"
          >
            <g transform="translate(0 292)">
              <circle
                transform="matrix(0 -1 -1 0 292 292)"
                cx="146"
                cy="146"
                r="146"
              />
              <circle
                transform="matrix(-1 0 0 1 876 0)"
                cx="438"
                cy="146"
                r="146"
              />
              <circle
                transform="matrix(0 1 1 0 584 -584)"
                cx="730"
                cy="146"
                r="146"
              />
            </g>
            <circle
              transform="matrix(0 -1 -1 0 292 292)"
              cx="146"
              cy="146"
              r="146"
            />
            <circle
              transform="matrix(-1 0 0 1 876 0)"
              cx="438"
              cy="146"
              r="146"
            />
          </g>
        </svg> */}
      </div>
    </div>
  );
}

export default ProjectDetails;
