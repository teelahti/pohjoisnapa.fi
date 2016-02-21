<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="Paivakirja" Title="Pohjoisnapa 2006 - Päiväkirja" Codebehind="Paivakirja.aspx.cs" %>
<%@ Register TagPrefix="Diary" TagName="Entry" Src="~/UserControls/DiaryEntry.ascx" %>	
<asp:Content ID="ContentPaivakirja" ContentPlaceHolderID="MainContent" runat="Server">
	<Diary:Entry runat="server" ID="diaryentry" Layout="Full" />
</asp:Content>
<asp:Content ID="GalleryStyles" ContentPlaceHolderID="StyleContent" runat="server">
    <link href="Scripts/fancybox/jquery.fancybox-1.3.4.css" rel="stylesheet"
        type="text/css" runat="server" />
</asp:Content>
<asp:Content ID="GalleryScripts" ContentPlaceHolderID="ScriptContent" runat="server">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
    <script src="Scripts/fancybox/jquery.fancybox-1.3.4.pack.js" type="text/javascript"></script>
    <script>
        $("div.paivakirjakuva a").fancybox({ type: 'image', overlayColor: '#000', overlayOpacity: 0.9 });
    </script>
</asp:Content>
