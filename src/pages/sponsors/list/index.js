import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";

const pageId = "sponsors-list";

const List = ({ t, pageContext, location }) => (
  <Page
    id={pageId}
    title={t("title")}
    headerImg={headerImages.top5}
    language={pageContext.language}
    location={location}
  >
    <h2>{t("header")}</h2>

    <table>
      <tbody>
        <tr>
          <td colSpan="2" style={{ padding: "10px 0" }}>
            Erityiskiitokset: support-tiimi ja Huurre-retkikunta
          </td>
        </tr>
        <tr>
          <td style={{ verticalAlign: "top", paddingRight: "30px" }}>
            Adam's Airport Inn<br />
            Alexandria Consulting Group<br />
            Alico<br />
            Anna-Riikka Tertsunen<br />
            APU<br />
            AREA<br />
            Bantra<br />
            Briko<br />
            Brodeeraus Primus<br />
            Chips /Parrots<br />
            Co-op<br />
            Deal Comp<br />
            Eastway<br />
            Energizer<br />
            Ernst & Young<br />
            Euromaski<br />
            Exel<br />
            Fazer<br />
            Felix Abba Oy Ab / Ekströms kiisselit<br />
            Fischer<br />
            FreeHeels<br />
            Garmin<br />
            Greendoor<br />
            Harri Salmi<br />
            Hilleberg<br />
            J.Kärkkäinen<br />
            Jalas<br />
            Jussi Aalto<br />
            Jyrki Kela<br />
            Kiilto<br />
            Kim Jansson<br />
            Kosti Nikkinen<br />
            Lorpen<br />
            Marmot<br />
            Matti Leppäranta<br />
            Metropoli<br />
            Micky Brörkholm Trading<br />
          </td>
          <td style={{ verticalAlign: "top" }}>
            Mildola<br />
            Nanoq-museo/Pentti Kronqvist<br />
            Navcor<br />
            Nexet<br />
            Nikon<br />
            Noptel<br />
            Olvi<br />
            Oracle Finland<br />
            Otso apteekki<br />
            Panasonic Toughbook<br />
            Parmalat Canada<br />
            Polartherm<br />
            Poppicok<br />
            Päämies<br />
            Rajamäen Uimahalli<br />
            Rammer<br />
            Retki-lehti<br />
            Reumasäätiön sairaala /huippukylmä<br />
            Ruskovilla<br />
            Sampo Ahonen<br />
            Sasta<br />
            Satu Långström<br />
            Satulapaja<br />
            Siwa<br />
            Sorel<br />
            Suunto<br />
            Suutari Mikkonen<br />
            Tatonka<br />
            Thermos<br />
            Tradeka<br />
            Trio-Offset<br />
            Utin jääkärirykmentti<br />
            Vaasan & Vaasan<br />
            Vaiska Ky<br />
            VBS Net<br />
            Viinikainen<br />
          </td>
        </tr>
      </tbody>
    </table>
  </Page>
);

export default translate(pageId)(List);
