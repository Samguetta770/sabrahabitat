// src/Accueil/TextPhoto_4.js
import React, { useEffect, useRef } from 'react';
import './TextPhoto_4.css';
import img1 from "./../Ressources/Photo_10.jpg";
import icon1 from "./../Ressources/Etoile_Good.png";
import icon2 from "./../Ressources/Localisation_Good.png";
import icon3 from "./../Ressources/Maison_Good.png";
import icon4 from "./../Ressources/Note_Good.png";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce chemin est correct

const TextPhoto_4 = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const iconRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show_4');
          observer.disconnect(); // Stop observing once the animation starts
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

  useEffect(() => {
    const iconObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show-icon');
          }, index * 500); // Delay of 500ms between each icon
        }
      });
    }, { threshold: 0.1 });

    iconRefs.current.forEach(icon => {
      if (icon) {
        iconObserver.observe(icon);
      }
    });

    return () => {
      iconRefs.current.forEach(icon => {
        if (icon) {
          iconObserver.unobserve(icon);
        }
      });
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact#contact-section');
  };

  return (
    <div className="new-section_4" ref={sectionRef}>
      <div className="content_4">
        <div className="image-container_4">
          <div className="image-border_4">
            <img src={img1} className="img_4" alt="Travailleurs installant des travaux énergie économie" />
          </div>
        </div>
        <div className="text-columns_4">
          <div className="column_4">
            <h2>{t('why_choose_us_title_i4')}</h2>
            <p>{t('why_choose_us_description_i4')}</p>
          </div>
          <div className="icon-section_4">
            <div className="icon-item_4" ref={el => iconRefs.current[0] = el}>
              <img src={icon1} alt={t('team_professional_experienced_i4')} />
              <p style={{ textAlign: 'center', justifyContent: 'center' }}>{t('team_professional_experienced_i4')}</p>
            </div>
            <div className="icon-item_4" ref={el => iconRefs.current[1] = el}>
              <img src={icon2} alt={t('land_acquisition_israel_i4')} />
              <p style={{ textAlign: 'center', justifyContent: 'center' }}>{t('land_acquisition_israel_i4')}</p>
            </div>
            <div className="icon-item_4" ref={el => iconRefs.current[2] = el}>
              <img src={icon3} alt={t('full_specialized_service_i4')} style={{ paddingLeft: '0.3em' }} />
              <p style={{ textAlign: 'center', justifyContent: 'center' }}>{t('full_specialized_service_i4')}</p>
            </div>
            <div className="icon-item_4" ref={el => iconRefs.current[3] = el}>
              <img src={icon4} alt={t('personalized_legal_services_i4')} />
              <p style={{ textAlign: 'center', justifyContent: 'center' }}>{t('personalized_legal_services_i4')}</p>
            </div>
          </div>
          <div className="buttons">
            <button className="button_4" onClick={handleContactClick}>{t('contact_us_i4')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPhoto_4;
