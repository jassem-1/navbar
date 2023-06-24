import React, { useEffect, useRef, useState } from 'react';
import './assistance.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Assistance (){
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const containerTop = container.getBoundingClientRect().top;
      const windowInnerHeight = window.innerHeight;
      const containerHeight = container.offsetHeight;

      if (containerTop < windowInnerHeight - containerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div  className={`assis-container ${isVisible ? 'visible' : ''}`}
    ref={containerRef}>
    <div className='need'>
    <span className="assistance-sentence">Need assistance?</span>
    <button className="support-button">Support{' '}
    <FontAwesomeIcon icon={faEnvelope} className="msg-icon" /> 
    </button>
    </div>
     
      <div className="scroll-back-container">
        <button className="scroll-back-button" onClick={scrollToTop}>
          <p className='scroll-back-text'>Scroll Back</p>
          <span className="arrowTop">▲</span>
        </button>
      </div>
    </div>
  );
};

export default Assistance;
