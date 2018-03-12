import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import clubImg from './kartanlukua.jpg';

const pageId = "club";

const Club = ({ t, pathContext, location }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top8} language={pathContext.language} location={location}>

    <h2>{t("header")}</h2>

    <div className="content-two-column">
      <div className="content left" dangerouslySetInnerHTML={{ __html: t("text")} } />

      <aside className="right">      
        <img alt={t("imgAlt")} src={clubImg} />
      </aside>
    </div>
  </Page>
);

export default translate(pageId)(Club)
