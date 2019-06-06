using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Data.Entities;
using Tracker.Web.Data.Entities;
using Tracker.Web.Data.Seeding;

namespace Tracker.Data
{
    // Non-Relational Database Context
    public class RDbContext : DbContext
    {
        public RDbContext()
        {
        }

        public RDbContext(DbContextOptions<RDbContext> options) : base(options)
        {
        }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Card> Cards { get; set; }
        public virtual DbSet<StatusBound> BoundStatuses { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.AddConstraints();
            builder.SeedUsers();
        }
    }
}

