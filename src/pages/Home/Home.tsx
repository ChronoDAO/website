import AnimateGrid from "../../components/AnimateGrid/AnimateGrid";
import Banner from "../../components/Banner/Banner";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Banner />
      <main id="main__home">
        <AnimateGrid/>
        <section className="section__02">
          <div className="content__wrapper">
          <h2>Révolutionner le Jeu Vidéo :</h2>
          <p>
          Êtes-vous prêt à assister à une révolution dans le jeu vidéo ?
            Entrez dans le futur du jeu avec notre protocole de jeu novateur,
            ouvert et composable ! Nous sommes fiers de présenter une
            infrastructure de certificats collaborative qui donne aux
            développeurs de jeux, aux marques et aux communautés le pouvoir de
            créer des applications de pointe et de se connecter intimement avec
            leurs joueurs et leurs fans. Contrairement à toute autre plateforme
            de jeu, notre protocole favorise un environnement véritablement
            ouvert, où la créativité ne connaît pas de limites. Les développeurs
            peuvent intégrer de manière transparente des fonctionnalités
            innovantes, créer des expériences de jeu uniques et expérimenter de
            nouvelles mécaniques de jeu. Les marques peuvent s'engager
            directement avec leur public cible, en créant des expériences
            personnalisées qui résonnent à un niveau plus profond. Les
            communautés sont au cœur de notre écosystème, favorisant les
            interactions sociales et les expériences partagées qui créent des
            liens durables. Mais ce rêve n'est pas possible sans le soutien de
            notre communauté. Nous levons actuellement des fonds pour donner vie
            à cette vision. Ensemble, nous allons révolutionner l'industrie du
            jeu vidéo, ouvrant la voie à des possibilités illimitées et
            façonnant l'avenir du divertissement interactif. Rejoignez-nous dans
            cette aventure palpitante, et construisons ensemble un monde du jeu
            sans limites !
          </p>
          </div>
          <div className="image__wrapper">
          <img
            className="NFT__image"
            src="../../../public/images/assets/NFT.png"
            alt="img_NFT"
          />
        </div>
        </section>
        <section className="section__02">
          <div className="content__wrapper">
          <h2>Libérer la Créativité :</h2>
          <p>
            Imaginez un paysage ludique où la créativité règne en maître et où
            les possibilités sont sans limites. Bienvenue sur notre
            infrastructure de certificats collaborative, une plateforme où les
            jeux, les marques et les communautés se rassemblent pour libérer
            leur plein potentiel. Plongez dans un univers passionnant de jeu
            ouvert et composable, où l'innovation et l'expérimentation ne
            connaissent aucune limite. Ce protocole n'est pas seulement une
            avancée technique ; c'est une passerelle pour redéfinir l'engagement
            des joueurs. Les développeurs de jeux peuvent désormais créer des
            expériences qui résonnent vraiment avec leur public, offrant des
            moments inoubliables qui laissent les joueurs en redemander. Les
            marques trouvent un chemin direct vers leur base de fans, en créant
            des interactions personnalisées comme jamais auparavant, renforçant
            la confiance et la fidélité. Pendant ce temps, les communautés
            prospèrent en cultivant des expériences partagées, favorisant un
            sentiment d'appartenance et de camaraderie. Au cœur de ce projet
            visionnaire se trouve notre communauté passionnée, la force motrice
            derrière nos rêves. Pour donner vie à cette utopie ludique, nous
            levons des fonds de manière collaborative. Ensemble, nous
            façonnerons l'avenir du jeu vidéo, briserons les barrières et
            composerons un écosystème ludique qui donne à chacun le pouvoir
            d'agir.
          </p>
          </div>
          <div className="image__wrapper">
          <img
            className="NFT__image"
            src="../../../public/images/assets/tokken.png"
            alt="img_NFT"
          />
        </div>
        </section>
        <section className="section__02">
          <div className="content__wrapper">
          <h2>Autonomiser le Monde du Jeu Vidéo :</h2>
          <p>
          Le futur du jeu vidéo commence ici, dans un écosystème où la
            collaboration est la clé pour en libérer tout son potentiel.
            Embrassez le pouvoir de notre protocole de jeu ouvert et composable,
            la fondation sur laquelle les jeux, les marques et les communautés
            s'unissent pour créer un univers ludique vibrant et dynamique. Notre
            vision est simple : donner à chaque individu de l'industrie du jeu
            vidéo le pouvoir de façonner son destin. Les développeurs de jeux
            vivront une liberté sans égale, intégrant de manière transparente de
            nouvelles idées et repoussant les limites du gameplay traditionnel.
            Les marques découvriront de nouvelles opportunités pour se connecter
            avec leur public, forgeant des relations authentiques qui résonnent
            à un niveau profond. Pendant ce temps, les communautés prospéreront
            en se rassemblant autour d'intérêts communs, créant des souvenirs
            durables qui transcendent le monde virtuel. Mais ce rêve ne peut
            devenir réalité qu'avec votre soutien. Ensemble, nous levons des
            fonds auprès de notre communauté passionnée, en favorisant un esprit
            collectif qui nous propulse en avant. Le chemin vers une utopie
            ludique est devant nous, et ensemble, nous forgerons un avenir où
            les jeux dépassent le simple divertissement pour devenir un puissant
            moyen d'expression de soi et de connexion. Rejoignez-nous pour
            construire l'avenir du jeu vidéo, où les possibilités sont
            illimitées, et ensemble, nous laisserons une empreinte indélébile
            sur le monde du divertissement interactif.
          </p>
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
