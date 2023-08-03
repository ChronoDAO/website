import "./Sandbox.scss";
import useParallaxAnimation from "../../customHooks/useParallaxAnimation";
import { useRef } from "react";

function Sandbox() {
  const containerRef = useRef<HTMLDivElement>(null)
  const image1Style = useParallaxAnimation(10, containerRef);
  const image2Style = useParallaxAnimation(100, containerRef);

  return (
    <div className="test" ref={containerRef}>
      <img
        src="/images/assets/bg/bg.png"
        alt="Image 1"
        className="image1"
      />
      <img
        src="/images/assets/bg/letter.png"
        className="image2"
        alt="Image 2"
        style={{ ...image2Style }}
      />
    </div>
  );
}

export default Sandbox;
