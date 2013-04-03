namespace Models
{
    using System;
    using System.Collections.Generic;
    using System.Runtime.Serialization;
    using System.IO;
    using System.Runtime.Serialization.Json;
    using System.Xml;
    using System.Text;
    using System.Text.RegularExpressions;

    /// <summary>
    /// Summary description for DiaryEntry
    /// </summary>
    [Serializable]
    [DataContract]
    public class DiaryEntry
    {
        public DiaryEntry()
        {
            this.Images = new List<DiaryImage>();
        }

        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public DateTime EntryDate { get; set; }
        [DataMember]
        public DateTime CreatedDate { get; set; }
        [DataMember]
        public string CreatedBy { get; set; }
        [DataMember]
        public DateTime? LastModifiedDate { get; set; }
        [DataMember]
        public string LastModifiedBy { get; set; }
        [DataMember]
        public decimal? DistanceTraveled { get; set; }
        [DataMember]
        public string Weather { get; set; }
        [DataMember]
        public decimal? Wind { get; set; }
        [DataMember]
        public decimal? Temperature { get; set; }
        [DataMember]
        public decimal? LocationLatitude { get; set; }
        [DataMember]
        public decimal? LocationLongitude { get; set; }
        [DataMember]
        public char? LocationLongitudeEastWest { get; set; }
        [DataMember]
        public string Subject_fi { get; set; }
        [DataMember]
        public string Subject_en { get; set; }
        [DataMember]
        public string Text_fi { get; set; }
        [DataMember]
        public string Text_en { get; set; }
        [DataMember]
        public List<DiaryImage> Images { get; set; }

        public string Ingress_fi
        {
            get
            {
                return CreateIngress(Text_fi);
            }
        }

        public string Ingress_en
        {
            get
            {
                return CreateIngress(Text_en);
            }
        }

        public DateTime? NextEntryDate { get; set; }
        public DateTime? PreviousEntryDate { get; set; }

        public static Models.DiaryEntry FromJson(string json)
        {
            Models.DiaryEntry entry;

            DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(DiaryEntry));

            // Json documents have been saved with windows 1252 encoding, use the same 
            // when reading them back instead of Encoding.Default which might not work 
            // at hosting.
            using (MemoryStream ms = new MemoryStream(Encoding.GetEncoding(1252).GetBytes(json)))
            {
                entry = (DiaryEntry)ser.ReadObject(ms);
            }

            return entry;
        }

        private static string CreateIngress(string text) {
            string cut = string.IsNullOrEmpty(text) ? string.Empty :
                    text.Substring(0, text.Length >= 200 ? 200 : text.Length);

            return StripHtmlTags(cut);
        }

        /// <summary>
        /// Compiled regular expression for performance.
        /// </summary>
        private static Regex htmlRegex = new Regex("<.*?>", RegexOptions.Compiled);

        /// <summary>
        /// Remove HTML from string with compiled Regex.
        /// </summary>
        private static string StripHtmlTags(string source)
        {
            return htmlRegex.Replace(source, string.Empty);
        }
    }
}