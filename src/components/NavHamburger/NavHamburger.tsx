import { useState } from "react";
import CTAButton from "../Buttons/CTA-Button/CTAButton";
import "./NavHamburger.scss";

function NavHamburger() {
  const [showLinks, setShowLinks] = useState(false); // State to track menu open/close

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`Navbar ${showLinks ? "show-nav": "hide-nav"}`}>
    {/* // <nav className="Navbar"> */}
      {/* <div className="navbar__logo">
        <a href="/">
          <img src="./images/assets/dao.png" alt="Logo de la guilde ChronoDAO, représente un dragon stylisé bleu dans un cercle rappelant de manière très simplifiée une pocketwatch du jeu Bigtime" />
        </a>
      </div> */}
      <div id="nav-cta-button">
        <CTAButton text={"Team"} />
      </div>

      <ul className="navbar__links">
        <li className="navbar__item">
          <a href="/" className="navbar__link">Home</a>
        </li>
        <li className="navbar__item">
          <a href="/about_us" className="navbar__link">About us</a>
        </li>
        <li className="navbar_item">
          <a href="/about_dao" className="navbar__link">About DAO</a>
        </li>
        <li className="navbar__item">
          <a href="/games" className="navbar__link">Games</a>
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

