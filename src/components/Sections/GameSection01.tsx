import { useEffect, useState } from 'react';
import CTAButton from '../common/Buttons/CTA-Button/CTAButton';
import { fetchGameSection01Data } from '../../services/api';
import './Sections.scss';

interface Logo {
  data: {
    attributes: {
      url: string;
    };
  };
}

interface GameSection01Data {
  logo1: Logo;
  logo2: Logo;
  logo3: Logo;
  logo4: Logo;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export default function GameSection01() {
  const [sectionData, setSectionData] = useState<GameSection01Data | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGameSection01Data();
        setSectionData(data);
      } catch (error) {
        console.error('Error fetching GameSection01 data:', error);
        setError('Error fetching data. Please check the console for details.');
      }
    };

    fetchData();
  }, []);

  if (error) {
    console.error('Error:', error);
    return <div>Error: {error}</div>;
  }

  if (!sectionData) {
    return <div>No data available</div>;
  }

  const { logo1, logo2, logo3, logo4, title, description } = sectionData;

  return (
    <section className="game-section__wrapper" id="gameSection00">
      <div className="image__wrapper">
        <div className="game__grid">
          {[logo1, logo2, logo3, logo4].map((logo, index) => (
            <div key={index}>
              {logo.data && (
                <div>
                  <img
                    className={`img__${index + 1}`}
                    src={`${import.meta.env.VITE_API_URL}${logo.data.attributes.url}`}
                    alt={`Image for ${title}`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="content__wrapper">
        <div className="text__wrapper">
          <h3>{title}</h3>
          <p>{description}</p>
          <CTAButton text="Rejoindre la team" link="https://discord.gg/chronodao" />
        </div>
      </div>
    </section>
  );
}
