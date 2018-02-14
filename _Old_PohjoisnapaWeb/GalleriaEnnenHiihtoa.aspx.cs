using System;
using System.Linq;

public partial class GalleriaEnnenHiihtoa : LanguageAwarePage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        var data = DataRepository.EntriesBeforeStart.SelectMany(m => m.Images);
        this.Images.DataSource = data;
        this.Images.DataBind();
    }
}
