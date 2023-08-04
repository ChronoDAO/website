import AnimateGrid from "../../components/AnimateGrid/AnimateGrid";
import Banner from "../../components/Banner/Banner";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Banner />
      <main id="main__home">
             <section className="home-section__wrapper">
          <div className="content__wrapper">
            <div className="text__wrapper">
              <h3>
                An open and <br></br> composable <br></br>gaming protocol
              </h3>
              <p>
                A collaborative credential infrastructure on which games, brands
                and communities can build applications and engage with their
                players and fans. Currently raising funds from our community.
              </p>
            </div>
          </div>
          <div className="image__wrapper">
            <AnimateGrid />
          </div>
        </section>
             <section className="home-section__wrapper">
          <div className="content__wrapper">
            <div className="text__wrapper">
              <h3>
              Révolutionner le Jeu Vidéo :
              </h3>
              <p>
              Êtes-vous prêt à assister à une révolution dans le jeu vidéo ?
            Entrez dans le futur du jeu avec notre protocole de jeu novateur,
            ouvert et composable ! Nous sommes fiers de présenter une
            infrastructure de certificats collaborative qui donne aux
            développeurs de jeux, aux marques et aux communautés le pouvoir de
              </p>
            </div>
          </div>
          <div className="image__wrapper">
          <img
            className="NFT__image"
            src="../../../public/images/assets/NFT.png"
            alt="img_NFT"
          />
          </div>
        </section>
             <section className="home-section__wrapper">
          <div className="content__wrapper">
            <div className="text__wrapper">
              <h3>
              Libérer la Créativité :
              </h3>
              <p>
              Imaginez un paysage ludique où la créativité règne en maître et où
            les possibilités sont sans limites. Bienvenue sur notre
            infrastructure de certificats collaborative, une plateforme où les
            jeux, les marques et les communautés se rassemblent pour libérer
            leur plein potentiel. Plongez dans un univers passionnant de jeu
            ouvert et composable, où l'innovation et l'expérimentation ne
          
              </p>
            </div>
          </div>
          <div className="image__wrapper">
          <img
            className="NFT__image"
            src="../../../public/images/assets/tokken.png"
            alt="img_NFT"
          />
          </div>
        </section>
             <section className="home-section__wrapper">
          <div className="content__wrapper">
            <div className="text__wrapper">
              <h3>
              Autonomiser le Monde du Jeu Vidéo :
              </h3>
              <p>
              Le futur du jeu vidéo commence ici, dans un écosystème où la
            collaboration est la clé pour en libérer tout son potentiel.
            Embrassez le pouvoir de notre protocole de jeu ouvert et composable,
            la fondation sur laquelle les jeux, les marques et les communautés
              </p>
            </div>
          </div>
          <div className="image__wrapper">
          <img
            className="NFT__image"
            src="../../../public/images/assets/blockchain.png"
            alt="img_NFT"
          />
          </div>
        </section>
        
      </main>
    </>
  );
}
