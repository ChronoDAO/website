// components/about-dao/AboutDao.tsx

import { useEffect, useState } from 'react';
import { fetchAboutDaoData } from '../../services/api';
import './AboutDao.scss';
import DAOTimeline from '../../components/DaoTimeline/DaoTimeline';

interface Logo {
  data: {
    attributes: {
      url: string;
    };
  };
}

interface AboutDaoData {
  title: string;
  description: string;
  description2: string;
  titleimage: string;
  logo: Logo;
}

export default function AboutDao() {
  const [aboutDaoData, setAboutDaoData] = useState<AboutDaoData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAboutDaoData();
        setAboutDaoData(data);
      } catch (error) {
        console.error('Error fetching AboutDao data:', error);
        setError('Error fetching data. Please check the console for details.');
      }
    };

    fetchData();
  }, []);

  if (error) {
    console.error('Error:', error);
    return <div>Error: {error}</div>;
  }

  if (!aboutDaoData) {
    return <div>No data available</div>;
  }

  const { title, description, description2, titleimage, logo } = aboutDaoData;

  return (
    <main className='main' id="mainDAO">
      <h1>A propos de ChronoDAO</h1>
      <br />
      <section id="containerDAO">
        <div className="content">
          <h2>{title}</h2>
          <br />
          <p>{description}</p>
          <br />
          <p>{description2}</p>
        </div>
  
        <section id="sidebar">
          <h2>{titleimage}</h2>
          {logo && (
            <div className="img-container">
              <img
                src={`${import.meta.env.VITE_API_URL}${logo.data.attributes.url}`}
                id="img_sidebar"
                alt='Trésorerie'
              />
            </div>
          )}
        </section>
      </section>
  
      <section id='containerMap'>
        <div className="content2">
          <DAOTimeline />
        </div>
      </section>
    </main>
  );
}
