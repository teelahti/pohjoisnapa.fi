import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { withNamespaces } from "react-i18next";

const pageId = "history";

const History = ({ t, pageContext, location }) => (
  <Page
    id={pageId}
    title={t("title")}
    headerImg={headerImages.top1}
    language={pageContext.language}
    location={location}
  >
    <h2>{t("header")}</h2>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text") }} />
    <p>
      <i>Pentti Kronqvist</i>
    </p>
  </Page>
);

export default withNamespaces(pageId)(History);
