import i18n from 'i18next';
//import { initReactI18next } from 'react-i18next';

//import backend from 'i18next-http-backend';
//import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from "react-i18next";


import translationEN from './languages/en/translation.json'
import translationHR from './languages/hr/translation.json'
import translationDE from './languages/de/translation.json'

//const availableLanguages = ['en', 'hr', 'de'];


const resources = {
    en:{
        translation: translationEN
    },
    hr:{
        translation: translationHR
    },
    de:{
        translation: translationDE
    }

};
/* i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,

        fallbackLng: 'en',

        detection: {
            checkWhitelist: true, // options for language detection
        },

        debug: false,

        whitelist: availableLanguages,

        interpolation: {
            escapeValue: false,
        }
    }); */

    i18n
  //  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng:'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  },
  console.log(resources)
  );


export default i18n;