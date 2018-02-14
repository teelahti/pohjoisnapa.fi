using System;
using System.Linq;
using System.Web.UI;

namespace UserControls {

    public partial class DiaryEntries: System.Web.UI.UserControl {

        protected void Page_Load(object sender, EventArgs e) {
            this.DataListDiaryEntries.DataSource = DataRepository.Entries;
            this.DataListDiaryEntries.DataBind();
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

    }
}
