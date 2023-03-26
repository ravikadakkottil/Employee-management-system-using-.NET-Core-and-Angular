using System;
using System.Collections.Generic;

#nullable disable

namespace ProjDAL.Models
{
    public partial class User
    {
        public User()
        {
            UserDetails = new HashSet<UserDetail>();
        }

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public int? Role { get; set; }
        public int? Status { get; set; }
        public string AuthId { get; set; }

        public virtual ICollection<UserDetail> UserDetails { get; set; }
    }
}
