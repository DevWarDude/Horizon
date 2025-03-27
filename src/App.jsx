import { Route, Routes, BrowserRouter as Router } from "react-router";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/About"));
const Location = lazy(() => import("./pages/Location"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Contact = lazy(() => import("./pages/Contact"));
const WebDesign = lazy(() => import("./pages/WebDesign"));
const GraphicsDesign = lazy(() => import("./pages/GraphicsDesign"));
const AppDesign = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/webdesign" element={<WebDesign />} />
          <Route path="/graphicsdesign" element={<GraphicsDesign />} />
          <Route path="/appdesign" element={<AppDesign />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
