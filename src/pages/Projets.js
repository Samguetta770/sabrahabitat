import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import Header from "../Accueil/Header";
import Projet_1 from "../Projets/Projet_1";
import Projet_2 from "../Projets/Projet_2";
import Projet_3 from "../Projets/Projet_3";
import Footer from "../Accueil/Footer";
const Projets = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
      <div style={{ display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
          <div id="projets">


              </div>

          <div id="Projet_1" className="project-section" style={{ padding: "0", margin: "0" }}>
          <Projet_1/>
              </div>
              <div id="Projet_2" className="project-section">
          <Projet_2/>
                  </div>
                  <div id="Projet_3" className="project-section">
          <Projet_3/>
                      </div>
          <Footer/>
          </div>





  );
};

export default Projets;