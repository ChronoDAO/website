import "../../../Sections/Sections.scss";

export default function Boss() {
  return (
    <section className="game-section__wrapper">
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
        <img src="./images/assets/gameLogo/BossF.png" alt="" />
      </div>
    </section>
  );
}