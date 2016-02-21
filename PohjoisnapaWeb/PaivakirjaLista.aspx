<%@ Page Language="C#" AutoEventWireup="true" Inherits="PaivakirjaLista"
	MasterPageFile="~/Pohjoisnapa.master" Title="Pohjoisnapa 2006 - Lista päiväkirjamerkinnöistä" Codebehind="PaivakirjaLista.aspx.cs" %>

<%@ Register TagPrefix="Diary" TagName="List" Src="~/UserControls/DiaryEntries.ascx" %>
<asp:Content ID="ContentPaivakirjaLista" ContentPlaceHolderID="MainContent" runat="Server">

	<Diary:List runat="server" ID="diaryentrylist" />
	
</asp:Content>
