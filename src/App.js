import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Projets from './pages/Projets';
import Contact from './pages/Contact';
import Services from './pages/Services';
import './App.css';
import WhatsAppButton from "./Accueil/WhatsAppButton";
import Header from "./Accueil/Header";
import Loader from "./Accueil/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données
    const loadData = async () => {
      // Simulez un délai de chargement
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Une fois les données chargées
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader /> // Afficher le loader si les données sont toujours en cours de chargement
      ) : (
        <div>
          <Header />
          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
