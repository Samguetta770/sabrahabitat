// src/Accueil/Projet_1.js
import React, { useEffect, useRef } from 'react';
import './Projet_1.css';
import projectImage1 from './../Ressources/Photo_6.avif';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce chemin est correct

const Projet_1 = () => {
  const { t } = useTranslation();
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
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
    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact#contact-section');
  };

  return (
    <div className="projet-section">
      <h1 className="title" ref={titleRef}>{t('projects_title')}</h1>
      <div className="title-bar"></div>
      <div className="projet-container">
        <div className="image-container" ref={imageRef}>
          <div className="image-border">
            <img src={projectImage1} className="img" alt={t('independent_house_construction_title')} />
          </div>
        </div>
        <div className="text-container" ref={textRef}>
          <h2>{t('independent_house_construction_title')}</h2>
          <p>{t('independent_house_construction_description')}</p>
          <div className="button-container">
            <button className="contact-button" onClick={handleContactClick}>{t('contact_us_button')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projet_1;
