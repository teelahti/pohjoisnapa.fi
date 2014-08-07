public class LanguageAwarePage: System.Web.UI.Page
{

    protected override void InitializeCulture() {

        //Page.UICulture = "fi-FI";
        //Page.UICulture = "en";

        SiteLanguage.SelectLanguage(Page, false);
    }

    #region Properties for finding correct culture

    protected bool IsEnglish {
        get {
            return !IsFinnish;
        }
    }

    protected bool IsFinnish {
        get {
            return Page.UICulture.ToLower().StartsWith("fi");
        }
    }

    #endregion
}
