import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import i18n from '../../../components/i18n';
import Gallery from '../../../components/Gallery';

const pageId = "gallery-previous";

const GalleryPreviousPage = ({ t, pathContext }) => {

  let names = [
    "ahtojaat"
    , "ahtojaissa-jermi"
    , "ahtojaissa-tero-2"
    , "ahtojaissa-tero-ja-jermi"
    , "auringonlasku-leirissa"
    , "jermi-pesulla"
    , "hiihto-vastavaloon"
    , "karhun-jalki-ja-mono"
    , "kartanlukua-lehteen"
    , "kiiltotau"
    , "kylma"
    , "leiri-lumessa"
    , "leirin-pystytys"
    , "lvjk2"
    , "lvjk1"
    , "suomenlippu-oviaukossa"
    , "naamat-huurussa"
  ];

  let imgs = names.map(n => ({
    src: `/images/previous-expeditions/600px/${n}.jpg`,
    thumbnail: `/images/previous-expeditions/thumbnails/${n}.jpg`,
    caption: t(`imgs.${n}`),
    alt: t(`imgs.${n}`)
  }));

  return (
    <Page id={pageId} title={t("title")} headerImg={headerImages.top7} language={pathContext.language}>

      <h2>{t("header")}</h2>

      <Gallery
        images={imgs}
        showThumbnails={true}
      />

    </Page>
  );
};

export default translate(pageId)(GalleryPreviousPage)
