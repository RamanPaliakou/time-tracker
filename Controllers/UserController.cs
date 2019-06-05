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
        private IUserService UserService;
        private ICardAggregate CardAggregate;

        public UsersController(IUserService userService, IMongoContext mc, ICardAggregate cardAggregate)
        {
            UserService = userService;
            CardAggregate = cardAggregate;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]User userParam)
        {
            var user= UserService.Authenticate(userParam.Email.ToLower(), userParam.Password);
            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody]User userParam)
        {
            var user = UserService.Register(userParam.Email.ToLower(), userParam.Password, userParam.Fullname, userParam.Username);
            if (user == null)
                return BadRequest(new { message = "Not all fields are valid" });
            CardAggregate.InitCardsForUser(userParam.Email.ToLower());
            return Ok(user);
        }

        [AllowAnonymous]
        [HttpGet("health")]
        public IActionResult health()
        {
            return Ok("All GOOD");
        }
    }
}
