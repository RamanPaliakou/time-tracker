using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Tracker.Data.Entities;
using Tracker.Helpers;
using Tracker.Web.Data.Aggregates;
using Tracker.Web.Data.Interfaces;

namespace Tracker.Services
{
    public class UserService : IUserService
    {
        private readonly AppSettings _appSettings;
        private IUserRepository Users;

        public UserService(IOptions<AppSettings> appSettings, IUserRepository users)
        {
            _appSettings = appSettings.Value;
            Users = users;
        }

        public User Authenticate(string email, string password)
        {
            var user = Users.GetUserByEmail(email);
            if (user == null) return null;

            if (user.Password == password)
                return GenerateToken(user);
            else return null;
        }

        public bool Authorize(string email, string password)
        {
            var user = Users.GetUserByEmail(email);
            if (user == null) return false;

            if (user.Password == password)
                return true;
            else return false;
        }

        public bool VerifyInitialization(string email)
        {
            var user = Users.GetUserByEmail(email);
            if (user == null) return false;
            return user.IsInitialized;
        }

        public void TryRegister(string email, string password, string fullname, string username)
        {
            var badUser = (email == null || password == null);
            if (badUser) return;

            var user = new User
            {
                Id = Guid.NewGuid(),
                Email = email,
                Password = password,
                Fullname = fullname,
                Username = username
            };
            Users.AddUser(user);
        }

        private User GenerateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            user.Password = null;

            return user;
        }


    }
}