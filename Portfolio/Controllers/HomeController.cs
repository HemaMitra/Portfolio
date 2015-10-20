using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Controllers
{
    [RequireHttps]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AboutMe()
        {
            ViewBag.Message = "My Profile";

            return View();
        }

        public ActionResult JScript()
        {
            ViewBag.Message = "My Works";

            return View();
        }

        public ActionResult Assignments()
        {
            ViewBag.Message = "My Works";

            return View();
        }

        public ActionResult Experience()
        {
            ViewBag.Message = "My Experience";

            return View();
        }

        public ActionResult BlogPost()
        {
            ViewBag.Message = "Blogs";

            return View();
        }

        public ActionResult BlogSingle()
        {
            ViewBag.Message = "Blogs";

            return View();
        }

        public ActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Contact(string name,string email,string subject,string message)
        {
            IdentityMessage msg = new IdentityMessage();
            EmailService ems = new EmailService();

            msg.Subject = subject;
            msg.Destination = ConfigurationManager.AppSettings["ContactEmail"];
            msg.Body = "From : " + name + "<BR> Email : " + email + "<BR> Message : " + message;
            ems.SendAsync(msg);
            TempData["Message"] = "Your Message Has Been Sent.";
            return RedirectToAction("Contact");
        }

    }
}