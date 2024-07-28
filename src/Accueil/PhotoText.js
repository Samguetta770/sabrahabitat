// src/Accueil/PhotoText.js
import React, { useEffect, useRef } from 'react';
import './PhotoText.css';
import img1 from './../Ressources/Photo_2.webp';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce chemin est correct

const PhotoText = () => {
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
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    if (imageElement) {
      observer.observe(imageElement);
    }

    if (textElement) {
      observer.observe(textElement);
    }

    if (titleElement) {
      observer.observe(titleElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
      if (textElement) {
        observer.unobserve(textElement);
      }
      if (titleElement) {
        observer.unobserve(titleElement);
      }
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact#contact-section');
  };

  return (
    <div className="new-section">
      <div className="image-container fade-in-left" ref={imageRef}>
        <img src={img1} className={"w-12"} alt={t('photo_alt')} />
      </div>
      <div className="text-container fade-in-right" ref={textRef}>
        <h2 className="fade-in-top" ref={titleRef}>{t('who_we_are')}</h2>
        <p dangerouslySetInnerHTML={{ __html: t('who_we_are_text') }}></p>
        <div className="buttons">
          <button className="button" onClick={handleContactClick}>{t('contact_us')}</button>
        </div>
      </div>
    </div>
  );
};

export default PhotoText;
