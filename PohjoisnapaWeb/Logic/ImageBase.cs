using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Web;

/// <summary>
/// l‰hde: http://msdn.microsoft.com/asp.net/beta2/beta2changes.aspx
/// Koodi oli alunperin GetImage.ashx:ss‰, mutta periv‰t luokat eiv‰t n‰hneet sit‰ ja 
/// ja LP ei sanut mill‰‰n k‰‰ntym‰‰n, joten siirretty t‰nne 21.4.2006
/// </summary>
public class ImageBase : IHttpHandler
{
    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

    protected virtual string Folder
    {
        get
        {
            return null;
        }
    }

    public void ProcessRequest(HttpContext context)
    {
        // Get the image ID from querystring
        string strId = context.Request.QueryString["id"];

        int imageId = int.Parse(strId);

        // If local images are used instead of blob storage ones
        // string basefolder = HostingEnvironment.MapPath(@"~/kuvat/paivakirja/");
        const string Basefolder = @"http://img.pohjoisnapa.fi/paivakirja/";
        string filename = imageId.ToString("000") + ".jpeg";
        string path = Path.Combine(Basefolder, filename);

        if (!string.IsNullOrEmpty(this.Folder))
        {
            path = Path.Combine(Basefolder, this.Folder, filename);
        }

        if (File.Exists(path))
        {
            byte[] imageBytes = File.ReadAllBytes(path);

            // Send back image.
            context.Response.ContentType = "image/jpeg";
            context.Response.Cache.SetCacheability(HttpCacheability.Public);
            context.Response.BufferOutput = false;
            context.Response.OutputStream.Write(imageBytes, 0, imageBytes.Length);
        }
        else
        {
            // Fallback to default image
            var img =
                new Bitmap(
                    HttpContext.Current.Server.MapPath(
                        HttpContext.Current.Request.ApplicationPath + "/kuvat/gif/logo_galleriaan_pop2.gif"));
            context.Response.ContentType = "image/gif";
            context.Response.Cache.SetCacheability(HttpCacheability.NoCache);
            context.Response.BufferOutput = false;
            img.Save(context.Response.OutputStream, ImageFormat.Gif);
        }
    }
}