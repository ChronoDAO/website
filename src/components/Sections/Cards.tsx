/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import useIntersectionAnimation from "../../customHooks/useIntersectionAnimation";
import CTAButton from "../common/Buttons/CTA-Button/CTAButton";
import GuildCard from "../Card/GuildCard/GuildCard";
import { fetchHomeCardData, fetchTeamData } from '../../services/api';

export default function Cards() {
  const [loading, setLoading] = useState(true);
  const [cardDataList, setCardDataList] = useState<any[]>([]);
  const [teamParagraph, setTeamParagraph] = useState<string>("");
  const cardsRef = useIntersectionAnimation(0, handleFirstDivAnimation);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeCardData = await fetchHomeCardData();
        const teamData = await fetchTeamData();
  
        if (homeCardData && homeCardData.data && homeCardData.data.length > 0) {
          setCardDataList(homeCardData.data.map((card: { attributes: any; }) => card.attributes));
        }
  
        if (teamData && teamData.data && teamData.data.length > 0) {
          const paragraph = teamData.data[0].attributes.paragraphe;
          setTeamParagraph(paragraph);
        }
  
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  function handleFirstDivAnimation(inView: any) {
    const cards = document.querySelectorAll(".card__wrapper");
    cards?.forEach((card, i) => {
      setTimeout(() => {
        if (inView) {
          const cardElement = card as HTMLElement;
          cardElement.style.transform = "rotateY(0deg)";
          cardElement.style.transition = "transform ease .5s";
        }
      }, i * 200);
    });
  }

  return (
    <>
      <section className="home-section__wrapper">
        <div className="content__wrapper">
          <div className="text__wrapper">
            <h3>
              L'EQUIPE <span className="span--orange">CHRONODAO</span>
            </h3>
            <p>
              {teamParagraph}
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
        <div ref={cardsRef} className="cards-container">
          {loading ? (
            <div>Loading...</div>
          ) : (
            cardDataList.map((data, index) => (
              <GuildCard data={data} key={index} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
