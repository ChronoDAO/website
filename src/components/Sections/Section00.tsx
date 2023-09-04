import AnimateGrid from "../animatedComponents/AnimateGrid/AnimateGrid";
import "./Sections.scss";
import CTAButton from "../common/Buttons/CTA-Button/CTAButton";

export default function Section00() {
  return (
    <section className="home-section__wrapper" id="sectionZero">
      <div className="content__wrapper">
        <div className="text__wrapper">
          <h3>
            <span className="span--orange">CHRONO DAO</span>
            <br></br>
            L'ETAPE ULTIME DU GAMING
          </h3>
          <p>
            Nous somme une communauté de joueurs / createurs, qui partage la
            vision commune que le jeux video est a l’aube de prendre un nouveau
            virage !
          </p>
          <p>
            Fini les pay2win, les battle pass, les studios de jeux que n’ecoute
            pas assez leur communauté.
          </p>
          <p>
            En tant partenaire Open Loot, nous pouvons t’obtenir un accès
            gratuit pour Big Time
          </p>
          <CTAButton
            text="Explore ce nouveau monde avec nous."
            image="/assets/icons/logo_discord.svg"
            image_class="logo-discord"
          />
        </div>
      </div>
      <div className="image__wrapper">
        <AnimateGrid />
      </div>
    </section>
  );
}
