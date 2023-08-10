import { useEffect, useState } from "react";
import "./AnimateGrid.scss";

export default function AnimateGrid() {
  const [, setX] = useState<number | undefined>();
  const [, setY] = useState<number | undefined>();

  const data = import.meta.glob("/public/images/assets/logo_divided9/*");
  const images: string[] = [];
  Object.entries(data).forEach(([key]) => images.push(key));

  useEffect(() => {
    const update = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    const sectionElement = document.querySelector("section") as HTMLDivElement;
    if (sectionElement) {
      sectionElement.addEventListener("mousemove", (e) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        update(e);
        const axeX = (e.clientX / window.innerWidth - 0.5) * 10;
        const axeY = (e.clientY / window.innerHeight - 0.5) * 2;
        let i = 1;
        document.querySelectorAll(".images-grid > img").forEach((image) => {
          const imgElement = image as HTMLImageElement;
          if (imgElement) {
            imgElement.style.transform = `translate(${
              (axeX * ((i * .5) * 0.5)) / 0.5
            }px, ${(axeY * ((i *.5) * 0.5)) / 0.5}px )`;
          }
          i++;
        });
      });
    }
  }, [setX, setY]);

  useEffect(() => {
    const homeSection = document.querySelector(".home-section__wrapper");
    homeSection &&
      homeSection.addEventListener("mouseleave", () => {
        setTimeout(() => {
          document.querySelectorAll(".images-grid > img").forEach((image) => {
            const imgElement = image as HTMLImageElement;
            if (imgElement) {
              imgElement.style.transform = `translate(0,0)`;
            }
          });
        }, 500);
      });
  }, []);

  return (
    <div className="images-grid">
      {images.map((_image, i) => (
        <img
          key={i}
          src={`/images/assets/logo_divided9/Logo_ChronoDAO-${i + 1}.png`}
          className={`div${i+1}`}
        />
      ))}
    </div>
  );
}
