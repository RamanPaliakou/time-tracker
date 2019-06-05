using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tracker.Web.Data.ValueObjects
{
    public enum ImageCardStatus
    {
        inProgress = 0,
        waiting = 1,
        completed = 2,
        badEstimated = 3
    }
}
