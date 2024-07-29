// src/Accueil/TextPhoto.js
import React, { useEffect, useRef } from 'react';
import './TextPhoto.css';
import img1 from './../Ressources/Photo_3.webp';
import img4 from './../Ressources/Photo_4.avif';
import img5 from './../Ressources/Photo_5.webp';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce chemin est correct

const TextPhoto = () => {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const titleElement = titleRef.current;
    const textElement = textRef.current;
    const imageElement = imageRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    if (titleElement) {
      observer.observe(titleElement);
    }

    if (textElement) {
      observer.observe(textElement);
    }

    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (titleElement) {
        observer.unobserve(titleElement);
      }
      if (textElement) {
        observer.unobserve(textElement);
      }
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact#contact-section');
  };

  return (
    <div className="new-section-TP">
      <div className="content">
        <div className="text-container-TP">
          <h2 className="fade-in-top" ref={titleRef} style ={{color:"white"}}>{t('construction_project_manager_title')}</h2>
          <p className="fade-in-left" ref={textRef} dangerouslySetInnerHTML={{ __html: t('construction_project_manager_description') }}></p>
          <div className="buttons-TP">
            <button className="button-TP" onClick={handleContactClick}>{t('construction_project_manager_contact_us')}</button>
          </div>
        </div>
        <div className="image-container-TP fade-in-right" ref={imageRef}>
          <img src={img1} className="hidden-mobile" style={{ height: '40%', width: '110%', paddingTop: '2em', paddingLeft: '3em' }} alt="Travailleurs installant des travaux énergie économie" />
          <div className="bottom-images">
            <img src={img4} className="image-4 hidden-mobile" alt="Image 4" />
            <img src={img5} className="image-5" alt="Image 5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPhoto;

