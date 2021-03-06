import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";

const pageId = "media";

const Media = () => {
  const { t } = useLocalization(pageId);

  return (
    <Page id={pageId} title={t("title")} headerImg={headerImages.top5}>
      <h2>{t("header")}</h2>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: t("text") }}
      />

      <h3>{t("articlesHeader")}</h3>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: t("articlesText") }}
      />

      <ul>
        <li>
          Päämääränä pohjoisnapa, Apu, 2/2006,{" "}
          <a href="http://www.apu.fi/ajassa/article125359-1.html">
            www.apu.fi/ajassa/article125359-1.html
          </a>
        </li>
        <li>
          Ahkiot arkkuun ja matkaan, Apu, 4/2006,{" "}
          <a href="http://www.apu.fi/ajassa/article125703-1.html">
            www.apu.fi/ajassa/article125703-1.html
          </a>
        </li>
        <li>Maailman ääriin, Retki, 8/2005</li>
        <li>Kohti pohjoista, Retki, 2/2006</li>
        <li>Kohti maantieteellistä pohjoisnapaa, Somero, 14.2.2006</li>
        <li>Lsvjkiltalaiset tuntevat arktiset olot, Länsiväylä, 4.2.2006</li>
        <li>
          Kylmää kyytiä, Satakunnan kansa, viikkoliite Virta, 13.1.-19.1.2006{" "}
        </li>
        <li>
          From Everest to the North Pole: Airborne Ranger Club of Finland
          unsupported attempt in 2006, ThePoles.com 23.10.2005,{" "}
          <a href="http://www.thepoles.com/news.php?id=1202 ">
            http://www.thepoles.com/news.php?id=1202
          </a>
        </li>
      </ul>

      <h3>{t("eventsHeader")}</h3>

      <ul>
        <li>Radio Nova, etenkin viikonloppuisin</li>
        <li>Huomenta suomi, MTV 3, joka maanantai kello 6.38</li>
      </ul>
    </Page>
  );
};

export default Media;
