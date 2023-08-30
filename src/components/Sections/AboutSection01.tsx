import "./Sections.scss";

function AboutSection01() {
  return (
    <section className="home-section__wrapper">
        <div className="image__wrapper">
  <img src="/images/assets/aboutSection/About01.png" alt="" />
    </div>
    <div className="content__wrapper">
    <div className="text__wrapper">
        <h3>
          <span className="span--orange">Une Plongée</span>
          <br></br>
          dans la Culture Geek avec Notre Guilde
        </h3>
        <p>
        Ouvrez les portes d'un univers geek multiforme au sein de notre Guilde.
        </p>
        <p>
        Plus qu'un simple groupe de joueurs, nous encourageons la passion pour les jeux vidéo, les films, la littérature et bien plus encore. 
        </p>
        <p>
        Plongez dans une immersion totale de cette culture unique, partagez vos intérêts avec des camarades partageant les mêmes idées, et célébrez ensemble la diversité et les expériences geek enrichissantes.
        </p>
      </div>
    </div>
  </section>
  )
}

export default AboutSection01