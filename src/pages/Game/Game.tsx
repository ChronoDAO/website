import BannerGame from "../../components/BannerGame/BannerGame";
// import GameSection00 from "../../components/Sections/GameSection00";
import GameSection01 from "../../components/Sections/GameSection01";
import GameNav from "../../components/nav/GameNav/GameNav";
import "./Game.scss";

export default function Game() {
  return (
    <>
      <BannerGame />
      {/* <GameSection00 /> */}
      <GameSection01 />
      <GameNav />
    </>
  );
}
