import { NavLink } from "react-router-dom";
import CTAButton from "../Buttons/CTA-Button/CTAButton";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="nav__wrapper">
        <a href="/">
          <img
            src={`
              ${import.meta.env.CDN_URL}/images/assets/icons/dao.png
            `}
            alt="Logo de la guilde ChronoDAO, représente un dragon stylisé bleu dans un cercle rappelant de manière très simplifiée une pocketwatch du jeu Bigtime"
          />
        </a>
        <ul className="nav__ul">
          <NavLink exact to="/" activeClassName="active">Accueil</NavLink>
          <NavLink to="/about_dao" activeClassName="active">À propos</NavLink>
          <NavLink to="/about_us" activeClassName="active">Guilde</NavLink>
          <NavLink to="/games" activeClassName="active">Jeux</NavLink>
        </ul>
        <CTAButton text={"Rejoignez nous"} />
      </div>
    </nav>
  );
}
