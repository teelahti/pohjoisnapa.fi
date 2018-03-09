import React, { Component } from "react";
import LanLink from "../LanLink";

const languages = [
  {
    code: "en",
    label: "In English"
  },
  {
    code: "fi",
    label: "Suomeksi",
  }
];

const LanguageSwitcher = ({ lan }) => {
  return <div className="LanguageSwitcher" > {
          languages.filter(s => s.code !== lan).map(language => <LanLink to="/" lan={language.code}>{language.label}</LanLink>)
        } </div>;
};

export default LanguageSwitcher;
