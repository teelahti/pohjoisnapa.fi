import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import backgroundImg from './naamat-huurussa.jpg';

const pageId = "background";

const Background = ({ t, pathContext }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top7} language={pathContext.language}>

    <h1>{t("header")}</h1>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

    <aside>      
      <img alt={t("imgAlt")} src={backgroundImg} />
    </aside>
      
  </Page>
);

export default translate(pageId)(Background)
