import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Carrega as traduções do backend
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Integração com o React
  .init({
    fallbackLng: "pt", // Língua padrão caso a atual não seja encontrada
    debug: true, // Para ver logs no console enquanto desenvolve
    interpolation: {
      escapeValue: false, // React já faz a proteção contra XSS
    },
    backend: {
      loadPath: "/src/locales/{{lng}}.json",
    },
    // resources: {
    //   en: {
    //     translation: {
    //       welcome: "Welcome to the application!",
    //       how_are_you: "How are you?",
    //       my_profile: "My profile",
    //     },
    //   },
    //   pt: {
    //     translation: {
    //       welcome: "Bem-vindo ao aplicativo!",
    //       how_are_you: "Como você está?",
    //       my_profile: "Meu perfil",
    //     },
    //   },
    // },
  });

export default i18n;
