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
        <Route path="Designo/about" element={<About />} />
        <Route path="Designo/location" element={<Location />} />
        <Route path="Designo/contact" element={<Contact />} />
        <Route path="Designo/webdesign" element={<WebDesign />} />
        <Route path="Designo/graphicsdesign" element={<GraphicsDesign />} />
        <Route path="Designo/appdesign" element={<AppDesign />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
