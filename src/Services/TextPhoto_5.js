import React, { useEffect, useRef } from 'react';
import './TextPhoto_5.css';
import img1 from "./../Ressources/Photo_13.avif";
import { useNavigate } from 'react-router-dom';

const TextPhoto_5 = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef([]);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const elements = [titleRef.current, imageRef.current, ...textRefs.current, buttonRef.current];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show_5');
          }, index * 300); // Delay between each element
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach(el => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact#contact-section');
  };

  return (
    <div className="new-section_5" ref={sectionRef}>
      <div className="content_5">
        <div className="image-container_5" ref={imageRef}>
          <div className="image-border_5">
            <img src={img1} className="img_5" alt="Travailleurs installant des travaux énergie économie" />
          </div>
        </div>
        <div className="text-columns_5">
          <div className="column_5" ref={titleRef}>
            <h2>ET APRÈS ?</h2>
          </div>
          <div className="column_5" ref={el => textRefs.current[0] = el}>
            <p2>Une fois que vous nous aurez contactés avec votre demande de gestion de projet en construction, nous organiserons une rencontre pour examiner vos besoins. Lors de cette rencontre, nos experts écouteront attentivement vos exigences en matière d'espace et de budget. Nous vous guiderons à travers le labyrinthe des réglementations et des procédures juridiques impliquées dans un projet de construction, que vous sachiez exactement ce que vous voulez ou que vous ayez besoin d'inspiration.</p2>
          </div>
          <div className="column_5" ref={el => textRefs.current[1] = el}>
            <p2>Nous analyserons soigneusement les chiffres et vous fournirons un devis honnête et compétitif pour votre projet de rénovation ou de construction. Vous saurez exactement combien de temps les travaux prendront et nous planifierons les travaux en conséquence.</p2>
          </div>
          <div className="column_5" ref={el => textRefs.current[2] = el}>
            <p2>Chez Sabra Habitat, nous nous chargeons de la coordination avec les constructeurs, architectes, ingénieurs et autres ouvriers, afin que vous n'ayez affaire qu'à nous. Cela rend l'ensemble du projet beaucoup moins stressant pour vous. Nous gérons les imprévus et vous tenons informé à chaque étape du processus, garantissant que les travaux sont réalisés selon les normes les plus élevées.</p2>
          </div>
          <div className="column_5" ref={el => textRefs.current[3] = el}>
            <p2>Vous avez toujours rêvé de construire votre maison dans le pays de vos ancêtres ? Vous souhaitez offrir un avenir meilleur à vos enfants ? Si la réalisation de ce rêve vous a toujours paru inaccessible, Sabra Habitat est à votre disposition pour répondre à vos aspirations les plus élevées.</p2>
          </div>
          <div className="buttons_5" ref={buttonRef}>
            <button className="button_5" onClick={handleContactClick}>Contactez-nous</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPhoto_5;
