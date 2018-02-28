import React from 'react'
import Helmet from 'react-helmet'
import { translate } from "react-i18next";

const pageId = "events";

const Events = ({ t }) => (
  <article id={pageId} className="contentpage">
    <Helmet title={`${t("translations:expeditionName")} - ${t("title")}`} />

    <h1>{t("header")}</h1>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text") }} />

    <ul>
      <li>Erä-messut 2006</li>
      <li>Ski-Expo 2006</li>
    </ul>
  </article>
);

export default translate(pageId)(Events)
