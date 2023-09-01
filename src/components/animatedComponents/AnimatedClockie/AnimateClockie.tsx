import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './AnimateClockie.scss';
import GifClockie from '/videos/Clockie.gif';

function AnimateClockie() {
  const imageRef = useRef(null);

const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth - 25)
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth - 25)
    })
    const imageElement = imageRef.current;
    
    gsap.set(imageElement, { x: 25, transformOrigin: 'center center', scaleX: 1 });

    const tl = gsap.timeline({ repeat: -1 });
console.log(windowWidth);

    //Gauche à droite
    tl.to(imageElement, {
      duration: 2,
      x: windowWidth,
      ease: 'power2.inOut',
      yoyo: true
    })
    //Flip gauche
      .to(
        imageElement,
        {
          duration: 0.5,
          scaleX: -1,
          ease: 'power0.none',
        },
        '<'
      )
      // Etirement
      .to(imageElement, {
        duration: 0.5,
        scaleX: -1.2,
        scaleY: 0.8,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
      })
      //Flip droite
      .to(
        imageElement,
        {
          duration: 0.5,
          scaleX: 1,
          ease: 'power0.none',
        },
        '>+=0.1' 
      )
      //Retour doite to gauche
      .to(imageElement, {
        duration: 2,
        x: 25,
        ease: 'power2.inOut',
        yoyo: true
      })

      //Etirement gauche
      .to(imageElement, {
        duration: 0.5,
        scaleX: 1.2,
        scaleY: 0.8,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
      })
    return () => {
      tl.kill();
    };
  }, [windowWidth]);

  return (
    <div className="animate-clockie-container">
      <img ref={imageRef} src={GifClockie} alt="Clockie GIF" />
    </div>
  );
}

export default AnimateClockie;
