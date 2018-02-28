<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="Media" Title="Pohjoisnapa 2006 - Median�kyvyys" Culture="auto" meta:resourcekey="PageResource1"
	UICulture="auto" Codebehind="Media.aspx.cs" %>

<asp:Content ID="contentMedia" ContentPlaceHolderID="MainContent" runat="Server">
	<h4>
		<asp:Localize ID="otsikkoMedia" runat="server" Text="Retkikunnan median�kyvyys" meta:resourcekey="otsikkoMediaResource1" /></h4>
	<asp:Localize ID="introText" runat="Server" meta:resourcekey="introTextResource1" Text="&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Matkan aikana retkikuntaa s��nn�llisesti seuraavat MTV 3:n Huomenta Suomi, Radio Nova, Apu-lehti, sek� Retki-lehti. &#13;&#10;&#9;&#9;&#9;My�s useat valtakunnalliset ja alueelliset sanoma- ja aikakausilehdet seuraavat ja &#13;&#10;&#9;&#9;&#9;kirjoittavat retkikunnasta matkan aikana.</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;My�hemmin vuonna 2006 tehd��n matkasta TV-dokumentti, tai -dokumenttisarja. Dokumentin julkaisuajankohta on viel� avoinna.&#9;</p>&#13;&#10;&#9;&#9;&#13;&#10;&#9;"></asp:Localize>
	<h5>
		<asp:Localize ID="otsikkoArtikkelit" runat="server" Text="Retkikuntaa k�sittelev�t artikkelit" meta:resourcekey="otsikkoArtikkelitResource1" /></h5>
	<asp:Localize ID="Localize1" runat="Server" Text="&#13;&#10;&#9;&#9;<p>Mukana ovat vain artikkelit jotka on kirjoitettu ennen liikkeelle l�ht��.</p>&#13;&#10;&#9;"
		meta:resourcekey="Localize1Resource1"></asp:Localize>
	<ul>
		<li>
			P��m��r�n� pohjoisnapa, Apu, 2/2006, <a href="http://www.apu.fi/ajassa/article125359-1.html">www.apu.fi/ajassa/article125359-1.html</a></li><li>
				Ahkiot arkkuun ja matkaan, Apu, 4/2006, <a href="http://www.apu.fi/ajassa/article125703-1.html">www.apu.fi/ajassa/article125703-1.html</a></li><li>
					Maailman ��riin, Retki, 8/2005</li>
		<li>
			Kohti pohjoista, Retki, 2/2006</li>
		<li>
			Kohti maantieteellist� pohjoisnapaa, Somero, 14.2.2006</li>
		<li>
			Lsvjkiltalaiset tuntevat arktiset olot, L�nsiv�yl�, 4.2.2006</li>
		<li>
			Kylm�� kyyti�, Satakunnan kansa, viikkoliite Virta, 13.1.-19.1.2006 </li>
		<li>
			From Everest to the North Pole: Airborne Ranger Club of Finland unsupported attempt in 2006, ThePoles.com
			23.10.2005, <a href="http://www.thepoles.com/news.php?id=1202 ">http://www.thepoles.com/news.php?id=1202
			</a></li>
	</ul>
	<h5>
		<asp:Localize ID="otsikkoEsiintymiset" runat="server" Text="TV- ja radioesiintymiset" meta:resourcekey="otsikkoEsiintymisetResource1" /></h5>
		<ul>
			<li>
				Radio Nova, etenkin viikonloppuisin</li>
			<li>
				Huomenta suomi, MTV 3, joka maanantai kello 6.38</li>
		</ul>
	<br />
</asp:Content>
