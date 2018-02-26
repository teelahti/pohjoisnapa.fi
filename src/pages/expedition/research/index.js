import React from 'react'
import Helmet from 'react-helmet'
import { translate } from "react-i18next";
import researchImg from './KiHuPerttu1024.jpg';

const pageId = "research";

const Research = ({t}) => (
    <article id={pageId} className="contentpage">
      <Helmet title={`${t("translations:expeditionName")} - ${t("title")}`} />

      <h1>{t("header")}</h1>

      <img alt={t("imgAlt")} src={researchImg} />
      
      <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />
  
    </article>
  );

export default translate(pageId)(Research)
