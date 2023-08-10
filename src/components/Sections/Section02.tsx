import "./Sections.scss";
import useIntersectionAnimation from "../../customHooks/useIntersectionAnimation";
export default function Section02() {
  const secondDivRef = useIntersectionAnimation(0.5, handleSecondDivAnimation);
  const thirdDivRef = useIntersectionAnimation(0.5, handleThirdDivAnimation);

  function handleSecondDivAnimation(inView: unknown) {
    const secondDiv = document.querySelector(".second-div--content");
    if (secondDiv) {
      const transition = inView ? "ease 2s" : "ease .2s";
      const topValue = inView ? "50%" : "0";
      const opacityValue = inView ? "1" : "0";

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      secondDiv.style.top = topValue;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      secondDiv.style.opacity = opacityValue;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      secondDiv.style.transition = transition;
    }
  }

  function handleThirdDivAnimation(inView: unknown) {
    const thirdDiv = document.querySelector(".third-div--content");
    if (thirdDiv) {
      const transition = inView ? "ease 3s" : "ease .2s";
      const rightValue = inView ? "50%" : "0";
      const opacityValue = inView ? "1" : "0";
      const delay = inView ? ".5s" : "0";

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      thirdDiv.style.right = rightValue;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      thirdDiv.style.opacity = opacityValue;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      thirdDiv.style.transition = transition;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      thirdDiv.style.transitionDelay = delay;
    }
  }

  return (
    <section className="home-section__wrapper" id="sectionTwo">
      <div className="second-div__wrapper" ref={secondDivRef}>
        <div className="second-div--content">
          <img height={"400px"} src="/images/assets/demisinge.svg" alt="" />
        </div>
      </div>
      <div className="third-div__wrapper" ref={thirdDivRef}>
        <div className="third-div--content">
          <img height={"400px"} src="/images/assets/demihomme.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
