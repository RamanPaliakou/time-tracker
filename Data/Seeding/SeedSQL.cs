using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Data;
using Tracker.Data.Entities;
using Tracker.Web.Data.Entities;
using Tracker.Web.Data.ValueObjects;

namespace Tracker.Web.Data.Seeding
{
    public static class SeedSQL
    {
        public static void AddConstraints(this ModelBuilder builder)
        {
            builder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();
        }

        public static void SeedUsers(this ModelBuilder builder)
        {
            var user = new User
            {
                Id = Guid.NewGuid(),
                Email = "test@test.com",
                Password = "test",
                Fullname = "test",
                Username = "test",
                IsInitialized = false
            };

            builder.Entity<User>().HasData(user);
        }

    }
}
