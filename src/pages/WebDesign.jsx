import Footer from "../components/Footer";
import Header from "../components/Header";
import { Project, ProjectLink } from "../components/Boxes";
import ProjectDetails from "../components/ProjectDetails";
import gsap from "gsap";
import { useEffect } from "react";

function WebDesign() {
  useEffect(() => {
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
          toggleActions: "play none none reverse",
        },
      }
    );

    document.title = "Web-Design / Designo";
  }, []);

  return (
    <div className="font-jost">
      <Header />
      <div>
        <ProjectDetails
          title="Web Design"
          description=" We build websites that serve as powerful marketing tools and bring
          memorable brand experiences."
        />
        <div className="mt-20 flex flex-col gap-6 xl:grid grid-cols-3 xl:mx-16">
          <Project
            img="./Desktop-Image/image-express.jpg"
            name="EXPRESS"
            description=" A multi-carrier shipping website for ecommerce businesses"
          />
          <Project
            img="./Desktop-Image/image-transfer.jpg"
            name="TRANSFER"
            description=" Site for Low-cost Money transfers and sending money within seconds"
          />
          <Project
            img="./Desktop-Image/image-photon.jpg"
            name="PHOTON"
            description="A ste-of-the-art music player with high-resolution audion DSP effects"
          />
          <Project
            img="./Desktop-Image/image-builder.jpg"
            name="BUILDER"
            description="Connects users with local contractors based on their location"
          />
          <Project
            img="./Desktop-Image/image-blogr.jpg"
            name="BLOGR"
            description="Blogr is a platform for creating an online blog or publication"
          />
          <Project
            img="./Desktop-Image/image-camp.jpg"
            name="CAMP"
            description="Get expert training in coding, data, design, and digital marketing"
          />
        </div>
      </div>

      <div className="mx-6 mt-20 flex flex-col gap-7 xl:flex-row xl:grid grid-cols-2 xl:mx-32 xl:my-36 xl:mb-80">
        <ProjectLink
          type="APP DESIGN"
          link={"/AppDesign"}
          bg="bg-[url('../public/Desktop-Image/image-app-design.jpg')]"
          className="py-20 lg:py-28  xl:mx-0 app"
          size="tracking-[3px] lg:tracking-[2px]"
        />
        <ProjectLink
          type="GRAPHIC DESIGN"
          link={"/GraphicsDesign"}
          bg="bg-[url('../public/Desktop-Image/image-graphic-design.jpg')]"
          className="py-20 xl:mx-0 lg:py-28 graphic"
          size="tracking-[3px] lg:tracking-[2px]"
        />
      </div>
      <Footer />
    </div>
  );
}

export default WebDesign;
