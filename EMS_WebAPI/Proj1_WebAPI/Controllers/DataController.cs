using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjDAL.Models;
using System;
using System.Threading.Tasks;

namespace Proj1_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        private readonly DataDbContext _context;
        
        public DataController(DataDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Post(AppUser model)
        {
            try
            {
                var users = new User();
                users.FirstName = model.FirstName;
                users.LastName = model.LastName;
                users.Address = model.Address;
                users.Role = model.Role;
                users.Status = model.Status;
                await _context.Users.AddAsync(users);
                await _context.SaveChangesAsync();
                int latestId = users.UserId;
                var UserDetails = new UserDetail
                {
                    Experience = model.Experience,
                    DateOfJoining = model.DateOfJoining,
                    PreviousOrgName = model.PreviousOrgName,
                    CurrentOrgName = model.CurrentOrgName,
                    UserId = latestId,
                };
                
                await _context.UserDetails.AddAsync(UserDetails);
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
