import AnimateGrid from "../AnimateGrid/AnimateGrid";
import "./Sections.scss";

export default function Section00() {
  return (
    <section className="home-section__wrapper">
      <div className="content__wrapper">
        <div className="text__wrapper">
          <h3>
            LA GENÈSE DE<br></br>
            <span className="section__00--title">CHRONO DAO </span>
          </h3>
          <p>
            A collaborative credential infrastructure on which games, brands and
            communities can build applications and engage with their players and
            fans. Currently raising funds from our community.
          </p>
        </div>
      </div>
      <div className="image__wrapper">
        <AnimateGrid />
      </div>
    </section>
  );
}
