<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="Jaakarhu" Title="Pohjoisnapa 2006 - J��karhu" Culture="auto" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="Jaakarhu.aspx.cs" %>

<asp:Content ID="ContentJaakarhu" ContentPlaceHolderID="MainContent" runat="Server">
	<div class="artikkeli">
		<h4><asp:Localize runat="server" ID="Otsikko" meta:resourcekey="OtsikkoResource1" Text="J��karhu"></asp:Localize></h4>
		<div class="artikkelikuva">
		<asp:Image runat="server" ID="JaakarhuKuva" ImageUrl="http://img.pohjoisnapa.fi/jaakarhu_levinneisyys.gif" AlternateText="Kuva 1: J��karhun levinneisyys" meta:resourcekey="JaakarhuKuvaResource1" />
			<div id="kuvateksti">
				<asp:Localize runat="server" ID="JaakarhuKuvateksti" meta:resourcekey="JaakarhuKuvatekstiResource1" Text='&#13;&#10;&#9;&#9;&#9;&#9;<b>Kuva1.</b> J��karhun levinneisyys. L�hde: <a href="http://www.nalle.to/karhut/jaakarhu.html">www.nalle.to/karhut/jaakarhu.html</a>&#13;&#10;&#9;&#9;&#9;&#9;'></asp:Localize>
			</div>
		</div>
		<asp:Localize runat="server" ID="Teksti" meta:resourcekey="TekstiResource1">
		<p>
			<a href="Retkikunta.aspx">Naparetkelij�it�</a> paleltaa aina enemm�n tai v�hemm�n. Toisin on laita j��karhulla, arktisten j��kenttien
			valtiaalla. J��karhu on sopeutunut ��rimm�isen kylmiin olosuhteisiin. Sen paksu, valkoinen tai kermanv�rinen
			turkki on erinomainen eriste maalla ja erityisesti vedess� paksun, vett� l�p�isem�tt�m�n pohjavillan
			ansiosta. Karvapeitteen alla oleva musta iho sek� ihonalainen rasvakerros varastoivat l�mp�� tehokkaasti.
			L�mp�� haihtuu mahdollisimman v�h�n pienten korvien, kuonon ja jalkapohjien kautta. Ylim��r�ist� l�mp��
			j��karhu poistaa kehosta l��h�tyksen avulla.
		</p>
		<p>
			J��karhujen levinneisyys kattaa l�hes koko pohjoisen j��meren j��tik�t ja rannikot. Erityisesti j��karhuja
			esiintyy Kanadan arktisilla alueilla, Siperian ja Ven�j�n pohjoisosissa, L�nsi- ja Pohjois-Alaskassa,
			Gr�nlannissa ja Huippuvuorilla (kuva 1). Kannasta yli puolet el�� Kanadan arktisilla alueilla, mink�
			vuoksi Kanadalla on suuri vastuu j��karhujen suojelussa. Kokonaispopulaatio on eri l�hteist� riippuen
			20 000 � 25 000 yksil��. Arviot ovat ep�tarkkoja johtuen arvioinnin vaikeudesta laajalla napa-alueella
			ja j��karhujen laajasta liikkuvuudesta. Kanta on t�ll� hetkell� suhteellisen vakaa, vaikka jonkin aikaa
			sitten populaatio pieneni tasaisesti. Toisilla alueilla kannat ovat jopa hieman aiempia tihe�mpi�, mutta
			paikoin kanta on pienentynyt merkitt�v�sti (mm. Baffinin alueella). J��karhu luetaan uhanalaisiin el�imiin,
			vaikka Kanadan alkuper�iskansoilla on oikeus mets�st�� vuosittain n. 700 yksil��.</p>
		<p>
			J��karhu (Ursus maritimus) on osittain vedess� el�v� el�in. T�m�n vuoksi sille on kehittynyt vedess�
			liikkumista helpottavia ominaisuuksia, kuten varpaiden v�liset poimut sek� virtaviivainen ruumiinmuoto.
			J��karhu voi ylitt�� jopa 100 km:n mittaisen merialueen uimalla vauhdin ollessa tasaisesti 5-6 km/h,
			sukeltamaan se pystyy yht�jaksoisesti n. 2 �3 minuuttia. Varpaiden poimujen lis�ksi tassut ovat suhteellisen
			leve�t, mink� vuoksi ohuella j��ll� tai lumessa kantavuus paranee. Erona muihin karhuihin on lis�ksi
			mm. pidempi kaula ja pidemm�t jalat sek� yleisesti j��karhun massiivinen koko, sill� j��karhu on maalla
			el�vist� pedoista kookkain. T�ysikasvuisen karhun s�k�korkeus on 120-140 cm, pituus kuonosta h�nn�n
			p��h�n 220-350 cm (naaraalla 200-250 cm) ja paino 350-800 kg (naarailla 175-300 kg). Tosin mm. Kanadan
			pohjoisosien alkuper�isasukkaiden mukaan mets�styksen yhteydess� saaliiksi on saatu jopa yli nelj�n
			metrin mittaisia uroksia. Vaikka eroja tutumpiin maakarhuihin on paljon, katsotaan j��karhujen kuuluvan
			maakarhujen kanssa samaan Ursus �sukuun (jonkin verran j��karhusta k�ytet��n edelleen nime� Thalarctos
			maritimus). Ursus �sukuun kuulumista puoltaa mm. se, ett� j��karhu pystyy tuottamaan lis��ntymiskykyisi�
			j�lkel�isi� muiden maakarhujen kanssa.
		</p>
		<p>
			J��karhun p��ravintokohde ovat hylkeet. Lis�ksi j��karhut (kaikkiruokaisina) k�ytt�v�t ravinnokseen
			mm. valaiden ruhoja, pieni� mursuja, kaloja sek� pienempi� nis�kk�it�, lintuja, munia, kasveja ja j�k�l��
			silloin kun on puutetta suuremmista saalisel�imist� (esim. kes�isin). Hylkeiden saalistuksessa j��karhu
			on ekspertti; yleisimmin se vaanii hylkeit� j��tik�ll� niiden hengitysaukkojen ��rell� useita tunteja
			odottaen. Hylkeen p��n ilmestyess� aukkoon karhu iskee voimakkaasti k�p�l�ll��n ja vet�� lopuksi koko
			ruhon yl�s hengitysaukosta. Toisinaan karhu l�hestyy tuulen alta j��ll� olevia hylkeit� ja tilaisuuden
			tullen sulkee nopeasti niiden ainoan pakotien mereen. Joskus karhu saattaa l�hesty� sulan reunalla olevia
			hylkeit� uimalla vain kuono hieman meren pinnalla liikkuen, ja lopuksi kokonaan sukeltamalla ennen nopeaa
			hy�kk�yst� vedest� j��n reunalle. Hylkeiden lumen alla oleviin pesiin (poikasten synnytty� hylkeet ovat
			lumen alla onkaloissa) karhu osaa vainunsa avulla. J��karhu voi haistaa hylkeen jopa kahden metrin syvyisen
			hangen alta, ja se joko kaivaa poikaset esiin pes�st��n tai hyppii pes�n p��ll� k�ytt�en massaansa saaliin
			tappamiseen ja esiin saamiseen. Napaketulla ja j��karhulla voi olla kuuttien saalistamisessa my�s er��nlaista
			�yhteisty�t�, jolloin naali paremman vainunsa avulla ensin paikantaa pes�n, houkuttelee ensin napaketusta
			kiinnostuvan karhun hylkeiden pes�lle, jonka j�lkeen karhu kaivaa hylkeet esiin naalin j��dess� my�hemmin
			karhun j�tt�mille t�hteille sy�m��n. Vaikka j��karhulla ei ole luontaisia vihollisia, se v�ltt�� saalistaessaan
			yleens� aggressiivisia kuplahylkeit� sek� erityisesti my�s j��karhuille vaarallisia kookkaita mursuja.
		</p>
		<p>
			Yleens� j��karhunaaraat saavat ensimm�iset pentunsa viisivuotiaina. Parittelu tapahtuu huhti-kes�kuussa.
			Sama uros voi paritella useamman naaraan kanssa. Pes�paikan naaras etsii marras-joulukuussa. Pes� on
			yleens� paksummassa lumikinoksessa eli rantojen l�heisyydess�. Pentuja on yleens� kaksi (joskus jopa
			nelj�) ja ne syntyv�t joulu-tammikuussa. Naaras j�tt�� pes�ns� maalis- tai huhtikuussa, jolloin n�lk�iset
			ja pentujaan suojelevat naarat voivat olla hyvin vaarallisia. Pennut seuraavat emoaan n. 2,5 vuotta
			eli naaras voi synnytt�� uuden pesueen enint��n kolmen vuoden v�lein. Paritteluaikoina kev�isin my�s
			urokset ovat eritt�in aggressiivisia ja voivat tappaa my�s pentuja. Pesueita ja paritteluaikaa lukuun
			ottamatta j��karhut liikkuvat yksin ja kohdatessaan ne pysyv�t toisista erill��n. Toisaalta hyvien ravintokohteiden
			l�hettyvill� (sulana pysyv�t runsaan hyljekannan alueet, suuret valaan raadot) karhuja voi olla tihe�sti
			tai jopa kymmeni� saman ravintokohteen ymp�rill�.
		</p>
		<p>
			Huolimatta siit�, ett� Arktiksen valtiailla ei ole luontaisia vihollisia, uhkaa j��karhuja erityisesti
			<a href="Ilmastonmuutos.aspx">ilmastonmuutos</a> jonka vaikutus on suurimmillaan juuri maapallon pohjoisimmilla
			alueilla. Muita uhkia ovat samoin ihmisen aiheuttamat h�iri�t kuten raskasmetallien ja ymp�rist�myrkkyjen
			(esim. PCB, DDT) kulkeutuminen, liikamets�stys sek� �ljyn ja kaasun etsint� j��karhujen elinalueilta.
			Ravintoketjun loppup��h�n eli j��karhuihin kertyv�t raskasmetalli- ja myrkkym��r�t ovat korkeita, mik�
			n�kyy erityisesti suurena pentukuolleisuutena vastustuskyvytt�mien pentujen saadessa myrkkyj� suoraan
			emonsa maidosta. Konkreettisesti merkkin� j��karhuja uhkaavista tekij�ist� on j��karhujen perinteisten
			kulkureittien aikaisemmasta poikkeava j��nmuodostuminen. J��karhujen liikkuessa talvisten ja kes�isten
			elinalueidensa v�lill� ne eiv�t pysty k�ytt�m��n pitk��n sulina pysyvi� merialueita kulkemiseensa, ja
			n�lk�iset karhut etsiv�t ravintoa mm. yh� l�hemp�� ihmisasutusta. Vaarana on j��karhujen tottuminen
			ihmisten l�sn�oloon, ravintotottumuksien muuttuminen ja tihe�mm�n kannan painottuminen rannikoille ihmisten
			l�heisyyteen, miss� karhujen selviytyminen on my�s paljon ep�todenn�k�isemp�� kuin aiemmin.
		</p>
		<p>
			Arktisten merialueiden j��peitteen kokonaispinta-ala on pienentynyt 25 vuodessa keskim��rin n. 7 % ja
			10-15 % verrattuna 1900-luvun puolenv�lin tilanteeseen samalla kuin j��peite on 40 % ohuempi kuin aiemmin.
			Jo vuonna 2080 saman trendin jatkuessa Arktiksella ei ole en�� j��t� kes�aikana. Miss� m��rin uhanalainen
			j��karhukanta pystyy vastaamaan herkki� elinymp�rist�j� muokkaaviin muutoksiin?
		</p>
		<p>
			Lis�� aiheesta:
		</p>
		<ul>
			<li><a href="http://www.ngo.grida.no/wwfap/core/publications/arctic_bulletin.html">Arctic Bulletin �sarja
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
