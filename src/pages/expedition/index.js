import React from "react";
import Page, { headerImages } from "../../components/Page";
import { withNamespaces } from "react-i18next";

import henkku from "./henkku4.jpg";
import jermi from "./jermi4.jpg";
import mikko from "./mikko4.jpg";
import perttu from "./perttu4.jpg";
import poppis from "./poppis4.jpg";
import tero from "./tero4.jpg";
import toni from "./toni4.jpg";

import "./index.scss";

const pageId = "expedition";

const Expedition = ({ t, pageContext, location }) => (
  <Page
    id={pageId}
    title={t("title")}
    headerImg={headerImages.top8}
    language={pageContext.language}
    location={location}
  >
    <h2>{t("header")}</h2>

    <div className="content-two-column" id="expedition-content">
      <div
        className="content left"
        dangerouslySetInnerHTML={{ __html: t("text") }}
      />

      <aside className="right">
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
    </div>
  </Page>
);

export default withNamespaces(pageId)(Expedition);
