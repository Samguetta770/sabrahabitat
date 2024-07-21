import React from 'react';
import ContactChamp from './ContactChamp';
import ContactForm from './ContactForm';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <ContactChamp />
      </div>
      <div className="contact-right">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
