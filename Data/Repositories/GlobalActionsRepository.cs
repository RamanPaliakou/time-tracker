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
    public class GlobalActionsRepository: IGlobalActionsRepository, IDisposable
    {
        private ApplicationDbContext context;
        private bool disposed = false;

        public void InitCardsForUser(User userData)
        {
            var user = context.Users.Where(x => x.Email == userData.Email).FirstOrDefault();
            var needToInit = (user != null) && (!user.IsInitialized);

            if (!needToInit) return;

            var rnd = new Random();
            var cards = new List<Card>();
            for (int i = 0; i < 4; i++)
            {
                var status = (ImageCardStatus)i;
                bool setTimeSpent = (status == ImageCardStatus.completed);
                bool setStartedTime = (status != ImageCardStatus.waiting);
                cards.Add(new Card
                {
                    Id = Guid.NewGuid(),
                    Title = "Test Card " + i.ToString(),
                    CreationDate = DateTime.Now,
                    UserId = user.Id,
                    Status = status,
                    TimeSpent = (setTimeSpent ? (ulong)rnd.Next(1, 50) * 6000 : (ulong)0),
                    Estimate = (ulong)rnd.Next(1, 50) * 6000,
                    StartedTime = (setStartedTime ? (ulong)rnd.Next(1, 50) * 6000 : (ulong)0
                });
            }

            foreach (var c in cards)
                context.Cards.Add(c);

            context.Users.Remove(user);
            user.IsInitialized = true;
            context.Users.Add(user);
            context.SaveChanges();
        }

        public void SendCardToMongo(Card card)
        {

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
