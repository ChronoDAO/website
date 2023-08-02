import { useEffect, useState } from "react";
import "./AboutUs.scss";

export default function AboutUs() {
  const [, setX] = useState<number | undefined>();
  const [, setY] = useState<number | undefined>();

  useEffect(() => {
    const update = (e: MouseEvent) => {
      setX(e.x);
      setY(e.y);
    };
    const img = document.getElementById("test_img");
    const logo = document.getElementById("logo_bigtime");
    window.addEventListener("mousemove", (e) => {
      update(e);
      img && (img.style.transform = `translate(${e.x / 50}px, ${e.y / 50}px )`)
      logo && (logo.style.transform = `translate(${- e.x / 50}px, ${- e.y / 50}px)`)
    });
    return () => {
      window.removeEventListener("mousemove", update);
    };
  }, [setX, setY]);
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
        <div className="image__wrapper">
          <img src="./images/assets/perso_dino.jpg" id="test_img" alt="" />
          <img src="./images/assets/logo_bigtime.svg" id="logo_bigtime" alt="" />
        </div>
      </section>


    </main>
  );
}
