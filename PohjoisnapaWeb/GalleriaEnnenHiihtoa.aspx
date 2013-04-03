<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true" Inherits="GalleriaEnnenHiihtoa" Title="Pohjoisnapa 2006 - Galleria, ennen hiihdon alkamista otetut kuvat" Culture="auto" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="GalleriaEnnenHiihtoa.aspx.cs" %>
<asp:Content ID="contentGalleriaRetki" ContentPlaceHolderID="MainContent" Runat="Server">
	<h4><asp:Localize runat="server" ID="otsikko" Text="Retkikuntakuvat ennen hiihdon alkua" meta:resourcekey="otsikkoResource1" /></h4>
	<asp:Hyperlink runat="server" ID="linkToAfter" Text="Hiihdon aikana otetut kuvat." NavigateUrl="~/GalleriaHiihto.aspx" meta:resourcekey="linkToAfterGallery"></asp:Hyperlink>
	<br />
	<br />
	<asp:Repeater ID="Images" runat="server">
		<ItemTemplate>
			<div style="float: left; margin: 0px 10px 10px 0px; height: 180px;">
				<asp:HyperLink runat="server" ID="LinkToFullImageFi" rel="fullimage" Visible='<%# IsFinnish %>' ToolTip='<%# Bind("Caption_fi") %>'
                    NavigateUrl='<%# Bind("Id", "http://img.pohjoisnapa.fi/paivakirja/{0:000}.jpeg") %>'>
					<asp:Image runat="server" ID="DiaryImageFi" ImageUrl='<%# Bind("Id", "http://img.pohjoisnapa.fi/paivakirja/{0:000}-thumbnail.jpeg") %>'
						ToolTip='<%# Bind("Caption_fi") %>' />
				</asp:HyperLink>

				<asp:HyperLink runat="server" ID="LinkToFullImageEn" rel="fullimage" Visible='<%# IsEnglish%>' ToolTip='<%# Bind("Caption_en") %>'
                    NavigateUrl='<%# Bind("Id", "http://img.pohjoisnapa.fi/paivakirja/{0:000}.jpeg") %>'>
					<asp:Image  runat="server" ID="DiaryImageEn" ImageUrl='<%# Bind("Id", "http://img.pohjoisnapa.fi/paivakirja/{0:000}-thumbnail.jpeg") %>'
						ToolTip='<%# Bind("Caption_en") %>' />
				</asp:HyperLink>
			</div>
		</ItemTemplate>
	</asp:Repeater>
	<br />
</asp:Content>

<asp:Content id="GalleryStyles" ContentPlaceHolderID="StyleContent" runat="server">
    <link id="Link1" href="Scripts/fancybox/jquery.fancybox-1.3.4.css" rel="stylesheet" type="text/css" runat="server" />
</asp:Content>

<asp:Content id="GalleryScripts" ContentPlaceHolderID="ScriptContent" runat="server">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
    <script src="Scripts/fancybox/jquery.fancybox-1.3.4.pack.js" type="text/javascript"></script>
    <script>
        $("div#Content > div > a").fancybox({ type: 'image', overlayColor: '#000', overlayOpacity: 0.9 });
    </script>
</asp:Content>

