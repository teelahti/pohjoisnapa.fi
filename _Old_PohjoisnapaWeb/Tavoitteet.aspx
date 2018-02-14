<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="Tavoitteet" Title="Pohjoisnapa 2006 - Tavoitteet" Culture="auto" meta:resourcekey="PageResource1"
	UICulture="auto" Codebehind="Tavoitteet.aspx.cs" %>

<asp:Content ID="ContentTavoitteet" ContentPlaceHolderID="MainContent" runat="Server">
	<div class="paivakirja" id="texti">
		<p class="poikkeus2">
			<asp:Image runat="server" ID="OtsikkoKuva" ImageUrl="~/kuvat/linkit/otsikot/otsikko-retkik_tavoitteet.gif"
				AlternateText="Tavoitteet" meta:resourcekey="OtsikkoKuvaResource1" /></p>
		<h4>
			<asp:Localize runat="server" ID="Otsikko" meta:resourcekey="OtsikkoResource1" Text="Retkikunnan tavoitteet t�rkeysj�rjestyksess�"></asp:Localize></h4>
		<asp:Localize runat="server" ID="Teksti" meta:resourcekey="TekstiResource1" Text="&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;1. Saavuttaa pohjoisnapa ilman retkikunnalle koituvia pysyvi� henkisi� tai fyysisi� vammoja, sek� ilman&#13;&#10;&#9;&#9;&#9;retkikunnan l�hipiirille koituvia henkisi� vammoja.</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;2. Hiiht�� maantieteelliselle pohjoisnavalle.</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;3. Olla ensimm�inen Suomalainen retkikunta, joka on hiiht�nyt pohjoisnavalle ilman ulkopuolista tukea.&#13;&#10;&#9;&#9;</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;4. Saavuttaa napa 55 p�iv�ss�.</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;5. Ker�t� tietoa ja kokemusta vaikeista arktisista olosuhteista</p>&#9;&#9;&#9;&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;N�iden tavoitteiden lis�ksi ryhm�n tavoitteena on osallistua tieteelliseen tutkimusty�h�n koehenkil�in�&#13;&#10;&#9;&#9;&#9;ja n�ytteiden ker��jin�.</p>&#13;&#10;&#9;&#9;"></asp:Localize>
	</div>
	<asp:Image runat="server" ID="Fiiliskuva" CssClass="paivakirjakuva" ImageUrl="~/kuvat/jpg/leirin-pystytys.jpg"
		AlternateText="Leirin pystytys" Width="360px" Height="270px" meta:resourcekey="FiiliskuvaResource1" />
</asp:Content>
