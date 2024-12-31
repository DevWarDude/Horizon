import Award from "../components/Award";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";
import { ProjectLink } from "../components/Boxes";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  useEffect(() => {
    document.title = "Home / Designo";

    gsap.fromTo(
      ".web",
      {
        x: -40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".web",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".app",
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".app",
          start: "top 100%",
          toggleActions: "play none none ",
        },
      }
    );

    gsap.fromTo(
      ".graphic",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".graphic",
          start: "top 100%",
          toggleActions: "play none none ",
        },
      }
    );
  }, []);

  return (
    <div>
      <Header />
      <Award />
      <div className="mt-24 p-7 flex flex-col gap-6 lg:mt-40 lg:items-center">
        <div className="lg:flex-row lg:text-center flex flex-col gap-6 lg:gap-5 ">
          <ProjectLink
            type="WEB DESIGN"
            link={"/WebDesign"}
            bg="bg-[url('../public/Desktop-Image/image-web-design-small.jpg')]"
            className="lg:px-7 lg:m-0 lg:py-64 lg:whitespace-nowrap web"
          />
          <div className="flex gap-6 flex-col lg:justify-between lg:gap-5">
            <ProjectLink
              type="APP DESIGN"
              link={"/AppDesign"}
              bg="bg-[url('../public/Desktop-Image/image-app-design.jpg')]"
              className="lg:px-7 lg:m-0 lg:py-28 app"
              size="lg:text-4xl"
            />
            <ProjectLink
              type="GRAPHIC DESIGN"
              link={"/GraphicsDesign"}
              bg="bg-[url('../public/Desktop-Image/image-graphic-design.jpg')]"
              className="lg:px-7 lg:py-28 lg:m-0 graphic"
              size="lg:text-4xl"
            />
          </div>
        </div>
      </div>
      <Skills />
      <Footer />
    </div>
  );
}

export default HomePage;
