import { Route, Routes, BrowserRouter as Router } from "react-router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Location from "./pages/Location";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import WebDesign from "./pages/WebDesign";
import GraphicsDesign from "./pages/GraphicsDesign";
import AppDesign from "./pages/AppDesign";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Designo/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/graphicsdesign" element={<GraphicsDesign />} />
        <Route path="/appdesign" element={<AppDesign />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
