import React, { useEffect, useRef } from 'react';
import './Presentation.css';
import { useNavigate } from 'react-router-dom';

const Presentation = () => {
  const backgroundRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const element = backgroundRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMoreInfoClick = () => {
    scrollToSection('photo-text');
  };

  const handleContactClick = () => {
    navigate('/projets'); // Navigue vers la page projets
    window.scrollTo(0, 0); // Définit la vue en haut de la page
  };

  return (
    <div className="background fade-in" ref={backgroundRef}>
      <div className="content">
        <h1>Sabra Habitat</h1>
        <p>La première société de construction française en Israël</p>
        <p className="quote">"Le pays que j’ai accordé à Avraham et Issac je te le donne, et je le donnerais ce pays à ta descendance après toi"  (Berechit 32 ;12)</p>
        <div className="buttons">
          <button className="button_p" onClick={handleMoreInfoClick}>En savoir plus</button>
          <button className="button_p" onClick={handleContactClick}>Voir projet</button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;

