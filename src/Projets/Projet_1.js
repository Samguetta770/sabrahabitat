import React, { useEffect, useRef } from 'react';
import './Projet_1.css';
import projectImage1 from './../Ressources/Photo_6.avif';
import projectImage2 from './../Ressources/Photo_7.avif';
import projectImage3 from './../Ressources/Photo_8.avif';
import { useNavigate } from 'react-router-dom';

const Projet_1 = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact#contact-section');
  };

  return (
    <div className="projet-section">
      <h1 className="title" ref={titleRef}>Nos Projets</h1>
      <div className="title-bar"></div>
      <div className="projet-container">
        <div className="image-container" ref={imageRef}>
          <div className="image-border">
            <img src={projectImage1} className="img" alt="Description of the project" />
          </div>
        </div>
        <div className="text-container" ref={textRef}>
          <h2>Construction de maison indépendante</h2>
          <p>
            Profitez de notre expertise pour construire la villa de vos rêves, personnalisée selon vos désirs et besoins. Nos architectes créent des plans sur mesure, intégrant des fondations solides et des systèmes modernes. Les finitions intérieures et extérieures sont sélectionnées pour offrir un cadre de vie luxueux, confortable et durable. Avec nous, votre vision devient réalité, alliant qualité et élégance.
          </p>
          <div className="button-container">
            <button className="contact-button" onClick={handleContactClick}>Contactez-nous</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projet_1;
