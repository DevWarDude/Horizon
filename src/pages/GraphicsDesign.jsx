import Footer from "../components/Footer";
import Header from "../components/Header";
import { Project, ProjectLink } from "../components/Boxes";
import ProjectDetails from "../components/ProjectDetails";
import gsap from "gsap";
import { useEffect } from "react";

function GraphicsDesign() {
  useEffect(() => {
    document.title = "Graphic-Design / Designo";
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
      ".app",
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".app",
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
          title="Graphic Design"
          description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        />
        <div className="mt-20 flex flex-col gap-6 xl:grid grid-cols-3 xl:mx-16">
          <Project
            img="./Desktop-Image/image-express.jpg"
            name="TIM BROWN"
            description="A book cover designe for Tim Brown's new release, 'Change'"
          />
          <Project
            img="./Desktop-Image/image-boxed-water.jpg"
            name="BOXED WATER"
            description="A simple packaging concept made for Boxed Water"
          />
          <Project
            img="./Desktop-Image/image-science.jpg"
            name="SCIENCE"
            description="A poster made in collaboration with the Federal Air Project"
          />
        </div>
      </div>
      <div className="mx-6 mt-20 flex flex-col gap-7 xl:flex-row xl:grid grid-cols-2 xl:mx-32 xl:my-36 xl:mb-80">
        <ProjectLink
          type="APP DESIGN"
          link={"/AppDesign"}
          bg="bg-[url('./Desktop-Image/image-app-design.jpg')]"
          className="py-20 lg:py-28  xl:mx-0 app"
          size="tracking-[3px]"
        />
        <ProjectLink
          type="WEB DESIGN"
          link={"/WebDesign"}
          bg="bg-[url('./Desktop-Image/image-web-design-small.jpg')]"
          className="py-20 lg:py-28  xl:mx-0 web"
          size="tracking-[3px]"
        />
      </div>
      <Footer />
    </div>
  );
}

export default GraphicsDesign;
