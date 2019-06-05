using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Web.Data.ValueObjects;

namespace Tracker.Web.Data.Entities
{
    public class ViewCard
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public ImageCardStatus Status { get; set; }
        // store in msecs for time&date props
        public ulong TimeSpent { get; set; }
        public ulong StartedTime { get; set; }
        public ulong CreationDate { get; set; }
        public ulong Estimate { get; set; }
        public bool Started { get; set; }
        public bool Completed { get; set; }
    }
}
