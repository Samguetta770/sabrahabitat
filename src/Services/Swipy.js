// Swipy.jsx
import React from 'react';
import SwippablePhotos from './SwippablePhotos';
import './Swipy.css';
import Photo5 from '../Ressources/Photo_12.jpg'; // Importer l'image


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

const Swipy = () => {
  return (
    <div className="swipy-container">
      <h1>Nos services de gestion et de construction</h1>
      <h2>Avec ses nombreux services, Sabra Habitat assure une gestion ainsi qu’une réalisation complète de vos projets.</h2>
      <div className="photos-wrapper">
        <div className="photo-container">
          <div className="min-title">
            Gestion
          </div>

          <SwippablePhotos services={gestionServices} backgroundImage={Photo5} />
        </div>
        <div className="photo-container">
          <div className="min-title">
            Construction
          </div>
          <SwippablePhotos services={constructionServices} backgroundImage={Photo5} />
        </div>
      </div>
    </div>
  );
};

export default Swipy;
