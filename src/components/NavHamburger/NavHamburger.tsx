import { Link } from "react-router-dom";
import { useState } from "react";
import CTAButton from "../Buttons/CTA-Button/CTAButton";
import "./NavHamburger.scss";

function NavHamburger() {
  const [showLinks, setShowLinks] = useState(false); // State to track menu open/close

  return (
    <div className="nav__wrapper">
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <div className="navbar__logo">
          <a href="/">
            <img
              src="./images/assets/dao.png"
              alt="Logo de la guilde ChronoDAO, représente un dragon stylisé bleu dans un cercle rappelant de manière très simplifiée une pocketwatch du jeu Bigtime"
            />
          </a>
        </div>

        <ul className="navbar__links">
          <li className="navbar__item">
            <Link
              to="/"
              className="navbar__link"
              onClick={() => setShowLinks(false)}
            >
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/about_dao"
              className="navbar__link"
              onClick={() => setShowLinks(false)}
            >
              About DAO
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/about_us"
              className="navbar__link"
              onClick={() => setShowLinks(false)}
            >
              About us
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/games"
              className="navbar__link"
              onClick={() => setShowLinks(false)}
            >
              Games
            </Link>
          </li>
          <li className="navbar__cta-button">
            <CTAButton text={"Join us"} />
          </li>
        </ul>
        <button
          className="navbar__burger"
          onClick={() => setShowLinks(!showLinks)}
        >
          <span className="burger-bar"></span>
        </button>
      </nav>
    </div>
  );
}

export default NavHamburger;
