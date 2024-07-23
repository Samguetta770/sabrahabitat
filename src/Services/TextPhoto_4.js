import React, { useEffect, useRef } from 'react';
import './TextPhoto_4.css';
import img1 from "./../Ressources/Photo_10.jpg";
import icon1 from "./../Ressources/Etoile_Good.png";
import icon2 from "./../Ressources/Localisation_Good.png";
import icon3 from "./../Ressources/Maison_Good.png";
import icon4 from "./../Ressources/Note_Good.png";
import { useNavigate } from 'react-router-dom';

const TextPhoto_4 = () => {
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
            <h2>POURQUOI NOUS CHOISIR POUR VOS PROJETS DE RENOVATION ET DE CONSTRUCTION ?</h2>
            <p>Experimenté et competent, nous travaillons en etroite collaboration avec tout corps de metiers du btp , ce qui nous permet quelle que soit l’ampleur du projet , d’assurer un services au normes les plus elevés. </p>
          </div>
          <div className="icon-section_4">
            <div className="icon-item_4" ref={el => iconRefs.current[0] = el}>
              <img src={icon1} alt="Équipe professionnelle et expérimentée" />
              <p style={{ textAlign: 'center',justifyContent: 'center' }}>Une équipe professionnelle et expérimentée</p>
            </div>
            <div className="icon-item_4" ref={el => iconRefs.current[1] = el}>
              <img src={icon2} alt="Nous travaillons dans tout le Devon occidental" />
              <p style={{ textAlign: 'center',justifyContent: 'center' }}>Nous travaillons dans tout Israël</p>
            </div>
            <div className="icon-item_4" ref={el => iconRefs.current[2] = el}>
              <img src={icon3} alt="Services spécialisés haut de gamme" style={{ paddingLeft: '0.3em' }}/>
              <p style={{ textAlign: 'center',justifyContent: 'center' }}>Services spécialisés haut de gamme</p>
            </div>
            <div className="icon-item_4" ref={el => iconRefs.current[3] = el}>
              <img src={icon4} alt="Collaboration avec des architectes et designers" />
              <p style={{ textAlign: 'center' ,justifyContent: 'center'}}>Services juridique personnalisé</p>
            </div>
          </div>
          <div className="buttons">
            <button className="button_4" onClick={handleContactClick}>Contactez nous</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPhoto_4;

