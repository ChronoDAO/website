import CTAButton from "../common/Buttons/CTA-Button/CTAButton";

export default function GameSection01() {
  return (
    <section className="game-section__wrapper" id="gameSection00">
      <div className="image__wrapper">
        <div className="game__grid">
          <div>
            <img
              className="img__1"
              src={`${import.meta.env.CDN_URL}/images/assets/gameImg/Mid1.png`}
            />
          </div>
          <div>
            <img
              className="img__2"
              src={`${import.meta.env.CDN_URL}/images/assets/gameImg/Mid2.png`}
            />
          </div>
          <div>
            <img
              className="img__3"
              src={`${import.meta.env.CDN_URL}/images/assets/gameImg/Mid3.png`}
            />
          </div>
          <div>
            <img
              className="img__4"
              src={`${import.meta.env.CDN_URL}/images/assets/gameImg/Mid4.png`}
            />
          </div>
        </div>
      </div>
      <div className="content__wrapper">
        <div className="text__wrapper">
          <h3>Impénétrable & Impayable</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            perferendis.
          </p>
          <CTAButton text="Rejoindre la team" link={"https://discord.gg/chronodao"}/>
        </div>
      </div>
    </section>
  );
}
