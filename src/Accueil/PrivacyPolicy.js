import React from 'react';
import './PrivacyPolicy.css';
import useScrollToTop from './useScrollToTop';
import Footer from "./Footer";

const PrivacyPolicy = () => {
  useScrollToTop(); // Utilisez le hook personnalisé

  return (
      <popo>
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>Dernière mise à jour : Août 2024</p>

      <section>
        <h2>Bienvenue</h2>
        <p>Chez Sabra Habitat, nous nous engageons à protéger la confidentialité et la sécurité de nos utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations.</p>
      </section>

      <section>
        <h2>Collecte des Informations</h2>
        <p>Nous collectons divers types d'informations dans le cadre de l'exploitation de notre site web et de la prestation de nos services :</p>
        <ul>
          <li>Informations que vous nous fournissez directement, telles que votre nom, votre adresse e-mail et votre numéro de téléphone lorsque vous remplissez un formulaire de contact.</li>
          <li>Informations collectées automatiquement, telles que les données de navigation et les cookies.</li>
        </ul>
      </section>

      <section>
        <h2>Utilisation des Informations</h2>
        <p>Les informations collectées peuvent être utilisées pour :</p>
        <ul>
          <li>Fournir et améliorer nos services.</li>
          <li>Communiquer avec vous concernant votre demande ou vos questions.</li>
          <li>Envoyer des mises à jour, des offres promotionnelles et d'autres informations pertinentes.</li>
        </ul>
      </section>

      <section>
        <h2>Partage des Informations</h2>
        <p>Nous ne partageons pas vos informations personnelles avec des tiers, sauf dans les cas suivants :</p>
        <ul>
          <li>Avec votre consentement explicite.</li>
          <li>Pour se conformer à des obligations légales.</li>
          <li>Pour protéger nos droits, notre propriété ou notre sécurité, ainsi que ceux de nos utilisateurs.</li>
        </ul>
      </section>

      <section>
        <h2>Sécurité des Informations</h2>
        <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations contre tout accès non autorisé, toute modification, divulgation ou destruction.</p>
      </section>

      <section>
        <h2>Vos Droits</h2>
        <p>Vous disposez de certains droits concernant vos informations personnelles, notamment le droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, veuillez nous contacter à l'adresse suivante :</p>
        <ul>
          <li>Email : <a href="mailto:contact@sabrahabitat.com">contact@sabrahabitat.com</a></li>
          <li>Téléphone : <a href="tel:+>33612506838">+33 6 12 50 68 38</a></li>
        </ul>
      </section>

      <section>
        <h2>Modifications de cette Politique</h2>
        <p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de toute modification en publiant la nouvelle politique sur cette page.</p>
      </section>

      <section className="copyright-section">
        <h2>Copyright</h2>
        <p>
          Copyright © 2024 Sabra Habitat. Tous droits réservés.
          <br />
          Ce site web et son contenu sont la propriété exclusive de Sabra Habitat. Toute reproduction, distribution, modification ou utilisation non autorisée, totale ou partielle, de ce contenu, sous quelque forme que ce soit, est strictement interdite sans l'autorisation écrite préalable de Sabra Habitat.
          <br />
          Pour toute demande d'autorisation, veuillez nous contacter à :
        </p>
        <ul>
          <li>Email : <a href="mailto:contact@sabrahabitat.com">contact@sabrahabitat.com</a></li>
          <li>Téléphone : <a href="tel:+33612506838">+33 6 12 50 68 38</a></li>
        </ul>
        <p>Sabra Habitat<br />Construisons ensemble votre avenir en Israël.</p>
      </section>
    </div>
          <Footer/>
          </popo>
  );
};

export default PrivacyPolicy;

