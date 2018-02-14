<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="Aikataulu" Title="Pohjoisnapa 2006 - Aikataulu" Culture="auto" meta:resourcekey="PageResource1"
	UICulture="auto" Codebehind="Aikataulu.aspx.cs" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="Server">
	<div class="paivakirja" id="div1">
		<p class="poikkeus2">
			<asp:Image runat="server" id="AikatauluOtsikkokuva" ImageUrl="kuvat/linkit/otsikot/otsikko-aikataulu.gif" AlternateText="Aikataulu" meta:resourcekey="aikatauluOtsikkoKuva" /></p>
		<h4>
			<asp:Literal runat="server" ID="AikatauluHeader" meta:resourcekey="AikatauluHeaderResource1" Text="&#13;&#10;&#9;&#9;&#9;AIKATAULU"></asp:Literal>
		</h4>
		<asp:Localize ID="AikatauluText" runat="server" Mode="Transform" meta:resourcekey="AikatauluTextResource1"></asp:Localize>
	</div>
	<img runat="server" id="AikatauluKuva" src="kuvat/jpg/leirin-pystytys.jpg" alt="Leirin pystytys" width="360"
		height="270" class="paivakirjakuva" />
</asp:Content>
