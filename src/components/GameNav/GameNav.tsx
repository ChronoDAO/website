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
  return (
    <>
      <div className="game-nav__wrapper">
        <ul id="game-nav" className={isWideScreen ? `wideUl` : "smallUl"}>
          <li className="">
            <a onClick={() => setTab("bigtime")} href="#game-nav">
              <img src="/images/assets/gameLogo/BigT.png" alt="" />
            </a>
          </li>
          <li>
            <a onClick={() => setTab("reign")} href="#game-nav">
              <img src="/images/assets/gameLogo/ReignO.png" alt="" />
            </a>
          </li>
          <li>
            <a onClick={() => setTab("desol")} href="#game-nav">
              <img src="/images/assets/gameLogo/DesoL.png" alt="" />
            </a>
          </li>
          <li>
            <a onClick={() => setTab("shatter")} href="#game-nav">
              <img src="/images/assets/gameLogo/ShatterP.webp" alt="" />
            </a>
          </li>
          <li>
            <a onClick={() => setTab("boss")} href="#game-nav">
              <img src="/images/assets/gameLogo/BossF.png" alt="" />
            </a>
          </li>
          <li>
            <a onClick={() => setTab("world")} href="#game-nav">
              <img src="/images/assets/gameLogo/WorldS.png" alt="" />
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
