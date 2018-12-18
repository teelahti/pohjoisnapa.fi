import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import researchImg from "./KiHuPerttu360.jpg";

const pageId = "research";

const Research = ({ t, pageContext, location }) => (
  <Page
    id={pageId}
    title={t("title")}
    headerImg={headerImages.top8}
    language={pageContext.language}
    location={location}
  >
    <h2>{t("header")}</h2>

    <figure
      style={{
        float: "right",
        margin: "20px 0 20px",
        padding: "10px 0 10px 10px"
      }}
    >
      <img alt={t("imgAlt")} src={researchImg} />
      <figcaption>{t("imgAlt")}</figcaption>
    </figure>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text") }} />
  </Page>
);

export default translate(pageId)(Research);
