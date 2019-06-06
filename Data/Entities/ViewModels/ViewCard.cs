using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Web.Data.ValueObjects;

namespace Tracker.Web.Data.Entities
{
    public class ViewCard
    {
        [BsonElement("id")]
        public string Id { get; set; }
        [BsonElement("title")]
        public string Title { get; set; }
        [BsonElement("estimate")]
        public ulong Estimate { get; set; }
        [BsonElement("timeSpent")]
        public ulong TimeSpent { get; set; }
        [BsonElement("status")]
        public string Status { get; set; }
        [BsonElement("startedTime")]
        public ulong StartedTime { get; set; }
        [BsonElement("completed")]
        public bool Completed { get; set; }
        [BsonElement("started")]
        public bool Started { get; set; }
    }
}
