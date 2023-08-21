import CTAButton from "../Buttons/CTA-Button/CTAButton";
import "./Sections.scss";

export default function Section01() {
  return (
    <section className="home-section__wrapper">
      <div className="content__wrapper">
        <div className="text__wrapper">
          <h3>
            <span className="span--orange">2023</span> L'ODYSSEE DU GAMING
          </h3>
          <ul>
            <li>
              <img src="/images/diablo.svg" alt="" />
              <p>
                Toi aussi t'as galéré à battre Lilith dans
                <span className="span--orange"> Diablo IV</span> ?
              </p>
            </li>
            <li>
              <img src="/images/manette.svg" alt="" />
              <p>
                Tu connais des joueurs qui se sont faits ban alors qu'ils
                avaient investi des{" "}
                <span className="span--orange">sommes importantes</span> ?
              </p>
            </li>
            <li>
              <img src="/images/justice.svg" alt="" />
              <p>
                Tu rêves d'un{" "}
                <span className="span--orange">monde plus juste</span> pour les
                gamers ?
              </p>
            </li>
            <li>
              <img src="/images/stonks.svg" alt="" />
              <p>
                Prends part à l'évolution du gaming, là où les joueurs sont les
                véritables <span className="span--orange">maîtres du jeu </span>
                !
              </p>
            </li>
          </ul>
          <CTAButton
            text="Explore ce nouveau monde avec nous."
            image="logo_discord.svg"
            image_class="logo-discord"
          />
        </div>
      </div>
      <div className="image__wrapper">
        <img src="/images/assets/perso_dino.jpg" alt="" />
      </div>
    </section>
  );
}
