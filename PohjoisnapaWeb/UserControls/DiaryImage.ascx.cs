using System;
using System.Web.UI.WebControls;

namespace UserControls
{
    public partial class DiaryImage : System.Web.UI.UserControl
    {
        public Models.DiaryEntry Entry { get; set; }
        public DiaryEntryLayout DiaryImageView { get; set; }

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (this.Entry != null)
            {
                this.Images.DataSource = this.Entry.Images;
                this.Images.DataBind();
            }
        }

        protected void BindImageUrl(object sender, EventArgs e)
        {
            if (sender == null)
            {
                return;
            }

            Image s = (Image)sender;

            if (this.Entry == null || this.Entry.Id <= 0)
            {
                s.Visible = false;
                return;
            }

            s.Visible = true;
            s.ImageUrl = "http://img.pohjoisnapa.fi/paivakirja/" + this.Entry.Images[0].Id.ToString("000") + "-thumbnail.jpeg";
        }

        protected void ToggleView(object sender, EventArgs e)
        {
            if (sender == null)
            {
                this.ViewSwitch.Visible = false;
                return;
            }

            var s = ((MultiView)sender);

            if (this.Entry == null || this.Entry.Id == 0)
            {
                s.Visible = false;
                return;
            }

            s.Visible = true;

            s.ActiveViewIndex = this.DiaryImageView == DiaryEntryLayout.Summary ? 0 : 1;
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