import './Sections.scss'

export default function Section01() {
  return (
    <section className="home-section__wrapper">
    <div className="content__wrapper">
      <div className="text__wrapper">
        <h3>Révolutionner le Jeu Vidéo :</h3>
        <p>
          Êtes-vous prêt à assister à une révolution dans le jeu vidéo ?
          Entrez dans le futur du jeu avec notre protocole de jeu
          novateur, ouvert et composable ! Nous sommes fiers de présenter
          une infrastructure de certificats collaborative qui donne aux
          développeurs de jeux, aux marques et aux communautés le pouvoir
          de
        </p>
      </div>
    </div>
    <div className="image__wrapper">
      <img
        className="NFT__image"
        src="/images/assets/NFT.png"
        alt="img_NFT"
      />
    </div>
  </section>
  )
}
