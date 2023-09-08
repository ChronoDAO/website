import { useEffect } from "react";
import gsap from "gsap";
import "./OracleBanner.scss"; 

function OracleBanner() {
  useEffect(() => {
    const textElements = document.querySelectorAll(".Oracle-container .text");

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(textElements, {
      xPercent: -100,
      duration: 25,
      ease: "linear",
      stagger: 0.2, 
      repeatRefresh: true, 
    });
  }, []);

  return (
    <div className="wrapp__container">
      <div className="Oracle-container">
        <a
          target="_blank"
          href="https://chrono-vercel.vercel.app/" 
          className="text text-1"
        >
          Rejoignez l'Oracle, Dominez BIGTIME.
        </a>
        <a
          target="_blank"
          href="https://chrono-vercel.vercel.app/"
          className="text text-1"
        >
          Rejoignez l'Oracle, Dominez BIGTIME.
        </a>
        <a
          target="_blank"
          href="https://chrono-vercel.vercel.app/"
          className="text text-1"
        >
          Rejoignez l'Oracle, Dominez BIGTIME.
        </a>
        <a
          target="_blank"
          href="https://chrono-vercel.vercel.app/"
          className="text text-1"
        >
          Rejoignez l'Oracle, Dominez BIGTIME.
        </a>
      </div>
    </div>
  );
}

export default OracleBanner;
