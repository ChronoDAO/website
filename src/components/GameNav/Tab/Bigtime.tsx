import "../../Sections/Sections.scss";

export default function Bigtime() {
  return (
    <>
      <section className="game-section__wrapper" id="bigtime">
        <div className="content__wrapper">
          <div className="text__wrapper">
            <h3>A Multiplayer adventure </h3>

            <ul>
              <li>Action Packed gameplay</li>
              <li>Free To play</li>
              <li>Never pay to win</li>
              <li>Player owned economy</li>
            </ul>
            <p>
              Big Time is a free-to-play, multiplayer action RPG game that
              combines fast-action combat and adventure through time and space.
            </p>
            <p>
              Explore ancient mysteries and futuristic civilizations as you
              battle your way through history. Pick up rare digital collectibles
              and tokens as you fight and defeat enemies. Collect in-game items
              and tokens, produce digital collectibles, or hang out with
              friends. Limitless environments and Adventure Instances give you
              INFINITE replayability. The gameplay options are endless.
            </p>
          </div>
        </div>
        <div className="image__wrapper">
          <img
            src={`${import.meta.env.CDN_URL}/images/assets/gameLogo/BigT.png`}
            alt=""
          />
        </div>
      </section>
      <section className="bigtime__section">
        <div className="classes__wrapper">
          <h3>Classes</h3>
          <ul>
            <li>
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/bigtimeTab/Chronomancer_1.webp`}
                alt=""
              />
              <p>CHRONOMANCER</p>
            </li>
            <li>
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/bigtimeTab/quantum_fixer.webp`}
                alt=""
              />
              <p>QUANTUM FIXER</p>
            </li>
            <li>
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/bigtimeTab/shadowblade.webp`}
                alt=""
              />
              <p>SHADOWBLADE</p>
            </li>
            <li>
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/bigtimeTab/time_warrior.webp`}
                alt=""
              />
              <p>TIME WARRIOR</p>
            </li>
          </ul>
        </div>
        <div className="cosmetic__wrapper">
          <h3>Cosmétique et utilitaires</h3>
          <div>
            <img
              src={`${
                import.meta.env.CDN_URL
              }/images/assets/bigtimeTab/Bot1.webp`}
              alt=""
            />
            <p>
              Chez ChronoDAO, notre vision est aussi solide qu'un coffre-fort en
              titane, mais avec un clin d'œil malicieux : nul ne peut l'acheter
              ! Ici, la valeur repose sur la passion
            </p>
          </div>
          <div>
            <p>
              Chez ChronoDAO, notre vision est aussi solide qu'un coffre-fort en
              titane, mais avec un clin d'œil malicieux : nul ne peut l'acheter
              ! Ici, la valeur repose sur la passion
            </p>
            <img
              src={`${
                import.meta.env.CDN_URL
              }/images/assets/bigtimeTab/Bot2.webp`}
              alt=""
            />
          </div>
          <h3>Espaces</h3>
          <div>
            <img
              src={`${
                import.meta.env.CDN_URL
              }/images/assets/bigtimeTab/Bot2.webp`}
              alt=""
            />
            <p>
              Chez ChronoDAO, notre vision est aussi solide qu'un coffre-fort en
              titane, mais avec un clin d'œil malicieux : nul ne peut l'acheter
              ! Ici, la valeur repose sur la passion
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
