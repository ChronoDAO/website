import TextScroll from "../TextScroll/TextScroll";
import { CSSProperties, useRef } from "react";
import useParallaxAnimation from "../../customHooks/useParallaxAnimation";
import "./BannerTest.scss";
export default function BannerTest() {
  const containerRef = useRef<HTMLDivElement>(null)
    //@ts-ignore
  const image1Style: CSSProperties = useParallaxAnimation(
    5, containerRef,false, true 
  )
  //@ts-ignore
  const image2Style: CSSProperties = useParallaxAnimation(5, containerRef, false,true, true)
    //@ts-ignore
  const image3Style: CSSProperties = useParallaxAnimation(5, containerRef, false,true)
  return (
    <div className="bannerTest">
      <span className="detail" id="detail-1"></span>
      <span className="detail" id="detail-2"></span>
      <span className="detail" id="detail-3"></span>
      <div className="bannerTest__wrapper" ref={containerRef}>
        <img src="/images/assets/banner/home-1.png" style={{...image1Style}} alt="" />
        <img src="/images/assets/banner/home-2.png" style={{...image2Style}} alt="" />
        <img src="/images/assets/banner/home-3.png"style={{...image3Style}} alt="" />
        <div className="text-scroll">
          <TextScroll />
        </div>
      </div>
    </div>
  );
}
