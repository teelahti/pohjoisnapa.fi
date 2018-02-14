<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="Tausta" Title="Pohjoisnapa 2006 - Taustaa" Culture="auto" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="Tausta.aspx.cs" %>

<asp:Content ID="ContentTausta" ContentPlaceHolderID="MainContent" runat="Server">
	<div class="paivakirja" id="texti">
		
		<p class="poikkeus2">
			<asp:Image runat="server" ID="OtsikkoKuva" ImageUrl="~/kuvat/linkit/otsikot/otsikko-taustaa.gif" Width="185px" Height="16px" AlternateText="Taustaa" meta:resourcekey="OtsikkoKuvaResource1" /></p>
		<h4>
			<asp:Localize runat="server" ID="Otsikko" meta:resourcekey="OtsikkoResource1" Text="Aikaisemmat arktiset retkikunnat"></asp:Localize></h4>
		<asp:Localize runat="server" ID="Teksti" meta:resourcekey="TekstiResource1" Text='&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Laskuvarjoj��k�rikillan arktisten retkikuntien sarja alkoi 1996 Huippuvuorten retkikunnalla. 17 henke�&#13;&#10;&#9;&#9;&#9;hiihti kaksi viikkoa saavuttaen Newtontoppenin (1550) huipun huhtikuussa 1996.</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;1999 Kalaallit Nunaat retkikunta ylitti Gr�nlannin mannerj��tik�n. Kahdeksan henkinen retkikunta hiihti&#13;&#10;&#9;&#9;&#9;yli 600 kilometri� 32 vuorokaudessa. Lopussa sulamisvirrat aiheuttivat suuria ongelmia retkikunnan kahlatessa&#13;&#10;&#9;&#9;&#9;syvimmill��n kainaloihin asti ulottuvissa j��tikk�puroissa. Gr�nlannin l�ntisille reunavuorille noustiin&#13;&#10;&#9;&#9;&#9;hein�kuun alussa. Mannerj��tikk� oli ylitetty.</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Gr�nlannissa saatiin kokemuksia pitk�st� retkikunnasta mutta pakkaskokemukset j�iv�t v�h�iseksi. Magneettisen&#13;&#10;&#9;&#9;&#9;pohjoisnavan retkikunta ker�si kokemuksia eritt�in kylmist� olosuhteista (-30- -40C). 47 vuorokauden&#13;&#10;&#9;&#9;&#9;aikana alun 11 henkinen retkikunta hiihti 650 kilometri�.</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;<a href="http://www.lsvjkilta.fi/arkisto/gronlanti/index.html" target="_blank" class="ulkoinen">Gr�nlannin&#13;&#10;&#9;&#9;&#9;&#9;retkikunta 1999</a>&#13;&#10;&#9;&#9;</p>&#13;&#10;&#9;&#9;<p >&#13;&#10;&#9;&#9;&#9;<a href="http://www.lsvjkilta.fi/napa/index.php" target="_blank" class="ulkoinen">Magneettisen pohjoisnavan&#13;&#10;&#9;&#9;&#9;&#9;retkikunta 2003</a></p>&#13;&#10;&#9;&#9;'></asp:Localize>
	</div>
	<asp:Image runat="server" ID="Fiiliskuva" CssClass="paivakirjakuva" ImageUrl="~/kuvat/jpg/naamat-huurussa.jpg" AlternateText="Huurussa" Width="360px" Height="282px" meta:resourcekey="FiiliskuvaResource1" />
</asp:Content>
