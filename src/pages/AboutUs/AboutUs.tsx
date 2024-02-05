import{ useState } from "react";
import BannerGame from "../../components/BannerGame/BannerGame.tsx";
import AboutSection from "../../components/Sections/AboutSection.tsx";
// import AboutSection01 from "../../components/Sections/AboutSection01.tsx";
// import AboutSection02 from "../../components/Sections/AboutSection02.tsx";
// import AboutSection03 from "../../components/Sections/AboutSection03.tsx";
import OracleBanner from "../../components/OracleBanner/OracleBanner.tsx";
import AnimateClockie from "../../components/animatedComponents/AnimatedClockie/AnimateClockie.tsx";
import SwitchButton from "../../components/ToggleSwitch/ToggleSwitch.tsx";

import "./AboutUs.scss";
import ShortSection from "../../components/Sections/ShortSection.tsx";
// import ShortSection01 from "../../components/Sections/ShortSection01.tsx";
// import ShortSection02 from "../../components/Sections/ShortSection02.tsx";
// import ShortSection03 from "../../components/Sections/ShortSection03.tsx";

export default function AboutUs() {
  const aboutUsVideoSource = `${
    import.meta.env.CDN_URL
  }/videos/aboutBanner.mp4`;

  const [afficherOui, setAfficherOui] = useState(true);

  const handleToggleChange = () => {
    setAfficherOui(!afficherOui);
  };

  return (
    <main>
      {afficherOui ? (
        <>
          <BannerGame videoSource={aboutUsVideoSource} />
          <SwitchButton isChecked={afficherOui} onToggle={handleToggleChange} />
          <OracleBanner />
          <AboutSection />
          {/* <AboutSection01 /> */}
          {/* <AboutSection02 /> */}
          {/* <AboutSection03 /> */}
          {/* <div className="content__wrapper"></div> */}
          <AnimateClockie />
        </>
      ) : (
        <>
          <SwitchButton isChecked={afficherOui} onToggle={handleToggleChange} />
          <OracleBanner />
          <ShortSection/>
          {/* <ShortSection01/> */}
          {/* <ShortSection02/>
          <ShortSection03/> */}
          <AnimateClockie />
        </>
      )}
    </main>
  );
}
