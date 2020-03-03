import React, { useEffect } from "react";
import i18n from "../i18n";
import "./normalize.css";

// Add LocaleContext to each page so that any component in the tree can query the locale
const LocaleContext = React.createContext();

const Layout = ({ children, pageContext: { language } }) => {
  useEffect(() => {
    // Since this is the top of the tree, change language once here
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LocaleContext.Provider value={language}>
      <div>{children}</div>
    </LocaleContext.Provider>
  );
};

export default Layout;
export { Layout, LocaleContext };
