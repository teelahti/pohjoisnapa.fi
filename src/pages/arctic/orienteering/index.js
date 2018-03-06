import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import orienteeringImg from "./ahtojaissa-jermi.jpg";

const pageId = "orienteering";

const Orienteering = ({t}) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top1}>

    <h1>{t("header")}</h1>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

    <div className="footnote" dangerouslySetInnerHTML={{ __html: t("footnote")} } />

    <aside>
      <img alt={t("imgAlt")} src={orienteeringImg} />
    </aside>

  </Page>
  );

export default translate(pageId)(Orienteering)
