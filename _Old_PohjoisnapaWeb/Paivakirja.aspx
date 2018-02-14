<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="Paivakirja" Title="Pohjoisnapa 2006 - Päiväkirja" Codebehind="Paivakirja.aspx.cs" %>
<%@ Register TagPrefix="Diary" TagName="Entry" Src="~/UserControls/DiaryEntry.ascx" %>	
<asp:Content ID="ContentPaivakirja" ContentPlaceHolderID="MainContent" runat="Server">
	<Diary:Entry runat="server" ID="diaryentry" Layout="Full" />
</asp:Content>
<asp:Content ID="GalleryStyles" ContentPlaceHolderID="StyleContent" runat="server">
    <link rel="stylesheet" href="Content/fancybox/source/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />
</asp:Content>
<asp:Content ID="GalleryScripts" ContentPlaceHolderID="ScriptContent" runat="server">
    <script src="//code.jquery.com/jquery-latest.min.js"></script>
    <script src="Content/fancybox/source/jquery.fancybox.pack.js?v=2.1.5" type="text/javascript"></script>
    <script>
        $("div.paivakirjakuva a").fancybox({ type: 'image', overlayColor: '#000', overlayOpacity: 0.9 });
    </script>
</asp:Content>
