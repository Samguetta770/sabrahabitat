// App.js
import React from 'react';
import { Routes,Route ,NavLink} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Projets from './pages/Projets';
import Contact from './pages/Contact';
import Services from './pages/Services';
import './App.css'
import WhatsAppButton from "./Accueil/WhatsAppButton";
import header from "./Accueil/Header";
import Header from "./Accueil/Header";
import PrivacyPolicy from "./Accueil/PrivacyPolicy";

const App = () => {
  return (
      <div>
          <Header/>
    <WhatsAppButton />
    <Routes>

        <Route  path="/" element={<Accueil/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projets" element={<Projets/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />



    </Routes>
          </div>
  );
};

export default App;

