using System;
using System.Linq;

public partial class GalleriaHiihto : LanguageAwarePage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        var data = DataRepository.EntriesAfterStart.SelectMany(m => m.Images);
        this.Images.DataSource = data;
        this.Images.DataBind();
    }
}
