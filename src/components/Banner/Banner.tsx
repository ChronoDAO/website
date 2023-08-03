import "./Banner.scss";
import useParallaxAnimation from "../../customHooks/useParallaxAnimation";
import { useRef } from "react";

function Banner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageStyle = useParallaxAnimation(20, containerRef, true);

  return (
    <div className="image__container" ref={containerRef}>
      <img
        src="./images/assets/bg/bg.png"
        alt="Image 1"
      />
      <img
        src="./images/assets/bg/letter.png"
        alt="Image 2"
        style={{ ...imageStyle }}
      />
    </div>
  );
}

export default Banner;
