using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Data;
using Tracker.Data.Entities;
using Tracker.Web.Data.Entities;
using Tracker.Web.Data.Interfaces;
using Tracker.Web.Data.ValueObjects;

namespace Tracker.Web.Data.Repositories
{
    public class CardRepository : ICardRepository, IDisposable
    {
        private ApplicationDbContext context;
        private bool disposed = false;

        public CardRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public Card GetById(Guid id)
        {
            return context.Cards.Find(id);
        }

        public void AddCard(Card card)
        {
            context.Cards.Add(card);
            context.SaveChanges();
        }

        public void DeleteCard(Guid id)
        {
            Card card = context.Cards.Find(id);
            context.Cards.Remove(card);
            context.SaveChanges();
        }

        public void OverwriteCard(Card newCard)
        {
            Card card = GetById(newCard.Id);
            context.Cards.Remove(card);
            context.Cards.Add(newCard);
            context.SaveChanges();
        }

        public IEnumerable<Card> GetAll()
        {
            return context.Cards.AsEnumerable<Card>();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}

