import "./Home.scss";
import Section00 from "../../components/Sections/Section00";
import Section01 from "../../components/Sections/Section01";
import BannerTest from "../../components/Test/BannerTest";
import Section02 from "../../components/Sections/Section02";
import Cards from "../../components/Sections/Cards";

export default function Home() {
  return (
    <>
      <BannerTest />
      <main id="main__home">
        <Section00 />
        <Section01 />
        <Section02 />
        <Cards />
      </main>
    </>
  );
}
