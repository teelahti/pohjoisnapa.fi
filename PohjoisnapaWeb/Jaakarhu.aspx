<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="Jaakarhu" Title="Pohjoisnapa 2006 - Jääkarhu" Culture="auto" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="Jaakarhu.aspx.cs" %>

<asp:Content ID="ContentJaakarhu" ContentPlaceHolderID="MainContent" runat="Server">
	<div class="artikkeli">
		<h4><asp:Localize runat="server" ID="Otsikko" meta:resourcekey="OtsikkoResource1" Text="Jääkarhu"></asp:Localize></h4>
		<div class="artikkelikuva">
		<asp:Image runat="server" ID="JaakarhuKuva" ImageUrl="http://img.pohjoisnapa.fi/jaakarhu_levinneisyys.gif" AlternateText="Kuva 1: Jääkarhun levinneisyys" meta:resourcekey="JaakarhuKuvaResource1" />
			<div id="kuvateksti">
				<asp:Localize runat="server" ID="JaakarhuKuvateksti" meta:resourcekey="JaakarhuKuvatekstiResource1" Text='&#13;&#10;&#9;&#9;&#9;&#9;<b>Kuva1.</b> Jääkarhun levinneisyys. Lähde: <a href="http://www.nalle.to/karhut/jaakarhu.html">www.nalle.to/karhut/jaakarhu.html</a>&#13;&#10;&#9;&#9;&#9;&#9;'></asp:Localize>
			</div>
		</div>
		<asp:Localize runat="server" ID="Teksti" meta:resourcekey="TekstiResource1">
		<p>
			<a href="Retkikunta.aspx">Naparetkelijöitä</a> paleltaa aina enemmän tai vähemmän. Toisin on laita jääkarhulla, arktisten jääkenttien
			valtiaalla. Jääkarhu on sopeutunut äärimmäisen kylmiin olosuhteisiin. Sen paksu, valkoinen tai kermanvärinen
			turkki on erinomainen eriste maalla ja erityisesti vedessä paksun, vettä läpäisemättömän pohjavillan
			ansiosta. Karvapeitteen alla oleva musta iho sekä ihonalainen rasvakerros varastoivat lämpöä tehokkaasti.
			Lämpöä haihtuu mahdollisimman vähän pienten korvien, kuonon ja jalkapohjien kautta. Ylimääräistä lämpöä
			jääkarhu poistaa kehosta läähätyksen avulla.
		</p>
		<p>
			Jääkarhujen levinneisyys kattaa lähes koko pohjoisen jäämeren jäätiköt ja rannikot. Erityisesti jääkarhuja
			esiintyy Kanadan arktisilla alueilla, Siperian ja Venäjän pohjoisosissa, Länsi- ja Pohjois-Alaskassa,
			Grönlannissa ja Huippuvuorilla (kuva 1). Kannasta yli puolet elää Kanadan arktisilla alueilla, minkä
			vuoksi Kanadalla on suuri vastuu jääkarhujen suojelussa. Kokonaispopulaatio on eri lähteistä riippuen
			20 000 – 25 000 yksilöä. Arviot ovat epätarkkoja johtuen arvioinnin vaikeudesta laajalla napa-alueella
			ja jääkarhujen laajasta liikkuvuudesta. Kanta on tällä hetkellä suhteellisen vakaa, vaikka jonkin aikaa
			sitten populaatio pieneni tasaisesti. Toisilla alueilla kannat ovat jopa hieman aiempia tiheämpiä, mutta
			paikoin kanta on pienentynyt merkittävästi (mm. Baffinin alueella). Jääkarhu luetaan uhanalaisiin eläimiin,
			vaikka Kanadan alkuperäiskansoilla on oikeus metsästää vuosittain n. 700 yksilöä.</p>
		<p>
			Jääkarhu (Ursus maritimus) on osittain vedessä elävä eläin. Tämän vuoksi sille on kehittynyt vedessä
			liikkumista helpottavia ominaisuuksia, kuten varpaiden väliset poimut sekä virtaviivainen ruumiinmuoto.
			Jääkarhu voi ylittää jopa 100 km:n mittaisen merialueen uimalla vauhdin ollessa tasaisesti 5-6 km/h,
			sukeltamaan se pystyy yhtäjaksoisesti n. 2 –3 minuuttia. Varpaiden poimujen lisäksi tassut ovat suhteellisen
			leveät, minkä vuoksi ohuella jäällä tai lumessa kantavuus paranee. Erona muihin karhuihin on lisäksi
			mm. pidempi kaula ja pidemmät jalat sekä yleisesti jääkarhun massiivinen koko, sillä jääkarhu on maalla
			elävistä pedoista kookkain. Täysikasvuisen karhun säkäkorkeus on 120-140 cm, pituus kuonosta hännän
			päähän 220-350 cm (naaraalla 200-250 cm) ja paino 350-800 kg (naarailla 175-300 kg). Tosin mm. Kanadan
			pohjoisosien alkuperäisasukkaiden mukaan metsästyksen yhteydessä saaliiksi on saatu jopa yli neljän
			metrin mittaisia uroksia. Vaikka eroja tutumpiin maakarhuihin on paljon, katsotaan jääkarhujen kuuluvan
			maakarhujen kanssa samaan Ursus –sukuun (jonkin verran jääkarhusta käytetään edelleen nimeä Thalarctos
			maritimus). Ursus –sukuun kuulumista puoltaa mm. se, että jääkarhu pystyy tuottamaan lisääntymiskykyisiä
			jälkeläisiä muiden maakarhujen kanssa.
		</p>
		<p>
			Jääkarhun pääravintokohde ovat hylkeet. Lisäksi jääkarhut (kaikkiruokaisina) käyttävät ravinnokseen
			mm. valaiden ruhoja, pieniä mursuja, kaloja sekä pienempiä nisäkkäitä, lintuja, munia, kasveja ja jäkälää
			silloin kun on puutetta suuremmista saaliseläimistä (esim. kesäisin). Hylkeiden saalistuksessa jääkarhu
			on ekspertti; yleisimmin se vaanii hylkeitä jäätiköllä niiden hengitysaukkojen äärellä useita tunteja
			odottaen. Hylkeen pään ilmestyessä aukkoon karhu iskee voimakkaasti käpälällään ja vetää lopuksi koko
			ruhon ylös hengitysaukosta. Toisinaan karhu lähestyy tuulen alta jäällä olevia hylkeitä ja tilaisuuden
			tullen sulkee nopeasti niiden ainoan pakotien mereen. Joskus karhu saattaa lähestyä sulan reunalla olevia
			hylkeitä uimalla vain kuono hieman meren pinnalla liikkuen, ja lopuksi kokonaan sukeltamalla ennen nopeaa
			hyökkäystä vedestä jään reunalle. Hylkeiden lumen alla oleviin pesiin (poikasten synnyttyä hylkeet ovat
			lumen alla onkaloissa) karhu osaa vainunsa avulla. Jääkarhu voi haistaa hylkeen jopa kahden metrin syvyisen
			hangen alta, ja se joko kaivaa poikaset esiin pesästään tai hyppii pesän päällä käyttäen massaansa saaliin
			tappamiseen ja esiin saamiseen. Napaketulla ja jääkarhulla voi olla kuuttien saalistamisessa myös eräänlaista
			”yhteistyötä”, jolloin naali paremman vainunsa avulla ensin paikantaa pesän, houkuttelee ensin napaketusta
			kiinnostuvan karhun hylkeiden pesälle, jonka jälkeen karhu kaivaa hylkeet esiin naalin jäädessä myöhemmin
			karhun jättämille tähteille syömään. Vaikka jääkarhulla ei ole luontaisia vihollisia, se välttää saalistaessaan
			yleensä aggressiivisia kuplahylkeitä sekä erityisesti myös jääkarhuille vaarallisia kookkaita mursuja.
		</p>
		<p>
			Yleensä jääkarhunaaraat saavat ensimmäiset pentunsa viisivuotiaina. Parittelu tapahtuu huhti-kesäkuussa.
			Sama uros voi paritella useamman naaraan kanssa. Pesäpaikan naaras etsii marras-joulukuussa. Pesä on
			yleensä paksummassa lumikinoksessa eli rantojen läheisyydessä. Pentuja on yleensä kaksi (joskus jopa
			neljä) ja ne syntyvät joulu-tammikuussa. Naaras jättää pesänsä maalis- tai huhtikuussa, jolloin nälkäiset
			ja pentujaan suojelevat naarat voivat olla hyvin vaarallisia. Pennut seuraavat emoaan n. 2,5 vuotta
			eli naaras voi synnyttää uuden pesueen enintään kolmen vuoden välein. Paritteluaikoina keväisin myös
			urokset ovat erittäin aggressiivisia ja voivat tappaa myös pentuja. Pesueita ja paritteluaikaa lukuun
			ottamatta jääkarhut liikkuvat yksin ja kohdatessaan ne pysyvät toisista erillään. Toisaalta hyvien ravintokohteiden
			lähettyvillä (sulana pysyvät runsaan hyljekannan alueet, suuret valaan raadot) karhuja voi olla tiheästi
			tai jopa kymmeniä saman ravintokohteen ympärillä.
		</p>
		<p>
			Huolimatta siitä, että Arktiksen valtiailla ei ole luontaisia vihollisia, uhkaa jääkarhuja erityisesti
			<a href="Ilmastonmuutos.aspx">ilmastonmuutos</a> jonka vaikutus on suurimmillaan juuri maapallon pohjoisimmilla
			alueilla. Muita uhkia ovat samoin ihmisen aiheuttamat häiriöt kuten raskasmetallien ja ympäristömyrkkyjen
			(esim. PCB, DDT) kulkeutuminen, liikametsästys sekä öljyn ja kaasun etsintä jääkarhujen elinalueilta.
			Ravintoketjun loppupäähän eli jääkarhuihin kertyvät raskasmetalli- ja myrkkymäärät ovat korkeita, mikä
			näkyy erityisesti suurena pentukuolleisuutena vastustuskyvyttömien pentujen saadessa myrkkyjä suoraan
			emonsa maidosta. Konkreettisesti merkkinä jääkarhuja uhkaavista tekijöistä on jääkarhujen perinteisten
			kulkureittien aikaisemmasta poikkeava jäänmuodostuminen. Jääkarhujen liikkuessa talvisten ja kesäisten
			elinalueidensa välillä ne eivät pysty käyttämään pitkään sulina pysyviä merialueita kulkemiseensa, ja
			nälkäiset karhut etsivät ravintoa mm. yhä lähempää ihmisasutusta. Vaarana on jääkarhujen tottuminen
			ihmisten läsnäoloon, ravintotottumuksien muuttuminen ja tiheämmän kannan painottuminen rannikoille ihmisten
			läheisyyteen, missä karhujen selviytyminen on myös paljon epätodennäköisempää kuin aiemmin.
		</p>
		<p>
			Arktisten merialueiden jääpeitteen kokonaispinta-ala on pienentynyt 25 vuodessa keskimäärin n. 7 % ja
			10-15 % verrattuna 1900-luvun puolenvälin tilanteeseen samalla kuin jääpeite on 40 % ohuempi kuin aiemmin.
			Jo vuonna 2080 saman trendin jatkuessa Arktiksella ei ole enää jäätä kesäaikana. Missä määrin uhanalainen
			jääkarhukanta pystyy vastaamaan herkkiä elinympäristöjä muokkaaviin muutoksiin?
		</p>
		<p>
			Lisää aiheesta:
		</p>
		<ul>
			<li><a href="http://www.ngo.grida.no/wwfap/core/publications/arctic_bulletin.html">Arctic Bulletin –sarja
				2000-2005 </a></li>
			<li><a href="http://www.polarbearsinternational.org">Polar Bears International</a></li>
			<li><a href="http://www.bbc.co.uk/nature/wildfacts/factfiles/7.shtml">BBC - Science & Nature - Wildfacts
				- Polar Bear</a></li>
			<li><a href="http://npweb.npolar.no/">Norsk Polarinstitutt</a></li>
			<li><a href="http://www.wwf.ca/EN/PolarBearCentral/">Polar Bear Central *** WWF-Canada ***</a></li>
		</ul>
		</asp:Localize>
	</div>
</asp:Content>
