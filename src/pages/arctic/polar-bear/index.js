import React from 'react'
import Helmet from 'react-helmet'
import { translate } from "react-i18next";
import polarBearImg from "./jaakarhu-levinneisyys.gif";

const pageId = "polarBear";

const PolarBear = ({t}) => (
    <article id={pageId} className="contentpage">
      <Helmet title={`${t("translations:expeditionName")} - ${t("title")}`} />

      <h1>{t("header")}</h1>

      <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

      <figure>
        <img alt={t("imgAlt")} src={polarBearImg} />
        <figcaption dangerouslySetInnerHTML={{ __html: t("imgCaption")} } ></figcaption>
      </figure>

    </article>
  );

export default translate(pageId)(PolarBear)
