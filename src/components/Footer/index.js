import React from 'react'
import { translate } from "react-i18next";

import styles from "./footer.scss";
import bg1 from "./tex_northpole2.gif";
import bg2 from "./sana-unsupported.gif";

const Footer = ({ t }) => 
  <footer
    style={{
      background: `url(${bg1}) no-repeat right top`,
      padding: "35px 0"
    }}
  >
    <div 
      id="footer-text"
      style={{
        height: "50px",
        background: `url(${bg2}) no-repeat left bottom`,
      }}        
      dangerouslySetInnerHTML={{ __html: t("footer")} } 
    />
  </footer>

export default translate("translations")(Footer);
