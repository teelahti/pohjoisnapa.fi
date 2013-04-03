using System.Collections.Generic;
using System.Linq;

public static class DataRepository
{
    public static List<Models.DiaryEntry> Entries = new List<Models.DiaryEntry>();

    /// <summary>
    /// Get all entries after (and including) the first skiing entry. 
    /// </summary>
    public static IEnumerable<Models.DiaryEntry> EntriesAfterStart
    {
        get
        {
            var asc = DataRepository.Entries.OrderBy(m => m.EntryDate).ToList();
            var first = asc.First(m => m.DistanceTraveled != null);
            var index = asc.IndexOf(first);

            var data = asc.Skip(index);
            return data;
        }
    }

    /// <summary>
    /// Gets all entries happened before skiing started. 
    /// </summary>
    public static IEnumerable<Models.DiaryEntry> EntriesBeforeStart
    {
        get
        {
            var asc = DataRepository.Entries.OrderBy(m => m.EntryDate).ToList();
            var first = asc.First(m => m.DistanceTraveled != null);
            var index = asc.IndexOf(first);

            var data = asc.Take(index);
            return data;
        }
    }
}