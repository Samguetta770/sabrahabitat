import React from 'react';
import './Footer.css'; // Assurez-vous d'avoir un fichier CSS correspondant
import { Link } from 'react-router-dom';
import img1 from "./../Ressources/telephone_blanc.png";
import img2 from "./../Ressources/mail_blanc.png";
import logo from "./../Ressources/logo_sabra_habitat_Noir.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <h2>Sabra Habitat LTD</h2>
        <p>11 Pais Street,
               Rishon Letzion <br/>    Israel
               7526001</p>
        <p>
          <a href="tel:+972539343557" className="contact-link">
            <img src={img1} alt="Téléphone Bleu" className="phone-icon" />+972 53 9 34-3557
          </a>
        </p>
        <p>
          <a href="mailto:contact@sabrahabitat.com" className="contact-link"><img src={img2} alt="Téléphone Bleu" className="mail-icon" />contact@sabrahabitat.com</a>
        </p>
      </div>
       <div className="footer-links">
        <a href="#home">Accueil</a>
        <a href="#services">Services</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-logos">
        <img src={logo} alt="Company Logo" className="footer-logos-benif" />
      </div>
    </div>
  );
};

export default Footer;



