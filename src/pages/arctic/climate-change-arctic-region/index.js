import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import LanLink from "../../../components/LanLink";

const pageId = "climateChangeArctic";

const ClimateChangeArctic = ({ t, pageContext, location }) => (
  <Page
    id={pageId}
    title={t("title")}
    headerImg={headerImages.top1}
    language={pageContext.language}
    location={window.location}
  >
    <h2>{t("header")}</h2>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text") }} />

    <LanLink to="/arctic/climate-change" lan={pageContext.language}>
      {t("prev")}
    </LanLink>
  </Page>
);

export default translate(pageId)(ClimateChangeArctic);
