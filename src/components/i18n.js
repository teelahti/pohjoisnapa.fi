import i18n from "i18next";
// import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";
import en from "../locales/en.js";
import fi from "../locales/fi.js";

// TODO: Currently does not work on gatsby build. See https://github.com/i18next/react-i18next/issues/252
// TODO: Also check https://www.gatsbyjs.org/blog/2017-10-17-building-i18n-with-gatsby/
// ...and https://github.com/gatsbyjs/gatsby/issues/3853

// TODO: It is possible to build languages in staticly also, that would be optimal.

i18n
  // .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
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
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
    },
  });

export default i18n;
