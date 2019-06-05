using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Tracker.Services;
using Tracker.Data.Entities;
using Tracker.Web.Data.Interfaces;
using System;
using MongoDB.Driver;

namespace WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;
        private IMongoContext _mongo;

        public UsersController(IUserService userService, IMongoContext mc)
        {
            _userService = userService;
            _mongo = mc;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]User userParam)
        {
            var user= _userService.Authenticate(userParam.Email.ToLower(), userParam.Password);
            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody]User userParam)
        {
            var user = _userService.Register(userParam.Email.ToLower(), userParam.Password, userParam.Fullname, userParam.Username);
            if (user == null)
                return BadRequest(new { message = "Not all fields are valid" });

            return Ok(user);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }
    }
}
