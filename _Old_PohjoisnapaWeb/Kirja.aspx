<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true" Inherits="Kirja" Title="Pohjoisnapa - j�inen haaste" Codebehind="Kirja.aspx.cs" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="Server">
    <div class="largeTextRight">
        <h4>
            <asp:Literal ID="PageHeader" runat="server" Text="Pohjoisnapa - j�inen haaste"></asp:Literal></h4>
        <p>
            Laskuvarjoj��k�rikillan retkikunta saavutti suomalaisella sisukkuudella maantieteellisen
            pohjoisnavan 29. huhtikuuta 2006. He iskiv�t Suomen lipun j��lohkareen kylkeen keskell�
            arktista j��lakeutta merkiksi tavoitteensa saavuttamisesta.
        </p>
        <p>
            Kahden kuukauden aikana naparetkeilij�t hiihtiv�t 800 kilometri� ja kohtasivat vaikeakulkuisia
            ahtoj�it�, ylittiv�t avovesi� sek� eliv�t �40 �C pakkasessa ilman ulkopuolista tukea.
            Heit� ennen vain 32 henkil�� maailmassa on kyennyt samaan.</p>
        <p>
            POHJOISNAPA- J�INEN HAASTE kertoo historiallisen retkikunnan vaiheet ker�ten laajan
            kokonaisuuden mielenkiintoiseen pakettiin. Runsas neliv�rikuvitus tekee kirjasta
            n�ytt�v�n kokonaisuuden.</p>
        <p>
            Suomelaisesta sisusta ja rohkeudesta kertova kirja sis�lt�� tarinoita ja tunnelmakuvauksia
            matkan varrelta, ennen julkaisemattomia p�iv�kirjamerkint�j� ja tietopohjaisia aiheeseen
            liittyvi� artikkeleita.</p>
        <asp:HyperLink ID="OrderBookLink1" runat="server" Text="Tilaa kirja" NavigateUrl="http://www.thepole.fi/kirja.html"></asp:HyperLink><br />
        <div id="KirjaFakta" style="padding-bottom: 20px;">
            <h4>
                Pohjoisnapa - J�inen haaste</h4>
            <table id="kirjaFaktaTaulu" style="margin-bottom: 10px;">
                <tr>
                    <td style="padding-right: 10px;">
                        Kirjoittaja:</td>
                    <td>
                        Kari Poppis Suomela</td>
                </tr>
                <tr>
                    <td>
                        ISBN:</td>
                    <td>
                        951-98376-1-2</td>
                </tr>
                <tr>
                    <td>
                        Kustantaja:</td>
                    <td>
                        Poppicok, <a href="http://www.poppicok.fi">www.poppicok.fi</a></td>
                </tr>
                <tr>
                    <td style="vertical-align: top;">
                        Koko:</td>
                    <td>
                        272x230mm<br />
                        184 sivua. Yli 140 neliv�rikuvaa</td>
                </tr>
                <tr>
                    <td>
                        Hinta:</td>
                    <td>
                        39,90 &euro;
                    </td>
                </tr>
            </table>
        </div>
    </div>
</asp:Content>
