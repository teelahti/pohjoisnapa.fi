import React from "react";
import PropTypes from "prop-types";

// Need to be included once somewhere in the app for translations to work
import "../i18n.js";

import "./normalize.css";

const TemplateWrapper = ({ children }) => <div>{children}</div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
