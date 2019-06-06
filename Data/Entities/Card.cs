using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Data.Entities;
using Tracker.Web.Data.ValueObjects;

namespace Tracker.Web.Data.Entities
{
    public class Card
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Title { get; set; }
        public TimeCardStatus Status { get; set; }

        public ulong CreatedAt { get; set; }
        public ulong Estimate { get; set; }
        public  ulong StartedAt { get; set; }
        public ulong CompletedAt { get; set; }

        [ForeignKey("User")]
        public Guid UserId { get; set; }
        public virtual User User { get; set; }


    }
}
