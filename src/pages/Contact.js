import React, { useEffect } from 'react';
import Header from "../Accueil/Header";
import ContactPage from "../Contact/ContactPage";
import Footer from "../Accueil/Footer";

const Contact = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div>
        <div id="contact">
      <div id="contact-section">
        <ContactPage />
      </div>
      <Footer />
        </div>
    </div>
  );
};

export default Contact;







