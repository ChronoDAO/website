import { useRef } from "react";
import useParallaxAnimation from "../../customHooks/useParallaxAnimation";
import "./AboutUs.scss";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const image1Style = useParallaxAnimation(20, containerRef, false, true);
  const image2Style = useParallaxAnimation(30, containerRef, false, true);
  return (
    <main>
      <section className="about-section__wrapper">
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
        <div className="image__wrapper" ref={containerRef}>
          <img src="./images/assets/perso_dino.jpg" style={{...image1Style}} />
          <img src="./images/assets/logo_bigtime.svg" style={{...image2Style}} />
        </div>
      </section>
    </main>
  );
}
