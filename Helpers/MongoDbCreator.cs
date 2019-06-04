using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Tracker.Web.Helpers
{
    public static class MongoDbCreator
    {
        public static void CreateDbInstance(string path, int port)
        {
            var proc = new ProcessStartInfo();
            string command = "start mongod --dbpath "+path+" --port "+port.ToString();
            proc.UseShellExecute = true;

            proc.WorkingDirectory = @"C:\Windows\System32";

            proc.FileName = @"C:\Windows\System32\cmd.exe";
            proc.Verb = "runas";
            proc.Arguments = "/c " + command;
            Process.Start(proc);
        }
    }
}
