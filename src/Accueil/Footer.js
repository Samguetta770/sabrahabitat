import React from 'react';
import './Footer.css'; // Assurez-vous d'avoir un fichier CSS correspondant
import { Link, useNavigate } from 'react-router-dom';
import img1 from "./../Ressources/telephone_blanc.png";
import img2 from "./../Ressources/mail_blanc.png";
import logo from "./../Ressources/sabrristouche_black_logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer">
      <div className="footer-info">
        <h2>Sabra Habitat LTD</h2>
        <p>11 Pais Street,<br/>
          Rishon Letzion<br/>
          Israel<br/>
          7526001
        </p>
        <p>
          <a href="tel:+972539343557" className="contact-link">
            <img src={img1} alt="Téléphone Blanc" className="phone-icon" />+972 53 9 34-3557
          </a>
        </p>
        <p>
          <a href="mailto:contact@sabrahabitat.com" className="contact-link">
            <img src={img2} alt="Mail Blanc" className="mail-icon" />contact@sabrahabitat.com
          </a>
        </p>
      </div>
      <div className="footer-links">
        <a href="/" onClick={() => scrollToTop('/')}>Accueil</a>
        <a href="/services" onClick={() => scrollToTop('/services')}>Services</a>
        <a href="/projets" onClick={() => scrollToTop('/projets')}>Projets</a>
        <a href="/contact" onClick={() => scrollToTop('/contact')}>Contact</a>
      </div>
      <div className="footer-logos">
        <img src={logo} alt="Company Logo" className="footer-logos-benif" />
      </div>
      <div className="footer-bottom">
        <p>© Sabra Habitat Constructeur de Biens |
          <Link to="/PrivacyPolicy" className="footer-link"> Privacy Policy</Link> |
          <a href="https://wa.me/+972542079559" className="footer-link"> Website design by Samuel Guetta</a>
        </p>
      </div>
    </div>
  );
};



export default Footer;
