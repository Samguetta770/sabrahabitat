import React, { useEffect, useRef } from 'react';
import './Presentation_2.css';

const Presentation_2 = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const element = backgroundRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show_2');
        }
      });
    }, { threshold: 0.1 });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleMoreInfoClick = () => {
    const section = document.getElementById('gestion-constru');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="presentation-container_2">
      <div className="background_2 fade-in_2" ref={backgroundRef}>
        <div className="content_2">
          <h1 className="fade-in-text_2">Nos services de gestion et de construction</h1>
          <p className="fade-in-text_2">Avec ses nombreux services, Sabra Habitat assure une gestion <br/>ainsi qu’une réalisation complète de vos projets !</p>
          <div className="buttons_2 fade-in-text_2">
            <button className="button_2" onClick={handleMoreInfoClick}>En savoir plus</button>
          </div>
        </div>
      </div>
      <div className="green-bar_2"></div>
    </div>
  );
};

export default Presentation_2;
