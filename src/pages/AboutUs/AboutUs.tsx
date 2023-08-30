import BannerGame from "../../components/BannerGame/BannerGame.tsx";
import AboutSection00 from "../../components/Sections/AboutSection00.tsx";
import AboutSection01 from "../../components/Sections/AboutSection01.tsx";
import AboutSection02 from "../../components/Sections/AboutSection02.tsx";
import AboutSection03 from "../../components/Sections/AboutSection03.tsx";
import "./AboutUs.scss";
import AnimateClockie from "../../components/animatedComponents/AnimatedClockie/AnimateClockie.tsx";

export default function AboutUs() {
  const aboutUsVideoSource = `${
    import.meta.env.CDN_URL
  }/videos/aboutBanner.mp4`;

  return (
    <main>
      <BannerGame videoSource={aboutUsVideoSource} />
      <AboutSection00 />
      <AboutSection01 />
      <AboutSection02 />
      <AboutSection03 />
      <div className="content__wrapper"></div>
    </main>
  );
}
