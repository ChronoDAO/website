// src/hooks/useParallaxAnimation.ts
import { useState, useEffect, RefObject } from "react";


function useParallaxAnimation(
  power: number,
  containerRef: RefObject<HTMLDivElement>,
  opacityStyle?: boolean,
  transitionStyle?: boolean,
  inverted?:boolean
) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(true);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      inverted ? setPosition({x: -mouseX, y:-mouseY}) : (
        setPosition({ x: mouseX, y: mouseY })
        )

      }
    };

    const handleMouseEnter = () => {
      setIsMouseInside(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
    };

    containerRef.current?.addEventListener("mousemove", handleMouseMove);
    containerRef.current?.addEventListener("mouseenter", handleMouseEnter);
    containerRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
      containerRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      containerRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef, position]);

  const animatedStyle = {
    transform: isMouseInside
      ? `translate(${position.x * power}px, ${position.y * power}px)`
      : "none",
    filter: isMouseInside ? opacityStyle&& "brightness(.6)" : opacityStyle&& "brightness(0.4)",
    transition: !isMouseInside && transitionStyle && "ease .5s"
  };

  return animatedStyle;
}

export default useParallaxAnimation;
