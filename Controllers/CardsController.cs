using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Tracker.Services;
using Tracker.Data.Entities;
using Tracker.Web.Data.Interfaces;
using System;
using MongoDB.Driver;
using Microsoft.AspNetCore.Cors;

namespace WebApi.Controllers
{   [Authorize]
    [ApiController]
    [EnableCors("Default")]
    [Route("[controller]")]
    public class CardsController : ControllerBase
    {
        private ICardAggregate CardAggregate;

        public CardsController(ICardAggregate cardAggregate)
        {
            CardAggregate = cardAggregate;
        }
        
        [HttpPost("getcards")]
        public IActionResult GetCards([FromBody]string email)
        {
            var cards = CardAggregate.GetCardsToDisplay(email);
            return Ok(cards);
        }

        [AllowAnonymous]
        [HttpGet("health")]
        public IActionResult health()
        {
            return Ok("All GOOD");
        }

    }
}