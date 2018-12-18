import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import polarBearImg from "./jaakarhu-levinneisyys.gif";

const pageId = "polarBear";

const PolarBear = ({ t, pageContext, location }) => (
  <Page
    id={pageId}
    title={t("title")}
    headerImg={headerImages.top1}
    language={pageContext.language}
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

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text") }} />
  </Page>
);

export default translate(pageId)(PolarBear);
