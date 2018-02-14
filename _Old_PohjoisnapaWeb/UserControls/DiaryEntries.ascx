<%@ Control Language="C#" AutoEventWireup="true" Inherits="UserControls.DiaryEntries" Codebehind="DiaryEntries.ascx.cs" %>
<asp:Repeater ID="DataListDiaryEntries" runat="server" >
	<HeaderTemplate>
		<table class="paivakirjalista">
	</HeaderTemplate>
	<ItemTemplate>
		<tr>
			<td>
				<asp:Label ID="EntryDateLabel" runat="server" Text='<%# Eval("EntryDate", "{0:d}") %>'></asp:Label><br />
			</td>
			<td>
				<asp:HyperLink ID="LinkToDiaryPageFi" Visible='<%#IsFinnish%>' NavigateUrl='<%# Eval("EntryDate", "~/Paivakirja.aspx?pvm={0:yyyyMMdd}") %>'
					ToolTip='<%# Eval("LastModifiedDate", "Muokattu {0:g}.") %>' runat="server">
					<asp:Label ID="Subject_fiLabel" runat="server" Text='<%# Eval("Subject_fi") %>'></asp:Label><br />
				</asp:HyperLink>
				<asp:HyperLink ID="LinkToDiaryPageEn" Visible='<%#IsEnglish%>' NavigateUrl='<%# Eval("EntryDate", "~/Paivakirja.aspx?pvm={0:yyyyMMdd}") %>'
					ToolTip='<%# Eval("LastModifiedDate", "Muokattu {0:g}.") %>' runat="server">
					<asp:Label ID="Label1" runat="server" Text='<%# Eval("Subject_en") %>'></asp:Label><br />
				</asp:HyperLink>
			</td>
		</tr>
	</ItemTemplate>
	<FooterTemplate>
		</table>
	</FooterTemplate>
</asp:Repeater>