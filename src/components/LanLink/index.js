import React from "react";
import { Link } from "gatsby";

const LanLink = ({ to, lan, ...other }) => (
  <Link to={lan === "en" ? "/en" + to : to} {...other} />
);

export default LanLink;
