import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Gallery from "./pages/Gallery";
import Welcome from "./pages/Welcome";

function Root() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Root;
