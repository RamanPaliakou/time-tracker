using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Data;
using Tracker.Data.Entities;
using Tracker.Web.Data.Interfaces;

namespace Tracker.Web.Data.Repositories
{
    public class UserRepository : IUserRepository, IDisposable
    {
        private ApplicationDbContext context;
        private bool disposed = false;

        public UserRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public IEnumerable<User> GetUsers()
        {
            return context.Users.AsEnumerable<User>();
        }

        public bool Verify(string email, string password)
        {
            var user = GetUserByEmail(email);
            return (user != null && user.Password == password);
        }

        public User GetUserByID(Guid id)
        {
            return context.Users.Find(id);
        }

        public User GetUserByEmail(string email)
        {
            return context.Users.Where(x => x.Email == email).FirstOrDefault();
        }

        public void AddUser(User user)
        {
            context.Users.Add(user);
            context.SaveChanges();
        }

        public void DeleteUser(Guid id)
        {
            User user = context.Users.Find(id);
            context.Users.Remove(user);
            context.SaveChanges();
        }

        public void MarkInitialized(User user)
        {
            context.Users.FirstOrDefault(x => x.Id == user.Id).IsInitialized = true;
            context.SaveChanges();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}

