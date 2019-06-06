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
    public class CardAggregate : ICardAggregate
    {
        private ICardRepository Cards;
        private IViewCardRepository ViewCards;
        private IUserRepository Users;
        private static readonly ulong TESTCARD_TIMESPENT = 10000; //10sec
        private static readonly ulong TESTCARD_BADESTIMATE = 5000; //5sec
        private static readonly ulong TESTCARD_GOODESTIMATE = 20000; //20sec
        public CardAggregate(ICardRepository cardRepository, IUserRepository userRepository, IViewCardRepository viewCardRepository)
        {
            this.Cards = cardRepository;
            this.Users = userRepository;
            this.ViewCards = viewCardRepository;
        }

        public void CreateCard(string title, string estimate, string createdAt, string email)
        {
            var card = new Card
            {
                Id = Guid.NewGuid(),
                Estimate = Convert.ToUInt64(estimate),
                CreatedAt = Convert.ToUInt64(createdAt),
                Status = TimeCardStatus.waiting,
                Title = title,
                UserId = Users.GetUserByEmail(email).Id,
            };
            Cards.AddCard(card);
        }

        public ViewCard ConvertToViewCard(Card card)
        {
            bool completed = (card.Status == TimeCardStatus.completed || card.Status == TimeCardStatus.badEstimated);
            bool started = (card.Status != TimeCardStatus.waiting);

            ulong timespent = completed ? (card.CompletedAt - card.StartedAt) : 0;

            var viewCard = new ViewCard {
                Id = card.Id.ToString(),
                Estimate = card.Estimate,
                Title = card.Title,
                Status = Enum.GetName(typeof(TimeCardStatus), card.Status),
                StartedTime = card.StartedAt,
                TimeSpent = timespent,
                Completed = completed,
                Started = started,
                UserId = card.UserId.ToString(),
                CreatedAt = card.CreatedAt
            };

            return viewCard;
        }

        public Card ConvertFromViewCard(ViewCard viewCard)
        {
            var status = StatusHelper.getStatusByString(viewCard.Status);
            var resultCard = new Card
            {
                Id = new Guid(viewCard.Id),
                Estimate = viewCard.Estimate,
                Title = viewCard.Title,
                StartedAt = viewCard.StartedTime,
                Status = status,
                CompletedAt = viewCard.Completed ? (viewCard.StartedTime + viewCard.TimeSpent) : 0,
                CreatedAt = viewCard.CreatedAt,
                UserId = new Guid(viewCard.UserId)
            };

            return resultCard;
        }

        public void InitCardsForUser(string userMail)
        {
            var user = Users.GetUserByEmail(userMail);
            var needToInit = (user != null) && (!user.IsInitialized);

            if (!needToInit) return;

            var rnd = new Random();
            var cardsToAdd = new List<Card>();
            for (int i = 0; i < 4; i++)
            {
                var status = (TimeCardStatus)i;
                bool badEstimated = (status == TimeCardStatus.badEstimated);
                bool completed = (status == TimeCardStatus.completed || status == TimeCardStatus.badEstimated);
                bool started = (status != TimeCardStatus.waiting);
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
                Cards.AddCard(c);
                ViewCards.AddCard(ConvertToViewCard(c));
            }
            Users.MarkInitialized(user);
        }

        public void DeleteCard(string id)
        {
            Cards.DeleteCard(new Guid(id));
            ViewCards.DeleteCard(id);
        }

        public void UpdateCardByView(ViewCard viewCard)
        {
            Cards.OverwriteCard(ConvertFromViewCard(viewCard));
            ViewCards.UpdateCreate(viewCard);
        }

        public void CreateCard(string email, ulong estimate, string title)
        {
            var user = Users.GetUserByEmail(email);
            var card = new Card
            {
                Id = Guid.NewGuid(),
                Title = title,
                CreatedAt = DateTime.Now.ToMiliseconds(),
                UserId = user.Id,
                Status = TimeCardStatus.inProgress,
                Estimate = estimate,
            };
            Cards.AddCard(card);
            ViewCards.AddCard(ConvertToViewCard(card));
        }
    }
}
