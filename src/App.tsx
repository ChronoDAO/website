import "./App.scss";
import Nav from "./components/nav/Nav";
import NavHamburger from "./components/NavHamburger/NavHamburger";
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import AboutDao from "./pages/AboutDao/AboutDao";
import Footer from "./components/footer/Footer.tsx";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.matchMedia("(min-width: 600px)").matches);
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container" style={{ 
      backgroundImage: `url("./images/bg_dragon.svg"), url("./images/12.png")` 
    }}>
      {isWideScreen ? <Nav /> : <NavHamburger />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/about_dao" element={<AboutDao />} />
      </Routes>
      <SocialMedia/>
      <Footer/>
    </div>
  );
}

export default App;
