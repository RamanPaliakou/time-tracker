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
        private ICardRepository Cards;
        private IViewCardRepository ViewCards;
        private IUserRepository Users;

        public CardsController(ICardAggregate cardAggregate, ICardRepository cardRepository, IViewCardRepository viewCardRepository, IUserRepository userRepository)
        {
            CardAggregate = cardAggregate;
            Cards = cardRepository;
            ViewCards = viewCardRepository;
            Users = userRepository;
        }
        
        [HttpPost("getcards")]
        public IActionResult GetCards([FromBody]string email)
        {
            var user = Users.GetUserByEmail(email);
            var cards = ViewCards.GetAllByUserId(user.Id.ToString());
            return Ok(cards);
        }

        [HttpPost("updatecard")]
        public IActionResult UpdateCard([FromBody]ViewCard vc)
        {
            CardAggregate.UpdateCardByView(vc);
            return Ok();
        }

        [HttpPost("deletecard")]
        public IActionResult DeleteCard([FromBody]string id)
        {
            CardAggregate.DeleteCard(id);
            return Ok();
        }

        [HttpPost("loadcarddata")]
        public IActionResult LoadCardData([FromBody]string id)
        {
            var viewCard = ViewCards.GetById(id);
            return Ok(viewCard);
        }

        [HttpPost("createcard")]
        public IActionResult CreateCard([FromBody] string data)
        {
            var f = data.Split(' ');
            // CardAggregate.CreateCard( email, Convert.ToUInt64(estimate), title);
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