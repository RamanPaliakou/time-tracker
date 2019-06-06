using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Web.Data.Entities;

namespace Tracker.Web.Data.Interfaces
{
    public interface INRDbContext
    {
        MongoClient Client { get; }
        IMongoDatabase Db { get; }
    }
}
