<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true"
	Inherits="Ilmastonmuutos" Title="Pohjoisnapa 2006 - Ilmastonmuutos" Culture="auto" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="Ilmastonmuutos.aspx.cs" %>

<asp:Content ID="ContentIlmastonmuutos" ContentPlaceHolderID="MainContent" runat="Server">
	<div class="artikkeli">
		<h4>
			<asp:Localize runat="server" ID="Otsikko" meta:resourcekey="OtsikkoResource1" Text="Ilmastonmuutos yleisesti"></asp:Localize></h4>
		<asp:Localize runat="server" ID="IlmastonmuutosTeksti" meta:resourcekey="IlmastonmuutosTekstiResource1" Text="&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Ilmaston muutokset pitkien aikojen kuluessa ovat luonnollisia. Nyky��n ilmastonmuutoksena k�sitet��n&#13;&#10;&#9;&#9;&#9;p��asiassa suoraan tai ep�suorasti ihmisen toiminnasta aiheutuvaa ep�normaalia ilmaston l�mpenemist�.&#13;&#10;&#9;&#9;&#9;Viime aikoina tapahtuneen ilmaston poikkeavan l�mpenemisen katsotaan johtuvan ihmisen toiminnasta, erityisesti&#13;&#10;&#9;&#9;&#9;teollisuuden p��st�ist� sek� metsien v�henemisest� maailmanlaajuisesti.&#13;&#10;&#9;&#9;</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Ihmisen aikaansaamaa muutosta kuvataan my�s kasvihuoneilmi�ksi. Kasvihuoneilmi� syntyy siit�, ett� l�mp�energiaa&#13;&#10;&#9;&#9;&#9;tuottavat auringons�teet p��sev�t maapallolle ilmakeh�n (ja otsonikerroksen) l�pi voimakkaammin kuin&#13;&#10;&#9;&#9;&#9;ennen, mutta johtuen kasvaneesta kasvihuonekaasujen (esim. hiilidioksidi ja metaani) m��r�st� ilmakeh�ss�&#13;&#10;&#9;&#9;&#9;l�mp�� ei en�� p��se maapallolta pois kuten aiemmin. L�mp� �varastoituu� ilmakeh�n esteiden vuoksi.&#13;&#10;&#9;&#9;&#9;T�m� l�mmitt�� ilmastoa koko maapallolla siten, ett� eri alueet l�mpenev�t eri tavalla. Erityisesti&#13;&#10;&#9;&#9;&#9;l�mpenev�t kaikki manneralueet ja kaikkein merkitt�vimmin pohjoiset maa- ja napa-alueet.&#13;&#10;&#9;&#9;</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Hiilidioksidin ja metaanin lis�ksi t�rkeimpi� kasvihuonekaasuja ovat dityppioksidit ja halogenoidut&#13;&#10;&#9;&#9;&#9;hiilivedyt eli CFC-yhdisteet. CFC-yhdisteet eiv�t esiinny luonnossa ja ne ovat per�isin ihmistoiminnasta.&#13;&#10;&#9;&#9;&#9;Ko. aineiden vaikutus kasvihuoneilmi�ss� perustuu siihen, ett� ne tuhoavat otsonikerrosta, jolloin suurempi&#13;&#10;&#9;&#9;&#9;osa auringon (vahingollisesta) s�teilyst� p��see maapallolle. Vaikka hiilidioksidin m��r�n nousu on&#13;&#10;&#9;&#9;&#9;suurin kasvihuoneilmi�t� aiheuttava tekij�, metaanin, dityppioksidin ja halogenoitujen hiilivetyjen&#13;&#10;&#9;&#9;&#9;m��rien muutos on h�lytt�v�� niiden ollessa jopa kymmeni� kertoja voimakkaampia kasvihuonekaasuja kuin&#13;&#10;&#9;&#9;&#9;hiilidioksidi. Metaanip��st�ist� 70 % on ihmisen toiminnasta per�isin.&#13;&#10;&#9;&#9;</p>&#13;&#10;&#9;&#9;<p>&#13;&#10;&#9;&#9;&#9;Keskil�mp�tilat ovat nousseet 1800-luvun lopulta l�htien. Useiden eri arvioiden (mm. kansainv�linen&#13;&#10;&#9;&#9;&#9;ilmastopaneeli IPCC) mukaan maapallon keskil�mp�tilan arvioidaan nousevan 1,5 � 6 astetta vuoteen 2100&#13;&#10;&#9;&#9;&#9;menness�. L�mpeneminen vaikuttaa j��tik�iden sulamisen kautta valtamerten pinnan nousuun ja merivirtojen&#13;&#10;&#9;&#9;&#9;muutoksiin sek� eri mallien mukaan mm. sadem��riin siten, ett� kuivat l�mpim�t alueet kuivuvat lis��&#13;&#10;&#9;&#9;&#9;ja sateisilla alueilla (mm. Pohjois-Eurooppa) sadem��r�t kasvavat huomattavasti aiheuttaen tulvia.&#13;&#10;&#9;&#9;</p>&#13;&#10;&#9;&#9;"></asp:Localize>
		<p style="width: 100%; text-align: right; margin-bottom: 15px;">
			<asp:HyperLink runat="server" ID="LinkkiSeuraavaSivu" NavigateUrl="~/IlmastonmuutosArktisillaAlueilla.aspx" meta:resourcekey="LinkkiSeuraavaSivuResource1">
			Seuraavaksi: "Ilmastonmuutos arktisilla alueilla" &gt;</asp:HyperLink>
		</p>
	</div>
</asp:Content>