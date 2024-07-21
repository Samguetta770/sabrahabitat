import React, { useEffect, useRef } from 'react';
import './PhotoText.css';
import img1 from "./../Ressources/Photo_2.webp";
import { useNavigate } from 'react-router-dom';

const PhotoText = () => {
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
        <img src={img1} className={"w-12"} alt="Travailleurs installant des travaux énergie économie" />
      </div>
      <div className="text-container fade-in-right" ref={textRef}>
        <h2 className="fade-in-top" ref={titleRef}>Qui sommes nous ?</h2>
        <p>
          Sabra Habitat est une entreprise spécialisée en gestion de projet de construction basée en Israël, dédiée à accompagner les francophones résidant en France ainsi qu’en Israël, dans la réalisation de leurs projets immobiliers.<br/><br/>
          Fort d’une expertise locale et d’une équipe de professionnels qualifiés, nous garantissons une prise en charge complète, de la conception à la finalisation.<br/><br/>
          Notre engagement repose sur des valeurs de confiance, de transparence et de qualité, assurant le respect des délais et des normes des plus exigeantes.<br/><br/>
          En choisissant Sabra Habitat, vous bénéficiez d’un partenaire fiable, capable de transformer vos ambitions en réalisations concrètes et durables.<br/><br/>
        </p>
        <div className="buttons">
          <button className="button" onClick={handleContactClick}>Contactez nous</button>
        </div>
      </div>
    </div>
  );
};

export default PhotoText;
