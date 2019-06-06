using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tracker.Web.Helpers
{
    public static class TimeHelper
    {
        public static ulong ToMiliseconds(this DateTime dt)
        {
            return Convert.ToUInt64(dt.ToUniversalTime().Subtract(new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).TotalMilliseconds);
    
        }
    }
}
