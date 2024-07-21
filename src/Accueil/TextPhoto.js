import React, { useEffect, useRef } from 'react';
import './TextPhoto.css';
import img1 from "./../Ressources/Photo_3.webp";
import img4 from "./../Ressources/Photo_4.avif";
import img5 from "./../Ressources/Photo_5.webp";
import { useNavigate } from 'react-router-dom';

const TextPhoto = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const titleElement = titleRef.current;
    const textElement = textRef.current;
    const imageElement = imageRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    if (titleElement) {
      observer.observe(titleElement);
    }

    if (textElement) {
      observer.observe(textElement);
    }

    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (titleElement) {
        observer.unobserve(titleElement);
      }
      if (textElement) {
        observer.unobserve(textElement);
      }
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact#contact-section');
  };

  return (
    <div className="new-section-TP">
      <div className="content">
        <div className="text-container-TP">
          <h2 className="fade-in-top" ref={titleRef}>Qu'est-ce qu'un gestionnaire de projet de construction ?</h2>
          <p className="fade-in-left" ref={textRef}>
            Un gestionnaire de projet de construction joue un rôle central dans la réussite de votre projet. Il coordonne et supervise toutes les phases de la construction, depuis la planification initiale jusqu'à la réalisation finale..<br/><br/>
            <strong>• Une coordination complète :</strong><br/>
            Chez sabra habitat, nous assurons la liaison entre toutes les parties prenantes, y compris les architectes, les ingénieurs, les sous-traitants et les fournisseurs. Cette gestion garantit une communication fluide et une coordination optimale, minimisant ainsi les risques de retard et de malentendus.<br/><br/>
            <strong>• Un accompagnement administratif:</strong><br/>
            Nos experts juridiques veillent à la conformité de toutes les réglementations locales et nationales. <br/>
              Nous prenons en charge toutes les démarches administratives nécessaires, de la recherche du terrain adéquat, à de l'obtention des permis de construire, vous libérant ainsi des complexités administratives et juridiques.
              <br/><br/>
            <strong>• Une gestion économique :</strong><br/>
            Faire appel a un gestionnaire de projet offre des avantages économiques significatifs. Grâce à une planification rigoureuse et une gestion stricte des budgets, nous optimisons les coûts et évitons les dépenses inutiles. Notre réseau de fournisseurs et de sous-traitants fiables nous permet de négocier les meilleurs tarifs, offrant ainsi des économies substantielles.. Le respect des délais évite les frais liés aux prolongations de chantier, tandis que la réalisation de haute qualité valorise votre investissement immobilier à long terme.<br/><br/>
            En choisissant Sabra Habitat, vous bénéficiez de l'expertise et de l'accompagnement d'un gestionnaire de projet de construction dédié, qui transforme vos idées en réalité tout en vous offrant une expérience sereine et sans stress.
          </p>
          <div className="buttons-TP">
            <button className="button-TP" onClick={handleContactClick}>Contactez nous</button>
          </div>
        </div>
        <div className="image-container-TP fade-in-right" ref={imageRef}>
          <img src={img1} style={{ height: '40%', width: '110%',paddingTop:'2em',paddingLeft:'3em' }} alt="Travailleurs installant des travaux énergie économie" />
          <div className="bottom-images">
            <img src={img4} className="image-4" alt="Image 4" />
            <img src={img5} className="image-5" alt="Image 5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPhoto;
