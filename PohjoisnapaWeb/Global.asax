<%@ Application Language="C#" %>

<script runat="server">
    
    void Application_Start(object sender, EventArgs e) 
    {
        // Code that runs on application startup

        DateTime start = DateTime.UtcNow;

        List<Models.DiaryEntry> entries = new List<Models.DiaryEntry>();
        
        // Serialize all diary entries from disk to memory
        string folder = System.Web.Hosting.HostingEnvironment.MapPath(@"~/App_Data/DiaryEntries/");
        foreach (var f in System.IO.Directory.EnumerateFiles(folder, "*.json"))
        {
            string fileContents = System.IO.File.ReadAllText(f);
            
            // Deserialize
            var entry = Models.DiaryEntry.FromJson(fileContents);
            entries.Add(entry);
        }

        // Order and add to main list
        foreach (var entry in entries.OrderByDescending(m => m.EntryDate))
        {
            DataRepository.Entries.Add(entry);
        }
        
        TimeSpan duration = DateTime.UtcNow.Subtract(start);
        System.Diagnostics.Debug.WriteLine("Data deserialization done, took (ms): " + duration.Milliseconds);
    }
    
    void Application_End(object sender, EventArgs e) 
    {
        //  Code that runs on application shutdown

    }
        
    void Application_Error(object sender, EventArgs e) 
    { 
        // Code that runs when an unhandled error occurs

    }

    void Session_Start(object sender, EventArgs e) 
    {
        // Code that runs when a new session is started

    }

    void Session_End(object sender, EventArgs e) 
    {
        // Code that runs when a session ends. 
        // Note: The Session_End event is raised only when the sessionstate mode
        // is set to InProc in the Web.config file. If session mode is set to StateServer 
        // or SQLServer, the event is not raised.

    }
       
</script>
