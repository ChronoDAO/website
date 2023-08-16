import GuildCard from "../../components/Card/GuildCard/GuildCard";
import Section00 from "../../components/Sections/Section00";
import Section01 from "../../components/Sections/Section01";
import Section02 from "../../components/Sections/Section02";
import Section03 from "../../components/Sections/Section03";
import cardDataList from "../../cardDataList";
import "./Home.scss";
import BannerTest from "../../components/Test/BannerTest";

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
  const container = document.querySelectorAll('.card__wrapper')
  container?.forEach((el) => {
    const glow = document.querySelector('.card-glow')
    el?.addEventListener("mousemove", e => {
      let rect = el.getBoundingClientRect()
      
      let x = e.clientX - rect.x
      let y = e.clientY - rect.y
      
      let midCardWidth = rect.width / 2
      let midCardHeight = rect.height / 2
      
      let angleY = - (x - midCardWidth) / 8
      let angleX = ( y -  midCardHeight) / 8
 
      let glowX = x / rect.width * 100
      let glowY = y / rect.height * 100
      console.log(glowX, glowY)
      
      el.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
      glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rbg(184,196,211, transparent)`
    })
    
    el?.addEventListener("mouseleave", () =>{
      el.style.transform = "rotateX(0) rotateY(0) scale(1)"
    })
  })
  return (
    <>
      <BannerTest />
      <main id="main__home">
        <div className="auto-grid">
          {cardDataList.map((data) => (
            <GuildCard data={data} key={data.id} />
            ))}
        </div>
      
      </main>
    </>
  );
}
