import React, { Component } from "react";
import Link from 'gatsby-link';

const LanLink = ({to, lan, ...other}) => 
    <Link  to={lan === "en" ? "/en" + to : to} {...other} />

export default LanLink;
