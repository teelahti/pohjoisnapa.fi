import i18n from "i18next";
// import Backend from "i18next-xhr-backend";
import { initReactI18next, useTranslation } from "react-i18next";
import en from "../locales/en.js";
import fi from "../locales/fi.js";
import { useEffect } from "react";

i18n.use(initReactI18next).init({
  resources: {
    fi: fi,
    en: en,
  },
  // Languages supported
  whitelist: ["fi", "en"],
  nonExplicitWhitelist: true,

  // Do not set the language here as we do want to set it on Page based on input data
  lng: "fi",
  fallbackLng: "fi",

  load: "languageOnly",

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  react: {
    useSuspense: true,
  },
});

export default i18n;

// Create custom hook to make it easier to use translations, and to ensure our translation
// component is always updated. This hook assumes that language is the first part in
// our url.
function useLocalization(ns, language) {
  const { t, i18n } = useTranslation(ns);

  useEffect(() => {
    if (language && i18n.language !== language) {
      const c = async () => {
        await i18n.changeLanguage(language);
      };

      c();
    }
  }, [i18n, language]);

  return { t, i18n };
}

export { useLocalization };
