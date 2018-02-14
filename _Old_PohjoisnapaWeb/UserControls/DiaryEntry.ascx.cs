using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web.UI;

namespace UserControls
{
    public partial class DiaryEntry : System.Web.UI.UserControl
    {
        private DiaryEntryLayout entryLayout = DiaryEntryLayout.Full;

        /// <summary>
        /// Specifies how diary entry is rendered. Default is <see cref="DiaryEntryLayout.Full"/>.
        /// </summary>
        public DiaryEntryLayout Layout
        {
            get { return this.entryLayout; }
            set { this.entryLayout = value; }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            ToggleLayoutMode();

            // Databind: if summary then this is the latest entry, otherwise use 
            // query string date

            var entry = DataRepository.Entries.First();

            // Navigation is never available for summary layout
            if (this.Layout != DiaryEntryLayout.Summary)
            {
                string pvm = Request.QueryString.Get("pvm");
                if (pvm != null && pvm.Trim().Length > 0)
                {
                    DateTime parsedDate = System.DateTime.ParseExact(pvm, "yyyyMMdd", CultureInfo.InvariantCulture);
                    var dateEntry = DataRepository.Entries.FirstOrDefault(m => m.EntryDate.Date.Equals(parsedDate));
                    if (dateEntry != null)
                    {
                        entry = dateEntry;
                    }
                }
            }

            // Fill next and previous entry dates
            int index = DataRepository.Entries.IndexOf(entry);
            if (index > 0)
            {
                entry.NextEntryDate = DataRepository.Entries[index - 1].EntryDate;
            }

            if (index < DataRepository.Entries.Count)
            {
                entry.PreviousEntryDate = DataRepository.Entries[index + 1].EntryDate;
            }

            var entryAsListForBinding = new List<Models.DiaryEntry> { entry };
            this.FormViewDiaryEntry.DataSource = entryAsListForBinding;
            this.FormViewDiaryEntry.DataBind();
            this.FormViewSummary.DataSource = entryAsListForBinding;
            this.FormViewSummary.DataBind();
        }

        private void ToggleLayoutMode()
        {
            switch (this.Layout)
            {
                case DiaryEntryLayout.Full:
                    this.LayoutSwitch.ActiveViewIndex = 1;
                    break;
                case DiaryEntryLayout.Summary:
                    this.LayoutSwitch.ActiveViewIndex = 0;
                    break;
                default:
                    this.LayoutSwitch.ActiveViewIndex = 0;
                    break;
            }
        }

        #region Properties for finding correct culture

        protected bool IsEnglish
        {
            get
            {
                return !IsFinnish;
            }
        }

        protected bool IsFinnish
        {
            get
            {
                string culture = Page.UICulture;
                return (culture != null && culture.ToLower().StartsWith("fi"));
            }
        }

        #endregion

    }
}