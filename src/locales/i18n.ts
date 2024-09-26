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
      loadPath: "./i18n.ts",
    },
  });

export default i18n;
