using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Web.Data.Entities;

namespace Tracker.Web.Data.Interfaces
{
    public interface ICardRepository
    {
        Card GetById(Guid id);

        void AddCard(Card card);

        void DeleteCard(Guid id);

        void OverwriteCard(Card newCard);

        IEnumerable<Card> GetAll();

        IEnumerable<Card> GetAllOfEmail(string email);

    }
}
