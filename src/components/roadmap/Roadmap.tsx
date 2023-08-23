import "./Roadmap.scss";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Roadmap() {
  const section1Ref = useRef(null);
  const imgRef1 = useRef(null);

  const section2Ref = useRef(null);
  const imgRef2 = useRef(null);

  const section3Ref = useRef(null);
  const imgRef3 = useRef(null);

  useEffect(() => {
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = section3Ref.current;

    const img1 = imgRef1.current;
    const img2 = imgRef2.current;
    const img3 = imgRef3.current;

    ScrollTrigger.create({
      trigger: section1,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(section1, { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo(img1, { rotation: 0 }, { rotation: 180, duration: 3 });
      },
      onLeaveBack: () => {
        gsap.fromTo(section1, { opacity: 1 }, { opacity: 1, duration: 1 });
      },

    });

    ScrollTrigger.create({
      trigger: section2,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(section2, { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo(img2, { rotation: 0 }, { rotation: 180, duration: 3 });
      },
      onLeaveBack: () => {
        gsap.fromTo(section2, { opacity: 1 }, { opacity: 1, duration: 1 });
      },
    });

    ScrollTrigger.create({
      trigger: section3,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(section3, { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo(img3, { rotation: 0 }, { rotation: 180, duration: 3 });
      },
      onLeaveBack: () => {
        gsap.fromTo(section3, { opacity: 1 }, { opacity: 1, duration: 1 });
      },
    });
  }, []);

  return (
    <main className='main' id="mainRoad">
      <h3>Roadmap</h3>

      <section className="mapSections" ref={section1Ref}>
        <h2>Section 1</h2>
        <div className="section-content" >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim aliquid saepe sunt cumque perspiciatis, consequatur quidem deleniti velit quaerat aliquam sint animi pariatur quasi? Quisquam, repellat aut. Illo, aperiam?
          Ipsum error ullam unde tenetur maxime? Porro voluptates qui ad unde expedita debitis consequatur maxime dolorum itaque doloribus voluptas distinctio voluptatum, explicabo, beatae eligendi accusantium nesciunt repellendus aut iste tempore.
          Accusamus dolorum esse quisquam illo aut, eveniet culpa non a vel nisi dignissimos voluptatum omnis ipsum ullam unde! Magnam corrupti officia ea natus aperiam libero quia sunt in nemo impedit.
          Culpa, qui aspernatur. Excepturi reprehenderit quisquam officiis deserunt ipsam dolorum sequi, doloribus molestiae earum a eius doloremque dignissimos exercitationem? Sunt reprehenderit at saepe magnam, vel fuga dolorem consequatur nihil qui.</p>
          <img src="/public/images/roadimage.png" alt="Image 2" className="section-image" ref={imgRef1}/>
        </div>
      </section>

      <section className="mapSections" ref={section2Ref}>
        <h2>Section 2</h2>
        <div className="section-content" > 
          <img src="/public/images/roadimage.png" alt="Image 2" className="section-image" ref={imgRef2}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim aliquid saepe sunt cumque perspiciatis, consequatur quidem deleniti velit quaerat aliquam sint animi pariatur quasi? Quisquam, repellat aut. Illo, aperiam?
          Alias repellendus quia aperiam molestias laudantium ab quasi repudiandae blanditiis assumenda pariatur consectetur consequatur quis, corporis sit vero natus delectus atque quod similique nisi iusto mollitia dolorum possimus? Vero, et?
          Quas, voluptatem culpa expedita optio, est rerum deleniti consequuntur officiis molestiae temporibus, aperiam perspiciatis recusandae esse vero eos nulla vitae repellat architecto ea sunt? Sapiente sunt ipsum explicabo perferendis similique.
          A placeat consectetur amet incidunt, reiciendis ipsum asperiores repudiandae velit enim beatae dolorum dicta soluta adipisci, esse eveniet. Laboriosam ipsum, eum quasi doloremque tenetur dicta blanditiis voluptas. Odio, eum quibusdam!
          Aut laboriosam ratione, voluptatem eos pariatur ad veritatis et, dolor voluptate qui voluptas. Debitis velit modi itaque quae ut eveniet error dolorem, quibusdam et maiores nam animi odit. Nam, perspiciatis.
       </p>
        </div>
      </section>

      <section className="mapSections" ref={section3Ref}>
        <h2>Section 3</h2>
        <div className="section-content" >
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim aliquid saepe sunt cumque perspiciatis, consequatur quidem deleniti velit quaerat aliquam sint animi pariatur quasi? Quisquam, repellat aut. Illo, aperiam?
          Ipsum error ullam unde tenetur maxime? Porro voluptates qui ad unde expedita debitis consequatur maxime dolorum itaque doloribus voluptas distinctio voluptatum, explicabo, beatae eligendi accusantium nesciunt repellendus aut iste tempore.

          A placeat consectetur amet incidunt, reiciendis ipsum asperiores repudiandae velit enim beatae dolorum dicta soluta adipisci, esse eveniet. Laboriosam ipsum, eum quasi doloremque tenetur dicta blanditiis voluptas. Odio, eum quibusdam!
          Aut laboriosam ratione, voluptatem eos pariatur ad veritatis et, dolor voluptate qui voluptas. Debitis velit modi itaque quae ut eveniet error dolorem, quibusdam et maiores nam animi odit. Nam, perspiciatis.</p>
          <img src="/public/images/roadimage.png" alt="Image 2" className="section-image" ref={imgRef3}/>
        </div>
      </section>
    </main>
  );
}
