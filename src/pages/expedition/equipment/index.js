import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";

const pageId = "equipment";

const Equipment = () => {
  const { t } = useLocalization(pageId);

  return (
    <Page id={pageId} title={t("title")} headerImg={headerImages.top6}>
      <h2>{t("header")}</h2>

      <table id="varustelista">
        <tr>
          <th />
          <th style={{ textAlign: "left" }}>Tuote</th>
          <th style={{ textAlign: "left" }}>Merkki</th>
          <th style={{ textAlign: "left" }}>Kpl</th>
          <th />
        </tr>
        <tr>
          <td>Vaatteet</td>
          <td>Hiihtoasu</td>
          <td>Sasta Goretex 3L</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Untuvatakki</td>
          <td>Marmot 8000M Parka</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Untuvahousut</td>
          <td>Marmot 8000M Bib</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Monot + päällinen</td>
          <td>Jalas North Pole</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Huopa</td>
          <td>Sorel Glacier</td>
          <td>3</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Taukokenkä</td>
          <td>Poppicok</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Sukat, liner</td>
          <td>Lorpen</td>
          <td>4</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Sukat, hiihto paksut</td>
          <td>Lorpen</td>
          <td>4</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Alusasu, villa</td>
          <td>Ruskovilla</td>
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Alusasu, silkki</td>
          <td>Ruskovilla</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Kyynärsuojat</td>
          <td>Ruskovilla</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Hartiasuojat</td>
          <td>Ruskovilla</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Rannesuojat</td>
          <td>Ruskovilla</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Powerstretch-asu</td>
          <td>Sasta Powerstrech</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Fleece Asu</td>
          <td>Sasta Polartec 100</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Fleece asu</td>
          <td>Sasta, Polertec Thermal Pro</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Kuivapuku</td>
          <td>Sasta</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Karvalakki</td>
          <td />
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Päähine Sasta</td>
          <td>Sasta</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Hanskat</td>
          <td>Marmot Power Strecth Gloves</td>
          <td>4</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Hanskat</td>
          <td>Marmot Alpinist Mitt</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Villarukkanen</td>
          <td />
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Tuhero</td>
          <td>Sasta</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Aurinkolasit</td>
          <td>Briko</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Myrskylasit</td>
          <td>Briko</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Kasvomaski</td>
          <td>Or Gorilla</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td>Hiihtovarusteet</td>
          <td>Sukset</td>
          <td>Fischer E99</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Siteet</td>
          <td>Rottefella Telemarkcable</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Sauvat</td>
          <td>Excel</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Nousukarvat</td>
          <td>Colltex mix</td>
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Ahkio</td>
          <td>Acapulca Arctic Challenge 230</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td>Majoittuminen</td>
          <td>Teltta</td>
          <td>Hilleberg Keron 3 GT</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Makuualusta</td>
          <td>Termonova</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Makuupussi sisä</td>
          <td>Marmot Lithium down</td>
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Makuupussi väli</td>
          <td>Marmot CWM down</td>
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Makuupussi päälli</td>
          <td>Carinthia kuitu</td>
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Vabor Barrier Liner</td>
          <td>Sportnett</td>
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Valaisimet (otsalamppu)</td>
          <td>Tikka xp</td>
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Kusipullo</td>
          <td />
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Lapio</td>
          <td />
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Telttaharja</td>
          <td />
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td>Keittiä</td>
          <td>Keitin</td>
          <td>MSR XGK II</td>
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td>(paria kohden)</td>
          <td>Kattilat</td>
          <td>Kokewilly</td>
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Keitinlaatikko</td>
          <td />
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Polttoainepullo + pumput</td>
          <td>MSR</td>
          <td>6</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Polttoaineastia</td>
          <td />
          <td>12</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Polttoaine</td>
          <td>Whitegas</td>
          <td>50L</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Termospullo</td>
          <td>Thermos Midnigtblue</td>
          <td>6</td>
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>Yhteiset</td>
          <td>Kamera</td>
          <td>Nikon D200, FM3</td>
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td>(koko retkikunta)</td>
          <td>Videokamera</td>
          <td />
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Optiikka</td>
          <td>Nikon 18-200mm, 20mm, 50mm, 180mm</td>
          <td>4</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Aurinkopaneeli</td>
          <td>Unisolar</td>
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Paristot</td>
          <td>Energizer Lithium AA</td>
          <td>200</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Ase</td>
          <td>Haulikko</td>
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>GPS</td>
          <td />
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Satelliittipuhelin</td>
          <td>Motorola 9505</td>
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Tietokone</td>
          <td>Panasonic Toughtbook CF-18, CF-P1</td>
          <td>2</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Lumisaha</td>
          <td />
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Jäänaskalit</td>
          <td />
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td />
          <td>Lääkintävarusteet</td>
          <td />
          <td>1</td>
          <td />
        </tr>
        <tr>
          <td>Ruoka</td>
          <td>Yhteensä sisältäen mm.</td>
          <td />
          <td colSpan="2">60 kg</td>
        </tr>
        <tr>
          <td />
          <td>Suklaa</td>
          <td>Fazer Sininen</td>
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td>äljy</td>
          <td>Mildola Erikoisrypsi</td>
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td>Pähkinät</td>
          <td>Parrots</td>
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td>Voiäljy (AMF)</td>
          <td>Parmalat Canada</td>
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td>Hapankorppu, näkkileipä, varrasleipä</td>
          <td>Vaasan &amp; Vaasan</td>
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td>Kiisseli</td>
          <td>Eksträms</td>
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td>Keksit (Paussi, Digestive)</td>
          <td>LU-keksit</td>
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td>Muut</td>
          <td>Siwa</td>
          <td />
          <td />
        </tr>
      </table>
    </Page>
  );
};

export default Equipment;
