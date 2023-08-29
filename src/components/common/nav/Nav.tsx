import { Link } from "react-router-dom";
import CTAButton from "../Buttons/CTA-Button/CTAButton";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="nav__wrapper">
        <a href="/">
          <img
            src="./images/assets/icons/dao.png"
            alt="Logo de la guilde ChronoDAO, représente un dragon stylisé bleu dans un cercle rappelant de manière très simplifiée une pocketwatch du jeu Bigtime"
          />
        </a>
        <ul className="nav__ul">
          <Link to="/">Home</Link>
          <Link to="/about_dao">About DAO</Link>
          <Link to="/about_us">About us</Link>
          <Link to="/games">Games</Link>
        </ul>
        <CTAButton text={"Join the team"} />
      </div>
    </nav>
  );
}
