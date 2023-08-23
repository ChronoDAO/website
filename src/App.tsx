import "./App.scss";
import Nav from "./components/nav/Nav";
import NavHamburger from "./components/NavHamburger/NavHamburger.tsx";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import AboutDao from "./pages/AboutDao/AboutDao";
import Footer from "./components/footer/Footer.tsx";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.matchMedia("(min-width: 800px)").matches);
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <SocialMedia />
      <div
        className="container"
      >
        {isWideScreen ? <Nav /> : <NavHamburger />}
        <div className="container-width">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/about_dao" element={<AboutDao />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
