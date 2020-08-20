import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import locales from "../locales/config.js";

const defaultLanguage = locales?.find(loc => loc.default)?.code ?? "fi";

i18n.use(initReactI18next).init({
  resources: locales.reduce((map, loc) => {
    map[loc.code] = loc.resources;
    return map;
  }, {}),

  // Languages supported
  whitelist: locales.map(loc => loc.code),
  nonExplicitWhitelist: true,

  // Do not set "correct" language here as we do want to set it on Page based on input data
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,

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
// component is always updated. Current language is set at the root at Layout
function useLocalization(ns) {
  const { t, i18n } = useTranslation(ns);

  return { t, i18n };
}

export { useLocalization };
