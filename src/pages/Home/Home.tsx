import AnimateGrid from "../../components/AnimateGrid/AnimateGrid";
// import Banner from "../../components/Banner/Banner";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <main>
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
      </main>
    </>
  );
}
