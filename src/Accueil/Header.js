import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import img from "../Ressources/sabrristouche_gold_logo.png";
import LanguageSelector from "./LanguageSelector"; // Assurez-vous que le chemin est correct

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setShowNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToTop = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="header_header">
      <div className="header-content_header">
        <div className="language-selector-mobile">
          <LanguageSelector />
        </div>
        <div className="logo-container_header">
          <img src={img} alt="Logo" className="logo-image_header" />
        </div>

        <div className="partner-logos_header">
          <div className="language-selector-desktop">
            <LanguageSelector />
          </div>
          <Link to="/" className="header-link_header" onClick={() => scrollToTop('/')}>Accueil</Link>
          <Link to="/services" className="header-link_header" onClick={() => scrollToTop('/services')}>Services</Link>
          <Link to="/projets" className="header-link_header" onClick={() => scrollToTop('/projets')}>Projets</Link>
          <Link to="/contact" className="header-link_header" onClick={() => scrollToTop('/contact')}>Contact</Link>
        </div>
        <div className={`show-nav-button-container_header`} ref={navRef}>
          <button className="show-nav-button_header" onClick={() => setShowNav(!showNav)}>
            <div className="line_header"></div>
            <div className="line_header"></div>
            <div className="line_header"></div>
          </button>

          {showNav && (
            <div className="nav-modal_header">
              <div className="nav-item_header">
                <Link to="/" className="header-link_header" onClick={() => { setShowNav(false); scrollToTop('/'); }}>
                  <span>Accueil</span> <span className="arrow_header">></span>
                </Link>
              </div>
              <div className="nav-item_header">
                <Link to="/services" className="header-link_header" onClick={() => { setShowNav(false); scrollToTop('/services'); }}>
                  <span>Services</span> <span className="arrow_header">></span>
                </Link>
              </div>
              <div className="nav-item_header">
                <Link to="/projets" className="header-link_header" onClick={() => { setShowNav(false); scrollToTop('/projets'); }}>
                  <span>Projets</span> <span className="arrow_header">></span>
                </Link>
              </div>
              <div className="nav-item_header">
                <Link to="/contact" className="header-link_header" onClick={() => { setShowNav(false); scrollToTop('/contact'); }}>
                  <span>Contact</span> <span className="arrow_header">></span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
