import React from "react";
import { useLocalization } from "../i18n";
import { LocaleContext } from "../Page";

import "./footer.scss";
import bg2 from "./sana-unsupported.gif";

const Footer = () => {
  const lctx = React.useContext(LocaleContext);
  const { t } = useLocalization("translations", lctx.language);

  return (
    <footer>
      <div
        id="footer-text"
        style={{
          height: "50px",
          background: `url(${bg2}) no-repeat left bottom`,
        }}
        dangerouslySetInnerHTML={{ __html: t("footer") }}
      />
    </footer>
  );
};

export default Footer;
