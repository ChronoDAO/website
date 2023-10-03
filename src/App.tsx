import "./App.scss";
import Nav from "./components/common/nav/Nav";
import NavHamburger from "./components/common/nav/NavHamburger/NavHamburger.tsx";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import AboutDao from "./pages/AboutDao/AboutDao";
import Footer from "./components/common/footer/Footer.tsx";
import SocialMedia from "./components/common/SocialMedia/SocialMedia.tsx";
import Twitch from "./pages/Twitch/Twitch.tsx";
import Game from "./pages/Game/Game.tsx";
import Cluf from "./pages/Cluf/Cluf.tsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.tsx";
import Politique from "./pages/Politique/Politique.tsx";

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
      {!isWideScreen && <NavHamburger />}
      <ScrollToTop/>
      <div className="container">
        {isWideScreen && <Nav />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/extention_twitch/cluf" element={<Cluf />} />
          <Route path="/extention_twitch/politique_de_confidentialite" element={<Politique />} />
          <Route path="/games" element={<Game />} />
          <Route path="/about_dao" element={<AboutDao />} />
          <Route path="/extention_twitch" element={<Twitch />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
