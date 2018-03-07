import React from 'react'
import Page, { headerImages } from "../../components/Page";
import { translate } from "react-i18next";
import img from './paivakirja360.jpg';

const pageId = "arctic";

const Arctic = ({ t, pathContext }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top1} language={pathContext.language}>
    <h1>{t("header")}</h1>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

    <aside className="contentpage-image">
      <img src={img} alt={t("imgAlt")} />
    </aside>
  </Page>
);

export default translate(pageId)(Arctic)
