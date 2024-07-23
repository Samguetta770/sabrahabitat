import React, { useEffect, useRef } from 'react';
import './Projet_3.css';
import projectImage1 from "./../Ressources/Photo_6.avif";
import projectImage2 from "./../Ressources/Photo_7.avif";
import projectImage3 from "./../Ressources/Photo_8.avif";
import { useNavigate } from 'react-router-dom';
const Projet_3 = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const imageElement = imageRef.current;
    const textElement = textRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    if (imageElement) observer.observe(imageElement);
    if (textElement) observer.observe(textElement);

    return () => {
      if (imageElement) observer.unobserve(imageElement);
      if (textElement) observer.unobserve(textElement);
    };
  }, []);
const handleContactClick = () => {
    navigate('/contact#contact-section');
  };
  return (
    <div className="projet-container">
      <div className="image-container" ref={imageRef}>
        <div className="image-border">
          <img src={projectImage3} className="img" alt="Description of the project" />
        </div>
      </div>
      <div className="text-container" ref={textRef}>
        <h2>Renovation de propriété</h2>
        <p>Transformez et agrandissez votre maison nouvellement aquise selon vos gouts et besoin avec nos service de renovation personnaliserù pour créer l’espace de vie parfait </p>
        <div className="button-container">
          <button className="contact-button" onClick={handleContactClick}>Contactez-nous</button>
        </div>
      </div>
    </div>
  );
};

export default Projet_3;
