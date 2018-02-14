<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="Retkikunta" Title="Pohjoisnapa 2006 - Retkikunta" Culture="auto" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="Retkikunta.aspx.cs" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="Server">
	<div class="paivakirja" id="texti">
		<p class="poikkeus2">
			<asp:Image runat="server" ID="OtsikkoKuva" ImageUrl="~/kuvat/linkit/otsikot/TXT-otsikko-retkikunta.gif"
				AlternateText="Retkikunta" Width="215px" Height="13px" meta:resourcekey="OtsikkoKuvaResource1" /></p>
		<h4>
			<asp:Localize runat="server" ID="Otsikko" meta:resourcekey="OtsikkoResource1" Text="Unsupport retkikunta pohjoisnavalle"></asp:Localize></h4>
		<asp:Localize runat="server" ID="Teksti" meta:resourcekey="TekstiResource1" Text="&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Laskuvarjoj&auml;&auml;k&auml;rikillan retkikunta hiiht&auml;&auml; maantieteelliselle pohjoisnavalle&#13;&#10;&#9;&#9;&#9;kev&auml;&auml;ll&auml; 2006. Seitsem&auml;n hengen unsupport- retkikunta aloittaa hiihdon Pohjoiskanadasta&#13;&#10;&#9;&#9;&#9;Ward Huntista maaliskuun alussa. Pohjoisnapa saavutetaan 55 vuorokauden kuluttua Wappuna matkan sujuessa&#13;&#10;&#9;&#9;&#9;ennakkosuunnitelmien mukaan. Hiihtomatkaa kertyy 850 kilometri&auml;.&#13;&#10;&#9;&#9;&#9;<br />&#13;&#10;&#9;&#9;&#9;Unsupport retkikunta ei saa matkan aikaan mit&auml;&auml;n t&auml;ydennyksi&auml;, joten kaikki kahden&#13;&#10;&#9;&#9;&#9;kuukauden aikana tarvittavat varusteet kuljetetaan mukana alusta alkaen.&#13;&#10;&#9;&#9;&#9;<br/>&#13;&#10;&#9;&#9;</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Alkumetreill&auml; jokaisen ahkio painaa 120-140 kiloa. Kuorma kevenee yli kilon p&auml;iv&auml;ss&auml;&#13;&#10;&#9;&#9;&#9;polttoaineen ja ruoan kulutuksen mukaan. Olosuhteet arktisell&auml; j&auml;&auml;merell&auml; ovat rajut&#13;&#10;&#9;&#9;&#9;pakkasen laskiessa jopa &ndash;50 asteeseen.&#13;&#10;&#9;&#9;</p>&#13;&#10;&#9;&#9;<h4>&#13;&#10;&#9;&#9;&#9;HIIHT&Auml;J&Auml;T</h4>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Henrik Reims, Poppis Suomela, Toni Vaartimo, Mikko Vermas, Tero Teelahti, Perttu Ojala, Jermi Tertsunen&#13;&#10;&#9;&#9;</p>&#13;&#10;&#9;&#9;<h4>&#13;&#10;&#9;&#9;&#9;SUPPORT TEAM</h4>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Support team eli tukijoukot on oleellinen osa retkikuntaa. Valmistelun aikana support team osallistuu retkikunnan valmisteluun&#13;&#10;&#9;&#9;&#9;yhdess&auml; hiiht&auml;v&auml;n porukan kanssa. Varsinaisen hiihdon aikana support team seuraa tarkasti&#13;&#10;&#9;&#9;&#9;retkikunnan etenemist&auml; ja auttaa tarvittaessa tilanteen mukaan. My&ouml;s n&auml;iden WWW-sivujen&#13;&#10;&#9;&#9;&#9;hiihdon aikainen p&auml;ivitys lep&auml;&auml; support teamin leveill&auml; ja tukevilla hartioilla.&#13;&#10;&#9;&#9;&#9;<br />&#13;&#10;&#9;&#9;&#9;Osa taustajoukosta toimii Resolute Bayssa Kanadassa ja osa Suomessa&#13;&#10;&#9;&#9;</p>&#13;&#10;&#9;&#9;"></asp:Localize>		    
	</div>
	<div class="hiihtajat">
		<span>
			<img src="kuvat/naamat/henkku4.jpg" width="79" height="79" alt="Henrik B. Reims" /><br />
			Henrik B. Reims</span> <span>
				<img src="kuvat/naamat/poppis4.JPG" width="79" height="79" alt="Poppis Suomela" /><br />
				Poppis Suomela</span> <span>
					<img src="kuvat/naamat/toni4.jpg" width="79" height="79" alt="Toni Vaartimo" /><br />
					Toni Vaartimo</span> <span>
						<img src="kuvat/naamat/mikko4.jpg" width="79" height="79" alt="Mikko Vermas" /><br />
						Mikko Vermas</span> <span>
							<img src="kuvat/naamat/tero4.jpg" width="79" height="79" alt="Tero Teelahti" /><br />
							Tero Teelahti</span> <span>
								<img src="kuvat/naamat/perttu4.jpg" width="79" height="79" alt="Perttu Ojala" /><br />
								Perttu Ojala</span> <span>
									<img src="kuvat/naamat/jermi4.jpg" width="79" height="79" alt="Jermi Tertsunen" /><br />
									Jermi Tertsunen</span>
	</div>
</asp:Content>
