using System;
using System.Collections.Generic;

#nullable disable

namespace ProjDAL.Models
{
    public partial class UserTeam
    {
        public int UserId { get; set; }
        public string AssignedUsers { get; set; }
        public int? Status { get; set; }
        public int? RoleId { get; set; }
    }
}
