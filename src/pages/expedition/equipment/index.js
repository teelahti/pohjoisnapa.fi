import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";

const pageId = "equipment";

const Equipment = ({ t, pathContext, location }) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top6} language={pathContext.language} location={location}>
    <h2>{t("header")}</h2>

    <table id="varustelista">
      <tr>
        <th>
        </th>
        <th style={{textAlign: "left"}}>
          Tuote</th>
        <th style={{textAlign: "left"}}>
          Merkki</th>
        <th style={{textAlign: "left"}}>
          Kpl</th>
        <th>
        </th>
      </tr>
      <tr>
        <td>
          Vaatteet</td>
        <td>
          Hiihtoasu</td>
        <td>
          Sasta Goretex 3L</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Untuvatakki</td>
        <td>
          Marmot 8000M Parka</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Untuvahousut</td>
        <td>
          Marmot 8000M Bib</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Monot + päällinen</td>
        <td>
          Jalas North Pole
			</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Huopa</td>
        <td>
          Sorel Glacier</td>
        <td>
          3</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Taukokenkä</td>
        <td>
          Poppicok</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Sukat, liner</td>
        <td>
          Lorpen</td>
        <td>
          4</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Sukat, hiihto paksut</td>
        <td>
          Lorpen</td>
        <td>
          4</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Alusasu, villa</td>
        <td>
          Ruskovilla</td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Alusasu, silkki</td>
        <td>
          Ruskovilla</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Kyynärsuojat</td>
        <td>
          Ruskovilla</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Hartiasuojat</td>
        <td>
          Ruskovilla</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Rannesuojat</td>
        <td>
          Ruskovilla</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Powerstretch-asu</td>
        <td>
          Sasta Powerstrech</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Fleece Asu</td>
        <td>
          Sasta Polartec 100</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Fleece asu</td>
        <td>
          Sasta, Polertec Thermal Pro</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Kuivapuku</td>
        <td>
          Sasta</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Karvalakki</td>
        <td>
        </td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Päähine Sasta</td>
        <td>
          Sasta</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Hanskat</td>
        <td>
          Marmot Power Strecth Gloves</td>
        <td>
          4</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Hanskat</td>
        <td>
          Marmot Alpinist Mitt</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Villarukkanen</td>
        <td>
        </td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Tuhero</td>
        <td>
          Sasta</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Aurinkolasit</td>
        <td>
          Briko</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Myrskylasit</td>
        <td>
          Briko</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Kasvomaski</td>
        <td>
          Or Gorilla</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
          Hiihtovarusteet</td>
        <td>
          Sukset</td>
        <td>
          Fischer E99</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Siteet</td>
        <td>
          Rottefella Telemarkcable</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Sauvat</td>
        <td>
          Excel</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Nousukarvat</td>
        <td>
          Colltex mix</td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Ahkio</td>
        <td>
          Acapulca Arctic Challenge 230</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
          Majoittuminen</td>
        <td>
          Teltta</td>
        <td>
          Hilleberg Keron 3 GT</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Makuualusta
			</td>
        <td>
          Termonova</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Makuupussi sisä</td>
        <td>
          Marmot Lithium down</td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Makuupussi väli</td>
        <td>
          Marmot CWM down</td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Makuupussi päälli</td>
        <td>
          Carinthia kuitu</td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Vabor Barrier Liner</td>
        <td>
          Sportnett</td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Valaisimet (otsalamppu)</td>
        <td>
          Tikka xp</td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Kusipullo</td>
        <td>
        </td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Lapio</td>
        <td>
        </td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Telttaharja</td>
        <td>
        </td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
          Keittiä</td>
        <td>
          Keitin</td>
        <td>
          MSR XGK II</td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
          (paria kohden)</td>
        <td>
          Kattilat</td>
        <td>
          Kokewilly</td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Keitinlaatikko</td>
        <td>
        </td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Polttoainepullo + pumput</td>
        <td>MSR</td>
        <td>
          6</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Polttoaineastia</td>
        <td>
        </td>
        <td>
          12</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Polttoaine</td>
        <td>
          Whitegas</td>
        <td>
          50L</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Termospullo</td>
        <td>
          Thermos Midnigtblue</td>
        <td>
          6</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
          Yhteiset</td>
        <td>
          Kamera</td>
        <td>
          Nikon D200, FM3</td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
          (koko retkikunta)</td>
        <td>
          Videokamera</td>
        <td>
        </td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Optiikka</td>
        <td>
          Nikon 18-200mm, 20mm, 50mm, 180mm</td>
        <td>
          4</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Aurinkopaneeli</td>
        <td>
          Unisolar</td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Paristot</td>
        <td>
          Energizer Lithium AA</td>
        <td>
          200</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Ase</td>
        <td>
          Haulikko</td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          GPS</td>
        <td>
        </td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Satelliittipuhelin</td>
        <td>
          Motorola 9505</td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Tietokone</td>
        <td>
          Panasonic Toughtbook CF-18, CF-P1</td>
        <td>
          2</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Lumisaha</td>
        <td>
        </td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Jäänaskalit</td>
        <td>
        </td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Lääkintävarusteet</td>
        <td>
        </td>
        <td>
          1</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
          Ruoka</td>
        <td>
          Yhteensä sisältäen mm.</td>
        <td>
        </td>
        <td colSpan="2">
          60 kg</td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Suklaa</td>
        <td>
          Fazer Sininen</td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          äljy</td>
        <td>
          Mildola Erikoisrypsi</td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Pähkinät</td>
        <td>
          Parrots</td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Voiäljy (AMF)</td>
        <td>
          Parmalat Canada</td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Hapankorppu, näkkileipä, varrasleipä</td>
        <td>
          Vaasan &amp; Vaasan</td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Kiisseli</td>
        <td>
          Eksträms</td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Keksit (Paussi, Digestive)</td>
        <td>
          LU-keksit</td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          Muut</td>
        <td>
          Siwa</td>
        <td>
        </td>
        <td>
        </td>
      </tr>
    </table>

  </Page>
);

export default translate(pageId)(Equipment)
