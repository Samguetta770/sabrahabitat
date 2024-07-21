import React, { useEffect, useRef } from 'react';
import './Projet_1.css';
import projectImage1 from "./../Ressources/Photo_6.avif";
import projectImage2 from "./../Ressources/Photo_7.avif";
import projectImage3 from "./../Ressources/Photo_8.avif";
import { useNavigate } from 'react-router-dom';

const Projet_1 = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact#contact-section');
  };

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

  return (
    <div className="projet-container">
      <div className="text-container" ref={textRef}>
        <h2>Construction De Villa Bi-familial :</h2>
        <p>Realiser votre reve en collaboration avec un second proprietairre.
Comportant deux unité distinct au sein d’un même bâtiment et  disposant d’entrée privée, la maison bi familial permet de partager les couts et l’investissement nécessaire, rendant votre reve plus accessible que jamais
</p>
        <div className="button-container">
          <button className="contact-button" onClick={handleContactClick}>Contactez-nous</button>
        </div>
      </div>
      <div className="image-container" ref={imageRef}>
        <div className="image-border">
          <img src={projectImage2} className="img" alt="Description of the project" />
        </div>
      </div>
    </div>
  );
};

export default Projet_1;
