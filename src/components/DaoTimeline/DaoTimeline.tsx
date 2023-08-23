import './DaoTimeline.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const DaoTimeline = () => {


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
      trigger: section1,
      start: "top 80%",
      onEnter: () => {
        gsap.to(section1, { opacity: 1, visibility: "visible", transform: "translateX(-50px)", duration: 3 });
        gsap.to(img1, {duration: 3, opacity: 1, visibility: "visible", transform: "translateX(100px)" });
      },
      onLeaveBack: () => {
        gsap.to(section1, { opacity: 0, visibility: "hidden", transform: "translateY(-30px)", duration: 1 });
        gsap.to(img1, { duration: 3, opacity: 0, visibility: "hidden", transform: "translateY(-30px)" });

      },
    });

    ScrollTrigger.create({
      trigger: section2,
      start: "top 80%",
      onEnter: () => {
        gsap.to(section2, { opacity: 1, visibility: "visible", transform: "translateX(25px)", duration: 3 });
        gsap.to(img2, {duration: 3, opacity: 1, visibility: "visible", transform: "translateX(-100px)" });
      },
      onLeaveBack: () => {
        gsap.to(section2, { opacity: 0, visibility: "hidden", transform: "translateY(-30px)", duration: 1 });
        gsap.to(img2, { duration: 3, opacity: 0, visibility: "hidden", transform: "translateY(-30px)" });

      },
    });

    ScrollTrigger.create({
      trigger: section3,
      start: "top 80%",
      onEnter: () => {
        gsap.to(section3, { opacity: 1, visibility: "visible", transform: "translateX(-50px)", duration: 3});
        gsap.to(img3, {duration: 3, opacity: 1, visibility: "visible", transform: "translateX(100px)" });
      },
      onLeaveBack: () => {
        gsap.to(section3, { opacity: 0, visibility: "hidden", transform: "translateY(-30px)", duration: 1 });
        gsap.to(img3, { duration: 3, opacity: 0, visibility: "hidden", transform: "translateY(-30px)" });

      },
    });

    ScrollTrigger.create({
      trigger: section4,
      start: "top 80%",
      onEnter: () => {
        gsap.to(section4, { opacity: 1, visibility: "visible", transform: "translateX(25px)", duration: 3 });
        gsap.to(img4, { duration: 3, opacity: 1, visibility: "visible", transform: "translateX(-100px)" });
      },
      onLeaveBack: () => {
        gsap.to(section4, { opacity: 0, visibility: "hidden", transform: "translateY(-30px)", duration: 1 });
        gsap.to(img4, { duration: 3, opacity: 0, visibility: "hidden", transform: "translateY(-30px)" });
      },
    });
    
    ScrollTrigger.create({
      trigger: section5,
      start: "top 80%",
      onEnter: () => {
        gsap.to(section5, { opacity: 1, visibility: "visible", transform: "translateX(-50px)", duration: 3 });
        gsap.to(img5, {duration: 3, opacity: 1, visibility: "visible", transform: "translateY(-30px)" });
      },
      onLeaveBack: () => {
        gsap.to(section5, { opacity: 0, visibility: "hidden", transform: "translateY(-30px)", duration: 1 });
        gsap.to(img5, { duration: 3, opacity: 0, visibility: "hidden", transform: "translateY(-30px)" });
      },
    });
  }, []);
  return (
    <div className="vertical-timeline">
    <h2>Timeline</h2>
    <div className="timeline">
      <div className="line"></div>
      <div className="event">
        <div className="event-content right-event" ref={imgRef1}>
          <img src="https://placehold.co/600x400" alt="Image 2" className="section-image" id="timeline_image" />
        </div>
        <div className="event-content" ref={section1Ref}>
          <div className="card left-event" id="time_card">
            <h3 id="DAOTimelineH2">1</h3>
            <p>
              Lorem ipsum dolor sit amet.
              Cumque accusamus odit et beatae.
              Quo repellendus expedita quos ipsum.
              Architecto delectus consequuntur quas recusandae?
              Ipsum beatae molestiae sunt ducimus?
            </p>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="event-content" ref={section2Ref}>
          <div className="card right-event" id="time_card">
            <h3 id="DAOTimelineH2">2</h3>
            <p>
            Lorem ipsum dolor sit amet.
              Cumque accusamus odit et beatae.
              Quo repellendus expedita quos ipsum.
              Architecto delectus consequuntur quas recusandae?
              Ipsum beatae molestiae sunt ducimus?
            </p>
          </div>
        </div>
        <div className="event-content left-event" ref={imgRef2}>
          <img src="https://placehold.co/600x400" alt="Image 2" className="section-image" id="timeline_image" />
        </div>
      </div>
      <div className="event">
        <div className="event-content right-event" ref={imgRef3}>
          <img src="https://placehold.co/600x400" alt="Image 2" className="section-image" id="timeline_image" />
        </div>
        <div className="event-content" ref={section3Ref}>
          <div className="card left-event" id="time_card">
            <h3 id="DAOTimelineH2">3</h3>
            <p>
              Lorem ipsum dolor sit amet.
              Cumque accusamus odit et beatae.
              Quo repellendus expedita quos ipsum.
              Architecto delectus consequuntur quas recusandae?
              Ipsum beatae molestiae sunt ducimus?
            </p>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="event-content" ref={section4Ref}>
          <div className="card right-event" id="time_card">
            <h3 id="DAOTimelineH2">4</h3>
            <p>
              Lorem ipsum dolor sit amet.
              Cumque accusamus odit et beatae.
              Quo repellendus expedita quos ipsum.
              Architecto delectus consequuntur quas recusandae?
              Ipsum beatae molestiae sunt ducimus?
            </p>
          </div>
        </div>
        <div className="event-content left-event" ref={imgRef4}>
          <img src="https://placehold.co/600x400" alt="Image 4" className="section-image" id="timeline_image" />
        </div>
      </div>
    </div>
  </div>
  
   
   
  );
};

export default DaoTimeline;
