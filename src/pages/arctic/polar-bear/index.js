import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";
import polarBearImg from "./jaakarhu-levinneisyys.gif";

const pageId = "polarBear";

const PolarBear = ({ pageContext, location }) => {
  const { t } = useLocalization(pageId, pageContext.language);

  return (
    <Page
      id={pageId}
      title={t("title")}
      headerImg={headerImages.top1}
      location={location}
    >
      <h2>{t("header")}</h2>

      <figure style={{ float: "right", margin: "0 0 20px 20px" }}>
        <img alt={t("imgAlt")} src={polarBearImg} />
        <figcaption
          style={{ marginLeft: "5px" }}
          dangerouslySetInnerHTML={{ __html: t("imgCaption") }}
        />
      </figure>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: t("text") }}
      />
    </Page>
  );
};

export default PolarBear;
