import { useEffect } from "react";
import AboutDetail from "../components/AboutDetail";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  useEffect(() => {
    document.title = "About Us / Designo";
  });
  return (
    <div className="font-jost">
      <Header />
      <AboutDetail />
      <Footer />
    </div>
  );
}

export default About;
