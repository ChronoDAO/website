import "./Sections.scss";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Section03() {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });
  const fourthDiv = document.querySelector(".fourth-div--content");
  useEffect(() => {
    if (fourthDiv !== null) {
      if (inView) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        fourthDiv.style.top = "0";
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        fourthDiv.style.opacity = "1";
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        fourthDiv.style.transition = "ease 2s";
      } else if (inView === false) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        fourthDiv.style.top = "-50%";
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        fourthDiv.style.opacity = "0";
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        fourthDiv.style.transition = "ease .2s";
      }
    }
  }, [inView, fourthDiv]);
  return (
    <section className="home-section__wrapper" id="sectionThree">
      <div className="fourth-div__wrapper" ref={ref}>
        <div className="fourth-div--content">
          <img src="/images/assets/homme.svg" height={"400px"} alt="" />
        </div>
      </div>
      <div className="image__wrapper">
        <img
          className="NFT__image"
          src="/images/assets/blockchain.png"
          alt="img_NFT"
        />
      </div>
    </section>
  );
}
