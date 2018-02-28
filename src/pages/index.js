import React from 'react'
import Helmet from 'react-helmet'
import { translate } from "react-i18next";
import Link, { withPrefix } from 'gatsby-link'

const pageId = "index";

const IndexPage = ({ t }) => (
  <article id={pageId} className="contentpage">
    <Helmet title={t("translations:expeditionName")} />

    <div>
      <h2>{t("diary.header")}</h2>
      <h3>{t("diary.subHeader")}</h3>
      <p>
        {t("diary.text")} <Link to="/diary/2006-05-05-retkikunta-suomessa">{t("diary.readMore")}</Link>
      </p>
      <aside>
        <img src={withPrefix("/images/paivakirja/099-small.jpeg")} />
      </aside>
    </div>
    
    <div>
      <h2>{t("expedition.header")}</h2>
      <h3>{t("expedition.subHeader")}</h3>
      <p>
        {t("expedition.text")} <Link to="/expedition">{t("expedition.readMore")}</Link>
      </p>
      <aside>
        <h3>{t("book.header")}</h3>
        <Link to="/diary/book">{t("book.orderLink")}</Link>
      </aside>
    </div>
        
  </article>
);

export default translate(pageId)(IndexPage)
