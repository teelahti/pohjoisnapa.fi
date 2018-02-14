<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="LsvjKilta" Title="Pohjoisnapa 2006 - Laskuvarjoj��k�rikilta" Culture="auto" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="LsvjKilta.aspx.cs" %>

<asp:Content ID="ContentLsvjk" ContentPlaceHolderID="MainContent" runat="Server">
	<div class="paivakirja" id="texti">
		<p class="poikkeus2">
			<asp:Image runat="server" ID="OtsikkoKuva" ImageUrl="~/kuvat/linkit/otsikot/otsikko-jaak_kilta.gif" meta:resourcekey="OtsikkoKuvaResource1" /></p>
		<h4>
			<asp:Localize runat="server" ID="Otsikko" meta:resourcekey="OtsikkoResource1" Text="EXCELSIOR"></asp:Localize></h4>
		<asp:Localize runat="server" ID="Teksti" meta:resourcekey="TekstiResource1" Text='&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Vuonna 1964 perustettu Laskuvarjoj��k�rikilta ry toimii Laskuvarjoj��k�rikoulun k�yneiden miesten yhdyssiteen�,&#13;&#10;&#9;&#9;&#9;ollen Suomen suurimpia maanpuolustuskiltoja. 2000 j�senen ja 19 paikallisosaston voimin kilta jatkaa&#13;&#10;&#9;&#9;&#9;Laskuvarjoj��k�rikoulussa opittuja reippaita toimintatapoja ja vaalii P��majan tiedustelupataljoona&#13;&#10;&#9;&#9;&#9;(ErP4) perinteit�. Vanhojen kaukopartiomiesten aikanaan suorittaman t�rke�n ty�n ja perinteen vaaliminen&#13;&#10;&#9;&#9;&#9;on Laskuvarjoj��k�rikillan kunniateht�v�.</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Killan erikoisalueita vaativien retkikuntien j�rjest�misen lis�ksi ovat laskuvarjourheilu, sukellus,&#13;&#10;&#9;&#9;&#9;radioamat��ritoiminta, ammunta ja vapaaehtoinen maanpuolustuskoulutus. Kaikilla edell� mainituilla osa-alueilla&#13;&#10;&#9;&#9;&#9;on j�senist�n koulutus merkitt�v�ss� asemassa.&#13;&#10;&#9;&#9;</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Kiltalaisia yhdist�� seikkailunhalu ja punainen baretti.</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Lis�tietoja killan toiminnasta <a href="http://www.lsvjkilta.fi" target="_blank" class="ulkoinen">http://www.lsvjkilta.fi</a></p>&#13;&#10;&#9;&#9;'></asp:Localize>
	</div>
	<asp:Image runat="server" ID="FiilisKuva" ImageUrl="~/kuvat/jpg/kartanlukua.jpg" AlternateText="Kartan lukua" Width="360px" Height="275px" CssClass="paivakirjakuva" meta:resourcekey="FiilisKuvaResource1" />
</asp:Content>
