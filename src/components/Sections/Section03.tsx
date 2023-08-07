import './Sections.scss'

export default function Section03() {
  return (
    <section className="home-section__wrapper">
    <div className="content__wrapper">
      <div className="text__wrapper">
        <h3>Autonomiser le Monde du Jeu Vidéo :</h3>
        <p>
          Le futur du jeu vidéo commence ici, dans un écosystème où la
          collaboration est la clé pour en libérer tout son potentiel.
          Embrassez le pouvoir de notre protocole de jeu ouvert et
          composable, la fondation sur laquelle les jeux, les marques et
          les communautés
        </p>
      </div>
    </div>
    <div className="image__wrapper">
      <img
        className="NFT__image"
        src="/images/assets/blockchain.png"
        alt="img_NFT"
      />
    </div>
  </section>
  )
}
