import React, { useState, useEffect, useRef } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const containerElement = containerRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          wrapperElement.classList.add('drop-in');
          containerElement.classList.add('drop-in-delayed');
        }
      });
    }, { threshold: 0.1 });

    if (wrapperElement) {
      observer.observe(wrapperElement);
    }

    return () => {
      if (wrapperElement) {
        observer.unobserve(wrapperElement);
      }
    };
  }, []);

  const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = {
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
    message: event.target.message.value,
    marketing: Array.from(event.target.marketing).filter(input => input.checked).map(input => input.value)
  };

  try {
    const response = await fetch('https://your-vercel-deployment-url/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    if (response.ok) {
      console.log('Success:', result);
      setIsSubmitted(true);
    } else {
      console.error('Error:', result.message);
      alert('Erreur lors de l\'envoi des données: ' + result.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Erreur lors de l\'envoi des données');
  }


  };

  return (
    <div className="contact-form-wrapper" ref={wrapperRef}>
      {isSubmitted ? (
        <div className="success-container success-message">
          <h2>Merci pour votre message !</h2>
          <p>
            Nous vous remercions de nous avoir contactés. Votre message a bien été reçu et
            sera traité dans les plus brefs délais. <br/>
            Nous vous remercions de votre confiance et de l'intérêt que vous portez à notre entreprise.<br/>
            N'hésitez pas à visiter notre site pour plus d'informations et de services que nous proposons.
          </p>
        </div>
      ) : (
        <div className="contact-form-container" ref={containerRef}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" id="firstName" name="firstName" placeholder="Prénom*" required />
              </div>
              <div className="form-group">
                <input type="text" id="lastName" name="lastName" placeholder="Nom*" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="tel" id="phone" name="phone" placeholder="Téléphone*" required />
              </div>
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows="4" placeholder="Message*" required></textarea>
            </div>
            <div className="form-group">
              <label>Préférences de marketing*</label>
              <div className="checkbox-group">
                <label><input type="checkbox" name="marketing" value="email" /> Email</label>
                <label><input type="checkbox" name="marketing" value="postal" /> Postal</label>
                <label><input type="checkbox" name="marketing" value="telephone" /> Téléphone</label>
                <label><input type="checkbox" name="marketing" value="none" /> Aucun</label>
              </div>
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      )}
      <div className="decorative-bar"></div>
    </div>
  );
};

export default ContactForm;
