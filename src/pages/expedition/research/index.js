import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import researchImg from './KiHuPerttu360.jpg';

const pageId = "research";

const Research = ({ t, pathContext, location }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top8} language={pathContext.language} location={location}>

    <h2>{t("header")}</h2>

    <img alt={t("imgAlt")} src={researchImg} />
    
    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

  </Page>
);

export default translate(pageId)(Research)
