using System;
using System.Linq;

public partial class Data: LanguageAwarePage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        this.GraphData.DataSource = DataRepository.EntriesAfterStart;
        this.GraphData.DataBind();
    }
}
