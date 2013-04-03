<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="Arktis" Title="Pohjoisnapa 2006 - Tietoa arktiksesta" Culture="auto" meta:resourcekey="PageResource1"
	UICulture="auto" Codebehind="Arktis.aspx.cs" %>

<asp:Content ID="ContentArktis" ContentPlaceHolderID="MainContent" runat="Server">
	<div class="paivakirja" id="texti">
		<p class="poikkeus2">
			<asp:Image ID="ArktisOtsikkoKuva" runat="server" AlternateText="Arktis" ImageUrl="~/kuvat/linkit/otsikot/otsikko-arktis.gif"
				meta:resourcekey="ArktisOtsikkoKuvaResource1" />
		</p>
		<h4>
			<asp:Localize ID="ArktisHeader" runat="server" meta:resourcekey="ArktisHeaderResource1" ></asp:Localize>
		</h4>
		<asp:Localize ID="ArktisText" runat="server" meta:resourcekey="ArktisTextResource1"></asp:Localize>
	</div>
	<asp:Image ID="ArktisFiilisKuva" runat="server" ImageUrl="http://img.pohjoisnapa.fi/paivakirja/paivakirja360.jpg" CssClass="paivakirjakuva"
		AlternateText="Päiväkirjakuva" Width="360px" meta:resourcekey="ArktisFiilisKuvaResource1" />
</asp:Content>
