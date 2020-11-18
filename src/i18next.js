import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

function langDetector() {
  let language = window.navigator ? (window.navigator.language
    || window.navigator.systemLanguage
    || window.navigator.userLanguage) : 'ru';
  language = language.substr(0, 2).toLowerCase();
  return language;
}

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: langDetector(),
  debug: true,
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie'],
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
