import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import backgroundImg from './naamat-huurussa.jpg';

const pageId = "background";

const Background = ({ t, pathContext, location }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top7} language={pathContext.language} location={location}>

    <h2>{t("header")}</h2>
    <div className="content-two-column">
      <div className="content left" dangerouslySetInnerHTML={{ __html: t("text")} } />

      <aside className="right">      
        <img alt={t("imgAlt")} src={backgroundImg} />
      </aside>
    </div>
      
  </Page>
);

export default translate(pageId)(Background)
