import { Link } from "react-router-dom";
import { useState } from "react";
import CTAButton from "../../Buttons/CTA-Button/CTAButton";
import "./NavHamburger.scss";

function NavHamburger() {
  const [showLinks, setShowLinks] = useState(false); // State to track menu open/close

  return (
    <div className="menu__wrapper">
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <div className="navbar__logo">
          <a href="/">
            <img
              src={`${import.meta.env.CDN_URL}/images/assets/icons/dao.png`}
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
              Accueil
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/about_dao"
              className="navbar__link"
              onClick={() => setShowLinks(false)}
            >
              La DAO
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/about_us"
              className="navbar__link"
              onClick={() => setShowLinks(false)}
            >
              La Guilde
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/games"
              className="navbar__link"
              onClick={() => setShowLinks(false)}
            >
              Nos Jeux
            </Link>
          </li>
          <li className="navbar__cta-button">
            <CTAButton text={"Rejoignez nous"} link={"https://discord.gg/chronodao"} />
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
