import "./App.scss";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import AboutDao from "./pages/AboutDao/AboutDao";
import Roadmap from "./components/roadmap/roadmap";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/about_dao" element={<AboutDao />} />
        <Route path="/map" element={<Roadmap />} />
      </Routes>
    </>
  );
}

export default App;
