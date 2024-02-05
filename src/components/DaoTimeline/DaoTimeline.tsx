import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fetchTimelineData } from '../../services/api';
import './DaoTimeline.scss';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  logo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  text: string;
}

const DaoTimeline = () => {
  const [timelineData, setTimelineData] = useState<TimelineEvent[]>([]);

  useEffect(() => {
    const animateSections = () => {
      const events = Array.from(document.querySelectorAll('.event')) as HTMLElement[];
    
      events.forEach((event: HTMLElement) => {
        const section = event.querySelector('.event-content');
        const img = event.querySelector('.section-image');
    
        if (section && img) {
          ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            onEnter: () => {
              gsap.to(img, { opacity: 1, visibility: 'visible', transform: 'translateX(-50px)', duration: 3 });
              gsap.from(section, { duration: 3, opacity: 1, visibility: 'visible', transform: 'translateX(100px)' });
            },
            onLeaveBack: () => {
              gsap.to(img, { opacity: 0, visibility: 'hidden', transform: 'translateY(-30px)', duration: 1 });
              gsap.to(section, { duration: 3, opacity: 0, visibility: 'hidden', transform: 'translateY(-30px)' });
            },
          });
        }
      });
    };

    const fetchDataAndAnimate = async (): Promise<void> => {
      try {
        const data: TimelineEvent[] = await fetchTimelineData();
        setTimelineData(data);
        animateSections();
      } catch (error) {
        console.error('Error fetching timeline data:', error);
      }
    };

    fetchDataAndAnimate();
  }, []);

  return (
    <div className="vertical-timeline">
      <h2>Timeline</h2>
      <div className="timeline">
        <div className="line"></div>
        {timelineData.map((_, index) => (
          <div className={`event ${index % 2 !== 0 ? 'reverse-order' : ''}`} key={index}>
            <div className="event-content">
              <img src={`${import.meta.env.VITE_API_URL}${timelineData[index]?.logo?.data?.attributes?.url}`} alt={`Image ${index + 1}`} className="section-image" id="timeline_image" />
            </div>
            <div className="event-content">
              <div className="card" id="time_card">
                <h3 id="DAOTimelineH2">{index + 1}</h3>
                <p>{timelineData[index]?.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaoTimeline;
