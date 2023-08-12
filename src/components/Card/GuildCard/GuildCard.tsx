import { CSSProperties, useRef, useState } from "react";
import useParallaxAnimation from "../../../customHooks/useParallaxAnimation";
import SocialMediaGuild from "../../SocialMedia/SocialMediaCard/SocialMediaGuild";
import "./GuildCard.scss";

interface ActiveTabs {
  [key: number]: string;
}

interface CardData {
  id: number;
  playerName: string;
  discord: string;
  twitch: string;
  twitter: string;
  bigtime: string;
  imageSrc: string;
  infoContent: string;
  bigTimeContent: string;
  passionContent: string;
  gameContent: string;
}

export default function GuildCard({ data }: { data: CardData }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const image1Style: CSSProperties = useParallaxAnimation(10, containerRef,false,true, false)
  const image2Style: CSSProperties = useParallaxAnimation(15, containerRef, false, true, true)
  const [activeTabs, setActiveTabs] = useState<ActiveTabs>({
    [data.id]: "info",
  });
  const handleTabChange = (cardId: number, tabName: string) => {
    setActiveTabs((prevActiveTabs) => ({
      ...prevActiveTabs,
      [cardId]: tabName,
    }));
  };

  return (
    <div className="guild-card__wrapper">
      <div className="card__wrapper" ref={containerRef} key={data.id} style={{...image1Style}}>
        <div className="card__header" >
          <div className="player-name">{data.playerName}</div>
          <SocialMediaGuild
            discord={data.discord}
            twitch={data.twitch}
            twitter={data.twitter}
            bigtime={data.bigtime}
          />
        </div>
        <div className="card__body" style={{...image2Style}}>
          <div className="image__wrapper">
            <img src={data.imageSrc} alt={`Image of ${data.playerName}`}  />
          </div>
        </div>
        <div className="card__footer">
          <ul>
            <button

              className={`info ${
                activeTabs[data.id] === "info" ? "active" : ""
              }`}
              onClick={() => handleTabChange(data.id, "info")}
              aria-selected={activeTabs[data.id] === "info"}
            >
              INFO
            </button>
            <button

              className={`bigTime ${
                activeTabs[data.id] === "bigTime" ? "active" : ""
              }`}
              onClick={() => handleTabChange(data.id, "bigTime")}
              aria-selected={activeTabs[data.id] === "bigTime"}
            >
              BIGTIME
            </button>
            <button

              className={`game ${
                activeTabs[data.id] === "game" ? "active" : ""
              }`}
              onClick={() => handleTabChange(data.id, "game")}
              aria-selected={activeTabs[data.id] === "game"}
            >
              JEUX
            </button>
            <button

              className={`passion ${
                activeTabs[data.id] === "passion" ? "active" : ""
              }`}
              onClick={() => handleTabChange(data.id, "passion")}
              aria-selected={activeTabs[data.id] === "passion"}
            >
              PASSIONS
            </button>
          </ul>
          <div className="content">
            {activeTabs[data.id] === "info" && <p>{data.infoContent}</p>}
            {activeTabs[data.id] === "bigTime" && <p>{data.bigTimeContent}</p>}
            {activeTabs[data.id] === "game" && <p>{data.gameContent}</p>}
            {activeTabs[data.id] === "passion" && <p>{data.passionContent}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
