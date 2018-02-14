<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="Kartta" Title="Pohjoisnapa 2006 - Kartta" Culture="auto" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="Kartta.aspx.cs" %>

<asp:Content ID="ContentKartta" ContentPlaceHolderID="MainContent" runat="Server">
	<div class="paivakirja" id="texti">
		<p class="poikkeus2">
			<asp:Image runat="server" ID="Karttaotsikkokuva" AlternateText="Kartta" ImageUrl="~/kuvat/linkit/otsikot/otsikko-kartta.gif" Width="185px" Height="16px" meta:resourcekey="KarttaotsikkokuvaResource1" /></p>
		<h4>
			<asp:Localize runat="server" ID="Otsikko" meta:resourcekey="Otsikko" Text="&#13;&#10;&#9;&#9;&#9;KARTTA&#13;&#10;&#9;&#9;&#9;"></asp:Localize>
			</h4>
		<asp:Localize runat="server" ID="Teksti" meta:resourcekey="TekstiResource1">
		<p>
		</p>
		</asp:Localize>
	</div>
</asp:Content>
