import  { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import './ScrollToTop.scss';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <FaAngleUp className="icon-style" />
    </div>
  );
}

export default ScrollToTop;
