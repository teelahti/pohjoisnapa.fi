import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import polarBearImg from "./jaakarhu-levinneisyys.gif";

const pageId = "polarBear";

const PolarBear = ({t, pathContext}) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top1} language={pathContext.language}>

    <h2>{t("header")}</h2>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

    <figure>
      <img alt={t("imgAlt")} src={polarBearImg} />
      <figcaption dangerouslySetInnerHTML={{ __html: t("imgCaption")} } ></figcaption>
    </figure>

  </Page>
  );

export default translate(pageId)(PolarBear)
