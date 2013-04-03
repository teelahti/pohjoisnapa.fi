<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true" Inherits="Messut" Title="Untitled Page" Culture="auto" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="Messut.aspx.cs" %>
<asp:Content ID="contentMessut" ContentPlaceHolderID="MainContent" Runat="Server">
	<h4>
		<asp:Localize ID="otsikkoMessut" runat="server" Text="Tilaisuudet" meta:resourcekey="otsikkoMessutResource1" /></h4>
	<asp:Localize ID="introText" runat="Server" meta:resourcekey="introTextResource1" Text="<p>Retkikunta on esillä seuraavissa julkisissa tilaisuuksissa</p>" ></asp:Localize>
	
	<ul>
		<li>
			Erä-messut 2006</li><li>
			Ski-Expo 2006</li></ul>

	<br />
</asp:Content>

