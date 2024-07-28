// src/Accueil/Projet_2.js
import React, { useEffect, useRef } from 'react';
import './Projet_2.css';
import projectImage1 from './../Ressources/Photo_7.avif';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce chemin est correct

const Projet_2 = () => {
  const { t } = useTranslation();
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const imageElement = imageRef.current;
    const textElement = textRef.current;
    const titleElement = titleRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show_2');
        }
      });
    }, { threshold: 0.1 });

    if (imageElement) observer.observe(imageElement);
    if (textElement) observer.observe(textElement);
    if (titleElement) observer.observe(titleElement);

    return () => {
      if (imageElement) observer.unobserve(imageElement);
      if (textElement) observer.unobserve(textElement);
      if (titleElement) observer.unobserve(titleElement);
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact#contact-section');
  };

  return (
    <div className="projet-section_2">
      <div className="projet-container_2">
        <div className="text-container_2" ref={textRef}>
          <h2 className="h2" ref={titleRef}>{t('projects_title_2')}</h2>
          <p className="p_2">{t('independent_house_construction_description_2')}</p>
          <div className="button-container_2">
            <button className="contact-button_2" onClick={handleContactClick}>{t('contact_us_button_2')}</button>
          </div>
        </div>
        <div className="image-container" ref={imageRef}>
          <div className="image-border_2">
            <img src={projectImage1} className="img_2" alt={t('projects_title_2')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projet_2;
