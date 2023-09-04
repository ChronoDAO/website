import "./Sections.scss";
export default function Section02() {
  return (
    <section className="home-section__wrapper">
      <div className="content__wrapper">
        <div className="text__wrapper">
          <h3>
            NOTRE <span className="span--orange"> STRUCURE</span>
          </h3>
          <h4>Un programme de chargement et d'échange de savoir</h4>
          <p>
            Nous croyons en la puissance du collectif, en l'échange de
            ressources et de stratégies pour réussir ensemble.
          </p>
          <p>Notre strucure</p>
          <ul>
            <li>
              • Favorise la transmission des connaissances et l'expérimentation
              des technologies blockchain.
            </li>
            <li>
              • Facilite l'entraide et le développement de projets de ses
              membres
            </li>
          </ul>
          <p>
            Évoluez techniquement avec une équipe de passionnés du gaming web3,
            qui se fera un plaisir de vous présenter les avantages et les
            perspectives de cette nouvelle technologie.
          </p>
        </div>
      </div>
      <div className="image__wrapper">
        <img
          src={`${
            import.meta.env.CDN_URL
          }/images/assets/gameImg/perso_dino.jpg`}
          alt=""
        />
      </div>
    </section>
  );
}
