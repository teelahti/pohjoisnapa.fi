using System;
using System.Web.UI.WebControls;

public partial class Pohjoisnapa : System.Web.UI.MasterPage
{
    #region Private constants

    private const int FirstRandomPictureIndex = 1;
    private const int LastRandomPictureIndex = 8;

    #endregion

    #region Private helper properties

    private string ImageFolder
    {
        get
        {
            return "App_themes/" + Page.Theme + "/images/";
        }
    }

    private string RandomImage
    {
        get
        {
            var r = new Random();
            return "top" + r.Next(Pohjoisnapa.FirstRandomPictureIndex, Pohjoisnapa.LastRandomPictureIndex) + ".jpg";
        }
    }

    #endregion

    #region Page events

    protected void Page_Init(object sender, EventArgs e)
    {
        SiteLanguage.SelectLanguage(Page, true);
        
        //// Show language change options according to the previous cheks
        this.ToggleLanguageChangeLink();

        // HACK: remove
        //Page.UICulture = "fi-FI";
        //Page.UICulture = "en";
    }

    protected void Page_PreRender(object sender, EventArgs e) {
        string pageFileName = Request.Path.Substring(Request.Path.LastIndexOf('/') + 1);

        this.ToggleDefaultOnlyItems(pageFileName);
    }

    #endregion

    #region Page image on/off toggle helpers



    private void ToggleDefaultOnlyItems(string pageFileName)
    {
        // Change left image (map or gradient)
        if (pageFileName.ToLower().Equals("default.aspx"))
        {
            this.Kartta.Visible = true;
            this.Breadcrumb.Visible = false;
            
        }
        else
        {
            this.Breadcrumb.Visible = true;
            this.Kartta.Visible = false;
            
        }

    }

    protected void SwitchImage(object sender, EventArgs e) {
        string pageFileName = Request.Path.Substring(Request.Path.LastIndexOf('/') + 1);
        this.Fiiliskuva.ImageUrl = GetImageByPage(pageFileName);
    }

    private string GetImageByPage(string pageName)    {
        switch (pageName.ToLower())
        {
            case "default.aspx":
                return ImageFolder + "top5_paasivu_B_Alexandria.jpg";
            case "retkikunta.aspx":
                return ImageFolder + "top8.jpg";
            case "tausta.aspx":
            case "galleria.aspx":
                return ImageFolder + "top7.jpg";
            case "tavoitteet.aspx":
                return ImageFolder + "top2.jpg";
            case "varusteet.aspx":
                return ImageFolder + "top6.jpg";
            case "arktis.aspx":
                return ImageFolder + "top1.jpg";
            case "tukijat.aspx":
                //return ImageFolder + "top5_tukijasivu.jpg";
                return ImageFolder + "top5.jpg";

            default: return ImageFolder + this.RandomImage;
        }
    }

    #endregion

    #region Site language changing

    
    protected void ChangeLanguage(object sender, CommandEventArgs e) {
        if(e == null || e.CommandName == null || !e.CommandName.Equals("ChangeLanguage")) {
            return;
        }

        if (e.CommandArgument == null) {
            throw new ArgumentNullException("Invalid language given as command argument. Cannot change language.");
        }

        string changeToLanguage = e.CommandArgument.ToString();

        SiteLanguage.ChangeLanguage(Page, changeToLanguage, true);
        ToggleLanguageChangeLink();
        // redirect to refresh content page
        Response.Redirect(Request.ServerVariables["URL"]);
    }


    private void ToggleLanguageChangeLink() {
        if(IsEnglish) {
            this.ChangeLanguageButton.Text = "Suomeksi";
            this.ChangeLanguageButton.CommandArgument = "fi-FI";
        }
        else {
            this.ChangeLanguageButton.Text = "In english";
            this.ChangeLanguageButton.CommandArgument = "en";
        }
    }


    #region Properties for finding correct culture

    protected bool IsEnglish {
        get {
            return !IsFinnish;
        }
    }

    protected bool IsFinnish {
        get {
            string culture = Page.UICulture;
            return (culture != null && culture.ToLower().StartsWith("fi"));
        }
    }

    #endregion


    #endregion

}
