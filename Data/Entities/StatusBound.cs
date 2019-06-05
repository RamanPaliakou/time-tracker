using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Web.Data.ValueObjects;

namespace Tracker.Web.Data.Entities
{
    public class StatusBound
    {
        [Key]
        public Guid Id { get; set; }
        public ImageCardStatus Status {get; set;}
        public string StringRepresentation { get; set; }
    }
}
