<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true" Inherits="GalleriaHiihto" Title="Pohjoisnapa 2006 - Galleria, hiihdon aikana otetut kuvat" Culture="auto" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="GalleriaHiihto.aspx.cs" %>
<asp:Content ID="contentGalleriaHiihto" ContentPlaceHolderID="MainContent" Runat="Server">
    <h4><asp:Localize runat="server" ID="otsikko" Text="Hiihdon aikana otetut retkikuntakuvat" meta:resourcekey="otsikkoResource1" /></h4>
    <asp:Hyperlink runat="server" ID="linkToBefore" Text="Ennen hiihtoa otetut kuvat." NavigateUrl="~/galleriaennenhiihtoa.aspx" meta:resourcekey="linkToBeforeGallery"></asp:Hyperlink>
    <br />
    <br />
    <asp:Repeater ID="Images" runat="server">
        <ItemTemplate>
            <div style="float: left; margin: 0px 10px 10px 0px; height: 180px;">
                <asp:HyperLink runat="server" ID="LinkToFullImageFi" Visible='<%# IsFinnish %>' 
                    rel="fullimage" ToolTip='<%#Bind("Caption_fi")%>'
                    NavigateUrl='<%# Bind("Id", "http://img.pohjoisnapa.fi/paivakirja/{0:000}.jpeg") %>'>
                    <asp:Image runat="server" ID="DiaryImageFi" ImageUrl='<%# Bind("Id", "http://img.pohjoisnapa.fi/paivakirja/{0:000}-thumbnail.jpeg") %>'
                        ToolTip='<%# Bind("Caption_fi") %>' />
                </asp:HyperLink>

                <asp:HyperLink runat="server" ID="LinkToFullImageEn" Visible='<%# IsEnglish %>' 
                    rel="fullimage" ToolTip='<%#Bind("Caption_en")%>'
                    NavigateUrl='<%# Bind("Id", "http://img.pohjoisnapa.fi/paivakirja/{0:000}.jpeg") %>'>
                    <asp:Image runat="server" ID="DiaryImageEn" ImageUrl='<%# Bind("Id", "http://img.pohjoisnapa.fi/paivakirja/{0:000}-thumbnail.jpeg") %>'
                        ToolTip='<%# Bind("Caption_en") %>' />
                </asp:HyperLink>
            </div>
        </ItemTemplate>
    </asp:Repeater>
    <br />
</asp:Content>

<asp:Content id="GalleryStyles" ContentPlaceHolderID="StyleContent" runat="server">
    <link rel="stylesheet" href="Content/fancybox/source/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />
</asp:Content>

<asp:Content id="GalleryScripts" ContentPlaceHolderID="ScriptContent" runat="server">
    <script src="//code.jquery.com/jquery-latest.min.js"></script>
    <script src="Content/fancybox/source/jquery.fancybox.pack.js?v=2.1.5" type="text/javascript"></script>
    <script>
        $("div#Content > div > a").fancybox({ type: 'image', overlayColor: '#000', overlayOpacity: 0.9});
    </script>
</asp:Content>