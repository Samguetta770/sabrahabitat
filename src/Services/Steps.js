// src/Accueil/Steps.js
import React, { useEffect, useRef } from 'react';
import './Steps.css';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce chemin est correct

const Steps = () => {
  const { t } = useTranslation();
  const stepsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 300); // Délai de 300ms entre chaque étape
        } else {
          // Optionally remove the 'show' class when the element goes out of view
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.1 });

    stepsRef.current.forEach((step, index) => {
      if (step) {
        observer.observe(step);
      }
    });

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) {
          observer.unobserve(step);
        }
      });
    };
  }, []);

  return (
    <div className="steps-container">
      <h2 className="steps-title">{t('steps_title_i5')}</h2>
      <div className="steps">
        <div className="step step1" ref={el => stepsRef.current[0] = el}>
          <div className="step-content">
            <h2>1</h2>
            <p>{t('step_1_i5')}</p>
          </div>
        </div>
        <div className="step step2" ref={el => stepsRef.current[1] = el}>
          <div className="step-content">
            <h2>2</h2>
            <p>{t('step_2_i5')}</p>
          </div>
        </div>
        <div className="step step3" ref={el => stepsRef.current[2] = el}>
          <div className="step-content">
            <h2>3</h2>
            <p>{t('step_3_i5')}</p>
          </div>
        </div>
        <div className="step step4" ref={el => stepsRef.current[3] = el}>
          <div className="step-content">
            <h2>4</h2>
            <p>{t('step_4_i5')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
