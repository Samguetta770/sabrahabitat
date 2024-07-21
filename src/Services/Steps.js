import React, { useEffect, useRef } from 'react';
import './Steps.css';

const Steps = () => {
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
      <h2 className="steps-title">Nos équipes proposent une gamme complete de services haut de gamme pour francophone, allant de la recherche du terrain passant par la planification des travaux jusqu'à l'exécution du projet !</h2>
      <div className="steps">
        <div className="step step1" ref={el => stepsRef.current[0] = el}>
          <div className="step-content">
            <h2>1</h2>
            <p>Contactez-nous et nous planifierons une rencontre dans les plus brefs délais.</p>
          </div>
        </div>
        <div className="step step2" ref={el => stepsRef.current[1] = el}>
          <div className="step-content">
            <h2>2</h2>
            <p>Lors de la première visite, nous recevrons vos exigences et vous conseillerons sur l’orientation à suivre.</p>
          </div>
        </div>
        <div className="step step3" ref={el => stepsRef.current[2] = el}>
          <div className="step-content">
            <h2>3</h2>
            <p>Nos experts évalueront les aspects techniques, financiers ainsi que la réglementation légale de votre projet.</p>
          </div>
        </div>
        <div className="step step4" ref={el => stepsRef.current[3] = el}>
          <div className="step-content">
            <h2>4</h2>
            <p>Nous élaborerons une proposition détaillée incluant l’estimation du budget requis ainsi qu'un délai d’achèvement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;

