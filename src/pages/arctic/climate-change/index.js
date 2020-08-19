import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";
import LanLink from "../../../components/LanLink";

const pageId = "climateChange";

const ClimateChange = () => {
  const { t } = useLocalization(pageId);

  return (
    <Page id={pageId} title={t("title")} headerImg={headerImages.top1}>
      <h2>{t("header")}</h2>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: t("text") }}
      />

      <LanLink to="/arctic/climate-change-arctic-region">
        {t("next")} &gt;
      </LanLink>
    </Page>
  );
};

export default ClimateChange;
