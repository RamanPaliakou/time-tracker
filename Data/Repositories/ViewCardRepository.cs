using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Web.Data.Constants;
using Tracker.Web.Data.Entities;
using Tracker.Web.Data.Interfaces;

namespace Tracker.Web.Data.Repositories
{
    public class ViewCardRepository : IViewCardRepository
    {
        private INRDbContext context;
        private bool disposed = false;
        private IMongoCollection<ViewCard> viewCards;

        public ViewCardRepository(INRDbContext context)
        {
            this.context = context;
            viewCards = context.Db.GetCollection<ViewCard>(MongoNames.CARDS);
        }
        public ViewCard GetById(Guid id)
        {
            var Id = id.ToString();
            return viewCards.Find<ViewCard>(x => x.Id == Id).FirstOrDefault();
        }

        public ViewCard GetById(string id)
        {
            return viewCards.Find<ViewCard>(x => x.Id == id).FirstOrDefault();
        }

        public void AddCard(ViewCard card)
        {
            viewCards.InsertOne(card);
        }

        public void DeleteCard(Guid id)
        {
            var Id = id.ToString();
            viewCards.DeleteOne(x => x.Id == Id);
        }

        public void DeleteCard(string id)
        {
            viewCards.DeleteOne(x => x.Id == id);
        }

        public void UpdateCreate(Guid id, ViewCard newCard)
        {
            if (GetById(id) != null)
            {
                var builder = Builders<ViewCard>.Update;
                var update = builder
                    .Set(x => x.Title, newCard.Title)
                    .Set(x => x.Completed, newCard.Completed)
                    .Set(x => x.Estimate, newCard.Estimate)
                    .Set(x => x.Started, newCard.Started)
                    .Set(x => x.TimeSpent, newCard.TimeSpent)
                    .Set(x => x.StartedTime, newCard.StartedTime)
                    .Set(x => x.Status, newCard.Status);
            }
            else
            {
                viewCards.InsertOne(newCard);
            }
        }

        public IEnumerable<ViewCard> GetAll()
        {
            return viewCards.Find(x => true).ToEnumerable<ViewCard>();
        }

        public IEnumerable<ViewCard> GetAllOfStatus(string status)
        {
            return viewCards.Find(x => x.Status == status).ToEnumerable<ViewCard>();
        }

    }
}
