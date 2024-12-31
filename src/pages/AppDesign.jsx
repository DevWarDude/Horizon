import Footer from "../components/Footer";
import Header from "../components/Header";
import { Project, ProjectLink } from "../components/Boxes";
import ProjectDetails from "../components/ProjectDetails";
import { useEffect } from "react";
import gsap from "gsap";

function AppDesign() {
  document.title = "App-Design / Designo";
  useEffect(() => {
    gsap.fromTo(
      ".web",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".web",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".graphic",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
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
    <div className="font-jost">
      <Header />
      <div>
        <ProjectDetails
          title="App Design"
          description="Our Mobile designs bring intuitive digital solution to your customers right at their fingertips."
        />
        <div className=" mt-20 flex flex-col gap-6 xl:grid grid-cols-3 xl:mx-16">
          <Project
            img="./Desktop-Image/image-airfilter.jpg"
            name="AIRFILTER"
            description="Solving the problem of poor indoor air quality by filtering the air"
          />
          <Project
            img="./Desktop-Image/image-eyecam.jpg"
            name="EYECAM"
            description="Product that lets you edit your favorite photos and videos at any atime"
          />
          <Project
            img="./Desktop-Image/image-faceit.jpg"
            name="FACEIT"
            description="Get to meet your favorite internet superstar with the faceit app."
          />
          <Project
            img="./Desktop-Image/image-todo.jpg"
            name="TODO"
            description="A todo app that features cloud sync with light and dark mode."
          />
          <Project
            img="./Desktop-Image/image-loopstudios.jpg"
            name="LOOPSTUDIOS"
            description="A VR experience app made for Loopstudios."
          />
        </div>
      </div>
      <div className="mx-6 mt-20 flex flex-col gap-7 xl:flex-row xl:grid grid-cols-2 xl:mx-32 xl:my-36 xl:mb-80">
        <ProjectLink
          type="WEB DESIGN"
          link={"/Designo/WebDesign"}
          bg="bg-[url('../public/Desktop-Image/image-web-design-small.jpg')]"
          className="py-20 lg:py-28  xl:mx-0 web"
          size="tracking-[3px] lg:tracking-[2px]"
        />
        <ProjectLink
          type="GRAPHIC DESIGN"
          link={"/Designo/GraphicsDesign"}
          bg="bg-[url('../public/Desktop-Image/image-graphic-design.jpg')]"
          className="py-20 lg:py-28  xl:mx-0 graphic"
          size="tracking-[3px] lg:tracking-[2px]"
        />
      </div>
      <Footer />
    </div>
  );
}

export default AppDesign;
