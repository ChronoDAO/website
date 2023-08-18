import { Link } from "react-router-dom";
import { useState } from "react";
import CTAButton from "../Buttons/CTA-Button/CTAButton";
import "./NavHamburger.scss";

function NavHamburger() {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = () => {
    return (
      <ul className={`nav__ul ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about_dao"> DAO</Link>
        </li>
        <li>
          <Link to="/about_us">Us</Link>
        </li>
      </ul>
    );
  };

  return (
    <nav>
      <div className={`nav__wrapper ${isOpen ? 'open' : ''}`}>
        <img src="./images/assets/dao.png" alt="" />
        <div id="nav-cta-button">
          <CTAButton text={"Team"} />
        </div>
        <div
          id="menu-toggle"
          className={isOpen ? 'open' : ''}
          onClick={toggleMenu}
        >
          <div id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div id="cross">
            <span></span>
            <span></span>
          </div>
        </div>
        {isOpen && (
          <div className="centered-links">{links()}</div>
        )}
        </div>
    </nav>
  );
}

export default NavHamburger