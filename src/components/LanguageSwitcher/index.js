import React from "react";
import LanLink from "../LanLink";
import "./languageswitcher.scss";

const languages = [
  {
    code: "en",
    label: "In English"
  },
  {
    code: "fi",
    label: "Suomeksi"
  }
];

const LanguageSwitcher = ({ lan }) => {
  return (
    <div className="LanguageSwitcher">
      {" "}
      {languages.filter(s => s.code !== lan).map(language => (
        <LanLink key={language.code} to="/" lan={language.code}>
          {language.label}
        </LanLink>
      ))}{" "}
    </div>
  );
};

export default LanguageSwitcher;
