import { useEffect } from "react";
import "./TextScroll.scss";

export default function TextScroll() {
  useEffect(() => {
    const words = document.querySelectorAll(".word");

    function animateWord(index: number) {
      if (index >= words.length) {
        index = 0;
      }

      const currentWord = words[index];

      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        currentWord.style.top = "100%";
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        currentWord.style.opacity = "1";

        setTimeout(() => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          currentWord.style.top = "0";
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          currentWord.style.opacity = "0";
          animateWord(index + 1);
        }, 2000);
      }, 800);
    }

    animateWord(0);
  }, []);

  return (
    <div className="banner_test">
      <h2>PROOF OF &nbsp;</h2>
      <div className="words__wrapper">
        <span className="word">COMPLETION</span>
        <span className="word">COLLECTION</span>
        <span className="word">COLLABORATION</span>
        <span className="word">CONTRIBUTION</span>
        <span className="word">TIME</span>
        <span className="word">SKILLS</span>
        <span className="word">ADVENTURE</span>
        <span className="word">EXPLORATION</span>
      </div>
      <div className="caption">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
          alias!
        </p>
      </div>
    </div>
  );
}
