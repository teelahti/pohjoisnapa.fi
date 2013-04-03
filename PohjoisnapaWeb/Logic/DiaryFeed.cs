using System;
using System.Collections.Generic;
using System.Linq;
using Models;

/// <summary>
/// Summary description for DiaryFeed
/// </summary>
public class DiaryFeed
{
    public string GetRss(bool isEnglish, string safeLan)
    {
        using (System.IO.MemoryStream ms = new System.IO.MemoryStream(5000))
        {
            using (System.IO.StreamWriter sw = new System.IO.StreamWriter(ms, System.Text.Encoding.UTF8))
            {

                string title = "Pohjoisnapa 2006 - päiväkirja";
                string description = "Laskuvarjojääkärikillan pohjoisnaparetkikunnan päiväkirjaotteet.";
                string diaryLinkFormat = "http://www.pohjoisnapa.fi/Paivakirja.aspx?pvm={0:yyyyMMdd}";
                string author = "Retkikunta";
                string subject = "Päiväkirja";

                if (isEnglish)
                {
                    title = "North Pole 2006 - Diary";
                    description = "Diary entries for Airborne Ranger Club of Finland North Pole 2006 expedition.";
                    diaryLinkFormat = "http://www.pohjoisnapa.fi/Paivakirja.aspx?pvm={0:yyyyMMdd}&language=en";
                    author = "Expedition";
                    subject = "Diary";
                }

                RSSFeedGenerator gen = new RSSFeedGenerator(sw);
                gen.WriteStartDocument();
                gen.WriteStartChannel(title, "http://www.pohjoisnapa.fi/", description, safeLan,
                    "Copyright © Laskuvarjojääkärikilta, 2006", "webmaster@pohjoisnapa.fi");

                // Get last 20 items and generate RSS items out of them
                var items = DataRepository.Entries
                    .OrderByDescending(m => m.EntryDate)
                    .Take(20);

                foreach (var item in items)
                {
                    DateTime pubDate = item.LastModifiedDate ?? item.CreatedDate;
                    pubDate = pubDate.AddHours(-2d);

                    string url = string.Format(diaryLinkFormat, item.EntryDate);
                    gen.WriteItem(
                        string.Format("{0:d} {1}", item.EntryDate, isEnglish ? item.Subject_en : item.Subject_fi),
                        url,
                        isEnglish ? item.Text_en : item.Text_fi,
                        author,
                        pubDate,
                        subject,
                        getEnclosures(item, isEnglish));
                }

                gen.WriteEndChannel();
                gen.WriteEndDocument();
                gen.Flush();

                ms.Seek(0, System.IO.SeekOrigin.Begin);

                System.IO.StreamReader sr = new System.IO.StreamReader(ms, System.Text.Encoding.UTF8);
                return sr.ReadToEnd();
            }
        }
    }

    private List<RssEnclosure> getEnclosures(DiaryEntry entry, bool isEnglish)
    {
        List<RssEnclosure> retList = new List<RssEnclosure>();

        foreach (var image in entry.Images)
        {
            string caption = isEnglish ? image.Caption_en : image.Caption_fi;

            // TODO: Get length from disk
            int imageLength = 0;

            retList.Add(new RssEnclosure(
                string.Format("http://www.pohjoisnapa.fi/kuvat/paivakirja/small/{0:000}.jpeg", image.Id),
                string.Format("http://www.pohjoisnapa.fi/kuvat/paivakirja/{0:000}.jpeg", image.Id),
                imageLength, "image/jpeg", caption));
        }

        return retList;
    }
}