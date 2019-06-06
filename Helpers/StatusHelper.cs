using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracker.Web.Data.ValueObjects;

namespace Tracker.Web.Helpers
{
    public static class StatusHelper
    {
        public static TimeCardStatus getStatusByString(string status)
        {
            TimeCardStatus result = TimeCardStatus.waiting; ;
            switch (status)
            {
                case "inProgress":
                    result = TimeCardStatus.inProgress;
                    break;
                case "badEstimated":
                    result = TimeCardStatus.badEstimated;
                    break;
                case "completed":
                    result = TimeCardStatus.completed;
                    break;
                case "waiting":
                    result = TimeCardStatus.waiting;
                    break;
            }
            return result;
        }
    }
}
