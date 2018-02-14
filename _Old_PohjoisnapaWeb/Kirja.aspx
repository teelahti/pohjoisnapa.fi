<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true" Inherits="Kirja" Title="Pohjoisnapa - jäinen haaste" Codebehind="Kirja.aspx.cs" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="Server">
    <div class="largeTextRight">
        <h4>
            <asp:Literal ID="PageHeader" runat="server" Text="Pohjoisnapa - jäinen haaste"></asp:Literal></h4>
        <p>
            Laskuvarjojääkärikillan retkikunta saavutti suomalaisella sisukkuudella maantieteellisen
            pohjoisnavan 29. huhtikuuta 2006. He iskivät Suomen lipun jäälohkareen kylkeen keskellä
            arktista jäälakeutta merkiksi tavoitteensa saavuttamisesta.
        </p>
        <p>
            Kahden kuukauden aikana naparetkeilijät hiihtivät 800 kilometriä ja kohtasivat vaikeakulkuisia
            ahtojäitä, ylittivät avovesiä sekä elivät –40 °C pakkasessa ilman ulkopuolista tukea.
            Heitä ennen vain 32 henkilöä maailmassa on kyennyt samaan.</p>
        <p>
            POHJOISNAPA- JÄINEN HAASTE kertoo historiallisen retkikunnan vaiheet keräten laajan
            kokonaisuuden mielenkiintoiseen pakettiin. Runsas nelivärikuvitus tekee kirjasta
            näyttävän kokonaisuuden.</p>
        <p>
            Suomelaisesta sisusta ja rohkeudesta kertova kirja sisältää tarinoita ja tunnelmakuvauksia
            matkan varrelta, ennen julkaisemattomia päiväkirjamerkintöjä ja tietopohjaisia aiheeseen
            liittyviä artikkeleita.</p>
        <asp:HyperLink ID="OrderBookLink1" runat="server" Text="Tilaa kirja" NavigateUrl="http://www.thepole.fi/kirja.html"></asp:HyperLink><br />
        <div id="KirjaFakta" style="padding-bottom: 20px;">
            <h4>
                Pohjoisnapa - Jäinen haaste</h4>
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
                        184 sivua. Yli 140 nelivärikuvaa</td>
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
