// AboutSection.tsx
import { useEffect, useState } from 'react';
import './Sections.scss';
import { fetchAboutSectionData } from '../../services/api';

interface AboutSectionData {
  _id: number;
  title: string;
  subtitle: string;
  paragraphe1: string;
  paragraphe2: string;
  paragraphe3: string;
  logo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

const AboutSection: React.FC = () => {
  const [aboutSectionData, setAboutSectionData] = useState<AboutSectionData[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const data: AboutSectionData[] = await fetchAboutSectionData();
        setAboutSectionData(data);
      } catch (error) {
        console.error('Error fetching AboutSection data:', error);
      }
    };

    fetchData();
  }, []);

  if (!aboutSectionData || aboutSectionData.length === 0) {
    return null; // Add loading state if necessary
  }
  console.log("aboutSectionData:", aboutSectionData);

  return (
    <div>
      {aboutSectionData.map((entry, index) => (
        <section key={entry._id || index} className={`home-section__wrapper ${index % 2 === 0 ? 'even-section' : 'odd-section'}`}>
          <div className="content__wrapper">
            <div className="text__wrapper">
              <h3>
                <span className="span--orange">{entry.title}</span>
                <br />
                {entry.subtitle}
              </h3>
              <p>{entry.paragraphe1}</p>
              <p>{entry.paragraphe2}</p>
              <p>{entry.paragraphe3}</p>
            </div>
          </div>
          <div className="image__wrapper">
            {entry.logo && entry.logo.data && entry.logo.data.attributes && entry.logo.data.attributes.url && (
              <img src={`${import.meta.env.VITE_API_URL}${entry.logo.data.attributes.url}`} alt={`Image`} />
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default AboutSection;