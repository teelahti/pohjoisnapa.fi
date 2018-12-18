import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { withNamespaces } from "react-i18next";
import photographingImg from "./hiihto-vastavaloon.jpg";

const pageId = "photographing";

const Photographing = ({ t, pageContext, location }) => (
  <Page
    id={pageId}
    title={t("title")}
    headerImg={headerImages.top1}
    language={pageContext.language}
    location={location}
  >
    <h2>{t("header")}</h2>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text") }} />

    <aside>
      <img alt={t("imgAlt")} src={photographingImg} />
    </aside>
  </Page>
);

export default withNamespaces(pageId)(Photographing);
