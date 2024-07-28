import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import flagFr from './../Ressources/flag_fr.png';
import flagEn from './../Ressources/flag_usa.png';
import flagIl from './../Ressources/flag_il.png';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const containerRef = useRef(null);

  const languages = [
    { code: 'fr', label: 'Français', flag: flagFr },
    { code: 'en', label: 'English', flag: flagEn },
    { code: 'he', label: 'עברית', flag: flagIl },
  ];

  const getDisplayFlag = () => {
    switch (selectedLanguage) {
      case 'fr':
      case 'en':
        return flagFr; // Affiche le drapeau israélien
      case 'he':
        return flagFr; // Affiche le drapeau français
      default:
        return flagIl;
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="language-selector" ref={containerRef}>
      <button className="language-button" onClick={toggleDropdown}>
        <img src={getDisplayFlag()} alt="Selected language" />
      </button>
      {dropdownOpen && (
        <div className="language-dropdown">
          {languages.map(lang => (
            <div
              key={lang.code}
              className="language-option"
              onClick={() => changeLanguage(lang.code)}
            >
              <img src={lang.flag} alt={lang.label} />
              <span>{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

