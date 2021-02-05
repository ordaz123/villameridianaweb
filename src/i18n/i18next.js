import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import transEN from './languages/en/translation.json'
import transHR from './languages/hr/translation.json'
import transDE from './languages/de/translation.json'

const availableLanguages = ['en', 'hr', 'de'];


const resources = {
    en:{
        translation: transEN
    },
    hr:{
        translation: transHR
    },
    de:{
        translation: transDE
    }

}
i18n
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
    });


export default i18n;