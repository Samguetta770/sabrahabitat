import React, { useState, useEffect } from 'react';
import Header from "../Accueil/Header";
import Presentation from "../Accueil/Presentation";
import PhotoText from "../Accueil/PhotoText";
import TextPhoto from "../Accueil/TextPhoto";
import ExtraitProjets from "../Accueil/ExtraitProjets";
import Footer from "../Accueil/Footer";
import SplashScreen from "../Accueil/SplashScreen"; // Assurez-vous que le chemin est correct

const Accueil = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    if (!showSplash) {
      document.body.style.overflow = 'auto'; // Réactive le défilement
    }
  }, [showSplash]);

  return (
    <div className="accueil-container">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <div className={`main-content ${showSplash ? 'hidden' : ''}`}>
        <div id="accueil">
        <Presentation />
        <div id="services">
          <div id ="photo-text">
          <PhotoText />
            </div>
        </div>
        <div id="projects">
          <TextPhoto />
        </div>
        <ExtraitProjets />
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default Accueil;
