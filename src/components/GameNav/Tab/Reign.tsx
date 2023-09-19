import "../../Sections/Sections.scss";

export default function Reign() {
  return (
    <section className="game-section__wrapper game__container" id="reign">
      <div className="content__wrapper">
        <div className="text__wrapper">
          <h3>Reign of Terror is an epic cyberpunk game</h3>
          <p>
            Reign of Terror is an epic cyberpunk game world with multiple games
            all with $REIGN utility and different types of NFTs. Own and
            interact with in-game assets in various ways such as trading,
            ransoming, burning, and raiding. Through our game world and IP, we
            will bridge both the traditional gaming and web3 gaming worlds to
            create a huge ecosystem that will stand the test of time and bring
            continued benefits to the community.
          </p>
        </div>
      </div>
      <div className="image__wrapper">
        <img
          src={`${import.meta.env.CDN_URL}/images/assets/gameLogo/ReignO.png`}
          alt=""
        />
      </div>
    </section>
  );
}

// /!\ Supprimer la class game__container en cas d'ajout de contenue /!\