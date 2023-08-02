import "./App.scss";
import Nav from "./components/nav/Nav";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import AboutDao from "./pages/AboutDao/AboutDao";
import Footer from "./components/footer/Footer.tsx";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  return (
    <div className="container">
      <Nav />
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
