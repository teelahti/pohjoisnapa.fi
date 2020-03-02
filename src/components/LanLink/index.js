import React from "react";
import { Link } from "gatsby";
import { LocaleContext } from "../Page";

const LanLink = ({ to, lan, ...other }) => (
  <LocaleContext.Consumer>
    {language => {
      // Read the current language from context as it has been but in /Page.
      // If "lan" property is given it overrides the context language
      let l = lan ? lan : language;
      return <Link to={l === "en" ? "/en" + to : to} {...other} />;
    }}
  </LocaleContext.Consumer>
);

export default LanLink;
