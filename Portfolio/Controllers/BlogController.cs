using Portfolio.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Controllers
{
    public class BlogController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();
        
        // GET: Blog Index Page
        public ActionResult Index()
        {
            var Posts = db.BlogPost.ToList();
            return View(Posts);
        }

        // Create a new Blog
        public ActionResult Create()
        {
            return View();
        }

        // Store new blog in the database. BlogPost is the name we have mentioned in the dbset in IdentityModels.cs
        [HttpPost]
        public ActionResult Create(BlogPost blogPost)
        {
            blogPost.Created = System.DateTimeOffset.Now;
            blogPost.Updated = System.DateTimeOffset.Now;
            db.BlogPost.Add(blogPost);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        // Display details Page
        public ActionResult Details(int? Id)
        {
            var Post = db.BlogPost.Find(Id);
            return View(Post);
        }

        public ActionResult Edit(int? Id)
        {
            var Post = db.BlogPost.Find(Id);
            return View(Post);
        }
        
        [HttpPost]
         public ActionResult Edit(BlogPost blogPost)
        {
        	blogPost.Updated = System.DateTimeOffset.Now;
            db.BlogPost.Attach(blogPost);
            db.Entry(blogPost).Property("Title").IsModified = true;
            db.Entry(blogPost).Property("Slug").IsModified = true;
	        db.Entry(blogPost).Property("Body").IsModified = true;
            db.Entry(blogPost).Property("MediaURL").IsModified = true;
            db.Entry(blogPost).Property("Updated").IsModified = true;
            
	        //db.Entry(Post).State = System.Data.Entity.EntityState.Modified; // updates all the fields. Puts null for the fields that are not 
            //modified.
	        db.SaveChanges();
            return RedirectToAction("Index");

        }
    }
}