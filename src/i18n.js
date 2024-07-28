// src/i18n.js (modifié)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importer les fichiers de traduction
import translationFR from './locales/fr/translation.json';
import translationEN from './locales/en/translation.json';
import translationHE from './locales/he/translation.json';

// Les ressources de traduction
const resources = {
  fr: { translation: translationFR },
  en: { translation: translationEN },
  he: { translation: translationHE }
};

i18n
  .use(LanguageDetector) // Utiliser le détecteur de langue
  .use(initReactI18next) // Passer i18n au module react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Langue de secours
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;
