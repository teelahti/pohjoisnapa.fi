<%@ WebHandler Language="C#" Class="Rss" %>

using System;
using System.Linq;
using System.Web;
using System.Collections.Generic;

/// <summary>
/// A class that creates rss output. Uses web cache to store the output for 10 minutes. Feed is language dependent.
/// </summary>
public class Rss : IHttpHandler
{
    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/xml";

        string lan = context.Request.Params["language"];
        string safeLan = "fi-FI";
        bool isEnglish = false;

        if (lan != null && lan.Equals(lan, StringComparison.InvariantCultureIgnoreCase))
        {
            safeLan = "en";
            isEnglish = true;
        }

        var feedGenerator = new DiaryFeed();
        string rssText = feedGenerator.GetRss(isEnglish, safeLan);

        context.Response.Output.Write(rssText);
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}