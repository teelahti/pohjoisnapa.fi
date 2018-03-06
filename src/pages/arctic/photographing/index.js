import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import photographingImg from "./hiihto-vastavaloon.jpg";

const pageId = "photographing";

const Photographing = ({t}) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top1}>

    <h1>{t("header")}</h1>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

    <aside>
      <img alt={t("imgAlt")} src={photographingImg} />
    </aside>

  </Page>
  );

export default translate(pageId)(Photographing)
