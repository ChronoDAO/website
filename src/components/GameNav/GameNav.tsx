// Gamenav.tsx

import { useEffect, useState } from "react";
import "./GameNav.scss";
import { fetchTabsFromAPI, fetchGameDetailsFromAPI } from "../../services/api";
interface Tab {
  attributes: any;
  id: string;
}

interface GameDetails {
  name: string;
  type: string;
  cost: string;
  slogan: string;
  other: string;
  description: string;
  logo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

export default function GameNav() {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [gameDetails, setGameDetails] = useState<GameDetails | null>(null);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.matchMedia("(min-width: 800px)").matches);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabClick = async (selectedTabId: string) => {
    setSelectedTab(selectedTabId);

    try {
      if (selectedTabId) {
        const gameDetailsData = await fetchGameDetailsFromAPI(selectedTabId);
        setGameDetails(gameDetailsData);
      } else {
        setGameDetails(null);
      }
    } catch (error) {
      console.error("Error fetching game details by ID:", error);
      setGameDetails(null);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tabsData = await fetchTabsFromAPI();
        setTabs(tabsData);

        if (tabsData.length > 0) {
          handleTabClick(tabsData[0].id);
        }
      } catch (error) {
        console.error("Error fetching tabs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="game-nav__wrapper">
        <ul id="game-nav" className={`game-tabs ${isWideScreen ? "wideUl" : "smallUl"}`}>
          {Array.isArray(tabs) &&
            tabs.map((tab) => (
              <li key={tab.id} className={tab.id === selectedTab ? "active-link" : ""}>
                <a onClick={() => handleTabClick(tab.id)} href="#game-nav">
                  {tab.attributes && tab.attributes.logo && tab.attributes.logo.data && tab.attributes.logo.data.attributes && tab.attributes.logo.data.attributes.url ? (
                    <img src={`${import.meta.env.VITE_API_URL}${tab.attributes.logo.data.attributes.url}`} alt={`Image for ${tab.attributes.name}`} />
                  ) : (
                    <p>Image non disponible</p>
                  )}
                  <span className="underline"></span>
                </a>
              </li>
          ))}
        </ul>
      </div>
      {gameDetails && (
        <section className="game-section__wrapper" id={selectedTab || ''}>
          <div className="content__wrapper">
            <div className="text__wrapper">
              <h3>{gameDetails.name || 'No Name'}</h3>
              <ul>
                <li>{gameDetails.type}</li>
                <li>{gameDetails.cost}</li>
                <li>{gameDetails.slogan}</li>
                <li>{gameDetails.other}</li>
              </ul>
              <p>{gameDetails.description}</p>
            </div>
          </div>
          <div className="image__wrapper">
            {gameDetails.logo && (
              <img src={gameDetails.logo ? `${import.meta.env.VITE_API_URL}${gameDetails.logo.data.attributes.url}` : ''} alt={gameDetails.name} />
            )}
          </div>
        </section>
      )}
    </>
  );
}
