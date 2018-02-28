import React from 'react'
import { translate } from "react-i18next";

const Footer = ({ t }) => 
  <footer>
    <div dangerouslySetInnerHTML={{ __html: t("footer")} } />
  </footer>

export default translate("translations")(Footer);
