using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Data.Entities;
using Tracker.Web.Data.Entities;

namespace Tracker.Web.Data.Interfaces
{
    public interface ICardAggregate
    {
        void CreateCard(string title, string estimate, string createdAt, string email);

        ViewCard ConvertToViewCard(Card card);

        Card ConvertFromViewCard(ViewCard viewCard);

        void InitCardsForUser(string userMail);

        void UpdateCardByView(ViewCard viewCard);

        void DeleteCard(string id);

        void CreateCard(string email, ulong estimate, string title);
    }
}
