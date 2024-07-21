// App.js
import React from 'react';
import { Routes,Route ,NavLink} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Projets from './pages/Projets';
import Contact from './pages/Contact';
import Services from './pages/Services';
import './App.css'
import WhatsAppButton from "./Accueil/WhatsAppButton";

const App = () => {
  return (
      <div>
    <WhatsAppButton />
    <Routes>

        <Route  path="/" element={<Accueil/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projets" element={<Projets/>} />
        <Route path="/contact" element={<Contact/>} />


    </Routes>
          </div>
  );
};

export default App;

