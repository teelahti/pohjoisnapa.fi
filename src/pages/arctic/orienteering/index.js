import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import orienteeringImg from "./ahtojaissa-jermi.jpg";

const pageId = "orienteering";

const Orienteering = ({t, pathContext, location }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top1} language={pathContext.language} location={location}>

    <h2>{t("header")}</h2>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

    <div className="footnote" dangerouslySetInnerHTML={{ __html: t("footnote")} } />

    <aside>
      <img alt={t("imgAlt")} src={orienteeringImg} />
    </aside>

  </Page>
  );

export default translate(pageId)(Orienteering)
