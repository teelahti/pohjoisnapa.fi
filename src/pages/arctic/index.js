import React from "react";
import Page, { headerImages } from "../../components/Page";
import { withNamespaces } from "react-i18next";
import img from "./paivakirja360.jpg";

const pageId = "arctic";

const Arctic = ({ t, pageContext, location }) => (
  <Page
    id={pageId}
    title={t("title")}
    headerImg={headerImages.top1}
    language={pageContext.language}
    location={location}
  >
    <h2>{t("header")}</h2>

    <div className="content-two-column">
      <div
        className="content left"
        dangerouslySetInnerHTML={{ __html: t("text") }}
      />

      <aside className="right">
        <img src={img} alt={t("imgAlt")} />
      </aside>
    </div>
  </Page>
);

export default withNamespaces(pageId)(Arctic);
