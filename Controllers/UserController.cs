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

        public UsersController(IUserService userService, ICardAggregate cardAggregate)
        {
            UserService = userService;
            CardAggregate = cardAggregate;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]User userParam)
        {
            var email = userParam.Email.ToLower();
            var isValid = UserService.Authorize(email, userParam.Password);
            var isNotInitialized = !UserService.VerifyInitialization(email);

            if (!isValid) return BadRequest(new { message = "Username or password is incorrect" });
            if (isValid && isNotInitialized) CardAggregate.InitCardsForUser(email);
                
            var user = UserService.Authenticate(userParam.Email.ToLower(), userParam.Password);                
            return Ok(user);
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody]User userParam)
        {
            var email = userParam.Email.ToLower();
            UserService.TryRegister(email, userParam.Password, userParam.Fullname, userParam.Username);

            
            var isValid = UserService.Authorize(email, userParam.Password);
            var isNotInitialized = !UserService.VerifyInitialization(email);
            if (isValid && isNotInitialized) CardAggregate.InitCardsForUser(email);

            var user = UserService.Authenticate(userParam.Email.ToLower(), userParam.Password);
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
