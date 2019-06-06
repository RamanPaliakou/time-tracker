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
        private RDbContext context;
        private bool disposed = false;

        public CardRepository(RDbContext context)
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

        public IEnumerable<Card> GetAllOfEmail(string email)
        {
            return context.Cards
              .Join(context.Users,
                    c => c.UserId,
                    u => u.Id,
                    (c, u) => new { c, u })
              .Where(cu => cu.u.Email == email)
              .Select(cu => new Card
              {
                  Id = cu.c.Id,
                  UserId = cu.c.UserId,
                  Title = cu.c.Title,
                  CreatedAt = cu.c.CreatedAt,
                  Status = cu.c.Status,
                  StartedAt = cu.c.StartedAt,
                  Estimate = cu.c.Estimate,
                  CompletedAt = cu.c.CompletedAt
              })
              .AsEnumerable<Card>();
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

