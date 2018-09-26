import i18n from "i18next";
// import Backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";
import en from "../locales/en.js";
import fi from "../locales/fi.js";

// TODO: Copy static compilation from https://github.com/gatsbyjs/gatsby/issues/3853#issuecomment-365216769
i18n.use(reactI18nextModule).init({
  resources: {
    fi: fi,
    en: en
  },
  // Languages supported
  whitelist: ["fi", "en"],
  nonExplicitWhitelist: true,
  fallbackLng: "fi",

  load: "languageOnly",

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  debug: true,

  interpolation: {
    escapeValue: false // not needed for react!!
  },

  react: {
    wait: true
  }
});

export default i18n;
