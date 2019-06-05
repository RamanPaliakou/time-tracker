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
    public class CardAggregate
    {
        private ICardRepository cardRep;
        private IUserRepository userRep;
        CardAggregate(ICardRepository c, IUserRepository u)
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
            return cardRep.GetAll().Where(x => x.User.Email == email);
        }


    }
}
