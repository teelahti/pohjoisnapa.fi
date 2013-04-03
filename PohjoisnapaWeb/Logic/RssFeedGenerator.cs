using System;
using System.Collections.Generic;
using System.Xml;

/// <summary>
/// Enables the generation of an RSS feed
/// </summary>
public class RSSFeedGenerator {
    XmlTextWriter writer;
    public RSSFeedGenerator(System.IO.Stream stream, System.Text.Encoding encoding) {
        writer = new XmlTextWriter(stream, encoding);
        writer.Formatting = Formatting.Indented;
    }
    public RSSFeedGenerator(System.IO.TextWriter w) {
        writer = new XmlTextWriter(w);
        writer.Formatting = Formatting.Indented;
    }
    /// <summary>
    /// Writes the beginning of the RSS document
    /// </summary>
    public void WriteStartDocument() {
        writer.WriteStartDocument();
        writer.WriteStartElement("rss");
        writer.WriteAttributeString("version", "2.0");
    }
    /// <summary>
    /// Writes the end of the RSS document
    /// </summary>
    public void WriteEndDocument() {
        writer.WriteEndElement(); //rss
        writer.WriteEndDocument();
    }
    /// <summary>
    /// Closes this stream and the underlying stream
    /// </summary>
    public void Close() {
        writer.Flush();
        writer.Close();
    }
    public void Flush() {
        writer.Flush();
    }

    /// <summary>
    /// Begins a new channel in the RSS document
    /// </summary>
    /// <param name="title"></param>
    /// <param name="link"></param>
    /// <param name="description"></param>
    public void WriteStartChannel(string title, string link, string description, string language, string copyright, string webMaster) {
        writer.WriteStartElement("channel");
        writer.WriteElementString("title", title);
        writer.WriteElementString("link", link);
        writer.WriteElementString("description", description);
        writer.WriteElementString("language", language);
        writer.WriteElementString("copyright", copyright);
        writer.WriteElementString("webMaster", webMaster);
        writer.WriteElementString("lastBuildDate", DateTime.Now.ToString("r"));
        writer.WriteElementString("docs", "http://blogs.law.harvard.edu/tech/rss");
        writer.WriteElementString("ttl", "20");

    }
    /// <summary>
    /// Writes the end of a channel in the RSS document
    /// </summary>
    public void WriteEndChannel() {
        writer.WriteEndElement(); //channel
    }

    /// <summary>
    /// Writes an item to a channel in the RSS document
    /// </summary>
    /// <param name="title"></param>
    /// <param name="link"></param>
    /// <param name="description"></param>
    /// <param name="author"></param>
    /// <param name="publishedDate"></param>
    /// <param name="category"></param>
    public void WriteItem(string title, string link, string description, string author, DateTime publishedDate, string subject) {
        WriteItemCore(title, link, description, author, publishedDate, subject, null);
    }

    /// <summary>
    /// Writes an item to a channel in the RSS document
    /// </summary>
    /// <param name="title"></param>
    /// <param name="link"></param>
    /// <param name="description"></param>
    /// <param name="author"></param>
    /// <param name="publishedDate"></param>
    /// <param name="category"></param>
    public void WriteItem(string title, string link, string description, string author, DateTime publishedDate, string subject, List<RssEnclosure> enclosures) {
        WriteItemCore(title, link, description, author, publishedDate, subject, enclosures);
    }

    /// <summary>
    /// Writes an item to a channel in the RSS document
    /// </summary>
    /// <param name="title"></param>
    /// <param name="link"></param>
    /// <param name="description"></param>
    /// <param name="author"></param>
    /// <param name="publishedDate"></param>
    /// <param name="category"></param>
    protected virtual void WriteItemCore(string title, string link, string description, string author, DateTime publishedDate, string subject, List<RssEnclosure> enclosures) {

        writer.WriteStartElement("item");
        writer.WriteElementString("title", title);
        writer.WriteElementString("link", link);

        // Create image tags to the end of description
        System.Text.StringBuilder images = new System.Text.StringBuilder();
        if(enclosures != null) {
            foreach(RssEnclosure enc in enclosures) {
                if(!string.IsNullOrEmpty(enc.OriginalUrl)) {
                    images.AppendFormat("<a href=\"{0}\" alt=\"Klikkaa nähdäksesi alkuperäinen kuva\"><img src=\"{1}\" border=\"0\" /></a>", enc.OriginalUrl, enc.Url);
                }
                else {
                    images.AppendFormat("<img src=\"{0}\" border=\"0\" />", enc.Url);
                }
                if(enc.Caption != null) {
                    images.AppendFormat("<div>{0}</div>", enc.Caption);
                }
                images.Append("<br />");
            }
        }


        writer.WriteElementString("description", description + "<br /><br />" + images.ToString());
        writer.WriteElementString("author", author);
        writer.WriteElementString("pubDate", publishedDate.ToString("r"));
        //writer.WriteElementString("category",category);
        writer.WriteElementString("subject", subject);

        // Add enclosures, add first img tags, then RSS standard enclosures
        if (enclosures != null) {

            foreach(RssEnclosure enc in enclosures) {
                writer.WriteStartElement("enclosure");
                writer.WriteAttributeString("url", enc.Url);
                writer.WriteAttributeString("length", enc.Length.ToString("###########"));
                writer.WriteAttributeString("type", enc.MediaType);
                writer.WriteEndElement();
            }
        }


        writer.WriteEndElement();
    }
}