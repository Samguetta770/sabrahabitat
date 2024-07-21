import React, { useState } from 'react';
import './TextPhoto_2.css';

const gestionServices = [
  { title: "Planification du projet", description: "Nous organisons et planifions l'ensemble de votre projet de A à Z." },
  { title: "Élaboration du budget détaillé", description: "Nous prévoyons tous les coûts avec précision pour éviter les surprises." },
  { title: "Coordination des intervenants", description: "Nous gérons toutes les équipes impliquées dans le projet." },
  { title: "Suivi et gestion des délais", description: "Nous nous assurons que tous les délais sont respectés." },
  { title: "Communication et reporting régulier", description: "Nous vous tenons informé à chaque étape du projet." },
  { title: "Conseil et optimisation du projet", description: "Nous vous conseillons pour optimiser chaque aspect de votre projet." },
  { title: "Gestion des ressources", description: "Nous allouons efficacement les ressources nécessaires au projet." },
  { title: "Analyse de risque", description: "Nous identifions et évaluons les risques potentiels pour les atténuer efficacement." },
  { title: "Assurance qualité", description: "Nous nous assurons que toutes les étapes du projet respectent les normes de qualité les plus élevées." }
];

const constructionServices = [
  { title: "Conception architecturale", description: "Nous concevons des structures architecturales innovantes et fonctionnelles." },
  { title: "Études de faisabilité", description: "Nous évaluons la faisabilité de votre projet sur le plan technique et financier." },
  { title: "Obtention du permis de construire", description: "Nous nous occupons des démarches pour obtenir les permis nécessaires." },
  { title: "Sélection et gestion des ouvriers qualifiés", description: "Nous choisissons et supervisons des ouvriers qualifiés pour votre projet." },
  { title: "Aménagement intérieur et extérieur", description: "Nous réalisons des aménagements intérieurs et extérieurs esthétiques et pratiques." },
  { title: "Supervision du chantier", description: "Nous surveillons l'avancement des travaux sur le chantier." },
  { title: "Construction durable", description: "Nous construisons en respectant les normes environnementales." },
  { title: "Inspection des travaux finis", description: "Nous contrôlons la qualité des travaux une fois terminés." },
  { title: "Livraison clé en main", description: "Nous livrons un projet entièrement finalisé, prêt à l'emploi." }
];

const TextPhoto_2 = () => {
  const [gestionIndex, setGestionIndex] = useState(0);
  const [constructionIndex, setConstructionIndex] = useState(0);
  const [isGestionAnimating, setIsGestionAnimating] = useState(false);
  const [isConstructionAnimating, setIsConstructionAnimating] = useState(false);

  const handlePreviousGestion = () => {
    if (isGestionAnimating) return;
    setIsGestionAnimating(true);
    setTimeout(() => {
      setGestionIndex(gestionIndex === 0 ? Math.ceil(gestionServices.length / 3) - 1 : gestionIndex - 1);
      setIsGestionAnimating(false);
    }, 500);
  };

  const handleNextGestion = () => {
    if (isGestionAnimating) return;
    setIsGestionAnimating(true);
    setTimeout(() => {
      setGestionIndex((gestionIndex + 1) % Math.ceil(gestionServices.length / 3));
      setIsGestionAnimating(false);
    }, 500);
  };

  const handlePreviousConstruction = () => {
    if (isConstructionAnimating) return;
    setIsConstructionAnimating(true);
    setTimeout(() => {
      setConstructionIndex(constructionIndex === 0 ? Math.ceil(constructionServices.length / 3) - 1 : constructionIndex - 1);
      setIsConstructionAnimating(false);
    }, 500);
  };

  const handleNextConstruction = () => {
    if (isConstructionAnimating) return;
    setIsConstructionAnimating(true);
    setTimeout(() => {
      setConstructionIndex((constructionIndex + 1) % Math.ceil(constructionServices.length / 3));
      setIsConstructionAnimating(false);
    }, 500);
  };

  return (
    <div className="gestion-construction">
      <div className="overlay">
        <h1>Nos services de gestion et de construction</h1>
        <h2>Avec ses nombreux services, Sabra Habitat assure une gestion ainsi qu’une réalisation complète de vos projets.</h2>
        <div className="services">
          <div className="gestion">
            <h3 style={{
  fontSize: '24px',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)',
  textTransform: 'uppercase',
  fontFamily: 'Arial, sans-serif',
  letterSpacing: '1px'
}}>
  Gestion
</h3>
            <div className="service-column-wrapper">
<button onClick={handlePreviousGestion} style={{ marginLeft: '45%',marginBottom:'1em' }}>→</button>
              <div className="service-column">
                {gestionServices.slice(gestionIndex * 3, gestionIndex * 3 + 3).map((service, index) => (
                  <div className={`service-item ${isGestionAnimating ? 'hide' : 'show'}`} key={index}>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="construction">
            <h3 style={{
  fontSize: '24px',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)',
  textTransform: 'uppercase',
  fontFamily: 'Arial, sans-serif',
  letterSpacing: '1px'
}}>
  Construction
</h3>
            <div className="service-column-wrapper">
<button onClick={handlePreviousConstruction} style={{ marginLeft: '45%',marginBottom:'1em' }}>→</button>
              <div className="service-column">
                {constructionServices.slice(constructionIndex * 3, constructionIndex * 3 + 3).map((service, index) => (
                  <div className={`service-item ${isConstructionAnimating ? 'hide' : 'show'}`} key={index}>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPhoto_2;
