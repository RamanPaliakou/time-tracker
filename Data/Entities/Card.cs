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
        public Guid VewRecordId { get; set; }
        [Required]
        public string Title { get; set; }
        public ImageCardStatus Status { get; set; }
        public ulong TimeSpent { get; set; }
        public ulong Estimate { get; set; }
        public  ulong StartedTime { get; set; }

        public DateTime CreationDate { get; set; }

        [ForeignKey("User")]
        public Guid UserId { get; set; }

        public virtual User User { get; set; }
    }
}
