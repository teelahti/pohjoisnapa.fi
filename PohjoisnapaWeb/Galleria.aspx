<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true" Inherits="Galleria" Title="Pohjoisnapa 2006 - Galleria"
    Culture="auto" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="Galleria.aspx.cs" %>
<%@ Register TagPrefix="k" TagName="Kuva" src="~/UserControls/GalleriaKuva.ascx" %>
<asp:Content ID="ContentGalleria" ContentPlaceHolderID="MainContent" runat="Server">
    <h4>
        <asp:Localize runat="server" ID="Otsikko" meta:resourcekey="OtsikkoResource1" Text="KUVAGALLERIA, kuvia aikaisemmilta retkikunnilta"></asp:Localize></h4>
    <p>
        &nbsp;</p>
    <div id="images">
        <k:Kuva runat="server" Key="ahtojaat" Text="<%$Resources:ahtojaat %>"></k:Kuva>
        <k:Kuva runat="server" Key="ahtojaissa-jermi" Text="<%$Resources:ahtojaissa-jermi %>"></k:Kuva>
        <k:Kuva runat="server" Key="ahtojaissa-tero-2" Text="<%$Resources:ahtojaissa-tero-2%>"></k:Kuva>
        <k:Kuva runat="server" Key="ahtojaissa-tero-ja-jermi" Text="<%$Resources:ahtojaissa-tero-ja-jermi %>"></k:Kuva>
        <k:Kuva runat="server" Key="auringonlasku-leirissa" Text="<%$Resources:auringonlasku-leirissa%>"></k:Kuva>
        <k:Kuva runat="server" Key="jermi-pesulla" Text="<%$Resources:jermi-pesulla %>"></k:Kuva>
        <k:Kuva runat="server" Key="hiihto-vastavaloon" Text="<%$Resources:hiihto-vastavaloon %>"></k:Kuva>
        <k:Kuva runat="server" Key="karhun-jalki-ja-mono" Text="<%$Resources:karhun-jalki-ja-mono %>"></k:Kuva>
        <k:Kuva runat="server" Key="kartanlukua-lehteen" Text="<%$Resources:kartanlukua-lehteen%>"></k:Kuva>
        <k:Kuva runat="server" Key="kiiltotau" Text="<%$Resources:kiiltotau %>"></k:Kuva>
        <k:Kuva runat="server" Key="kylma" Text="<%$Resources:kylma %>"></k:Kuva>
        <k:Kuva runat="server" Key="leiri-lumessa" Text="<%$Resources:leiri-lumessa %>"></k:Kuva>
        <k:Kuva runat="server" Key="leirin-pystytys" Text="<%$Resources:leirin-pystytys %>"></k:Kuva>
        <k:Kuva runat="server" Key="lvjk2" Text="<%$Resources:lvjk2 %>"></k:Kuva>
        <k:Kuva runat="server" Key="lvjk1" Text="<%$Resources:lvjk1 %>"></k:Kuva>
        <k:Kuva runat="server" Key="suomenlippu-oviaukossa" Text="<%$Resources:suomenlippu-oviaukossa %>"></k:Kuva>
        <k:Kuva runat="server" Key="naamat-huurussa" Text="<%$Resources:naamat-huurussa %>"></k:Kuva>
    </div>
    <p>
    </p>
</asp:Content>
<asp:Content ID="GalleryStyles" ContentPlaceHolderID="StyleContent" runat="server">
<link rel="stylesheet" href="Content/fancybox/source/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />
</asp:Content>
<asp:Content ID="GalleryScripts" ContentPlaceHolderID="ScriptContent" runat="server">
    <script src="//code.jquery.com/jquery-latest.min.js"></script>
    <script src="Content/fancybox/source/jquery.fancybox.pack.js?v=2.1.5" type="text/javascript"></script>
    <script>
        $("div#images > a").fancybox({ type: 'image', overlayColor: '#000', overlayOpacity: 0.9 });
    </script>
</asp:Content>
