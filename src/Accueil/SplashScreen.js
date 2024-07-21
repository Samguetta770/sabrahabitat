import React, { useEffect } from 'react';
import './SplashScreen.css';
import logo from "./../Ressources/logo_sabra_habitat_Gold.png";// Remplacez par le chemin correct de votre logo

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const splash = document.getElementById('splash-screen');
      splash.classList.add('slide-up');
      setTimeout(onFinish, 1000); // 1s pour laisser l'animation se terminer
    }, 1000); // 1s avant de commencer l'animation

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div id="splash-screen" className="splash-screen">
      <img src={logo} alt="Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;