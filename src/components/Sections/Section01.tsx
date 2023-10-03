import CTAButton from "../common/Buttons/CTA-Button/CTAButton";
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
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/icons/diablo.svg`}
                alt=""
              />
              <p>
                Toi aussi t'as galéré à battre Lilith dans
                <span className="span--orange"> Diablo IV</span> ?
              </p>
            </li>
            <li>
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/icons/manette.svg`}
                alt=""
              />
              <p>
                Tu connais des joueurs qui se sont faits ban alors qu'ils
                avaient investi des{" "}
                <span className="span--orange">sommes importantes</span> ?
              </p>
            </li>
            <li>
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/icons/justice.svg`}
                alt=""
              />
              <p>
                Tu rêves d'un{" "}
                <span className="span--orange">monde plus juste</span> pour les
                gamers ?
              </p>
            </li>
            <li>
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/icons/stonks.svg`}
                alt=""
              />
              <p>
                Prends part à l'évolution du gaming, là où les joueurs sont les
                véritables <span className="span--orange">maîtres du jeu </span>
                !
              </p>
            </li>
          </ul>
          <CTAButton
            text="Explore ce nouveau monde avec nous."
            image={`/assets/icons/logo_discord.svg`}
            image_class="logo-discord"
            link={"https://discord.gg/chronodao"}
          />
        </div>
      </div>
      <div className="image__wrapper">
        <img
          src={`${
            import.meta.env.CDN_URL
          }/images/assets/gameImg/perso_dino.jpg`}
          alt=""
        />
      </div>
    </section>
  );
}
