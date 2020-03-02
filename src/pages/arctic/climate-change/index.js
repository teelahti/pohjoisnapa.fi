import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";
import LanLink from "../../../components/LanLink";

const pageId = "climateChange";

const ClimateChange = ({ pageContext, location }) => {
  const { t } = useLocalization(pageId, pageContext.language);

  return (
    <Page
      id={pageId}
      title={t("title")}
      headerImg={headerImages.top1}
      location={location}
    >
      <h2>{t("header")}</h2>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: t("text") }}
      />

      <LanLink to="/arctic/climate-change-arctic-region">{t("next")} ></LanLink>
    </Page>
  );
};

export default ClimateChange;
