import React from "react";
import LanLink from "../LanLink";
import { LocaleContext } from "../Layout";
import locales from "../../locales/config.js";
import "./languageswitcher.scss";

const LanguageSwitcher = () => (
  <LocaleContext.Consumer>
    {language => (
      <div className="LanguageSwitcher">
        {" "}
        {locales
          .filter(s => s.code !== language)
          .map(l => (
            <LanLink key={l.code} to="/" lan={l.code}>
              {l.switchText}
            </LanLink>
          ))}{" "}
      </div>
    )}
  </LocaleContext.Consumer>
);

export default LanguageSwitcher;
