import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import Link from 'gatsby-link';

const pageId = "climateChangeArctic";

const ClimateChangeArctic = ({ t }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top1}>

    <h1>{t("header")}</h1>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

    <Link to="/arctic/climate-change">{t("prev")}</Link>
  </Page>
);

export default translate(pageId)(ClimateChangeArctic)
