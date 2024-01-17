import { useEffect, useState } from "react";
import "./GameNav.scss";
import { fetchTabsFromAPI, fetchGameDetailsFromAPI } from "../../services/api";

export default function GameNav() {
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);
  const [gameDetails, setGameDetails] = useState(null);
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

  const handleTabClick = async (selectedTabId) => {
    setSelectedTab(selectedTabId);

    try {
      if (selectedTabId) {
        const gameDetailsData = await fetchGameDetailsFromAPI(selectedTabId);
        setGameDetails(gameDetailsData);
      } else {
        console.error("L'ID de l'onglet sélectionné est indéfini.");
        setGameDetails(null);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des détails du jeu par ID via la relation:", error);
      setGameDetails(null);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tabsData = await fetchTabsFromAPI();
        console.log("Données des onglets dans GameNav:", tabsData);
        setTabs(tabsData);

        if (tabsData.length > 0) {
          handleTabClick(tabsData[0].id);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des onglets:", error);
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
      {/* Ajoutez des informations de débogage */}
      {console.log("Tab data:", tab)}
      {console.log("Tab image:", tab.attributes.image)}
      {console.log("Tab image URL:", tab.attributes.image && tab.attributes.image.url)}

      <a onClick={() => handleTabClick(tab.id)} href="#game-nav">
        {tab.attributes.image && tab.attributes.image.url ? (
          <img src={`http://localhost:1337${tab.attributes.image.url}`} alt={tab.attributes.name} />
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
        <section className="game-section__wrapper" id={selectedTab}>
          <div className="content__wrapper">
            <div className="text__wrapper">
              <h3>{gameDetails.name}</h3>
              <p>{gameDetails.description}</p>
            </div>
          </div>
          <div className="image__wrapper">
            {/* Assurez-vous que 'logo' est défini avant d'accéder à 'url' */}
            <img src={gameDetails.logo && gameDetails.logo.url} alt={gameDetails.name} />
          </div>
        </section>
      )}
    </>
  );
}
