using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Data.Entities;

namespace Tracker.Web.Data.Interfaces
{
    public interface IUserRepository
    {
        IEnumerable<User> GetUsers();

        bool Verify(string email, string password);

        User GetUserByID(Guid id);

        User GetUserByEmail(string email);

        void AddUser(User user);

        void DeleteUser(Guid id);

        void MarkInitialized(User user);
    }
}
