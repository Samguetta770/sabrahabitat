// src/Accueil/TextPhoto_5.js
import React, { useEffect, useRef } from 'react';
import './TextPhoto_5.css';
import img1 from "./../Ressources/Photo_13.avif";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce chemin est correct

const TextPhoto_5 = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef([]);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const elements = [titleRef.current, imageRef.current, ...textRefs.current, buttonRef.current];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show_5');
          }, index * 300); // Delay between each element
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach(el => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact#contact-section');
  };

  return (
    <div className="new-section_5" ref={sectionRef}>
      <div className="content_5">
        <div className="image-container_5" ref={imageRef}>
          <div className="image-border_5">
            <img src={img1} className="img_5" alt="Travailleurs installant des travaux énergie économie" />
          </div>
        </div>
        <div className="text-columns_5">
          <div className="column_5" ref={titleRef}>
            <h2>{t('whats_next_title_i7')}</h2>
          </div>
          <div className="column_5" ref={el => textRefs.current[0] = el}>
            <p>{t('whats_next_text_1_i7')}</p>
          </div>
          <div className="column_5" ref={el => textRefs.current[1] = el}>
            <p>{t('whats_next_text_2_i7')}</p>
          </div>
          <div className="column_5" ref={el => textRefs.current[2] = el}>
            <p>{t('whats_next_text_3_i7')}</p>
          </div>
          <div className="column_5" ref={el => textRefs.current[3] = el}>
            <p>{t('whats_next_text_4_i7')}</p>
          </div>
          <div className="buttons_5" ref={buttonRef}>
            <button className="button_5" onClick={handleContactClick}>{t('contact_us_i7')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPhoto_5;
