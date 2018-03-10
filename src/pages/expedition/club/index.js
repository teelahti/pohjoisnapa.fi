import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import clubImg from './kartanlukua.jpg';

const pageId = "club";

const Club = ({ t, pathContext, location }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top8} language={pathContext.language} location={location}>

    <h2>{t("header")}</h2>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

    <aside>      
      <img alt={t("imgAlt")} src={clubImg} />
    </aside>
      
  </Page>
);

export default translate(pageId)(Club)
