import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

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
      loadPath: "/locales/{{lng}}.json",
    },
  });

export default i18n;
