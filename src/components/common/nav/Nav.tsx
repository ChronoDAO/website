import { useState } from "react";
import { NavLink } from "react-router-dom";
import CTAButton from "../Buttons/CTA-Button/CTAButton";
import "./Nav.scss";

export default function Nav() {
  const [tab, setTab] = useState("Accueil");
  
  const handleTabClick = (newTab: string) => {
    setTab(newTab);
  };
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
        <li className={tab === "Accueil" ? "active" : ""}>
          <NavLink to="/"  onClick={() => handleTabClick("Accueil")}>Accueil</NavLink></li>
          <li className={tab === "La DAO" ? "active" : ""}>
          <NavLink to="/about_dao" onClick={() => handleTabClick("La DAO")}>La DAO</NavLink>
          </li>
          <li className={tab === "La guilde" ? "active" : ""}>
          <NavLink to="/about_us" onClick={() => handleTabClick("La guilde")}>La guilde</NavLink>
          </li>
          <li className={tab === "Nos jeux" ? "active" : ""}>
          <NavLink to="/games" onClick={() => handleTabClick("Nos jeux")}>Nos jeux</NavLink>
          </li>
        </ul>
        <CTAButton text={"Rejoignez nous"} link={"https://discord.gg/chronodao"}/>
      </div>
    </nav>
  );
}
