using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Data.Entities;

namespace Tracker.Web.Data.Interfaces
{
    public interface IUserService
    {
        User Authenticate(string email, string password);
        void TryRegister(string email, string password, string fullName, string username);
        bool Authorize(string email, string password);
        bool VerifyInitialization(string email);
    }
}
