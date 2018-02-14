namespace Models
{
    using System;
    using System.Runtime.Serialization;

    [Serializable]
    [DataContract]
    public class DiaryImage
    {
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public DateTime CreatedDate { get; set; }
        [DataMember]
        public string Caption_fi { get; set; }
        [DataMember]
        public string Caption_en { get; set; }
    }
}