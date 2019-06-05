using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Web.Data.Entities;

namespace Tracker.Web.Data.Interfaces
{
    public interface IMongoContext
    {
        MongoClient Client { get; }
        IMongoDatabase Database { get; }
        IMongoCollection<ViewCard> Cards { get; }
    }
}
