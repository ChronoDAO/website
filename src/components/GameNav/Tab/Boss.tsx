import "../../Sections/Sections.scss";

export default function Boss() {
  return (
    <section className="game-section__wrapper game__container">
      <div className="content__wrapper">
        <div className="text__wrapper">
          <h3>BE THE BOSS IN VR</h3>
          <p>
            Embody powerful boss using VR headset. Destroy, smash and toss
            anything. Wipe out enemies with devastating weapons. Upgrade your
            Boss with valuable rewards !
          </p>
        </div>
      </div>
      <div className="image__wrapper">
        <img
          src={`${import.meta.env.CDN_URL}/images/assets/gameLogo/BossF.png`}
          alt=""
        />
      </div>
    </section>
  );
}

// /!\ Supprimer la class game__container en cas d'ajout de contenue /!\