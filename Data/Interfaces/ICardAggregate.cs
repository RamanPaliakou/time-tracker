using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Web.Data.Entities;

namespace Tracker.Web.Data.Interfaces
{
    public interface ICardAggregate
    {
        void CreateCard(string title, string estimate, string createdAt, string email);

        IEnumerable<Card> GetCardsByEmail(string email);

        void InitCardsForUser(string email);
    }
}
