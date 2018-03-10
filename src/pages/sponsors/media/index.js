import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";

const pageId = "media";

const Media = ({ t, pathContext, location }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top5} language={pathContext.language} location={location}>

    <h2>{t("header")}</h2>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text") }} />

    <h2>{t("articlesHeader")}</h2>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("articlesText") }} />

    <ul>
      <li>
        Päämääränä pohjoisnapa, Apu, 2/2006, <a href="http://www.apu.fi/ajassa/article125359-1.html">www.apu.fi/ajassa/article125359-1.html</a></li><li>
        Ahkiot arkkuun ja matkaan, Apu, 4/2006, <a href="http://www.apu.fi/ajassa/article125703-1.html">www.apu.fi/ajassa/article125703-1.html</a></li><li>
        Maailman ääriin, Retki, 8/2005</li>
      <li>
        Kohti pohjoista, Retki, 2/2006</li>
      <li>
        Kohti maantieteellistä pohjoisnapaa, Somero, 14.2.2006</li>
      <li>
        Lsvjkiltalaiset tuntevat arktiset olot, Länsiväylä, 4.2.2006</li>
      <li>
        Kylmää kyytiä, Satakunnan kansa, viikkoliite Virta, 13.1.-19.1.2006 </li>
      <li>
        From Everest to the North Pole: Airborne Ranger Club of Finland unsupported attempt in 2006, ThePoles.com
			23.10.2005, <a href="http://www.thepoles.com/news.php?id=1202 ">http://www.thepoles.com/news.php?id=1202
			</a></li>
    </ul>


    <h2>{t("eventsHeader")}</h2>

    <ul>
      <li>
        Radio Nova, etenkin viikonloppuisin</li>
      <li>
        Huomenta suomi, MTV 3, joka maanantai kello 6.38</li>
    </ul>
  </Page>
);

export default translate(pageId)(Media)
