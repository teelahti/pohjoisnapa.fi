<%@ Page Language="C#" AutoEventWireup="true" Inherits="PaivakirjaLista"
	MasterPageFile="~/Pohjoisnapa.master" Title="Pohjoisnapa 2006 - Lista päiväkirjamerkinnöistä" Codebehind="PaivakirjaLista.aspx.cs" %>

<%@ Register TagPrefix="Diary" TagName="List" Src="~/UserControls/DiaryEntries.ascx" %>
<%@ Register TagPrefix="Diary" TagName="RssSubscribe" Src="~/UserControls/RssSubscribe.ascx" %>
<asp:Content ID="ContentPaivakirjaLista" ContentPlaceHolderID="MainContent" runat="Server">

	<Diary:List runat="server" ID="diaryentrylist" />
	
	<Diary:RssSubscribe runat="server" id="Rss" />
	
	
</asp:Content>
