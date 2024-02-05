import { useEffect, useState } from 'react';
import './TextScroll.scss';
import { fetchHomeBannerData, fetchTextScrollWords } from '../../../services/api';

interface HomeBannerData {
  title: string;
  description: string;
}

interface TextScrollWord {
  id: number;
  word: string;
}

export default function TextScroll() {
  const [homeBannerData, setHomeBannerData] = useState<HomeBannerData | null>(null);
  const [textScrollWords, setTextScrollWords] = useState<TextScrollWord[] | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeBanner = await fetchHomeBannerData();
        setHomeBannerData(homeBanner);

        const words = await fetchTextScrollWords();
        setTextScrollWords(words);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % (textScrollWords?.length || 1));
    }, 2000);
  
    return () => clearTimeout(timeout);
  }, [currentWordIndex, textScrollWords]);

  if (!homeBannerData || !textScrollWords) {
    return null;
  }

  return (
    <div className="banner_test">
      <h2>{homeBannerData.title}</h2>
      <div className="words__wrapper">
        {textScrollWords.map((word, index) => (
          <span
            key={word.id || index}
            className={`word ${index === currentWordIndex ? 'active' : ''}`}
          >
            {word.word}
          </span>
        ))}
      </div>
      <div className="caption">
        <p>{homeBannerData.description}</p>
      </div>
    </div>
  );
}
