using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Tracker.Web.Data.Entities;

namespace Tracker.Data.Entities
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }
        
        [Required]
        public string Email { get; set; }
        public string Fullname { get; set; }
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        public string Token { get; set; }
        public bool IsInitialized { get; set; }
        public virtual ICollection<Card> Cards { get; set; }
    }
}