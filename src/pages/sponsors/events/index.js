import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";

const pageId = "events";

const Events = ({ t, pathContext }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top5} language={pathContext.language}>
    <h1>{t("header")}</h1>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text") }} />

    <ul>
      <li>Erä-messut 2006</li>
      <li>Ski-Expo 2006</li>
    </ul>
  </Page>
);

export default translate(pageId)(Events)
