import { useEffect, useState } from "react";
import "./GameNav.scss";
import Bigtime from "./Tab/Bigtime";
import Reign from "./Tab/Reign";
import Desol from "./Tab/Desol";
import World from "./Tab/World";
import Shatter from "./Tab/Shatter";
import Boss from "./Tab/Boss";

export default function GameNav() {
  const [tab, setTab] = useState("bigtime");
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.matchMedia("(min-width: 800px)").matches);
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabClick = (newTab: string) => {
    setTab(newTab);
  };
  
  return (
    <>
      <div className="game-nav__wrapper">
        <ul id="game-nav" className={`game-tabs ${isWideScreen ? "wideUl" : "smallUl"}`}>
          <li className={tab === "bigtime" ? "active-link" : ""}>
            <a onClick={() => handleTabClick("bigtime")} href="#game-nav">
              <img
                src={`${import.meta.env.CDN_URL}/images/assets/gameLogo/BigT.png`}
                alt=""
              />
               <span className="underline"></span>
            </a>
          </li>
          <li className={tab === "reign" ? "active-link" : ""}>
            <a onClick={() => handleTabClick("reign")} href="#game-nav">
              <img
                src={`${import.meta.env.CDN_URL}/images/assets/gameLogo/ReignO.png`}
                alt=""
              />
                <span className="underline"></span>
            </a>
          </li>
          <li className={tab === "desol" ? "active-link" : ""}>
            <a onClick={() => setTab("desol")} href="#game-nav">
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/gameLogo/DesoL.png`}
                alt=""
              />
                <span className="underline"></span>
            </a>
          </li>
          <li className={tab === "shatter" ? "active-link" : ""}>
            <a onClick={() => setTab("shatter")} href="#game-nav">
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/gameLogo/ShatterP.webp`}
                alt=""
              />
               <span className="underline"></span>
            </a>
          </li>
          <li className={tab === "boss" ? "active-link" : ""}>
            <a onClick={() => setTab("boss")} href="#game-nav">
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/gameLogo/BossF.png`}
                alt=""
              />
                <span className="underline"></span>
            </a>
          </li>
          <li className={tab === "world" ? "active-link" : ""}>
            <a onClick={() => setTab("world")} href="#game-nav">
              <img
                src={`${
                  import.meta.env.CDN_URL
                }/images/assets/gameLogo/WorldS.png`}
                alt=""
              />
                <span className="underline"></span>
            </a>
          </li>
        </ul>
      </div>
      <>
        {tab === "bigtime" && <Bigtime />}
        {tab === "reign" && <Reign />}
        {tab === "desol" && <Desol />}
        {tab === "world" && <World />}
        {tab === "shatter" && <Shatter />}
        {tab === "boss" && <Boss />}
      </>
    </>
  );
}
