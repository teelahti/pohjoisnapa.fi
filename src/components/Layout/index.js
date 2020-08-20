import React from "react";
import "./normalize.css";

// Add LocaleContext to each page so that any component in the tree can query the locale
const LocaleContext = React.createContext();

const Layout = ({ children, pageContext: { language } }) => {
  return (
    <LocaleContext.Provider value={language}>
      <div>{children}</div>
    </LocaleContext.Provider>
  );
};

export default Layout;
export { Layout, LocaleContext };
