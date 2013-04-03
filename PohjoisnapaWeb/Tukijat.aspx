<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="Tukijat" Title="Pohjoisnapa 2006 - Tukijat" Codebehind="Tukijat.aspx.cs" %>

<asp:Content ID="ContentTukijat" ContentPlaceHolderID="MainContent" runat="Server">
	<div id="isottukijat">
		<div>
			<asp:HyperLink NavigateUrl="http://www.sasta.fi" ID="linkToSasta" runat="server">
				<asp:Image ID="tukijaSasta" runat="server" ImageUrl="~/kuvat/tukijat/Sasta.jpg" Width="200" AlternateText="Sasta" />
			</asp:HyperLink>
			<h5>
				<a href="http://www.sasta.fi">Sasta</a></h5>
			<p>
			</p>
		</div>
		<div>
			<asp:HyperLink ID="LinkToMarmot" runat="server" NavigateUrl="http://www.marmot.com">
				<asp:Image ID="tukijaMarmot" runat="server" ImageUrl="~/kuvat/tukijat/Marmot.jpg" Width="200" AlternateText="Marmot" />
			</asp:HyperLink>
			<h5>
				<a href="http://www.marmot.com">Marmot</a></h5>
			<p>
				Kivoja vaatteita ja mukavia värejä - myös pohjoisnavalle. Retkikunta käyttää Marmotin untuva-asuja ja
				makuupusseja.
			</p>
		</div>
		<div>
			<asp:HyperLink ID="LinkToJalas" runat="server" NavigateUrl="http://www.jalas.fi">
				<asp:Image ID="tukijaJalas" runat="server" ImageUrl="~/kuvat/tukijat/Jalas.jpg" Width="200" AlternateText="Jalas" />
			</asp:HyperLink>
			<h5>
				<a href="http://www.jalas.fi">Jalas</a></h5>
			<p>
			</p>
		</div>
		<div>
			<asp:HyperLink NavigateUrl="http://www.apu.fi" ID="HyperLink5" runat="server">
				<asp:Image ID="Image5" runat="server" ImageUrl="~/kuvat/tukijat/apu.jpg" Width="100" AlternateText="Apu" />
			</asp:HyperLink>
			<h5>
				<a href="http://www.apu.fi">Apu</a></h5>
			<p>
				Lue <a href="Media.aspx">Apu-lehden artikkelit.</a>
			</p>
		</div>
		<div>
			<asp:HyperLink NavigateUrl="http://www.ey.com/fi/" ID="LinkToEy" runat="server">
				<asp:Image ID="Image6" runat="server" ImageUrl="~/kuvat/tukijat/ey_vari.jpg" Width="200" AlternateText="Ernst &amp; Young" />
			</asp:HyperLink>
			<h5>
				<a href="http://www.ey.com/fi/">Ernst & Young</a></h5>
			<p>
				Ernst & Young on taloushallinnon ja liikkeenjohdon asiantuntijaorganisaatio, jonka palveluksessa on
				107 000 asiantuntijaa yli 140 maassa. Suomessa henkilöstömäärämme on lähes 500 ja 23 toimiston verkkomme
				kattaa koko maan. Toimintamme lähtökohtia ovat yhteistyö, nopeus, tulevaisuuteen suuntautuminen ja asiakkaan
				kannalta olennaiset tulokset. Autamme asiakkaitamme saavuttamaan liiketoiminnalliset tavoitteensa paremman
				riskienhallinnan, tuottavuuden nousun ja pienempien kustannusten kautta. Asiantuntijapalveluihimme kuuluvat
				tilintarkastus- ja neuvontapalvelut, sisäinen tarkastus, veropalvelut, lakipalvelut, yritysjärjestelyt,
				riskienhallintapalvelut, taloushallinnon asiantuntija- ja ulkoistamispalvelut, ulkomaankomennusten hallinnointipalvelut
				sekä tietoturva- ja IT-riskienhallintapalvelut. Lisätietoja: <a href="http://www.ey.com/fi/">www.ey.com/fi</a>.
			</p>
		</div>
		<div>
			<asp:HyperLink NavigateUrl="http://www.karkkainen.com" ID="HyperLink7" runat="server">
				<asp:Image ID="Image7" runat="server" ImageUrl="~/kuvat/tukijat/karkkainen.jpg" Width="147" AlternateText="J. Kärkkäinen Oy" />
			</asp:HyperLink>
			<h5>
				<a href="http://www.karkkainen.com">J. Kärkkäinen Oy</a></h5>
			<p>
				J. Kärkkäinen Oy on kehittyvä ja nopealiikkeinen perheyritys Pohjois-Pohjanmaalta. J. Kärkkäinen Oy:n
				ydinliiketoimintana on vähittäiskauppa, jonka tuotevalikoima koostuu n. 150 000:sta "non-food" artikkelista.
				Yrityksen perusti Juha Kärkkäinen vuonna 1988. Nykyään Kärkkäisellä on isot tavaratalot sekä Ylivieskassa
				että Oulussa. Tuotevalikoimaa kehitetään jatkuvasti vastaamaan asiakkaiden tarpeita.
			</p>
		</div>
		<div>
			<asp:HyperLink NavigateUrl="http://www.alexandria.fi" ID="linkToAlexandria" runat="server">
				<asp:Image ID="imageAlexandria" runat="server" ImageUrl="~/kuvat/tukijat/alexandria.gif" Width="200"
					AlternateText="Alexandria Consulting Group" />
			</asp:HyperLink>
			<h5>
				<a href="http://www.alexandria.fi">Alexandria Consulting Group </a>
			</h5>
			<p>
				Alexandria on Suomen johtava säästämiseen ja sijoittamiseen erikoistunut asiakaspalveluyhtiö. Tavoitteemme
				on kasvattaa asiakkaidemme varallisuutta. Jatkuvan menestyksemme ja kehityksemme on mahdollistanut kyky
				ennakoida asiakkaidemme muuttuvia tarpeita ja toiveita. Alexandria on yksityinen suomalainen yhtiö,
				jonka vakavaraisuus on AAA. Asiakkaitamme (yli 24.000) palvelee valtakunnallisesti n.150 henkilöä, 11
				toimistoamme muodostavat kattavan verkoston ympäri maata. Alexandria Manager Funds -omaisuudenhoitorahastojen
				hallinnoitavat varat ovat yli 200 miljoonaa euroa. Vuosi 2006 on menestyksekkään toimintahistoriamme
				kymmenes.
			</p>
		</div>
        <div style="float: none; clear: both; min-height: 1px; margin: 0; padding: 0;">&#160;</div>
	</div>
	<table id="logotukijat">
		<tr>
			<td>
				<asp:HyperLink ID="linkToSiwa" runat="server" NavigateUrl="http://www.siwa.fi">
					<asp:Image ID="imageSiwa" runat="server" ImageUrl="~/kuvat/tukijat/SiwaPieni.jpg" Width="150" AlternateText="Siwa" />
				</asp:HyperLink></td>
			<td style="width: 30%">
				<h5>
					<a href="http://www.siwa.fi">Siwa</a></h5>
				Suomen suosituin lähikauppa.
			</td>
			<td>
				<asp:HyperLink ID="linkToExel" runat="server" NavigateUrl="http://www.exel.fi">
					<asp:Image ID="imageExel" runat="server" ImageUrl="~/kuvat/tukijat/exel.gif" Width="150" AlternateText="Exel" />
				</asp:HyperLink></td>
			<td style="width: 30%">
				<h5>
					<a href="http://www.exel.fi">Exel</a></h5>
			</td>
		</tr>
		<tr>
			<td>
				<asp:HyperLink ID="linkToFischer" runat="server" NavigateUrl="http://www.fischer.fi">
					<asp:Image ID="imageFischer" runat="server" ImageUrl="~/kuvat/tukijat/Fischer.png" Width="150" AlternateText="Fischer" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.fischer.fi">Fischer</a></h5>
			</td>
			<td>
				<asp:HyperLink ID="linkToNikon" runat="server" NavigateUrl="http://www.nikon.fi">
					<asp:Image ID="imageNikon" runat="server" ImageUrl="~/kuvat/tukijat/nikon.gif" Width="80" AlternateText="Nikon" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.nikon.fi">Nikon</a></h5>
			</td>
		</tr>
		<tr>
			<td>
				<asp:HyperLink ID="linkToHilleberg" runat="server" NavigateUrl="http://www.hilleberg.se">
					<asp:Image ID="imageHilleberg" runat="server" ImageUrl="~/kuvat/tukijat/hilleberg.jpg" Width="150" AlternateText="Hilleberg" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.hilleberg.se">Hilleberg</a></h5>
			</td>
			<td>
				<asp:HyperLink ID="linkToRuskovilla" runat="server" NavigateUrl="http://www.ruskovilla.fi">
					<asp:Image ID="imageRuskovilla" runat="server" ImageUrl="~/kuvat/tukijat/ruskovilla.jpg" Width="150"
						AlternateText="Ruskovilla" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.ruskovilla.fi">Ruskovilla</a></h5>
			</td>
		</tr>
		<tr>
			<td>
				<asp:HyperLink ID="linkToMildola" runat="server" NavigateUrl="http://www.mildola.fi">
					<asp:Image ID="imageMildola" runat="server" ImageUrl="~/kuvat/tukijat/mildola2.jpg" Width="150" AlternateText="Mildola" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.mildola.fi">Mildola</a></h5>
			</td>
			<td>
				<asp:HyperLink ID="linkToArea" runat="server" NavigateUrl="http://www.area.fi">
					<asp:Image ID="imageArea" runat="server" ImageUrl="~/kuvat/tukijat/area2.gif" Width="150" AlternateText="Area" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.area.fi">Area</a></h5>
			</td>
		</tr>
		<tr>
			<td>
				<asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="http://www.rammer.sandvik.com">
					<asp:Image ID="imageRammer" runat="server" ImageUrl="~/kuvat/tukijat/rammer.jpg" Width="150" AlternateText="Rammer" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.rammer.sandvik.com">Rammer</a></h5>
				Rammer hits harder.
			</td>
			<td>
				<asp:HyperLink ID="linkToVaiska" runat="server" NavigateUrl="http://www.vaiska.fi">
					<asp:Image ID="imageVaiska" runat="server" ImageUrl="~/kuvat/tukijat/vaiska.jpg" Width="150" AlternateText="Vaiska - Ladunavaaja" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.vaiska.fi">Vaiska</a></h5>
				Retkikuntaa tukemassa.
			</td>
		</tr>
		<tr>
			<td>
				<asp:HyperLink ID="linkToVbs" runat="server" NavigateUrl="http://www.vbsnet.fi">
					<asp:Image ID="imageVbsnet" runat="server" ImageUrl="~/kuvat/tukijat/vbsnet2.jpg" Width="150" AlternateText="VBS Net" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.vbsnet.fi">VBS Net</a></h5>
				Pohjoisnapa.fi-sivujen tekijä.
			</td>
			<td>
				<asp:HyperLink ID="linkToEuromaski" runat="server" NavigateUrl="http://www.euromaski.fi">
					<asp:Image ID="imageEuromaski" runat="server" ImageUrl="~/kuvat/tukijat/euromaski.gif" Width="150" AlternateText="Euromaski" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.euromaski.fi">Euromaski</a></h5>
			</td>
		</tr>
		<tr>
			<td>
				<asp:HyperLink ID="linkToVaasa" runat="server" NavigateUrl="http://www.vaasan.com">
					<asp:Image ID="imageVaasan" runat="server" ImageUrl="~/kuvat/tukijat/vaasan.jpg" Width="150" AlternateText="Vaasan &amp; Vaasan Oy" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.vaasan.com">Vaasan &amp; Vaasan</a></h5>
			</td>
			<td>
				<asp:HyperLink ID="linkToOracle" runat="server" NavigateUrl="http://www.oracle.fi">
					<asp:Image ID="image2" runat="server" ImageUrl="~/kuvat/tukijat/oracle.gif" Width="150" AlternateText="Oracle Finland" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.oracle.fi">Oracle Finland</a></h5>
			</td>
		</tr>
		<tr>
			<td>
				<asp:HyperLink ID="linkToNoptel" runat="server" NavigateUrl="http://www.noptel.fi">
					<asp:Image ID="image1" runat="server" ImageUrl="~/kuvat/tukijat/noptel.jpg" Width="150" AlternateText="Vaasan &amp; Vaasan Oy" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.noptel.fi">Noptel</a></h5>
			</td>
			<td>
				<asp:HyperLink ID="linkToKiilto" runat="server" NavigateUrl="http://www.kiilto.fi">
					<asp:Image ID="image3" runat="server" ImageUrl="~/kuvat/tukijat/kiilto.gif" Width="150" AlternateText="Kiilto" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.kiilto.fi">Kiilto</a></h5>
			</td>
		</tr>
		<tr>
			<td>
				<asp:HyperLink ID="linkToFazer" runat="server" NavigateUrl="http://www.fazer.fi">
					<asp:Image ID="imageFazer" runat="server" ImageUrl="~/kuvat/tukijat/fazer.gif" Width="117" AlternateText="Fazer" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.fazer.fi">Fazer</h5>
				</a>
			</td>
			<td>
				<asp:HyperLink ID="linkToPolartherm" runat="server" NavigateUrl="http://www.polartherm.fi">
					<asp:Image ID="image4" runat="server" ImageUrl="~/kuvat/tukijat/polartherm.gif" Width="150" AlternateText="Polartherm" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.polartherm.fi">Polartherm</a></h5>
			</td>
		</tr>
		<tr>
			<td>
				<asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="http://www.garmin.fi">
					<asp:Image ID="image8" runat="server" ImageUrl="~/kuvat/tukijat/garmin.gif" AlternateText="Garmin" />
				</asp:HyperLink></td>
			<td>
				<h5>
					<a href="http://www.garmin.fi">Garmin</a></h5>
			</td>
			<td>
				&#160;
			</td>
			<td>
				<h5>
					&#160;</h5>
			</td>
		</tr>
	</table>
</asp:Content>
