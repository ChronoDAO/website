import React from 'react';
import './TestTimeline.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const VerticalTimeline = () => {

  const lineRef = useRef(null);

  const section1Ref = useRef(null);
  const imgRef1 = useRef(null);

  const section2Ref = useRef(null);
  const imgRef2 = useRef(null);

  const section3Ref = useRef(null);
  const imgRef3 = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
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
        gsap.fromTo(line, { opacity: 0 }, { opacity: 1, });
        // gsap.fromTo(img1, { rotation: 0 }, { rotation: 180, duration: 3 });
      },
      onLeaveBack: () => {
        gsap.fromTo(section1, { opacity: 1 }, { opacity: 1, duration: 1 });
      },

    });

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
    <div className="vertical-timeline">
      <div className="timeline">
        <div className="line" ref={lineRef}></div>

        <div className="event left-event">
          <div className="event-content ">
          <div className="card" ref={section1Ref}>
          <h2>Section 3</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim aliquid saepe sunt cumque perspiciatis, consequatur quidem deleniti velit quaerat aliquam sint animi pariatur quasi? Quisquam, repellat aut. Illo, aperiam?
          Ipsum error ullam unde tenetur maxime? Porro voluptates qui ad unde expedita debitis consequatur maxime dolorum itaque doloribus voluptas distinctio voluptatum, explicabo, beatae eligendi accusantium nesciunt repellendus aut iste tempore.
          A placeat consectetur amet incidunt, reiciendis ipsum asperiores repudiandae velit enim beatae dolorum dicta soluta adipisci, esse eveniet. Laboriosam ipsum, eum quasi doloremque tenetur dicta blanditiis voluptas. Odio, eum quibusdam!
          Aut laboriosam ratione, voluptatem eos pariatur ad veritatis et, dolor voluptate qui voluptas. Debitis velit modi itaque quae ut eveniet error dolorem, quibusdam et maiores nam animi odit. Nam, perspiciatis.</p>
          {/* <img src="/public/images/roadimage.png" alt="Image 2" className="section-image left-event" ref={imgRef3}/> */}
          </div>
          </div>
        </div>

        <div className="event right-event">
          <div className="event-content ">
          <div className="card" ref={section1Ref}>
          <h2>Section 3</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim aliquid saepe sunt cumque perspiciatis, consequatur quidem deleniti velit quaerat aliquam sint animi pariatur quasi? Quisquam, repellat aut. Illo, aperiam?
          Ipsum error ullam unde tenetur maxime? Porro voluptates qui ad unde expedita debitis consequatur maxime dolorum itaque doloribus voluptas distinctio voluptatum, explicabo, beatae eligendi accusantium nesciunt repellendus aut iste tempore.
          A placeat consectetur amet incidunt, reiciendis ipsum asperiores repudiandae velit enim beatae dolorum dicta soluta adipisci, esse eveniet. Laboriosam ipsum, eum quasi doloremque tenetur dicta blanditiis voluptas. Odio, eum quibusdam!
          Aut laboriosam ratione, voluptatem eos pariatur ad veritatis et, dolor voluptate qui voluptas. Debitis velit modi itaque quae ut eveniet error dolorem, quibusdam et maiores nam animi odit. Nam, perspiciatis.</p>
          {/* <img src="/public/images/roadimage.png" alt="Image 2" className="section-image left-event" ref={imgRef3}/> */}
          </div>
          </div>
        </div>

        <div className="event left-event">
          <div className="event-content ">
          <div className="card" ref={section1Ref}>
          <h2>Section 3</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim aliquid saepe sunt cumque perspiciatis, consequatur quidem deleniti velit quaerat aliquam sint animi pariatur quasi? Quisquam, repellat aut. Illo, aperiam?
          Ipsum error ullam unde tenetur maxime? Porro voluptates qui ad unde expedita debitis consequatur maxime dolorum itaque doloribus voluptas distinctio voluptatum, explicabo, beatae eligendi accusantium nesciunt repellendus aut iste tempore.
          A placeat consectetur amet incidunt, reiciendis ipsum asperiores repudiandae velit enim beatae dolorum dicta soluta adipisci, esse eveniet. Laboriosam ipsum, eum quasi doloremque tenetur dicta blanditiis voluptas. Odio, eum quibusdam!
          Aut laboriosam ratione, voluptatem eos pariatur ad veritatis et, dolor voluptate qui voluptas. Debitis velit modi itaque quae ut eveniet error dolorem, quibusdam et maiores nam animi odit. Nam, perspiciatis.</p>
          {/* <img src="/public/images/roadimage.png" alt="Image 2" className="section-image left-event" ref={imgRef3}/> */}
          </div>
          </div>
        </div>

          <div className="event right-event">
          <div className="event-content ">
          <div className="card" ref={section1Ref}>
          <h2>Section 3</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim aliquid saepe sunt cumque perspiciatis, consequatur quidem deleniti velit quaerat aliquam sint animi pariatur quasi? Quisquam, repellat aut. Illo, aperiam?
          Ipsum error ullam unde tenetur maxime? Porro voluptates qui ad unde expedita debitis consequatur maxime dolorum itaque doloribus voluptas distinctio voluptatum, explicabo, beatae eligendi accusantium nesciunt repellendus aut iste tempore.
          A placeat consectetur amet incidunt, reiciendis ipsum asperiores repudiandae velit enim beatae dolorum dicta soluta adipisci, esse eveniet. Laboriosam ipsum, eum quasi doloremque tenetur dicta blanditiis voluptas. Odio, eum quibusdam!
          Aut laboriosam ratione, voluptatem eos pariatur ad veritatis et, dolor voluptate qui voluptas. Debitis velit modi itaque quae ut eveniet error dolorem, quibusdam et maiores nam animi odit. Nam, perspiciatis.</p>
          {/* <img src="/public/images/roadimage.png" alt="Image 2" className="section-image left-event" ref={imgRef3}/> */}
          </div>
          </div>
        </div>
        <div className="event left-event">
          <div className="event-content ">
          <div className="card" ref={section3Ref}>
          <h2>Section 3</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim aliquid saepe sunt cumque perspiciatis, consequatur quidem deleniti velit quaerat aliquam sint animi pariatur quasi? Quisquam, repellat aut. Illo, aperiam?
          Ipsum error ullam unde tenetur maxime? Porro voluptates qui ad unde expedita debitis consequatur maxime dolorum itaque doloribus voluptas distinctio voluptatum, explicabo, beatae eligendi accusantium nesciunt repellendus aut iste tempore.
          A placeat consectetur amet incidunt, reiciendis ipsum asperiores repudiandae velit enim beatae dolorum dicta soluta adipisci, esse eveniet. Laboriosam ipsum, eum quasi doloremque tenetur dicta blanditiis voluptas. Odio, eum quibusdam!
          Aut laboriosam ratione, voluptatem eos pariatur ad veritatis et, dolor voluptate qui voluptas. Debitis velit modi itaque quae ut eveniet error dolorem, quibusdam et maiores nam animi odit. Nam, perspiciatis.</p>
          {/* <img src="/public/images/roadimage.png" alt="Image 2" className="section-image left-event" ref={imgRef3}/> */}
          </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default VerticalTimeline;
