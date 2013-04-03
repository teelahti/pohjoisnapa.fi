<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="Olosuhteet" Title="Pohjoisnapa 2006 - Olosuhteet" Culture="auto" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="Olosuhteet.aspx.cs" %>

<asp:Content ID="ContentOlosuhteet" ContentPlaceHolderID="MainContent" runat="Server">
	<div class="paivakirja">
		<p class="poikkeus2">
			<asp:Image runat="server" ID="OtsikkoKuva" ImageUrl="~/kuvat/linkit/otsikot/otsikko-olosuhteet.gif" Width="185px" Height="16px" AlternateText="Olosuhteet" meta:resourcekey="OtsikkoKuvaResource1" />
		</p>
		<h4>
			<asp:Localize runat="server" ID="Otsikko" meta:resourcekey="OtsikkoResource1" Text="Olosuhteet"></asp:Localize></h4>
		<asp:Localize runat="server" ID="Teksti" meta:resourcekey="TekstiResource1" Text="&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;&#13;&#10;&#9;&#9;</p>&#13;&#10;&#9;&#9;"></asp:Localize>
	</div>
	<asp:Image runat="server" ID="Fiiliskuva" ImageUrl="http://img.pohjoisnapa.fi/paivakirja/paivakirja360.jpg" Width="360px" Height="270px" meta:resourcekey="FiiliskuvaResource1" />
</asp:Content>
