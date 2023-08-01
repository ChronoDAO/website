import { useEffect, useState } from "react";
import "./AnimateGrid.scss";

export default function AnimateGrid() {
  //@ts-ignore
  const [x, setX] = useState();
  //@ts-ignore
  const [y, setY] = useState();

  const data = import.meta.glob("/public/images/assets/mecha/*");
  const images: string[] = [];
  Object.entries(data).forEach(([key]) => images.push(key));

  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    //@ts-ignore
    document.querySelector("section").addEventListener("mousemove", (e) => {
      update(e);
      const axeX = (e.x / window.innerWidth - 0.5) * 10;
      const axeY = (e.y / window.innerHeight - 0.5) * 2;
      let i = 1;
      document.querySelectorAll(".images-grid > img").forEach((image) => {
        i++;
        image &&
          //@ts-ignore
          (image.style.transform = `translate(${(axeX * i) / 0.5}px, ${
            (axeY * i) / 0.5
          }px )`);
      });
    });
    return () => {
      window.removeEventListener("mousemove", update);
      const homeSection = document.querySelector(".home-section__wrapper");

      homeSection &&
        homeSection.addEventListener("mouseleave", (e) => {
          setTimeout(() => {
            document
              .querySelectorAll(".images-grid > img")
              .forEach((element) => {
                //@ts-ignore
                element && (element.style.transform = `translate(0,0)`);
              });
          }, 500);
        });
    };
  }, [setX, setY]);

  return (
    <div className="images-grid">
      {images.map((image, i) => (
        <img key={i} src={image} className={`div${i}`} />
      ))}
    </div>
  );
}
