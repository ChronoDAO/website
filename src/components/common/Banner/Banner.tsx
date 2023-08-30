import TextScroll from "../../animatedComponents/TextScroll/TextScroll";
import { CSSProperties, useRef } from "react";
import useParallaxAnimation from "../../../customHooks/useParallaxAnimation";
import "./Banner.scss";
export default function BannerTest() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore$
  const image1Style: CSSProperties = useParallaxAnimation(
    3,
    containerRef,
    false,
    true
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const image2Style: CSSProperties = useParallaxAnimation(
    4,
    containerRef,
    false,
    true,
    true
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const image3Style: CSSProperties = useParallaxAnimation(
    3,
    containerRef,
    false,
    true
  );
  return (
    <div className="banner">
      {/* <span className="detail" id="detail-1"></span>
      <span className="detail" id="detail-2"></span>
      <span className="detail" id="detail-3"></span> */}
      <div className="banner__wrapper" ref={containerRef}>
        <img
          src={`${import.meta.env.CDN_URL}/images/assets/banner/home-1.png`}
          style={{ ...image1Style }}
          alt=""
        />
        <img
          src={`${import.meta.env.CDN_URL}/images/assets/banner/home-2.png`}
          style={{ ...image2Style }}
          alt=""
        />
        <img
          src={`${import.meta.env.CDN_URL}/images/assets/banner/home-3.png`}
          style={{ ...image3Style }}
          alt=""
        />
        <div className="text-scroll">
          <TextScroll />
        </div>
      </div>
    </div>
  );
}
