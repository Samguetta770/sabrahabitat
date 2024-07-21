import React from 'react';
import './WhatsAppButton.css';
import whatsappLogo from "./../Ressources/test_fond-removebg-preview.png";
const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/+972539343557', '_blank'); // Remplacez par votre numéro WhatsApp avec l'indicatif du pays, sans les "+" ni les espaces
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <img src={whatsappLogo} alt="WhatsApp" className="whatsapp-logo" />
    </div>
  );
};

export default WhatsAppButton;
