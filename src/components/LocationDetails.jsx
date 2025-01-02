import gsap from "gsap";
import { useEffect } from "react";

function LocationDetails() {
  useEffect(function () {
    gsap.utils.toArray(".bg").forEach((bg) => {
      gsap.fromTo(
        bg,

        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bg,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.utils.toArray(".address").forEach((location) => {
      gsap.fromTo(
        location,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: location,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="font-jost text-neutral-700 flex md:mx-16 md:flex  flex-col sm:gap-32 gap-10 relative z-[50] xl:gap-12 ">
      <div className="flex  flex-col sm:gap-8 xl:flex-row-reverse  xl:justify-between bg">
        <img
          src="./Desktop-Image/image-map-canada.png"
          className="sm:hidden xl:flex xl:rounded-2xl"
          alt="map"
        />
        <img
          src="./Tablet-image/image-map-canada.png"
          className="hidden sm:block w-full md:rounded-2xl xl:hidden"
          alt="map"
        />
        <div className="bg-[#f4ecea] flex flex-col justify-center items-center py-24 text-lg rounded-2xl md:items-start xl:whitespace-nowrap xl:flex-1 ">
          <div className="md:mx-24 md:w-[60%] flex flex-col items-center md:items-start address">
            <div className="text-[#E7816B] font-semibold text-3xl tracking-wide md:text-4xl lg:mb-3 lg:text-5xl">
              Canada
            </div>
            <div className="md:flex gap-6 items-end md:justify-between lg:w-full">
              <div className="flex flex-col justify-center items-center gap-1 mt-8 md:items-start">
                <p className="font-bold">Designo Central Office</p>
                <div className=" flex flex-col items-center md:items-start">
                  <span>3886 Wellington Street</span>
                  <span>Toronto, Ontario M9C 3J5</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center font-bold mt-5 md:items-start">
                <p>Contact</p>
                <p>P: +1 253-863-8967</p>
                <p>M: contact@designo.co</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col sm:gap-8 xl:flex-row  xl:justify-between bg">
        <img
          src="./Desktop-Image/image-map-australia.png"
          className="sm:hidden xl:flex xl:rounded-2xl"
          alt="map"
        />
        <img
          src="./Tablet-image/image-map-australia.png"
          className="hidden sm:block w-full md:rounded-2xl xl:hidden"
          alt="map"
        />
        <div className="bg-[#f4ecea] flex flex-col justify-center items-center py-24 text-lg rounded-2xl md:items-start xl:whitespace-nowrap xl:flex-1">
          <div className="md:mx-24 md:w-[60%] flex flex-col items-center md:items-start address">
            <div className="text-[#E7816B] font-semibold text-3xl tracking-wide md:text-4xl lg:mb-3 lg:text-5xl">
              Australia
            </div>
            <div className="md:flex gap-6 items-end md:justify-between lg:w-full">
              <div className="flex flex-col justify-center items-center gap-1 mt-8 md:items-start">
                <p className="font-bold">Designo AU Office</p>
                <div className=" flex flex-col items-center md:items-start">
                  <span>19 Balonne Street</span>
                  <span>New South Wales 2443</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center font-bold mt-5 md:items-start">
                <p>Contact</p>
                <p>P: (02) 6720 9092</p>
                <p>M: contact@designo.au</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col sm:gap-8 xl:flex-row-reverse xl:justify-between xl:mb-20 bg">
        <img
          src="./Desktop-Image/image-map-united-kingdom.png"
          alt="map"
          className="sm:hidden xl:flex xl:rounded-2xl"
        />
        <img
          src="./Tablet-image/image-map-uk.png"
          alt="map"
          className="hidden sm:block w-full md:rounded-2xl xl:hidden"
        />
        <div className="bg-[#f4ecea] flex flex-col justify-center items-center py-24 text-lg rounded-2xl md:items-start xl:whitespace-nowrap xl:flex-1 ">
          <div className=" md:mx-24 md:w-[60%] flex flex-col items-center md:items-start address">
            <div className="text-[#E7816B] font-semibold text-3xl tracking-wide md:text-4xl lg:mb-3 lg:text-5xl">
              United Kingdom
            </div>
            <div className="md:flex gap-6 items-end md:justify-between lg:w-full">
              <div className="flex flex-col justify-center items-center gap-1 mt-8 md:items-start">
                <p className="font-bold">Designo UK Office</p>
                <div className=" flex flex-col items-center md:items-start">
                  <span>13 Colorado Way</span>
                  <span>Rhyd-y-fro SA8 9GA</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center font-bold mt-5 md:items-start">
                <p>Contact</p>
                <p>P: 078 3115 1400</p>
                <p>M: contact@designo.uk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationDetails;
