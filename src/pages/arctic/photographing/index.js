import React from 'react'
import Helmet from 'react-helmet'
import { translate } from "react-i18next";
import photographingImg from "./hiihto-vastavaloon.jpg";

const pageId = "photographing";

const Photographing = ({t}) => (
    <article id={pageId} className="contentpage">
      <Helmet title={`${t("translations:expeditionName")} - ${t("title")}`} />

      <h1>{t("header")}</h1>

      <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

      <aside>
        <img alt={t("imgAlt")} src={photographingImg} />
      </aside>

    </article>
  );

export default translate(pageId)(Photographing)
