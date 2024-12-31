import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import gsap from "gsap";

function Contact() {
  useEffect(() => {
    document.title = "Contact Us / Designo";

    gsap.fromTo(
      ".contact",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact",
          start: "top 100%",
          toggleActions: "play none none ",
        },
      }
    );
  }, []);
  return (
    <div className="font-jost">
      <Header />
      <div className="flex justify-center items-center font-medium text-2xl contact lg:h-[40vh] lg:mt-[-10vh] lg:text-3xl text-zinc-600">
        Contact Not Available
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
