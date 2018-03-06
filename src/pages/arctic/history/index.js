import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";

const pageId = "history";

const History = ({ t }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top1}>

    <h1>{t("header")}</h1>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

  </Page>
);

export default translate(pageId)(History)
