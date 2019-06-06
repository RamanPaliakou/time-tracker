using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Web.Data.Entities;

namespace Tracker.Web.Data.Interfaces
{
    public interface IViewCardRepository
    {
        ViewCard GetById(Guid id);

        ViewCard GetById(string id);

        void AddCard(ViewCard card);

        void DeleteCard(Guid id);

        void DeleteCard(string id);

        void UpdateCreate(ViewCard newCard);

        IEnumerable<ViewCard> GetAll();

        IEnumerable<ViewCard> GetAllOfStatus(string status);

        IEnumerable<ViewCard> GetAllByUserId(string userId);
    }
}
