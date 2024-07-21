import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import img from "./../Ressources/logo_sabra_habitat_Gold.png";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);

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

  return (
    <div className="header_header">
      <div className="header-content_header">
        <div className="logo-container_header">
          <img src={img} alt="Logo" className="logo-image_header" />
        </div>
        <div className="partner-logos_header">
          <Link to="/" className="header-link_header">Accueil</Link>
          <Link to="/services" className="header-link_header">Services</Link>
          <Link to="/projets" className="header-link_header">Projets</Link>
          <Link to="/contact" className="header-link_header">Contact</Link>
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
                <Link to="/" className="header-link_header" onClick={() => setShowNav(false)}>
                  <span>Accueil</span> <span className="arrow_header">></span>
                </Link>
              </div>
              <div className="nav-item_header">
                <Link to="/services" className="header-link_header" onClick={() => setShowNav(false)}>
                  <span>Services</span> <span className="arrow_header">></span>
                </Link>
              </div>
              <div className="nav-item_header">
                <Link to="/projets" className="header-link_header" onClick={() => setShowNav(false)}>
                  <span>Projets</span> <span className="arrow_header">></span>
                </Link>
              </div>
              <div className="nav-item_header">
                <Link to="/contact" className="header-link_header" onClick={() => setShowNav(false)}>
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



