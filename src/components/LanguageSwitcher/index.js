import React from "react";
import LanLink from "../LanLink";
import { LocaleContext } from "../Layout";
import "./languageswitcher.scss";

const languages = [
  {
    code: "en",
    label: "In English",
  },
  {
    code: "fi",
    label: "Suomeksi",
  },
];

const LanguageSwitcher = () => {
  return (
    <LocaleContext.Consumer>
      {language => (
        <div className="LanguageSwitcher">
          {" "}
          {languages
            .filter(s => s.code !== language)
            .map(l => (
              <LanLink key={l.code} to="/" lan={l.code}>
                {l.label}
              </LanLink>
            ))}{" "}
        </div>
      )}
    </LocaleContext.Consumer>
  );
};

export default LanguageSwitcher;
