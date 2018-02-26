import React from 'react'
import Helmet from 'react-helmet'
import { translate } from "react-i18next";
import Link from 'gatsby-link';

const pageId = "climateChange";

const ClimateChange = ({t}) => (
    <article id={pageId} className="contentpage">
      <Helmet title={`${t("translations:expeditionName")} - ${t("title")}`} />

      <h1>{t("header")}</h1>

      <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

      <Link to="/arctic/climate-change-arctic-region">{t("next")}</Link>

    </article>
  );

export default translate(pageId)(ClimateChange)
