using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Web.Data.Entities;

namespace Tracker.Web.Data.Interfaces
{
    interface IViewCardRepository
    {
        ViewCard GetById(Guid id);

        ViewCard GetById(string id);

        void AddCard(ViewCard card);

        void DeleteCard(Guid id);

        void DeleteCard(string id);

        void UpdateCreate(Guid id, ViewCard newCard);

        IEnumerable<ViewCard> GetAll();

        IEnumerable<ViewCard> GetAllOfStatus(string status);
    }
}
