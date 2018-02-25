import React from 'react'
import Helmet from 'react-helmet'
import { translate } from "react-i18next";

const pageId = "history";

const History = ({t}) => (
    <article id={pageId} className="contentpage">
      <Helmet title={`Pohjoisnapa 2006 - ${t("title")}`} />

      <h1>{t("header")}</h1>

      <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

    </article>
  );

export default translate(pageId)(History)
