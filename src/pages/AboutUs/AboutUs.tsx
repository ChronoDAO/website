import { useRef } from "react";
import { CSSProperties } from "react";
import useParallaxAnimation from "../../customHooks/useParallaxAnimation";
import "./AboutUs.scss";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const image1Style: CSSProperties = useParallaxAnimation(
    10,
    containerRef,
    false,
    true
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const image2Style: CSSProperties = useParallaxAnimation(
    50,
    containerRef,
    false,
    true
  );
  return (
    <main>
      <section className="about-section__wrapper" ref={containerRef}>
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
        <div className="image__wrapper" >
          <img
            src="./images/assets/perso_dino.jpg"
            style={{ ...image1Style }}
          />
          <img
            src="./images/assets/logo_bigtime.svg"
            style={{ ...image2Style }}
          />
        </div>
      </section>
    </main>
  );
}
