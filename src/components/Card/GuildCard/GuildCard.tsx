import { CSSProperties, useRef, useState } from "react";
import useParallaxAnimation from "../../../customHooks/useParallaxAnimation";
import SocialMediaGuild from "../../SocialMedia/SocialMediaCard/SocialMediaGuild";
import "./GuildCard.scss";
import { Card } from "@mui/material";

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
      <div className="card__wrapper" key={data.id}>
        <span className="card-glow"></span>
        <div className="card__header" >
          <div className="player-name">{data.playerName}</div>
          <SocialMediaGuild
            discord={data.discord}
            twitch={data.twitch}
            twitter={data.twitter}
            bigtime={data.bigtime}
          />
        </div>
        <div className="card__body">
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
