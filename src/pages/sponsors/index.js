import React from "react";
import Page, { headerImages } from "../../components/Page";
import LanLink from "../../components/LanLink";
import { useLocalization } from "../../components/i18n";

import sasta from "./img/Sasta.jpg";
import marmot from "./img/Marmot.jpg";
import jalas from "./img/Jalas.jpg";
import apu from "./img/apu.jpg";
import ey from "./img/ey_vari.jpg";
import karkkainen from "./img/karkkainen.jpg";
import alexandria from "./img/alexandria.gif";
import siwa from "./img/SiwaPieni.jpg";
import exel from "./img/exel.gif";
import nikon from "./img/nikon.gif";
import ruskovilla from "./img/ruskovilla.jpg";
import fischer from "./img/fischer.png";
import hilleberg from "./img/hilleberg.jpg";
import mildola from "./img/mildola2.jpg";
import area from "./img/area2.gif";
import rammer from "./img/rammer.jpg";
import vaiska from "./img/Vaiska.jpg";
import vbsnet from "./img/Vbsnet2.jpg";
import euromaski from "./img/Euromaski.gif";
import vaasan from "./img/vaasan.jpg";
import oracle from "./img/oracle.gif";
import noptel from "./img/noptel.jpg";
import kiilto from "./img/kiilto.gif";
import fazer from "./img/fazer.gif";
import polartherm from "./img/polartherm.gif";
import garmin from "./img/garmin.gif";

import "./index.scss";

const pageId = "sponsors";

const Big = props => (
  <div className={props.className ? props.className : "sponsors-big"}>
    <div className="sponsors-logo">
      <a href={props.to}>
        <img
          src={props.img}
          style={{ width: props.width ? props.width : "200px" }}
          alt={props.name}
        />
      </a>
    </div>
    <div className="sponsors-text">
      <a href={props.to}>{props.name}</a>
      <p>{props.children}</p>
    </div>
  </div>
);

const Small = props => (
  <Big
    to={props.to}
    img={props.img}
    name={props.name}
    width="150px"
    className="sponsors-small"
  >
    {props.children}
  </Big>
);

const Sponsors = () => {
  const { t } = useLocalization(pageId);

  return (
    <Page id={pageId} title={t("title")} headerImg={headerImages.top5}>
      <div id="isottukijat">
        <Big name="Sasta" to="http://www.sasta.fi" img={sasta} />
        <Big name="Marmot" to="http://www.marmot.com" img={marmot}>
          Kivoja vaatteita ja mukavia värejä - myös pohjoisnavalle. Retkikunta
          käyttää Marmotin untuva-asuja ja makuupusseja.
        </Big>
        <Big name="Jalas" to="http://www.jalas.fi" img={jalas} />
        <Big name="Apu" to="http://www.apu.fi" img={apu}>
          Lue <LanLink to="/sponsors/media">Apu-lehden artikkelit.</LanLink>
        </Big>
        <Big name="Ernst &amp; Young" to="http://www.ey.com/fi/" img={ey}>
          Ernst & Young on taloushallinnon ja liikkeenjohdon
          asiantuntijaorganisaatio, jonka palveluksessa on 107 000 asiantuntijaa
          yli 140 maassa. Suomessa henkilöstömme on lähes 500 ja 23 toimiston
          verkkomme kattaa koko maan. Toimintamme lähtökohtia ovat yhteistyö,
          nopeus, tulevaisuuteen suuntautuminen ja asiakkaan kannalta olennaiset
          tulokset. Autamme asiakkaitamme saavuttamaan liiketoiminnalliset
          tavoitteensa paremman riskienhallinnan, tuottavuuden nousun ja
          pienempien kustannusten kautta. Asiantuntijapalveluihimme kuuluvat
          tilintarkastus- ja neuvontapalvelut, sisäinen tarkastus, veropalvelut,
          lakipalvelut, yritysjärjestelyt, riskienhallintapalvelut,
          taloushallinnon asiantuntija- ja ulkoistamispalvelut,
          ulkomaankomennusten hallinnointipalvelut sekä tietoturva- ja
          IT-riskienhallintapalvelut. Lisätietoja:{" "}
          <a href="http://www.ey.com/fi/">www.ey.com/fi</a>.
        </Big>
        <Big
          name="J. Kärkkäinen Oy"
          to="http://www.karkkainen.com"
          img={karkkainen}
          width="147px"
        >
          J. Kärkkäinen Oy on kehittyvä ja nopealiikkeinen perheyritys
          Pohjois-Pohjanmaalta. J. Kärkkäinen Oy:n ydinliiketoimintana on
          vähittäiskauppa, jonka tuotevalikoima koostuu n. 150 000:sta
          "non-food" artikkelista. Yrityksen perusti Juha Kärkkäinen vuonna
          1988. Nykyään Kärkkäisellä on isot tavaratalot sekä Ylivieskassa että
          Oulussa. Tuotevalikoimaa kehitetään jatkuvasti vastaamaan asiakkaiden
          tarpeita.
        </Big>
        <Big
          name="Alexandria Consulting Group"
          to="http://www.alexandria.fi"
          img={alexandria}
        >
          Alexandria on Suomen johtava säästämiseen ja sijoittamiseen
          erikoistunut asiakaspalveluyhtiö. Tavoitteemme on kasvattaa
          asiakkaidemme varallisuutta. Jatkuvan menestyksemme ja kehityksemme on
          mahdollistanut kyky ennakoida asiakkaidemme muuttuvia tarpeita ja
          toiveita. Alexandria on yksityinen suomalainen yhtiö, jonka
          vakavaraisuus on AAA. Asiakkaitamme (yli 24.000) palvelee
          valtakunnallisesti n.150 henkilöä, 11 toimistoamme muodostavat
          kattavan verkoston ympäri maata. Alexandria Manager Funds
          -omaisuudenhoitorahastojen hallinnoitavat varat ovat yli 200 miljoonaa
          euroa. Vuosi 2006 on menestyksekkään toimintahistoriamme kymmenes.
        </Big>
        <div
          style={{
            float: "none",
            clear: "both",
            minHeight: "1px",
            margin: 0,
            padding: 0,
          }}
        >
          &#160;
        </div>
      </div>

      <hr />

      <div id="logotukijat">
        <Small name="Siwa" to="http://www.siwa.fi" img={siwa}>
          Suomen suosituin lähikauppa.
        </Small>
        <Small name="Exel" to="http://www.exel.fi" img={exel} />
        <Small name="Fischer" to="http://www.fischer.fi" img={fischer} />
        <Small name="Nikon" to="http://www.nikon.fi" img={nikon} />
        <Small name="Hilleberg" to="http://www.hilleberg.se" img={hilleberg} />
        <Small
          name="Ruskovilla"
          to="http://www.ruskovilla.fi"
          img={ruskovilla}
        />
        <Small name="Mildola" to="http://www.mildola.fi" img={mildola} />
        <Small name="Area" to="http://www.area.fi" img={area} />
        <Small name="Rammer" to="http://www.rammer.sandvik.com" img={rammer}>
          Rammer hits harder.
        </Small>
        <Small name="Vaiska" to="http://www.vaiska.fi" img={vaiska}>
          Retkikuntaa tukemassa.
        </Small>
        <Small name="VBS Net" to="http://www.vbsnet.fi" img={vbsnet}>
          Pohjoisnapa.fi-sivujen tekijä.
        </Small>
        <Small name="Euromaski" to="http://www.euromaski.fi" img={euromaski} />
        <Small
          name="Vaasan &amp; Vaasan Oy"
          to="http://www.vaasan.com"
          img={vaasan}
        />
        <Small name="Oracle Finland" to="http://www.oracle.fi" img={oracle} />
        <Small name="Noptel" to="http://www.noptel.fi" img={noptel} />
        <Small name="Kiilto" to="http://www.kiilto.fi" img={kiilto} />
        <Small name="Fazer" to="http://www.fazer.fi" img={fazer} />
        <Small
          name="Polartherm"
          to="http://www.polartherm.fi"
          img={polartherm}
        />
        <Small name="Garmin" to="http://www.garmin.fi" img={garmin} />
      </div>
    </Page>
  );
};

export default Sponsors;
