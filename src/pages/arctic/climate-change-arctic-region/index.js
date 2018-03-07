import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import LanLink from '../../../components/LanLink';

const pageId = "climateChangeArctic";

const ClimateChangeArctic = ({ t, pathContext }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top1} language={pathContext.language}>

    <h1>{t("header")}</h1>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

    <LanLink to="/arctic/climate-change" lan={pathContext.language}>{t("prev")}</LanLink>
  </Page>
);

export default translate(pageId)(ClimateChangeArctic)
