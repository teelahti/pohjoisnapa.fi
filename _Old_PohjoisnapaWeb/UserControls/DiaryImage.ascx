<%@ Control Language="C#" AutoEventWireup="true" Inherits="UserControls.DiaryImage"
	EnableViewState="false" Codebehind="DiaryImage.ascx.cs" %>
<asp:MultiView ID="ViewSwitch" runat="server" OnPreRender="ToggleView">
	<asp:View ID="ViewFirstImageOnly" runat="server">
		<a id="LinkToDiaryMain" href="~/Paivakirja.aspx" runat="server" class="etus_pienikuva">
			<asp:Image OnPreRender="BindImageUrl" runat="server" ID="DiaryImageSmall" Width="135px" ToolTip="Lue koko p&#228;iv&#228;kirjamerkint&#228;"
				meta:resourcekey="DiaryImageSmallResource1" />
		</a>
	</asp:View>
	<asp:View ID="ViewAllImages" runat="server">
		<asp:Repeater ID="Images" runat="server">
			<ItemTemplate>
				<asp:HyperLink runat="server" ID="LinkToFullImageFi" NavigateUrl='<%# Bind("Id", "http://img.pohjoisnapa.fi/paivakirja/{0:000}.jpeg") %>'
					Visible="<%# IsFinnish %>" meta:resourcekey="LinkToFullImageFiResource1">
					<asp:Image runat="server" ID="DiaryImageFi" Width="360px" ImageUrl='<%# Bind("Id", "http://img.pohjoisnapa.fi/paivakirja/{0:000}-small.jpeg") %>'
						ToolTip='<%# Bind("Caption_fi", "{0} Klikkaa nähdäksesi kuva alkuperäisen kokoisena.") %>' Visible="<%# IsFinnish %>" meta:resourcekey="DiaryImageFiResource1" />
				</asp:HyperLink>
				<asp:HyperLink runat="server" ID="LinkToFullImageEn" NavigateUrl='<%# Bind("Id", "http://img.pohjoisnapa.fi/paivakirja/{0:000}.jpeg") %>'
					Visible="<%# IsEnglish %>" meta:resourcekey="LinkToFullImageResource1">
					<asp:Image runat="server" ID="DiaryImageEn" Width="360px" ImageUrl='<%# Bind("Id", "http://img.pohjoisnapa.fi/paivakirja/{0:000}-small.jpeg") %>'
						ToolTip='<%# Bind("Caption_en", "{0} Click to see full size image.") %>' Visible="<%# IsEnglish %>" meta:resourcekey="DiaryImageEnResource1" />
				</asp:HyperLink>
				<p>
					<asp:Literal ID="CaptionFi" runat="server" Text='<%# Bind("Caption_fi") %>' Visible="<%# IsFinnish %>" />
					<asp:Literal ID="CaptionEn" runat="server" Text='<%# Bind("Caption_en") %>' Visible="<%# IsEnglish %>" />
				</p>
			</ItemTemplate>
		</asp:Repeater>
	</asp:View>
</asp:MultiView>