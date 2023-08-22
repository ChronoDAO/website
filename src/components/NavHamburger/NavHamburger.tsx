import { Link } from "react-router-dom";
import { useState } from "react";
import CTAButton from "../Buttons/CTA-Button/CTAButton";
import "./NavHamburger.scss";

function NavHamburger() {
  const [showLinks, setShowLinks] = useState(false); // State to track menu open/close

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav": "hide-nav"}`}>
    {/* // <nav className="Navbar"> */}
      <div className="navbar__logo">
        <a href="/">
          <img src="./images/assets/dao.png" alt="Logo de la guilde ChronoDAO, représente un dragon stylisé bleu dans un cercle rappelant de manière très simplifiée une pocketwatch du jeu Bigtime" />
        </a>
      </div>
      <div className="navbar__cta-button">
        <CTAButton text={"Team"} />
      </div>

      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/about_dao" className="navbar__link">About DAO</Link>
        </li>
        <li className="navbar__item">
          <Link to="/about_us" className="navbar__link">About us</Link>
        </li>
        <li className="navbar__item">
          <Link to="/games" className="navbar__link">Games</Link>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
      {/* <button className="navbar__burger"> */}
        <span className="burger-bar"></span>
      </button>

      {/* <div
        id="hamburger"
        className={isActive ? 'active' : ''}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {isActive && (
          <div className="centered-links">{links()}</div>
        )} */}

    </nav>
  );
}

export default NavHamburger

