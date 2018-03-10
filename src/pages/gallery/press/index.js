import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import i18n from '../../../components/i18n';

import imgAhto from "./pohjoisnapa_ahto.jpg";
import thumbAhto from "./pohjoisnapa_ahto_pieni.jpg";
import imgHiihto from "./pohjoisnapa_hiihto.jpg";
import thumbHiihto from "./pohjoisnapa_hiihto_pieni.jpg";
import imgLeiri from "./pohjoisnapa_leiri.jpg";
import thumbLeiri from "./pohjoisnapa_leiri_pieni.jpg";
import imgRyhma from "./pohjoisnapa_ryhma.jpg";
import thumbRyhma from "./pohjoisnapa_ryhma_pieni.jpg";
import imgYlitys from "./pohjoisnapa_ylitys.jpg";
import thumbYlitys from "./pohjoisnapa_ylitys_pieni.jpg";


const pageId = "gallery-press";

const Fig = props =>
  <figure>
    <a href={props.img}><img alt={props.alt} width="280" height="187" src={props.thumb} /><br /></a>
    <figcaption>
      {props.children}
    </figcaption>
  </figure>

const GalleryPressPage = ({ t, pathContext, location }) => {

  return (
    <Page id={pageId} title={t("title")} headerImg={headerImages.top7} language={pathContext.language} location={location}>

      <h2>{t("header")}</h2>
      <p>
        Lehdistokuvat vapaassa tiedotuskäytässä 20.5.2006 asti. Käytön yhteydessä mainittava
        kuvaaja Poppicok/Kari Poppis Suomela. Kuviin liittyvät tiedustelut tai lisäkuvien
        tilaukset poppis@pohjoisnapa.fi, 0400 420 002.
      </p>

      <Fig img={imgRyhma} thumb={thumbRyhma} alt="Laskuvarjojääkärikillan pohjoisnaparetkikunta 2006">
        Laskuvarjojääkärikillan pohjoisnaparetkikunta 2006.<br />
        Edestä vasemmalta: Kari Poppis Suomela, Perttu Ojala, Tero Teelahti.<br />
        Keskirivi: Henrik B. Reims, Mikko Vermas, Jermi Tertsunen. Ylärivi: Toni Vaartimo.
      </Fig>

      <Fig img={imgYlitys} thumb={thumbYlitys} alt="Avovesirailon ylitys kuivapuku päällä uiden">
        Avovesirailon ylitys kuivapuku päällä uiden
      </Fig>

      <Fig img={imgHiihto} thumb={thumbHiihto} alt="Retkikunta matkalla kohti pohjoista">
        Retkikunta matkalla kohti pohjoista. Etenemistä hidastavat raskaat ahkiot ja epätasaiset ahtojäät.
      </Fig>

      <Fig img={imgLeiri} thumb={thumbLeiri} alt="Iltatoimia leirissä">
        Iltatoimia leirissä. Mikko Vermas harjaa Toni Vaartimolta pahimmat jäätyneet hiet pois.
      </Fig>

      <Fig img={imgAhto} thumb={thumbAhto} alt="Raskasta etenemistä ahtojäissä">
        Raskasta etenemistä ahtojäissä
      </Fig>

      <h2>Tiedustelut ja haastattelupyynnöt</h2>
      <p>
        Tiedotus ja media, valokuvat<br />
        Kari Poppis Suomela 0400 420 002
      </p>
      <p>
        Retkikunnan johtaja<br />
        Henrik B. Reims 040 515 5719
      </p>
    </Page>
  );
};

export default translate(pageId)(GalleryPressPage)
