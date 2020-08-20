import { LocaleContext } from "./Layout";
import locales from "../locales/config.js";
import { useContext } from "react";

const fallBackResources = locales?.find(loc => loc.default)?.resources;

// Create custom hook to make it easier to use translations.
// Hacky but streamlined version using fully own code, without library like i18next.
// Current language is set at the root at Layout
function useLocalization(ns) {
  const language = useContext(LocaleContext);

  const { resources } = locales.find(s => s.code === language);
  if (!resources) {
    throw new Error(`resources for language ${language} missing`);
  }

  // Return a function that binds to this resource ns and knows how to get value
  const t = key => {
    const report = translation => {
      if (!translation) {
        console.error(`translation for ns=${ns} key=${key} is missing`);
      }

      return translation;
    };

    // For legacy reason support dot notation to get a sub-property. If the source
    // translation data is flattened this can be removed
    if (key.indexOf(".") !== -1) {
      const [top, sub] = key.split(".");
      return report(
        resources[ns]?.[top]?.[sub] ?? fallBackResources?.[ns]?.[top]?.[sub]
      );
    }

    return report(resources[ns]?.[key] ?? fallBackResources?.[ns]?.[key]);
  };

  return { t };
}

export { useLocalization };
