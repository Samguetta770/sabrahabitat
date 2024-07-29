// src/Accueil/Presentation_2.js
import React, { useEffect, useRef } from 'react';
import './Presentation_2.css';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce chemin est correct

const Presentation_2 = () => {
  const { t } = useTranslation();
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
<h1 className="fade-in-text_2" style={{ color: "white" }}>{t('services_management_construction_title_i3')}</h1>
          <p className="fade-in-text_2" dangerouslySetInnerHTML={{ __html: t('services_management_construction_description_i3') }}></p>
          <div className="buttons_2 fade-in-text_2">
            <button className="button_2" onClick={handleMoreInfoClick}>{t('learn_more_i3')}</button>
          </div>
        </div>
      </div>
      <div className="green-bar_2"></div>
    </div>
  );
};

export default Presentation_2;
