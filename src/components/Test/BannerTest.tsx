import TextScroll from "../TextScroll/TextScroll";
import "./BannerTest.scss";
export default function BannerTest() {
  return (
    <div className="bannerTest">
      <div className="bannerTest__wrapper">
        <img src="/images/assets/banner/home-1.png" alt="" />
        <img src="/images/assets/banner/home-2.png" alt="" />
        <img src="/images/assets/banner/home-3.png" alt="" />
        <div className="text-scroll">
          <TextScroll />
        </div>
      </div>
    </div>
  );
}
