<%@ Page EnableSessionState="false" EnableViewState="false" Language="C#" MasterPageFile="~/Pohjoisnapa.master" 
	AutoEventWireup="true" Inherits="_Default" Title="Pohjoisnapa 2006" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="Default.aspx.cs" %>

<%@ Register TagPrefix="Diary" TagName="Entry" Src="~/UserControls/DiaryEntry.ascx" %>
<asp:Content ID="ContentFrontpage" ContentPlaceHolderID="MainContent" runat="Server">
	<div class="etusivu">
		<Diary:Entry ID="EtusivuPaivakirja" Layout="Summary" runat="Server" />
		<div class="puoliblokki vasen" id="texRetkik">
			<h2>
				<a href="Retkikunta.aspx">
					<asp:Image ID="ExpeditionHeaderImage" runat="Server" ImageUrl="kuvat/linkit/otsikot/TXT-otsikko-retkikunta.gif"
						AlternateText="Retkikunta" meta:resourcekey="ExpeditionHeaderImageResource1" />
				</a>
			</h2>
			<h3>
				<asp:Localize ID="TextExpeditionHeader" runat="server" meta:resourcekey="TextExpeditionHeaderResource1" Text="&#13;&#10;&#9;&#9;&#9;&#9;Unsupport-retkikunta pohjoisnavalle"></asp:Localize></h3>
			<p>
				<asp:Localize ID="TextExpedition" runat="server" meta:resourcekey="TextExpeditionResource1" Text="&#13;&#10;&#9;&#9;&#9;&#9;Laskuvarjoj‰‰k‰rikillan retkikunta hiiht‰‰ maantieteelliselle pohjoisnavalle kev‰‰ll‰ 2006. Seitsem&auml;n&#13;&#10;&#9;&#9;&#9;&#9;hengen unsupport- retkikunta aloittaa hiihdon Pohjoiskanadasta Ward Huntista maaliskuun alussa ... &#13;&#10;&#9;&#9;&#9;&#9;"></asp:Localize>
				<asp:HyperLink ID="LinkExpeditionMore" runat="server" NavigateUrl="Retkikunta.aspx" meta:resourcekey="LinkExpeditionMoreResource1">Lue lis‰‰</asp:HyperLink>
			</p>
		</div>
		<div class="puoliblokki oikea" id="textSendEmail">
		</div>
		<div class="puoliblokki oikea" id="textFollow">
		    <br />
			<h4 style="padding-top: 1em;">
			    <asp:HyperLink runat="server" id="linkFollow" Text="Kirja julkaistu" NavigateUrl="~/Kirja.aspx" meta:resourcekey="LinkToFollow" /></h4>
			    <asp:HyperLink runat="server" id="HyperLink1" Text="Tutustu ja tilaa..." NavigateUrl="~/Kirja.aspx" meta:resourcekey="LinkOrder" />
			<p>
				<asp:Localize ID="TextFollow" runat="server" meta:resourcekey="TextFollow" Text=""></asp:Localize>
			</p>
		</div>		
	</div>
</asp:Content>
