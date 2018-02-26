import React from 'react'
import Helmet from 'react-helmet'
import { translate } from "react-i18next";
import orienteeringImg from "./ahtojaissa-jermi.jpg";

const pageId = "orienteering";

const Orienteering = ({t}) => (
    <article id={pageId} className="contentpage">
      <Helmet title={`${t("translations:expeditionName")} - ${t("title")}`} />

      <h1>{t("header")}</h1>

      <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

      <div className="footnote" dangerouslySetInnerHTML={{ __html: t("footnote")} } />

      <aside>
        <img alt={t("imgAlt")} src={orienteeringImg} />
      </aside>

    </article>
  );

export default translate(pageId)(Orienteering)
