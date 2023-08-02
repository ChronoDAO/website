import "./Roadmap.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Roadmap() {
        useEffect(() => {
          AOS.init();
        }, [])

  return (
    <main className='main' id="mainRoad">
      
    <section>

      <section>
      <div data-aos="fade-left" data-aos-duration="1500">
        <h2>hey</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque!</p>
      </div>
      </section>

      <section>
        <div data-aos="fade-right" data-aos-duration="1500">
          <h2>hey</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vel.</p>
        </div>
      </section>

      <section>
        <div data-aos="fade-left" data-aos-duration="1500">
          <h2>hey</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut.</p>  
        </div>
        </section>
   
      </section>
   
    
    </main>
  );

}