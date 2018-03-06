import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import researchImg from './KiHuPerttu360.jpg';

const pageId = "research";

const Research = ({ t }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top8}>

    <h1>{t("header")}</h1>

    <img alt={t("imgAlt")} src={researchImg} />
    
    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

  </Page>
);

export default translate(pageId)(Research)
