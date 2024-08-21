// src/Accueil/ContactChamp.js
import React from 'react';
import './ContactChamp.css';
import loca from "./../Ressources/Localisation_Good.png";
import tel from "./../Ressources/TelVert.png";
import mail from "./../Ressources/MailVert.png";
import flagFr from "./../Ressources/flag_fr.png";
import flagIl from "./../Ressources/flag_il.png";
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce chemin est correct

const ContactChamp = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-champ">
      <h2 className="contact-title">{t('contact_us_title_i1')}</h2>
      <div className="contact-details">
        <div className="contact-item">
          <img src={loca} alt="Adresse" className="contact-icon" />
          <div>
            <p className="contact-label">{t('address_label_i1')}</p>
            <p dangerouslySetInnerHTML={{ __html: t('address_details_i1') }}></p>
          </div>
        </div>
        <div className="contact-item">
          <img src={tel} alt="Téléphone" className="contact-icon" />
          <div>
            <p className="contact-label">{t('phone_label_i1')}</p>
            <p>
              <a href="tel:+33186981370" className="contact-link">
                <img src={flagFr} alt="Drapeau Français" className="flag-icon" /> {t('phone_fr_i1')}
              </a>
            </p>
            <p style={{paddingLeft:"0.39em"}}>
              <a href="tel:+972539343557" className="contact-link">
                <img src={flagIl} alt="Drapeau Israélien" className="flag-icon" /> {t('phone_il_i1')}
              </a>
            </p>
          </div>
        </div>
        <div className="contact-item">
          <img src={mail} alt="Email" className="contact-icon" />
          <div>
            <p className="contact-label">{t('email_label_i1')}</p>
            <p><a href="mailto:contact@sabrahabitat.com" className="contact-link">{t('email_i1')}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactChamp;
