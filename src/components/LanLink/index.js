import React from "react";
import { Link } from "gatsby";
import { LocaleContext } from "../Layout";
import locales from "../../locales/config.js";

const LanLink = ({ to, lan, ...other }) => (
  <LocaleContext.Consumer>
    {language => {
      // Read the current language from context as it has been but in /Page.
      // If "lan" property is given it overrides the context language
      let l = lan ? lan : language;
      let loc = locales.find(s => s.code === l);
      return <Link to={loc?.path + to} {...other} />;
    }}
  </LocaleContext.Consumer>
);

export default LanLink;
