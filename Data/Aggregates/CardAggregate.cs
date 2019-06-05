using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Web.Data.Entities;
using Tracker.Data.Entities;
using Tracker.Web.Data.Interfaces;
using Tracker.Web.Data.ValueObjects;

namespace Tracker.Web.Data.Aggregates
{
    public class CardAggregate: ICardAggregate
    {
        private ICardRepository cardRep;
        private IUserRepository userRep;
        public CardAggregate(ICardRepository c, IUserRepository u)
        {
            this.cardRep = c;
            this.userRep = u;
        }

        public void CreateCard(string title, string estimate, string email)
        {
            var card = new Card
            {
                Id = Guid.NewGuid(),
                Estimate = Convert.ToUInt64(estimate),
                CreationDate = DateTime.Now,
                Status = ImageCardStatus.waiting,
                Title = title,
                UserId = userRep.GetUserByEmail(email).Id,
                TimeSpent = 0
            };
            cardRep.AddCard(card);

        }

        public IEnumerable<Card> GetCardsToDisplay(string email)
        {
            return cardRep.GetAllOfEmail(email);
        }

        public void InitCardsForUser(string email)
        {
            var user = userRep.GetUserByEmail(email);
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
                    StartedTime = setStartedTime ? (ulong)rnd.Next(1, 50) * 6000 : (ulong)0
                });
            }

            foreach (var c in cards)
                cardRep.AddCard(c);

            userRep.MarkInitialized(user);
        }
    }
}
