using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ProjDAL.Models
{
    public class AppUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public int Role { get; set; }
        public int Status { get; set; }
        public int Experience { get; set; }
        public string DateOfJoining { get; set; }
        public string PreviousOrgName { get; set; }
        public string CurrentOrgName { get; set; }
    }
}
