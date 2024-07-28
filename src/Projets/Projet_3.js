// src/Accueil/Projet_3.js
import React, { useEffect, useRef } from 'react';
import './Projet_3.css';
import projectImage3 from './../Ressources/Photo_8.avif';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce chemin est correct

const Projet_3 = () => {
  const { t } = useTranslation();
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact#contact-section');
  };

  return (
    <div className="projet-container">
      <div className="image-container" ref={imageRef}>
        <div className="image-border">
          <img src={projectImage3} className="img" alt={t('property_renovation_title')} />
        </div>
      </div>
      <div className="text-container" ref={textRef} style={{ textAlign: 'center' }}>
        <h2 style={{ textAlign: 'center' }}>{t('property_renovation_title')}</h2>
        <p style={{ textAlign: 'center' }}>
          {t('property_renovation_description')}
        </p>
        <div className="button-container">
          <button className="contact-button" onClick={handleContactClick}>{t('contact_us_button_3')}</button>
        </div>
      </div>
    </div>
  );
};

export default Projet_3;
