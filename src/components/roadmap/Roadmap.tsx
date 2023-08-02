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
      <h3>Roadmap</h3>

      <section>
        
        <div className="section-content" data-aos="fade-left" data-aos-duration="1500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque!</p>
          <img src="/public/images/roadimage.png" alt="Image 2" className="section-image" />

        </div>
      </section>

      <section>
        <div className="section-content" data-aos="fade-right" data-aos-duration="1500">
        <img src="/public/images/roadimage.png" alt="Image 2" className="section-image" />

          <h2>Section 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vel.</p>
        </div>
      </section>

      <section>
        <div className="section-content" data-aos="fade-left" data-aos-duration="1500">

          <h2>Section 3</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut.</p>
          <img src="/public/images/roadimage.png" alt="Image 2" className="section-image" />

        </div>
      </section>

    </main>
  );
}
