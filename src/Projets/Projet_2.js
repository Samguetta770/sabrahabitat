import React, { useEffect, useRef } from 'react';
import './Projet_2.css';
import projectImage1 from "./../Ressources/Photo_6.avif";
import { useNavigate } from 'react-router-dom';

const Projet_2 = () => {
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
          entry.target.classList.add('show_2');
        }
      });
    }, { threshold: 0.1 });

    if (imageElement) observer.observe(imageElement);
    if (textElement) observer.observe(textElement);
    if (titleElement) observer.observe(titleElement);

    return () => {
      if (imageElement) observer.unobserve(imageElement);
      if (textElement) observer.unobserve(textElement);
      if (titleElement) observer.unobserve(titleElement);
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact#contact-section');
  };

  return (
    <div className="projet-section_2">

      <div className="projet-container_2">
        <div className="text-container_2" ref={textRef}>
          <h2 className="h2">Construction de maison indépendante</h2>
          <p className="p_2">Profitez de notre expertise pour construire la villa de vos rêves, personnalisée selon vos désirs et besoins. Nos architectes créent des plans sur mesure, intégrant des fondations solides et des systèmes modernes. Les finitions intérieures et extérieures sont sélectionnées pour offrir un cadre de vie luxueux, confortable et durable. Avec nous, votre vision devient réalité, alliant qualité et élégance.</p>
          <div className="button-container_2">
            <button className="contact-button_2" onClick={handleContactClick}>Contactez-nous</button>
          </div>
        </div>
        <div className="image-container" ref={imageRef}>
          <div className="image-border_2">
            <img src={projectImage1} className="img_2" alt="Description of the project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projet_2;
