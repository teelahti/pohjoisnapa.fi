
/// <summary>
/// Summary description for RssEnclosure
/// </summary>
public struct RssEnclosure {

    /// <summary>
    /// Creates a new, empty RssEnclosure.
    /// </summary>
    public static readonly RssEnclosure Empty = new RssEnclosure(null, null, 0, null, null);

    public RssEnclosure(string url, string originalUrl, int length, string mediaType, string caption) {
        this._url = url;
        this._originalUrl = originalUrl;
        this._length = length;
        this._mediaType = mediaType;
        this._caption = caption;
    }

    #region Properties

    private string _url;

    public string Url {
        get { return _url; }
        set { _url = value; }
    }

    private string _originalUrl;

    public string OriginalUrl {
        get { return _originalUrl; }
        set { _originalUrl = value; }
    }
	

    private int _length;

    public int Length {
        get { return _length; }
        set { _length = value; }
    }

    private string _mediaType;

    public string MediaType {
        get { return _mediaType; }
        set { _mediaType = value; }
    }

    private string _caption;

    public string Caption {
        get { return _caption; }
        set { _caption = value; }
    }


    #endregion

}
