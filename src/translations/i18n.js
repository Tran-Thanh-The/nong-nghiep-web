import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import TRANSLATIONS_VI from './vi/translations.json';
import TRANSLATIONS_EN from './en/translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: 'languageOnly',
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'htmlTag', 'sessionStorage', 'navigator',  'path', 'subdomain'],
    },
    resources: {
      en: {
        translation: TRANSLATIONS_EN
      },
      vi: {
        translation: TRANSLATIONS_VI
      }
    }
  });

export default i18n;