import React from "react";
import { withNamespaces } from "react-i18next";

import "./footer.scss";
import bg2 from "./sana-unsupported.gif";

const Footer = ({ t }) => (
  <footer>
    <div
      id="footer-text"
      style={{
        height: "50px",
        background: `url(${bg2}) no-repeat left bottom`
      }}
      dangerouslySetInnerHTML={{ __html: t("footer") }}
    />
  </footer>
);

export default withNamespaces("translations")(Footer);
