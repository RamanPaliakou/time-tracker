using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Data.Entities;
using Tracker.Web.Data.Constants;
using Tracker.Web.Data.Entities;
using Tracker.Web.Data.Interfaces;

namespace Tracker.Web.Data
{
    // Non-Relational Database Context. Scince Mogo is used, inherit from IMongoContext
    public class NRDbContext : INRDbContext

    {
        private static IConfiguration _configuration;
        private static bool _isInitialized = false;
        private static string _connectionString;

        private static MongoClient _client;
        private static IMongoDatabase _db;
        
        public MongoClient Client { get { return _client; } private set { _client = value; } }
        public IMongoDatabase Db { get { return _db; } private set { _db = value; } }

        public NRDbContext(IConfiguration configuration)
        {
            _configuration = configuration;

            if (!_isInitialized) initContext();
        }

        private void initContext()
        {
            // Delay in case method is executed just after mongodb instance creation
            System.Threading.Thread.Sleep(2000);

            _connectionString = _configuration.GetValue<string>
                ("MongoInstanceServer") + ":" + _configuration.GetValue<string>("MongoInstancePort")+'/';

            Client = new MongoClient(_connectionString);

            Db = Client.GetDatabase(MongoNames.DBNAME);
           
            _isInitialized = true;
        }
    }
}
