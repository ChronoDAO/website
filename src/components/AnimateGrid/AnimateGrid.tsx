import { useEffect, useState } from "react";
import "./AnimateGrid.scss";

export default function AnimateGrid() {
  const [, setX] = useState<number | undefined>();
  const [, setY] = useState<number | undefined>();

  const data = import.meta.glob("/images/assets/mecha/*");
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
              (axeX * (i * 0.5)) / 0.5
            }px, ${(axeY * (i * 0.5)) / 0.5}px )`;
          }
          i++;
        });
      });

      return () => {
        const homeSection = document.querySelector(".home-section__wrapper");

        homeSection &&
          homeSection.addEventListener("mouseleave", () => {
            setTimeout(() => {
              document
                .querySelectorAll(".images-grid > img")
                .forEach((image) => {
                  const imgElement = image as HTMLImageElement;
                  if (imgElement) {
                    imgElement.style.transform = `translate(0,0)`;
                  }
                });
            }, 500);
          });
      };
    }
  }, [setX, setY]);

  return (
    <div className="images-grid">
      {images.map((image, i) => (
        <img key={i} src={image} className={`div${i}`} />
      ))}
    </div>
  );
}
