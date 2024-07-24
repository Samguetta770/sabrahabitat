import React from 'react';
import './ContactChamp.css';
import loca from "./../Ressources/Localisation_Good.png";
import tel from "./../Ressources/TelVert.png";
import mail from "./../Ressources/MailVert.png";
import flagFr from "./../Ressources/flag_fr.png";
import flagIl from "./../Ressources/flag_il.png";

const ContactChamp = () => {
  return (
    <div className="contact-champ">
      <h2 className="contact-title">CONTACTEZ-NOUS</h2>
      <div className="contact-details">
        <div className="contact-item">
          <img src={loca} alt="Adresse" className="contact-icon" />
          <div>
            <p className="contact-label">Adresse</p>
            <p>Sabra Habitat LTD<br />
               11 Pais Street,<br />
               Rishon Letzion, Israel <br />
               7526001</p>
          </div>
        </div>
        <div className="contact-item">
          <img src={tel} alt="Téléphone" className="contact-icon" />
          <div>
            <p className="contact-label">Téléphone</p>
            <p>
              <a href="tel:+33612506838" className="contact-link">
                <img src={flagFr} alt="Drapeau Français" className="flag-icon"  />+33 6 12 50 68 38
              </a>
            </p>
            <p>
              <a href="tel:+972539343557" className="contact-link"><img
  src={flagIl}
  alt="Drapeau Israélien"
  className="flag-icon"
  style={{ marginLeft: '1.8' }}
/>
+972 53 9 34-3557

              </a>
            </p>
          </div>
        </div>
        <div className="contact-item">
          <img src={mail} alt="Email" className="contact-icon" />
          <div>
            <p className="contact-label">Email</p>
            <p><a href="mailto:contact@sabrahabitat.com" className="contact-link">contact@sabrahabitat.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactChamp;
