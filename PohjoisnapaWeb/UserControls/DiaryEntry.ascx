<%@ Control Language="C#" AutoEventWireup="true" EnableViewState="false"
    Inherits="UserControls.DiaryEntry" Codebehind="DiaryEntry.ascx.cs" %>
<%@ Register TagPrefix="Diary" TagName="Image" Src="~/UserControls/DiaryImage.ascx" %>
<asp:MultiView ID="LayoutSwitch" runat="server" ActiveViewIndex="0">
    <asp:View ID="Summary" runat="server">
        <div class="kokoblokki" id="texti">
            <asp:Repeater ID="FormViewSummary" runat="server" 
                meta:resourcekey="FormViewSummaryResource1">
                <ItemTemplate>
                    <asp:Panel runat="server" ID="LatestEntry" CssClass="poikkeus" Visible='<%# Eval("NextEntryDate") == null %>'
                        meta:resourcekey="LatestEntryResource1">
                        <a href="Paivakirja.aspx">
                        <asp:Image ID="TextTuoreinPaivakirjaoteSummary" ImageUrl="~/kuvat/linkit/otsikot/TXT-otsikko-tuoreinpkote.gif"
                            runat="server" AlternateText="Tuorein p&#228;iv&#228;kirjaote" meta:resourcekey="TextTuoreinPaivakirjaoteSummaryResource1" />
                        </a>
                    </asp:Panel>
                    <Diary:Image runat="server" ID="SmallImage" DiaryImageView="Summary" Entry=<%# Container.DataItem %> />
                    <h3>
                        <asp:Literal ID="EntryDateLabel" runat="server" Text='<%# Bind("EntryDate", "{0:d}") %>' />
                        &nbsp;
                        <asp:Literal ID="EntrySubject_Fi" runat="server" Text='<%# Bind("Subject_fi") %>' Visible="<%# IsFinnish %>" />
                        <asp:Literal ID="EntrySubject_En" runat="server" Text='<%# Bind("Subject_en") %>' Visible="<%# IsEnglish %>" />
                    </h3>
                    <p>
                        <asp:Literal ID="Text_fiLabel" runat="server" Text='<%# Bind("Ingress_fi") %>' Visible="<%# IsFinnish %>" />
                        <asp:Literal ID="Text_enLabel" runat="server" Text='<%# Bind("Ingress_en") %>' Visible="<%# IsEnglish %>" />
                        ...
                        <asp:HyperLink ID="AReadMore" NavigateUrl="~/Paivakirja.aspx" runat="server" Text="Lue lisää" meta:resourcekey="HyperLinkReadMoreResource1" />
                    </p>
                </ItemTemplate>
            </asp:Repeater>
        </div>
    </asp:View>
    <asp:View ID="Full" runat="server">
        <asp:Repeater ID="FormViewDiaryEntry" runat="server" 
            meta:resourcekey="FormViewDiaryEntryResource1">
            <ItemTemplate>
                <div class="paivakirja" id="paivakirjateksti">
                    <asp:Label runat="server" ID="TextLatestEntry" CssClass="poikkeus2" Visible='<%# Eval("NextEntryDate") == null %>'
                        meta:resourcekey="TextLatestEntryResource1">
                        <asp:Image ID="TextTuoreinPaivakirjaote" ImageUrl="~/kuvat/linkit/otsikot/TXT-otsikko-tuoreinpkote.gif"
                            runat="server" AlternateText="Tuorein p&#228;iv&#228;kirjaote" Width="188px" Height="14px" BorderStyle="None"
                            meta:resourcekey="TextTuoreinPaivakirjaoteResource1" />
                    </asp:Label>
                    <h4>
                        <asp:Literal ID="EntryDateLabel" runat="server" Text='<%# Bind("EntryDate", "{0:d}") %>'></asp:Literal>
                        &nbsp;
                        <asp:Literal ID="EntrySubject_Fi" runat="server" Text='<%# Bind("Subject_fi") %>' Visible="<%# IsFinnish %>"></asp:Literal>
                        <asp:Literal ID="EntrySubject_En" runat="server" Text='<%# Bind("Subject_en") %>' Visible="<%# IsEnglish %>"></asp:Literal>
                    </h4>
                    <p class="tilaa paikkatieto">
                        <asp:Literal ID="Label4" runat="server" Text='<%# Bind("LocationLatitude", "{0:## ## ##} N") %>'></asp:Literal>
                        &nbsp;
                        <asp:Literal ID="Label3" runat="server" Text='<%# Bind("LocationLongitude", "{0:## ## ##}") %>'></asp:Literal>
                        <asp:Literal ID="Label2" runat="server" Text='<%# Bind("LocationLongitudeEastWest") %>'></asp:Literal>
                    </p>
                    <asp:Literal ID="Text_fiLabel" runat="server" Text='<%# Bind("Text_fi") %>' Visible="<%# IsFinnish %>"></asp:Literal>
                    <asp:Literal ID="Text_enLabel" runat="server" Text='<%# Bind("Text_en") %>' Visible="<%# IsEnglish %>"></asp:Literal>
                    <br />
                    <br />
                    <table runat="server" class="entrydata" visible='<%# Eval("DistanceTraveled") != null || Eval("Temperature") != null || Eval("Wind") != null %>'>
                        <tr>
                            <td>
                                <asp:Localize ID="DistanceTraveledText" runat="server" Text="Kuljettu matka:" Visible='<%# Eval("DistanceTraveled") != null %>'
                                    meta:resourcekey="TextDistanceTraveledResource1" />
                            </td>
                            <td>
                                <asp:Literal ID="DistanceTraveledLabel" runat="server" Text='<%# Bind("DistanceTraveled", "{0:######0.0} km") %>'></asp:Literal>
                            </td>
                        </tr>
                    
                        <tr>
                            <td>
                                <asp:Localize ID="TemperatureText" runat="server" Text="Lämpötila:" Visible='<%# Eval("Temperature") != null %>'
                                    meta:resourcekey="TextTemperatureResource1" />
                            </td>
                            <td>
                                <asp:Literal ID="TemperatureLabel" runat="server" Text='<%# Bind("Temperature", "{0:N0}°C") %>'></asp:Literal>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Localize ID="WindText" runat="server" Text="Tuuli:" Visible='<%# Eval("Wind") != null %>'
                                    meta:resourcekey="TextWindResource1" />
                            </td>
                            <td>
                                <asp:Literal ID="WindLabel" runat="server" Text='<%# Bind("Wind", "{0:N0} m/s") %>'></asp:Literal>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <asp:Hyperlink ID="linkToData" NavigateUrl="~/Data.aspx" runat="Server" Text="Etenemisvauhti..." meta:resourcekey="linkToData" />
                            </td>
                        </tr>
                    </table>
                    
                    <asp:Label ID="CreatedDateBlockFi" CssClass="lasteditedblock" runat="server" Visible="<%# IsFinnish %>" Text='<%# Bind("CreatedDate", "Päiväkirjamerkintä tallennettu {0:d} {0:t}.") %>'
                        meta:resourcekey="CreatedDateBlockResource1"></asp:Label>
                    <asp:Label ID="CreatedDateBlockEn" CssClass="lasteditedblock" runat="server" Visible="<%# IsEnglish %>" Text='<%# Bind("CreatedDate", "Entry saved at {0:d} {0:t}.") %>'
                        meta:resourcekey="CreatedDateBlockResource1"></asp:Label>						
                    <br />
                    
                    <asp:Label ID="LastEditedBlockFi" CssClass="lasteditedblock" runat="server" Text='<%# Bind("LastModifiedDate", "Muokattu viimeksi {0:d} {0:t}.") %>'
                        Visible='<%# IsFinnish && !string.IsNullOrEmpty(Eval("LastModifiedDate").ToString()) %>' meta:resourcekey="LastEditedBlockResource1"></asp:Label>
                    <asp:Label ID="LastEditedBlockEn" CssClass="lasteditedblock" runat="server" Text='<%# Bind("LastModifiedDate", "Updated at {0:d} {0:t}.") %>'
                        Visible='<%# IsEnglish && !string.IsNullOrEmpty(Eval("LastModifiedDate").ToString()) %>' meta:resourcekey="LastEditedBlockResource1"></asp:Label>
                    <br />
                        
                    <br />
                        
                    <div id="edel_seuraava">
                        <asp:HyperLink ID="Previous" runat="server" ImageUrl="~/kuvat/linkit/otsikot/TXT-edellinenpaiva.gif"
                            NavigateUrl='<%# Bind("PreviousEntryDate", "~/Paivakirja.aspx?pvm={0:yyyyMMdd}") %>' Visible='<%# !String.IsNullOrEmpty(Eval("PreviousEntryDate", "{0}")) %>'
                            meta:resourcekey="PreviousResource1" />
                        <asp:HyperLink ID="Next" runat="server" ImageUrl="~/kuvat/linkit/otsikot/TXT-seuraavapaiva.gif" NavigateUrl='<%# Bind("NextEntryDate", "~/Paivakirja.aspx?pvm={0:yyyyMMdd}") %>'
                            Visible='<%# Eval("NextEntryDate") != null %>' meta:resourcekey="NextResource1" />
                    </div>
                </div>
                <div class="paivakirjakuva">
                    <Diary:Image runat="server" ID="Images" DiaryImageView="Full" Entry=<%# Container.DataItem %> />
                </div>
            </ItemTemplate>
        </asp:Repeater>
    </asp:View>
</asp:MultiView>