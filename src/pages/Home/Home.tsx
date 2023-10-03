import "./Home.scss";
import Section00 from "../../components/Sections/Section00";
import Section01 from "../../components/Sections/Section01";
import Banner from "../../components/common/Banner/Banner";
import Section02 from "../../components/Sections/Section02";
import Cards from "../../components/Sections/Cards";
import AnimateClockie from "../../components/animatedComponents/AnimatedClockie/AnimateClockie.tsx";

export default function Home() {
  return (
    <>
      <Banner />
      <main id="main__home">
        <Section00 />
        <Section01 />
        <Section02 />
        <Cards />
        <AnimateClockie />
      </main>
    </>
  );
}
