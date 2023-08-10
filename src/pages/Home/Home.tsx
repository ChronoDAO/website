import Banner from "../../components/Banner/Banner";
import GuildCard from "../../components/Card/GuildCard/GuildCard";
import Section00 from "../../components/Sections/Section00";
import Section01 from "../../components/Sections/Section01";
import Section02 from "../../components/Sections/Section02";
import Section03 from "../../components/Sections/Section03";
import cardDataList from "../../cardDataList";
import "./Home.scss";

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
  return (
    <>
      <Banner />
      <main id="main__home">
        <Section00 />
        <Section01 />
        <Section02 />
        <Section03 />
        <div className="auto-grid">
          {cardDataList.map((data) => (
            <GuildCard data={data} key={data.id} />
          ))}
        </div>
      </main>
    </>
  );
}
