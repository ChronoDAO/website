import { useEffect, useState } from "react";
import useIntersectionAnimation from "../../customHooks/useIntersectionAnimation";
import CTAButton from "../common/Buttons/CTA-Button/CTAButton";
import cardDataList from "../../cardDataList";
import GuildCard from "../Card/GuildCard/GuildCard";

export default function Cards() {
  const [mediaQuerie, setMediaQuerie] = useState(window.innerWidth);

  const cardsRef = useIntersectionAnimation(0, handleFirstDivAnimation);

  function handleFirstDivAnimation(inView: boolean) {
    const cards = document.querySelectorAll(".card__wrapper");
    cards?.forEach((card, i) => {
      setTimeout(() => {
        if (inView) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          card.style.transform = "rotateY(0deg)";
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          card.style.transition = "transform ease .5s";
        }
      }, i * 200);
    });
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMediaQuerie(window.innerWidth);
    });
    const container = document.querySelectorAll(".card__wrapper");
    if (mediaQuerie > 800) {
      container?.forEach((el) => {
        el?.addEventListener("mousemove", (e) => {
          const rect = el.getBoundingClientRect();
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          const x = e.clientX - rect.x;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          const y = e.clientY - rect.y;

          const midCardWidth = rect.width / 2;
          const midCardHeight = rect.height / 2;

          const angleY = -(x - midCardWidth) / 8;
          const angleX = (y - midCardHeight) / 8;

          const glowX = (x / rect.width) * 100;
          const glowY = (y / rect.height) * 100;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          el.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          el.style.transition = "none";
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          el.children[0].children[0].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, #ffffff30, transparent)`;
        });

        el?.addEventListener("mouseout", () => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          el.style.transform = "rotateX(0) rotateY(0)";
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          el.style.transition = " transform ease .5s";
        });
      });
    }
  }, [setMediaQuerie, mediaQuerie]);

  return (
    <>
      <section className="home-section__wrapper">
        <div className="content__wrapper">
          <div className="text__wrapper">
            <h3>
              L'EQUIPE <span className="span--orange">CHRONODAO</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              vitae cumque consectetur dolores inventore excepturi labore
              aperiam nulla ad id fuga, quod mollitia recusandae esse error
              nesciunt doloribus, necessitatibus iure repellat earum dolorum.
            </p>
            <CTAButton text="Découvrir l'équipe" link="#auto-grid" />
          </div>
        </div>
        <div className="image__wrapper" id="back-card__wrapper">
          <img
            src={`${import.meta.env.CDN_URL}/images/assets/cards/back-card.png`}
            alt=""
          />
          <img
            src={`${import.meta.env.CDN_URL}/images/assets/cards/back-card.png`}
            alt=""
          />
        </div>
      </section>
      <div className="cards">
        <div className="auto-grid" id="auto-grid" ref={cardsRef}>
          {cardDataList.map((data) => (
            <GuildCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
}
