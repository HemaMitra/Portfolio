using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "";

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

    }
}