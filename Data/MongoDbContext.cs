using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Web.Data.Interfaces;

namespace Tracker.Web.Data
{
    public class MongoDbContext : IMongoContext
    {
        private static IConfiguration _configuration;
        private static bool _isInitialized = false;
        private static string connectionString;
        private static MongoClient _Client;
        private static IMongoDatabase _Cards;
        private static IMongoDatabase _Avatars;
        private static IMongoDatabase _Backgrounds;


        public MongoClient Client { get { return _Client; } private set { _Client = value; } }
        public IMongoDatabase Cards { get { return _Cards; } private set { _Cards = value; } }
        public IMongoDatabase Avatars { get { return _Avatars; } private set { _Avatars = value; } }
        public IMongoDatabase Backgrounds { get { return _Backgrounds; } private set { _Backgrounds = value; } }


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
            connectionString = _configuration.GetValue<string>("MongoInstanceServer") + ":" + _configuration.GetValue<string>("MongoInstancePort")+'/';

            Client = new MongoClient();

            _Cards = Client.GetDatabase("Cards");
            _Avatars = Client.GetDatabase("Avatars");
            _Backgrounds = Client.GetDatabase("Backgrounds");
        }
    }
}
