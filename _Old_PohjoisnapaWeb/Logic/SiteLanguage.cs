using System.Web;
using System.Web.UI;

/// <summary>
/// Summary description for SiteLanguage
/// </summary>
public class SiteLanguage
{
    private const string LanguageCookieName = "selectedCulture";

    private SiteLanguage()
    {
    }

    public static void SelectLanguage(Page page, bool saveCookie)
    {
        CheckLanguageParameter(page, saveCookie);

        // Then check if user has previously saved a language. This overrides the parameter
        CheckLanguageCookie(page);
    }

    /// <summary>
    /// Checks if language=en or language=fi[-FI] parameter exists. If does, changes page culture according it.
    /// </summary>
    private static void CheckLanguageParameter(Page page, bool saveCookie)
    {
        string lan = page.Request.Params["language"];
        if (lan != null && lan.Trim().Length > 0)
        {

            // Language functions checks the language string, just give it as parameter
            ChangeLanguage(page, lan, saveCookie);
        }
    }

    private static void SaveLanguageCookie(Page page, string language)
    {
        string safeLan = ConvertToSafeLanguage(language);

        if (safeLan == null)
        {
            return;
        }

        // save selected language to user cookie
        page.Response.Cookies.Add(new HttpCookie(LanguageCookieName, safeLan));
    }

    private static void CheckLanguageCookie(Page page)
    {
        //selectedCulture
        HttpCookie cookie = page.Request.Cookies[LanguageCookieName];

        if (cookie != null)
        {
            // Change language function checks the value
            ChangeLanguage(page, cookie.Value, false);
        }
    }

    public static void ChangeLanguage(Page page, string language, bool saveCookie)
    {
        string safeLan = ConvertToSafeLanguage(language);

        if (safeLan == null)
        {
            return;
        }

        System.Diagnostics.Debug.WriteLine("Changing site to language: " + safeLan);
        page.UICulture = safeLan;

        if (saveCookie)
        {
            SaveLanguageCookie(page, language);
        }
    }

    public static bool CheckLanguageValidity(string language)
    {
        if (language == null || language.Trim().Length == 0)
        {
            return false;
        }

        if (!language.ToLower().StartsWith("en") && !language.ToLower().StartsWith("fi"))
        {
            return false;
        }

        return true;
    }

    /// <summary>
    /// Only two languages are allowed. Checks if string represents either of them. 
    /// If does, returns culture string, otherwise returns null.
    /// </summary>
    /// <param name="language"></param>
    /// <returns></returns>
    public static string ConvertToSafeLanguage(string language)
    {
        if (CheckLanguageValidity(language))
        {
            if (language.ToLower().StartsWith("fi"))
            {
                return "fi-FI";
            }

            if (language.ToLower().StartsWith("en"))
            {
                return "en";
            }
        }

        return null;
    }
}
