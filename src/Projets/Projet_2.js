import React, { useEffect, useRef } from 'react';
import './Projet_2.css';
import projectImage2 from "./../Ressources/Photo_7.avif";
import { useNavigate } from 'react-router-dom';

const Projet_2 = () => {
  const imageRef_projet2 = useRef(null);
  const textRef_projet2 = useRef(null);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact#contact-section');
  };

  useEffect(() => {
    const imageElement_projet2 = imageRef_projet2.current;
    const textElement_projet2 = textRef_projet2.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show_projet2');
        }
      });
    }, { threshold: 0.1 });

    if (imageElement_projet2) observer.observe(imageElement_projet2);
    if (textElement_projet2) observer.observe(textElement_projet2);

    return () => {
      if (imageElement_projet2) observer.unobserve(imageElement_projet2);
      if (textElement_projet2) observer.unobserve(textElement_projet2);
    };
  }, []);

  return (
    <div className="projet-container_projet2">
      <div className="text-container_projet2" ref={textRef_projet2}>
        <h2>Construction De Villa Bi-familial :</h2>
        <p>Réalisez votre rêve en collaboration avec un second propriétaire.
          Comportant deux unités distinctes au sein d’un même bâtiment et disposant d’entrées privées, la maison bi-familiale permet de partager les coûts et l’investissement nécessaire, rendant votre rêve plus accessible que jamais.
        </p>
        <div className="button-container_projet2">
          <button className="contact-button_projet2" onClick={handleContactClick}>Contactez-nous</button>
        </div>
      </div>
      <div className="image-container_projet2" ref={imageRef_projet2}>
        <div className="image-border_projet2">
          <img src={projectImage2} className="img_projet2" alt="Description of the project" />
        </div>
      </div>
    </div>
  );
};

export default Projet_2;

