// ShortSection.tsx
import { useEffect, useState } from 'react';
import './Sections.scss';
import { fetchShortSectionData } from '../../services/api';

interface ShortSectionData {
  _id: number;
  title: string;
  subtitle: string;
  paragraphe: string;
  logo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

const ShortSection: React.FC = () => {
  const [shortSectionData, setShortSectionData] = useState<ShortSectionData[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const data: ShortSectionData[] = await fetchShortSectionData();
        setShortSectionData(data);
      } catch (error) {
        console.error('Error fetching ShortSection data:', error);
      }
    };

    fetchData();
  }, []);

  if (!shortSectionData || shortSectionData.length === 0) {
    return null; // Add loading state if necessary
  }
  console.log("shortSectionData:", shortSectionData);

  return (
    <div>
      {shortSectionData.map((entry, index) => (
        <section key={entry._id || index} className={`home-section__wrapper ${index % 2 === 0 ? 'even-section' : 'odd-section'}`}>
          <div className="content__wrapper">
            <div className="text__wrapper">
              <h3>
                <span className="span--orange">{entry.title}</span>
                <br />
                {entry.subtitle}
              </h3>
              <p>{entry.paragraphe}</p>
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

export default ShortSection;