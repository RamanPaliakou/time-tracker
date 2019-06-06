using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Web.Data.Entities;
using Tracker.Web.Helpers;
using Tracker.Web.Data.Interfaces;
using Tracker.Web.Data.ValueObjects;
using Tracker.Data.Entities;

namespace Tracker.Web.Data.Aggregates
{
    public class CardAggregate
    {
        private ICardRepository cards;
        private IViewCardRepository viewCards;
        private IUserRepository users;
        private static readonly ulong TESTCARD_TIMESPENT = 10000; //10sec
        private static readonly ulong TESTCARD_BADESTIMATE = 5000; //5sec
        private static readonly ulong TESTCARD_GOODESTIMATE = 20000; //20sec
        public CardAggregate(ICardRepository c, IUserRepository u)
        {
            this.cardRep = c;
            this.userRep = u;
        }

        public void CreateCard(string title, string estimate, string createdAt, string email)
        {
            var card = new Card
            {
                Id = Guid.NewGuid(),
                Estimate = Convert.ToUInt64(estimate),
                CreatedAt = Convert.ToUInt64(createdAt),
                Status = ImageCardStatus.waiting,
                Title = title,
                UserId = users.GetUserByEmail(email).Id,
            };
            cards.AddCard(card);
        }

        public ViewCard ConvertToViewCard(Card card)
        {
            bool completed = (card.Status == ImageCardStatus.completed || card.Status == ImageCardStatus.badEstimated);
            bool started = (card.Status != ImageCardStatus.waiting);

            ulong timespent = completed ? card.CompletedAt - card.StartedAt : 0;

            var viewCard = new ViewCard {
                Id = card.Id.ToString(),
                Estimate = card.Estimate,
                Title = card.Title,
                Status = Enum.GetName(typeof(ImageCardStatus), card.Status),
                StartedTime = card.StartedAt,
                TimeSpent = timespent,
                Completed = completed,
                Started = started,
            };

            return viewCard;
        }

        public void InitCardsForUser(User user)
        {
            var needToInit = (user != null) && (!user.IsInitialized);

            if (!needToInit) return;

            var rnd = new Random();
            var cardsToAdd = new List<Card>();
            for (int i = 0; i < 4; i++)
            {
                var status = (ImageCardStatus)i;
                bool badEstimated = status == ImageCardStatus.badEstimated;
                bool completed = (status == ImageCardStatus.completed || status == ImageCardStatus.badEstimated);
                bool started = (status != ImageCardStatus.waiting);
                ulong startedAt = DateTime.Now.ToMiliseconds();
                ulong completedAt = startedAt + TESTCARD_TIMESPENT;
                ulong estimate = badEstimated ? TESTCARD_BADESTIMATE : TESTCARD_GOODESTIMATE;


                cardsToAdd.Add(new Card
                {
                    Id = Guid.NewGuid(),
                    Title = "Test Card " + i.ToString(),
                    CreatedAt = DateTime.Now.ToMiliseconds(),
                    UserId = user.Id,
                    Status = status,
                    CompletedAt = completedAt,
                    StartedAt = startedAt,
                    Estimate = estimate,
                });
            }

            foreach (var c in cardsToAdd)
            {
                cards.AddCard(c);
                viewCards.AddCard(ConvertToViewCard(c));
            }
            users.MarkInitialized(user);
        }

    }
}
