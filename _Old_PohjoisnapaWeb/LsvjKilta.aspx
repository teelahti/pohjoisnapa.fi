<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="LsvjKilta" Title="Pohjoisnapa 2006 - Laskuvarjojääkärikilta" Culture="auto" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="LsvjKilta.aspx.cs" %>

<asp:Content ID="ContentLsvjk" ContentPlaceHolderID="MainContent" runat="Server">
	<div class="paivakirja" id="texti">
		<p class="poikkeus2">
			<asp:Image runat="server" ID="OtsikkoKuva" ImageUrl="~/kuvat/linkit/otsikot/otsikko-jaak_kilta.gif" meta:resourcekey="OtsikkoKuvaResource1" /></p>
		<h4>
			<asp:Localize runat="server" ID="Otsikko" meta:resourcekey="OtsikkoResource1" Text="EXCELSIOR"></asp:Localize></h4>
		<asp:Localize runat="server" ID="Teksti" meta:resourcekey="TekstiResource1" Text='&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Vuonna 1964 perustettu Laskuvarjojääkärikilta ry toimii Laskuvarjojääkärikoulun käyneiden miesten yhdyssiteenä,&#13;&#10;&#9;&#9;&#9;ollen Suomen suurimpia maanpuolustuskiltoja. 2000 jäsenen ja 19 paikallisosaston voimin kilta jatkaa&#13;&#10;&#9;&#9;&#9;Laskuvarjojääkärikoulussa opittuja reippaita toimintatapoja ja vaalii Päämajan tiedustelupataljoona&#13;&#10;&#9;&#9;&#9;(ErP4) perinteitä. Vanhojen kaukopartiomiesten aikanaan suorittaman tärkeän työn ja perinteen vaaliminen&#13;&#10;&#9;&#9;&#9;on Laskuvarjojääkärikillan kunniatehtävä.</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Killan erikoisalueita vaativien retkikuntien järjestämisen lisäksi ovat laskuvarjourheilu, sukellus,&#13;&#10;&#9;&#9;&#9;radioamatööritoiminta, ammunta ja vapaaehtoinen maanpuolustuskoulutus. Kaikilla edellä mainituilla osa-alueilla&#13;&#10;&#9;&#9;&#9;on jäsenistön koulutus merkittävässä asemassa.&#13;&#10;&#9;&#9;</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Kiltalaisia yhdistää seikkailunhalu ja punainen baretti.</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Lisätietoja killan toiminnasta <a href="http://www.lsvjkilta.fi" target="_blank" class="ulkoinen">http://www.lsvjkilta.fi</a></p>&#13;&#10;&#9;&#9;'></asp:Localize>
	</div>
	<asp:Image runat="server" ID="FiilisKuva" ImageUrl="~/kuvat/jpg/kartanlukua.jpg" AlternateText="Kartan lukua" Width="360px" Height="275px" CssClass="paivakirjakuva" meta:resourcekey="FiilisKuvaResource1" />
</asp:Content>
