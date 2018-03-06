import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import Link from 'gatsby-link';

const pageId = "climateChange";

const ClimateChange = ({ t }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top1}>

    <h1>{t("header")}</h1>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

    <Link to="/arctic/climate-change-arctic-region">{t("next")}</Link>

  </Page>
);

export default translate(pageId)(ClimateChange)
