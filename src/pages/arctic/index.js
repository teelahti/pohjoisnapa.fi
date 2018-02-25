import React from 'react'
import Helmet from 'react-helmet'
import { translate } from "react-i18next";
import img from './paivakirja360.jpg';

const pageId = "arctic";

const Arctic = ({t}) => (
    <article id={pageId} className="contentpage">
      <Helmet title={`Pohjoisnapa 2006 - ${t("title")}`} />

      <h1>{t("header")}</h1>

      <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

      <aside className="contentpage-image">
        <img src={img} alt={t("imgAlt")} />
      </aside>

    </article>
  );

export default translate(pageId)(Arctic)
