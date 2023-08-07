import Banner from "../../components/Banner/Banner";
import Section00 from "../../components/Sections/Section00";
import Section01 from "../../components/Sections/Section01";
import Section02 from "../../components/Sections/Section02";
import Section03 from "../../components/Sections/Section03";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Banner />
      <main id="main__home">
        <Section00 />
        <Section01 />
        <Section02 />
        <Section03 />
      </main>
    </>
  );
}
