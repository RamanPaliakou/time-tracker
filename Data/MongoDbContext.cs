using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Data.Entities;
using Tracker.Web.Data.Entities;
using Tracker.Web.Data.Interfaces;

namespace Tracker.Web.Data
{
    public class MongoDbContext : IMongoContext
    {
        private static IConfiguration _configuration;
        private static bool _isInitialized = false;
        private static string connectionString;
        private static MongoClient _Client;
        private static IMongoDatabase db;
        private static IMongoCollection<ViewCard> _Cards;

        public MongoClient Client { get { return _Client; } private set { _Client = value; } }
        public IMongoDatabase Database { get { return db; } private set { db = value; } }
        public IMongoCollection<ViewCard> Cards { get { return _Cards; } private set { _Cards = value; } }

        public MongoDbContext(IConfiguration configuration)
        {
            _configuration = configuration;

            if (!_isInitialized)
            {
                initContext();
                _isInitialized = true;
            }
        }

        private void initContext()
        {
            //In case method is executed just after mongodb instance creation
            System.Threading.Thread.Sleep(2000);

            connectionString = _configuration.GetValue<string>("MongoInstanceServer") + ":" + _configuration.GetValue<string>("MongoInstancePort")+'/';

            Client = new MongoClient(connectionString);

            db = Client.GetDatabase("TimeTracker");
            _Cards = db.GetCollection<ViewCard>("Cards");
        }
    }
}
