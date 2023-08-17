import GuildCard from "../../components/Card/GuildCard/GuildCard";
import Section00 from "../../components/Sections/Section00";
import Section01 from "../../components/Sections/Section01";
import Section02 from "../../components/Sections/Section02";
import Section03 from "../../components/Sections/Section03";
import cardDataList from "../../cardDataList";
import "./Home.scss";
import BannerTest from "../../components/Test/BannerTest";
import { useEffect } from "react";
import useIntersectionAnimation from "../../customHooks/useIntersectionAnimation";
import CTAButton from "../../components/Buttons/CTA-Button/CTAButton";

interface cardDataList {
  id: number;
  playerName: string;
  discord: string;
  twitch: string;
  twitter: string;
  bigtime: string;
  imageSrc: string;
  infoContent: string;
  bigTimeContent: string;
  gameContent: string;
  passionContent: string;
}

export default function Home() {
  const cardsRef = useIntersectionAnimation(.5, handleFirstDivAnimation);
  const cardLinks = document.querySelectorAll(".social-media-guild__wrapper");

  function handleFirstDivAnimation(inView: boolean) {
    const cards = document.querySelectorAll(".card__wrapper");
    cards?.forEach((card, i) => {
      setTimeout(() => {
        if (inView) {
          card.style.transform = "rotateY(0deg)";
          card.style.transition = "transform ease .5s";
          cardLinks?.forEach((cardLink) => {
            cardLink.classList.toggle("active", inView);
            cardLink.classList.toggle("inactive", !inView);
          });
        }
      }, i * 200);
    });
  }

  useEffect(() => {
    const container = document.querySelectorAll(".card__wrapper");
    container?.forEach((el) => {
      el?.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();

        const x = e.clientX - rect.x;
        const y = e.clientY - rect.y;

        const midCardWidth = rect.width / 2;
        const midCardHeight = rect.height / 2;

        const angleY = -(x - midCardWidth) / 8;
        const angleX = (y - midCardHeight) / 8;

        const glowX = (x / rect.width) * 100;
        const glowY = (y / rect.height) * 100;

        el.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        el.style.transition = "none";
        el.children[0].children[0].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, #ffffff30, transparent)`;
      });

      el?.addEventListener("mouseleave", () => {
        el.style.transform = "rotateX(0) rotateY(0)";
        el.style.transition = " transform ease .5s";
      });
    });
  }, []);
  return (
    <>
      <BannerTest />
      <main id="main__home">
        <Section00 />
        <Section01 />
        {/* <Section02 />
        <Section03 /> */}
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
            <img src="/images/assets/back-card.png" alt="" />
            <img src="/images/assets/back-card.png" alt="" />
          </div>
        </section>
        <div className="cards">
          <div className="auto-grid" id="auto-grid" ref={cardsRef}>
            {cardDataList.map((data) => (
              <GuildCard data={data} key={data.id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
