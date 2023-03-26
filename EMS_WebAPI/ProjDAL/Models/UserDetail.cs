using System;
using System.Collections.Generic;

#nullable disable

namespace ProjDAL.Models
{
    public partial class UserDetail
    {
        public int UserDetailsId { get; set; }
        public int? Experience { get; set; }
        public string DateOfJoining { get; set; }
        public string PreviousOrgName { get; set; }
        public string CurrentOrgName { get; set; }
        public int? UserId { get; set; }

        public virtual User User { get; set; }
    }
}
