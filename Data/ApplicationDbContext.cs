using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Data.Entities;

namespace Tracker.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public virtual DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("Users");

                entity.HasIndex(e => e.Id).IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

            });

            var user = new User
            {
                Id = Guid.NewGuid(),
                Email = "test@test.com",
                Password = "test",
                Fullname = "test",
                Username = "test"
            };

            modelBuilder.Entity<User>().HasData(user);
        }
    }
}

