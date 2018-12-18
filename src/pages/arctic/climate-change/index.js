import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import LanLink from "../../../components/LanLink";

const pageId = "climateChange";

const ClimateChange = ({ t, pageContext, location }) => (
  <Page
    id={pageId}
    title={t("title")}
    headerImg={headerImages.top1}
    language={pageContext.language}
    location={location}
  >
    <h2>{t("header")}</h2>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text") }} />

    <LanLink
      to="/arctic/climate-change-arctic-region"
      lan={pageContext.language}
    >
      {t("next")} >
    </LanLink>
  </Page>
);

export default translate(pageId)(ClimateChange);
