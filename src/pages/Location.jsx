import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LocationDetails from "../components/LocationDetails";

function Location() {
  useEffect(() => {
    document.title = "Our Location / Designo";
  });
  return (
    <div className="font-jost">
      <Header />
      <LocationDetails />
      <Footer />
    </div>
  );
}

export default Location;
