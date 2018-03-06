import React from 'react'
import Page, { headerImages } from "../../components/Page";
import { translate } from "react-i18next";

import henkku from "./henkku4.jpg";
import jermi from "./jermi4.jpg";
import mikko from "./mikko4.jpg";
import perttu from "./perttu4.jpg";
import poppis from "./poppis4.jpg";
import tero from "./tero4.jpg";
import toni from "./toni4.jpg";

const pageId = "expedition";

const Expedition = ({t}) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top8}>

    <h1>{t("header")}</h1>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

    <aside>
      <figure>
        <img src={henkku} alt="Henrik B. Reims" />
        <figcaption>Henrik B. Reims</figcaption>
      </figure>

      <figure>
        <img src={poppis} alt="Poppis Suomela" />
        <figcaption>Poppis Suomela</figcaption>
      </figure>

      <figure>
        <img src={toni} alt="Toni Vaartimo" />
        <figcaption>Toni Vaartimo</figcaption>
      </figure>

      <figure>
        <img src={mikko} alt="Mikko Vermas" />
        <figcaption>Mikko Vermas</figcaption>
      </figure>

      <figure>
        <img src={tero} alt="Tero Teelahti" />
        <figcaption>Tero Teelahti</figcaption>
      </figure>

      <figure>
        <img src={perttu} alt="Perttu Ojala" />
        <figcaption>Perttu Ojala</figcaption>
      </figure>

      <figure>
        <img src={jermi} alt="Jermi Tertsunen" />
        <figcaption>Jermi Tertsunen</figcaption>
      </figure>
      
    </aside>

  </Page>
  );

export default translate(pageId)(Expedition)
