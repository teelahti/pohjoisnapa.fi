import React from "react";
import PropTypes from "prop-types";

import "./normalize.css";

const TemplateWrapper = ({ language, children }) => <div>{children}</div>;

TemplateWrapper.propTypes = {
  children: PropTypes.object,
};

export default TemplateWrapper;
