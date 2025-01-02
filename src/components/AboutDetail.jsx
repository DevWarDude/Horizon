import { Australia, Canada, UnitedKingdom } from "./SVGs";
import { Location } from "./Boxes";
import gsap from "gsap";
import { useEffect } from "react";

function AboutDetail() {
  useEffect(function () {
    gsap.fromTo(
      ".about-img",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-img",
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".about-details",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-details",
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".talent-img",
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".talent-img",
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".talent-header",
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".talent-header",
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.utils.toArray(".talent-text").forEach((text) => {
      gsap.fromTo(
        text,

        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.utils.toArray(".locations").forEach((location) => {
      gsap.fromTo(
        location,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: location,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    gsap.fromTo(
      ".deal-img",
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".deal-img",
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".deal-header",
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".talent-header",
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.utils.toArray(".deal-text").forEach((text) => {
      gsap.fromTo(
        text,

        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: text,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className=" text-white sm:text-lg relative z-[60]">
      <div className="bg-[#E7816B] md:mx-16 md:rounded-2xl xl:flex xl:flex-row-reverse xl:justify-between">
        <div>
          <img
            src="./Mobile-Images/image-about-hero.jpg"
            alt="image"
            className="sm:hidden about-img w-full"
          />
          <img
            src="./Tablet-image/image-about-hero.jpg"
            alt="image"
            className="hidden sm:block  w-full object-cover xl:rounded-r-2xl xl:h-full xl:rounded-none md:rounded-t-2xl  xl:w-[300px]"
          />
        </div>

        <div className="flex flex-col py-16 px-3 justify-center items-center text-center gap-7 relative overflow-hidden lg:px-28 lg:py-20 xl:p-0 xl:px-28  xl:py-6 xl:items-start xl:text-start about-details">
          <div className="text-3xl  font-semibold tracking-wide sm:text-4xl md:text-5xl">
            About Us
          </div>
          <div className="lg:font-thin xl:w-[600px] xl:font-extralight">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </div>
        </div>
      </div>

      <div className="md:mx-16 md:mt-28 xl:flex xl:items-stretch xl:mt-40">
        <img
          src="./Mobile-Images/image-world-class-talent.jpg"
          alt="image"
          className="sm:hidden talent-img w-full"
        />
        <img
          src="./Tablet-image/image-world-class-talent.jpg"
          alt="image"
          className="hidden sm:block w-full md:rounded-t-2xl xl:hidden talent-img"
        />

        <img
          src="./Desktop-Image/image-world-class-talent.jpg"
          alt="image"
          className="hidden  xl:block w-full md:rounded-l-2xl"
        />
        <div className="relative overflow-hidden md:rounded-b-2xl xl:rounded-none xl:rounded-r-2xl">
          <div className="bg-[#f4ecea] text-center flex  text-stone-700 flex-col py-16 p-5 gap-8 lg:px-28 xl:px-16 xl:h-full xl:py-0 xl:flex xl:justify-center">
            <div className="text-3xl font-medium  text-[#E7816B] sm:text-4xl md:text-5xl talent-header">
              World-class talent
            </div>
            <div>
              <div className="talent-text">
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updatinglocations in a myriad of platforms.
              </div>
              <div className="mt-7 talent-text">
                Our team is multi-disciplinary and we are not merely interested
                in form — content and meaning are just as important. We give
                great importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand’s story and mission.
              </div>
            </div>
          </div>
          <svg
            width="876"
            height="584"
            className="absolute opacity-50 top-0 rotate-[360deg]"
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
          </svg>
        </div>
      </div>

      <div className="text-neutral-700 mt-24 flex flex-col gap-16 lg:flex-row lg:justify-between lg:mx-24">
        <Location svg={<Canada />} country="CANADA" className="locations" />
        <Location
          svg={<Australia />}
          country="AUSTRALIA"
          className="locations"
        />
        <Location
          svg={<UnitedKingdom />}
          country="UNITED KINGDOM"
          className="locations"
        />
      </div>

      <div className="mt-24 md:mx-16 xl:flex xl:flex-row-reverse xl:items-stretch xl:mt-40 xl:mb-80">
        <img
          src="./Mobile-Images/image-real-deal.jpg"
          alt="image"
          className="sm:hidden deal-img w-full"
        />
        <img
          src="./Tablet-image/image-real-deal.jpg"
          alt="image"
          className="hidden sm:block md:rounded-t-2xl md:w-full xl:hidden deal-img"
        />
        <img
          src="./Desktop-Image/image-real-deal.jpg"
          alt="image"
          className=" md:rounded-t-2xl md:w-full xl:flex hidden xl:rounded-r-2xl xl:rounded-none deal-img"
        />
        <div className="relative overflow-hidden ">
          <div className="bg-[#f4ecea] text-center flex  text-stone-700 flex-col py-16 p-5 gap-8 md:rounded-b-2xl xl:h-full xl:rounded-l-2xl xl:rounded-sm xl:p-0 xl:justify-center xl:px-12">
            <div className="text-3xl font-medium  text-[#E7816B] sm:text-4xl md:text-5xl deal-header">
              The real deal
            </div>
            <div>
              <div className="deal-text">
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </div>
              <div className="mt-7 deal-text">
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </div>
            </div>
          </div>
          <svg
            width="876"
            height="584"
            className="absolute opacity-50 top-0 rotate-[360deg]"
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
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AboutDetail;
