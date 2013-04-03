<%@ Page Language="C#" MasterPageFile="~/Pohjoisnapa.master" AutoEventWireup="true" Inherits="Data" Title="Untitled Page" meta:resourcekey="PageResource1" UICulture="auto" Codebehind="Data.aspx.cs" %>
<asp:Content ID="contentData" ContentPlaceHolderID="MainContent" Runat="Server">
	<h4><asp:Localize ID="otsikko" runat="Server" Text="Retkikunnan eteneminen" meta:resourcekey="otsikkoResource1" /></h4>
	<asp:Image ID="Graph" runat="server" ImageUrl="http://img.pohjoisnapa.fi/data.jpg" meta:resourcekey="GraphResource1"/>
	<asp:Repeater ID="GraphData" runat="server">
		<HeaderTemplate>
		<table style="width: 40%; margin-left: 50px;">
			<tr>
				<th><asp:Localize ID="TableHeaderPvm" Text="Pvm" runat="server" meta:resourcekey="TableHeaderPvmResource1" /></th>
				<th style="width: 25%"><asp:Localize ID="TableHeaderDistance" Text="Matka" runat="server" meta:resourcekey="TableHeaderDistanceResource1" /> (km)</th>
				<th style="width: 25%"><asp:Localize ID="TableHeaderTemperature" Text="L&#228;mp&#246;tila" runat="server" meta:resourcekey="TableHeaderTemperatureResource1" /> (°C)</th>
				<th style="width: 25%"><asp:Localize ID="TableHeaderWind" Text="Tuuli" runat="server" meta:resourcekey="TableHeaderWindResource1" /> (m/s)</th>
			</tr>
			<tr>
				<td></td>
				<td style="height: 10px; background-color: #CC0000;"></td>
				<td style="background-color: #99CCFF;"></td>
				<td style="background-color: #CC9900;"></td>
			</tr>
		</HeaderTemplate>
		
		<ItemTemplate>
			<tr>
				<td><asp:Literal ID="Pvm" runat="server" Text='<%# Bind("EntryDate", "{0:d}") %>' /></td>
				<td style="text-align: right;"><asp:Literal ID="Distance" runat="server" Text='<%# Bind("DistanceTraveled", "{0:N2}") %>' /></td>
				<td style="text-align: right;"><asp:Literal ID="Temperature" runat="server" Text='<%# Bind("Temperature", "{0:N0}") %>' /></td>
				<td style="text-align: right;"><asp:Literal ID="Wind" runat="server" Text='<%# Bind("Wind", "{0:N0}") %>' /></td>
			</tr>
		</ItemTemplate>
		<FooterTemplate>
			</table>
		</FooterTemplate>
	</asp:Repeater>

	<br />
	<br />

</asp:Content>

