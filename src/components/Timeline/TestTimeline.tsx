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

  const section4Ref = useRef(null);
  const imgRef4 = useRef(null);

  const section5Ref = useRef(null);
  const imgRef5 = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = section3Ref.current;
    const section4 = section4Ref.current;
    const section5 = section5Ref.current;


    const img1 = imgRef1.current;
    const img2 = imgRef2.current;
    const img3 = imgRef3.current;
    const img4 = imgRef4.current;
    const img5 = imgRef5.current;
    ScrollTrigger.create({
      trigger: line,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(line, { opacity: 0 }, { opacity: 1, });
        // gsap.fromTo(img1, { rotation: 0 }, { rotation: 180, duration: 3 });
      },
      onLeaveBack: () => {
        gsap.fromTo(line, { opacity: 1 }, { opacity: 1, duration: 1 });
      },

    });


    ScrollTrigger.create({
      trigger: section1,
      start: "top 80%",
      onEnter: () => {
        gsap.to(section1, { opacity: 1, visibility: "visible", transform: "translateY(0px)", duration: 1 });
        gsap.to(img1, { rotation: 360, duration: 3, opacity: 1, visibility: "visible", transform: "translateY(-30px)"   });
      },
      onLeaveBack: () => {
        gsap.to(section1, { opacity: 0, visibility: "hidden", transform: "translateY(-30px)", duration: 1 });
        gsap.to(img1, { rotation: 360, duration: 3, opacity: 0, visibility: "hidden", transform: "translateY(-30px)" });

      },
    });

    ScrollTrigger.create({
      trigger: section2,
      start: "top 80%",
      onEnter: () => {
        gsap.to(section2, { opacity: 1, visibility: "visible", transform: "translateY(0px)", duration: 1 });
        gsap.to(img2, { rotation: 360, duration: 3 });
      },
      onLeaveBack: () => {
        gsap.to(section2, { opacity: 0, visibility: "hidden", transform: "translateY(-30px)", duration: 1 });
      },
    });

    ScrollTrigger.create({
      trigger: section3,
      start: "top 80%",
      onEnter: () => {
        gsap.to(section3, { opacity: 1, visibility: "visible", transform: "translateY(0px)", duration: 1 });
        gsap.to(img3, { rotation: 360, duration: 3 });
      },
      onLeaveBack: () => {
        gsap.to(section3, { opacity: 0, visibility: "hidden", transform: "translateY(-30px)", duration: 1 });
      },
    });

    ScrollTrigger.create({
      trigger: section4,
      start: "top 80%",
      onEnter: () => {
        gsap.to(section4, { opacity: 1, visibility: "visible", transform: "translateY(0px)", duration: 1 });
        gsap.to(img4, { rotation: 360, duration: 3 });
      },
      onLeaveBack: () => {
        gsap.to(section4, { opacity: 0, visibility: "hidden", transform: "translateY(-30px)", duration: 1 });
      },
    });
    ScrollTrigger.create({
      trigger: section5,
      start: "top 80%",
      onEnter: () => {
        gsap.to(section5, { opacity: 1, visibility: "visible", transform: "translateY(0px)", duration: 1 });
        gsap.to(img5, { rotation: 360, duration: 3 });
      },
      onLeaveBack: () => {
        gsap.to(section5, { opacity: 0, visibility: "hidden", transform: "translateY(-30px)", duration: 1 });
      },
    });
  }, []);
  return (
    <div className="vertical-timeline">
      <h2>Timeline</h2>
      <div className="timeline">
        <div className="line" ref={lineRef}></div>
        <div className="event left-event">
        <img src="https://placehold.co/600x400" alt="Image 2" className="section-image left-event " id="timeline_image" ref={imgRef1}/>

          <div className="event-content ">
          <div className="card time_card" ref={section1Ref}>
          <h2 id="DAOTimelineH2">1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim aliquid saepe sunt cumque perspiciatis, consequatur quidem deleniti velit quaerat aliquam sint animi pariatur quasi? Quisquam, repellat aut. Illo, aperiam?
          Ipsum error ullam unde tenetur maxime? Porro voluptates qui ad unde expedita debitis consequatur maxime dolorum itaque doloribus voluptas distinctio voluptatum, explicabo, beatae eligendi accusantium nesciunt repellendus aut iste tempore.
          A placeat consectetur amet incidunt, reiciendis ipsum asperiores repudiandae velit enim beatae dolorum dicta soluta adipisci, esse eveniet. Laboriosam ipsum, eum quasi doloremque tenetur dicta blanditiis voluptas. Odio, eum quibusdam!
          Aut laboriosam ratione, voluptatem eos pariatur ad veritatis et, dolor voluptate qui voluptas. Debitis velit modi itaque quae ut eveniet error dolorem, quibusdam et maiores nam animi odit. Nam, perspiciatis.</p>
          </div>
          </div>
        </div>

        <div className="event right-event">
          <div className="event-content ">
          <div className="card time_card" ref={section2Ref}>
          <h2 id="DAOTimelineH2">2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim aliquid saepe sunt cumque perspiciatis, consequatur quidem deleniti velit quaerat aliquam sint animi pariatur quasi? Quisquam, repellat aut. Illo, aperiam?
          Ipsum error ullam unde tenetur maxime? Porro voluptates qui ad unde expedita debitis consequatur maxime dolorum itaque doloribus voluptas distinctio voluptatum, explicabo, beatae eligendi accusantium nesciunt repellendus aut iste tempore.
          A placeat consectetur amet incidunt, reiciendis ipsum asperiores repudiandae velit enim beatae dolorum dicta soluta adipisci, esse eveniet. Laboriosam ipsum, eum quasi doloremque tenetur dicta blanditiis voluptas. Odio, eum quibusdam!
          Aut laboriosam ratione, voluptatem eos pariatur ad veritatis et, dolor voluptate qui voluptas. Debitis velit modi itaque quae ut eveniet error dolorem, quibusdam et maiores nam animi odit. Nam, perspiciatis.</p>
          
          </div>
          </div>         
           <img src="https://placehold.co/600x400" alt="Image 2" className=" left-event" id="timeline_image" ref={imgRef2}/>

        </div>

        <div className="event left-event">
        <img src="https://placehold.co/600x400" alt="Image 2" className=" left-event" id="timeline_image" ref={imgRef3}/>

          <div className="event-content ">
          <div className="card time_card" ref={section3Ref}>
          <h2 id="DAOTimelineH2"> 3</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim aliquid saepe sunt cumque perspiciatis, consequatur quidem deleniti velit quaerat aliquam sint animi pariatur quasi? Quisquam, repellat aut. Illo, aperiam?
          Ipsum error ullam unde tenetur maxime? Porro voluptates qui ad unde expedita debitis consequatur maxime dolorum itaque doloribus voluptas distinctio voluptatum, explicabo, beatae eligendi accusantium nesciunt repellendus aut iste tempore.
          A placeat consectetur amet incidunt, reiciendis ipsum asperiores repudiandae velit enim beatae dolorum dicta soluta adipisci, esse eveniet. Laboriosam ipsum, eum quasi doloremque tenetur dicta blanditiis voluptas. Odio, eum quibusdam!
          Aut laboriosam ratione, voluptatem eos pariatur ad veritatis et, dolor voluptate qui voluptas. Debitis velit modi itaque quae ut eveniet error dolorem, quibusdam et maiores nam animi odit. Nam, perspiciatis.</p>
         </div>
          </div>

        </div>

         <div className="event right-event">
          <div className="event-content ">
          <div className="card time_card" ref={section4Ref}>
          <h2 id="DAOTimelineH2">4</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim aliquid saepe sunt cumque perspiciatis, consequatur quidem deleniti velit quaerat aliquam sint animi pariatur quasi? Quisquam, repellat aut. Illo, aperiam?
          Ipsum error ullam unde tenetur maxime? Porro voluptates qui ad unde expedita debitis consequatur maxime dolorum itaque doloribus voluptas distinctio voluptatum, explicabo, beatae eligendi accusantium nesciunt repellendus aut iste tempore.
          A placeat consectetur amet incidunt, reiciendis ipsum asperiores repudiandae velit enim beatae dolorum dicta soluta adipisci, esse eveniet. Laboriosam ipsum, eum quasi doloremque tenetur dicta blanditiis voluptas. Odio, eum quibusdam!
          Aut laboriosam ratione, voluptatem eos pariatur ad veritatis et, dolor voluptate qui voluptas. Debitis velit modi itaque quae ut eveniet error dolorem, quibusdam et maiores nam animi odit. Nam, perspiciatis.</p>
          {/* <img src="/public/images/roadimage.png" alt="Image 2" className="section-image left-event" ref={imgRef3}/> */}
          </div>
          </div>
          <img src="https://placehold.co/600x400" alt="Image 2" className=" left-event" id="timeline_image"ref={imgRef4}/>
        </div>
        <div className="event left-event">
        <img src="https://placehold.co/600x400" alt="Image 2" className=" left-event" id="timeline_image"ref={imgRef5}/>
          <div className="event-content ">
          <div className="card time_card" ref={section5Ref}>
          <h2 id="DAOTimelineH2">5</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim aliquid saepe sunt cumque perspiciatis, consequatur quidem deleniti velit quaerat aliquam sint animi pariatur quasi? Quisquam, repellat aut. Illo, aperiam?
          Ipsum error ullam unde tenetur maxime? Porro voluptates qui ad unde expedita debitis consequatur maxime dolorum itaque doloribus voluptas distinctio voluptatum, explicabo, beatae eligendi accusantium nesciunt repellendus aut iste tempore.
          A placeat consectetur amet incidunt, reiciendis ipsum asperiores repudiandae velit enim beatae dolorum dicta soluta adipisci, esse eveniet. Laboriosam ipsum, eum quasi doloremque tenetur dicta blanditiis voluptas. Odio, eum quibusdam!
          Aut laboriosam ratione, voluptatem eos pariatur ad veritatis et, dolor voluptate qui voluptas. Debitis velit modi itaque quae ut eveniet error dolorem, quibusdam et maiores nam animi odit. Nam, perspiciatis.</p>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default VerticalTimeline;
