using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Tracker.Services;
using Tracker.Data.Entities;
using Tracker.Web.Data.Interfaces;
using System;
using MongoDB.Driver;
using Microsoft.AspNetCore.Cors;
using Tracker.Web.Data.Entities;

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
            var cards = CardAggregate.GetCardsByEmail(email);
            return Ok(cards);
        }

        [HttpPost("updatecard")]
        public IActionResult UpdateCard([FromBody]ViewCard vc)
        {

            return Ok();
        }

        [HttpPost("deletecard")]
        public IActionResult DeleteCard([FromBody]ViewCard vc)
        {

            return Ok();
        }

        [HttpPost("getcarddetail")]
        public IActionResult GetCardDetail([FromBody]ViewCard vc)
        {

            return Ok();
        }

        [HttpPost("getcarddetail")]
        public IActionResult CreateCard([FromBody]ViewCard vc)
        {

            return Ok();
        }

        [AllowAnonymous]
        [HttpGet("health")]
        public IActionResult health()
        {
            return Ok("All GOOD");
        }

    }
}