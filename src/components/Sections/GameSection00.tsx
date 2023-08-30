import "./Sections.scss";
import "../../pages/Game/Game.scss";

export default function GameSection00() {
  return (
    <section className="game-section__wrapper" id="gameSection00">
      <div className="content__wrapper">
        <div className="text__wrapper">
          <h3>CHRONIQUE WEB3</h3>
        </div>
        <ul className="game__ul">
          <li>
            <a href="#">
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/gameLogo/BigT.png`}
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/gameLogo/WorldS.png`}
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/gameLogo/BossF.png`}
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="image__wrapper">
        <img src={`${import.meta.env.CDN_URL}/images/assets/Big.png`} alt="" />
      </div>
    </section>
  );
}
