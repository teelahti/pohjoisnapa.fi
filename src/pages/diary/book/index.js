import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";

const pageId = "book";

const Book = () => {
  const { t } = useLocalization(pageId);

  return (
    <Page id={pageId} title={t("title")} headerImg={headerImages.top5}>
      <h2>{t("header")}</h2>

      <p>
        Laskuvarjojääkärikillan retkikunta saavutti suomalaisella sisukkuudella
        maantieteellisen pohjoisnavan 29. huhtikuuta 2006. He iskivät Suomen
        lipun jäälohkareen kylkeen keskellä arktista jäälakeutta merkiksi
        tavoitteensa saavuttamisesta.
      </p>
      <p>
        Kahden kuukauden aikana naparetkeilijät hiihtivät 800 kilometriä ja
        kohtasivat vaikeakulkuisia ahtojäitä, ylittivät avovesiä sekä elivät ä40
        äC pakkasessa ilman ulkopuolista tukea. Heitä ennen vain 32 henkilää
        maailmassa on kyennyt samaan.
      </p>
      <p>
        POHJOISNAPA- JäINEN HAASTE kertoo historiallisen retkikunnan vaiheet
        keräten laajan kokonaisuuden mielenkiintoiseen pakettiin. Runsas
        nelivärikuvitus tekee kirjasta näyttävän kokonaisuuden.
      </p>
      <p>
        Suomelaisesta sisusta ja rohkeudesta kertova kirja sisältää tarinoita ja
        tunnelmakuvauksia matkan varrelta, ennen julkaisemattomia
        päiväkirjamerkintäjä ja tietopohjaisia aiheeseen liittyviä artikkeleita.
      </p>
      <p>
        <a href="http://www.thepole.fi/kirja.html">Tilaa kirja</a>
      </p>
      <div>
        <h4>Pohjoisnapa - Jäinen haaste</h4>
        <table id="kirjaFaktaTaulu">
          <tbody>
            <tr>
              <td style={{ paddingRight: "10px" }}>Kirjoittaja:</td>
              <td>Kari Poppis Suomela</td>
            </tr>
            <tr>
              <td>ISBN:</td>
              <td>951-98376-1-2</td>
            </tr>
            <tr>
              <td>Kustantaja:</td>
              <td>
                Poppicok, <a href="http://www.poppicok.fi">www.poppicok.fi</a>
              </td>
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }}>Koko:</td>
              <td>
                272x230mm
                <br />
                184 sivua. Yli 140 nelivärikuvaa
              </td>
            </tr>
            <tr>
              <td>Hinta:</td>
              <td>39,90 &euro;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Page>
  );
};

export default Book;
