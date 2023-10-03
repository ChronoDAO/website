import BannerGame from "../../components/BannerGame/BannerGame";
// import GameSection00 from "../../components/Sections/GameSection00";
import GameSection01 from "../../components/Sections/GameSection01";
import GameNav from "../../components/GameNav/GameNav";
import "./Game.scss";
import AnimateClockie from "../../components/animatedComponents/AnimatedClockie/AnimateClockie.tsx";

export default function Game() {
  const videoGameSource = `${import.meta.env.CDN_URL}videos/gameBanner.mp4`;
  return (
    <>
      <BannerGame videoSource={videoGameSource} />
      {/* <GameSection00 /> */}
      <GameSection01 />
      <GameNav />
      <AnimateClockie />
    </>
  );
}
