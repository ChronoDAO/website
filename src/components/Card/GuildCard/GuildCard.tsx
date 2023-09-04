import { useState } from "react";
import SocialMediaGuild from "../../common/SocialMedia/SocialMediaCard/SocialMediaCard";
import "./GuildCard.scss";

interface CardData {
  id: number;
  playerName: string;
  twitch: string;
  twitter: string;
  bigtime: string;
  imageSrc: string;
  infoContent: string;
  bigTimeContent: string;
}

type TabType = "info" | "bigTime";

export default function GuildCard({ data }: { data: CardData }) {
  const [activeTab, setActiveTab] = useState<TabType>("info");
  const handleTabChange = (tabName: TabType) => {
    setActiveTab(tabName);
  };

  return (
    <div className="guild-card__wrapper">
      <div className="card__wrapper" key={data.id}>
        <div className="front">
          <div className="card-glow"></div>
          <div className="card__header">
            <div className="player-name">{data.playerName}</div>
            <SocialMediaGuild
              twitch={data.twitch}
              twitter={data.twitter}
              bigtime={data.bigtime}
            />
          </div>
          <div className="card__body">
            <div className="image__wrapper">
              <img src={data.imageSrc} alt={`Image of ${data.playerName}`} />
            </div>
          </div>
          <div className="card__footer">
            <ul>
              {["info", "bigTime"].map((tab) => (
                <button
                  key={tab}
                  className={`${tab} ${activeTab === tab ? "active" : ""}`}
                  onClick={() => handleTabChange(tab as TabType)}
                  aria-selected={activeTab === tab}
                >
                  {tab === "info" ? (
                    "Présentation".toUpperCase()
                  ) : (
                    <img
                      src={`${
                        import.meta.env.CDN_URL
                      }/images/assets/icons/logo_bigtime.svg`}
                      height={"25px"}
                      alt="logo bigtime"
                    />
                  )}
                </button>
              ))}
            </ul>
            <div className="content">
              <p>{data[`${activeTab}Content` as keyof CardData]}</p>
            </div>
          </div>
        </div>
        <div className="back">
          <img
            src={`${import.meta.env.CDN_URL}/images/assets/cards/back-card.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
