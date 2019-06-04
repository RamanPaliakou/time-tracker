using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tracker.Web.Data.Interfaces
{
    public interface IMongoContext
    {
        IMongoDatabase Cards { get; }
        IMongoDatabase Avatars { get; }
        IMongoDatabase Backgrounds { get; }
    }
}
