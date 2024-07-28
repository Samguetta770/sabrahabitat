// src/Presentation.js
import React, { useEffect, useRef } from 'react';
import './Presentation.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from "../i18n";

const Presentation = () => {
  const { t } = useTranslation();
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
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <p className="quote">{t('quote')}</p>
        <div className="buttons">
          <button className="button_p" onClick={handleMoreInfoClick}>{t('more_info')}</button>
          <button className="button_p" onClick={handleContactClick}>{t('see_project')}</button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
