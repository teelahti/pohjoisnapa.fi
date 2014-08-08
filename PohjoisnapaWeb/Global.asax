<%@ Application Language="C#" %>

<script runat="server">
    
    void Application_Start(object sender, EventArgs e) 
    {
        DateTime start = DateTime.UtcNow;

        // Serialize all diary entries from disk to memory
        string folder = System.Web.Hosting.HostingEnvironment.MapPath(@"~/App_Data/DiaryEntries/");
        var entries = System.IO.Directory.EnumerateFiles(folder, "*.json").Select(System.IO.File.ReadAllText).Select(Models.DiaryEntry.FromJson).ToList();

        // Order and add to main list
        foreach (var entry in entries.OrderByDescending(m => m.EntryDate))
        {
            DataRepository.Entries.Add(entry);
        }
        
        TimeSpan duration = DateTime.UtcNow.Subtract(start);
        System.Diagnostics.Debug.WriteLine("Data deserialization done, took (ms): " + duration.Milliseconds);
    }
       
</script>
