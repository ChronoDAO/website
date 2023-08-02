import { Link } from "react-router-dom";
import CTAButton from "../Buttons/CTA-Button/CTAButton";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="nav__wrapper">
        <img src="./images/assets/dao.png" alt="" />
        <ul className="nav__ul">
          <Link to="/">Home</Link>
          <Link to="/about_dao">About DAO</Link>
          <Link to="/about_us">About us</Link>
        </ul>
        <CTAButton text={"Join the team"} />
      </div>
    </nav>
  );
}
