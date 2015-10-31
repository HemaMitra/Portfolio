using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Portfolio.Models;
using System.IO;
using Microsoft.AspNet.Identity;
using PagedList;
using PagedList.Mvc;

namespace Portfolio.Controllers
{
    [RequireHttps]
    public class BlogPostsController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // Get: BlogPosts
        
        public ActionResult Index(int? page, string query, string category)
        {
            int pageSize = 3;
            int pageNumber = (page ?? 1);


            if (!string.IsNullOrWhiteSpace(query))
            {
                ViewBag.query = query;
            }
            if (!string.IsNullOrWhiteSpace(category))
            {
                ViewBag.category = category;
            }

            var qry = db.BlogPost.AsQueryable();


            // If query is not blank split the string and search for all the words
            if (!string.IsNullOrWhiteSpace(query))
            {
                char[] delimiters = { ' ', '-', ',' };
                string[] splitQry = query.Split(delimiters, StringSplitOptions.RemoveEmptyEntries);

                if (splitQry.Length > 0)
                {
                    qry = qry.Where(t => splitQry.Any( q=> t.Title.Contains(q)) ||
                               splitQry.Any( q=> t.Body.Contains(q)) || splitQry.Any( q=> t.Category.Contains(q)) ||
                               splitQry.Any( q=> t.Comments.Any(c=>c.Body.Contains(q)))).Distinct();
                    
                }
            }
            
            // look for the category if the user clicks on one
            qry = !string.IsNullOrWhiteSpace(category) ? qry.Where(cat => cat.Category == category): qry;

            return View(qry.OrderByDescending(p => p.Created).ToPagedList(pageNumber, pageSize));
        }



        // AdminIndex Controller Action
        [Authorize(Roles="Admin")]
        public ActionResult AdminIndex()
        {
            return View(db.BlogPost.ToList());
        }

       
         //GET: BlogPosts/Details/5
        public ActionResult DetailsU(string Slug)
        {
            if (String.IsNullOrWhiteSpace(Slug))
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BlogPost blogPost = db.BlogPost.FirstOrDefault(p => p.Slug == Slug);
            if (blogPost == null)
            {
                return HttpNotFound();
            }
            return View(blogPost);
        }

        // GET: BlogPosts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: BlogPosts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [Authorize(Roles = "Admin")]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Created,Updated,Title,Slug,Body,MediaURL,Published,Category")] BlogPost blogPost,
            HttpPostedFileBase image)
        {
            // Upload images
            if (image != null && image.ContentLength > 0)
            {
                // Check the file name to make sure its an image
                var ext = Path.GetExtension(image.FileName).ToLower();

                if (ext != ".png" && ext != ".jpg" && ext != ".jpeg" && ext != ".gif" && ext != ".bmp")
                {
                    ModelState.AddModelError("image", "Invalid Format");
                }
            }


            if (ModelState.IsValid)
            {
                var Slug = StringUtilites.URLFriendly(blogPost.Title);
                if (String.IsNullOrWhiteSpace(Slug))
                {
                    ModelState.AddModelError("Title","Invalid Title");
                    return View(blogPost);
                }
                if(db.BlogPost.Any(p => p.Slug == Slug))
                {
                    ModelState.AddModelError("Title","The Title Must Be Unique");
                    return View(blogPost);
                }
                // Saving Image
                if (image != null)
                {
                    // relative server path
                    var filePath = "/Uploads/";

                    // path on physical drive on server
                    var absPath = Server.MapPath("~" + filePath);

                    // media URL for relative path
                    blogPost.MediaURL = filePath + "/" + image.FileName;

                    // save image
                    Directory.CreateDirectory(absPath);
                    image.SaveAs(Path.Combine(absPath, image.FileName));

                }

                blogPost.Slug = Slug;
                blogPost.Created = System.DateTimeOffset.Now;
                blogPost.Updated = null;
                db.BlogPost.Add(blogPost);
                db.SaveChanges();
                return RedirectToAction("AdminIndex");
            }
            
            return View(blogPost);
        }


        // GET: BlogPosts/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BlogPost blogPost = db.BlogPost.Find(id);
            if (blogPost == null)
            {
                return HttpNotFound();
            }
            return View(blogPost);
        }

        // POST: BlogPosts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [Authorize(Roles = "Admin")]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Title,Body,MediaURL,Published,Category")] BlogPost blogPost,HttpPostedFileBase image)
        {
            // Upload images
            if (image != null && image.ContentLength > 0)
            {
                // Check the file name to make sure its an image
                var ext = Path.GetExtension(image.FileName).ToLower();

                if (ext != ".png" && ext != ".jpg" && ext != ".jpeg" && ext != ".gif" && ext != ".bmp")
                {
                    ModelState.AddModelError("image", "Invalid Format");
                }
            }


            // Edit Blog
            if (ModelState.IsValid)
            {

                // Saving Image
                if (image != null)
                {
                    // relative server path
                    var filePath = "/Uploads/";

                    // path on physical drive on server
                    var absPath = Server.MapPath("~" + filePath);

                    // media URL for relative path
                    blogPost.MediaURL = filePath + "/" + image.FileName;

                    // save image
                    image.SaveAs(Path.Combine(absPath, image.FileName));

                }
                
                blogPost.Updated = System.DateTimeOffset.Now;
                
                db.BlogPost.Attach(blogPost);

                db.Entry(blogPost).Property("Body").IsModified = true;
                db.Entry(blogPost).Property("MediaURL").IsModified = true;
                db.Entry(blogPost).Property("Updated").IsModified = true;
                db.Entry(blogPost).Property("Published").IsModified = true;
                
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(blogPost);
        }

        // GET: BlogPosts/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BlogPost blogPost = db.BlogPost.Find(id);
            if (blogPost == null)
            {
                return HttpNotFound();
            }
            return View(blogPost);
        }

        // POST: BlogPosts/Delete/5
        [HttpPost, ActionName("Delete")]
        //[Authorize(Roles = "Admin")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            BlogPost blogPost = db.BlogPost.Find(id);
            db.BlogPost.Remove(blogPost);
            db.SaveChanges();
            //return RedirectToAction("AdminIndex");
            return RedirectToAction("Index");
        }

        [HttpPost]
        public ActionResult CreateComment(Comment Comment,string Slug)
        {
            if (ModelState.IsValid)
            {
                Comment.Created = System.DateTimeOffset.Now;
                Comment.AuthorId = User.Identity.GetUserId();
                Comment.Updated = null;
                db.Comments.Add(Comment);
                db.SaveChanges();
            }
            return RedirectToAction("DetailsU", "BlogPosts", new {Slug = Slug});
        }

        [Authorize(Roles = "Admin, Moderator")]
        [ValidateAntiForgeryToken]
        public ActionResult EditComment(int id,string Slug,string Body)
        {
            // Edit Comment
            if (ModelState.IsValid)
            {
                Comment Comment = db.Comments.Find(id);
                Comment.UpdatedBy = User.Identity.Name;
                Comment.Updated = System.DateTimeOffset.Now;
                Comment.Body = Body;
                db.Comments.Attach(Comment);

                db.Entry(Comment).Property("Body").IsModified = true;
                db.Entry(Comment).Property("Updated").IsModified = true;
                db.Entry(Comment).Property("UpdatedBy").IsModified = true;
                db.SaveChanges();
            }
            return RedirectToAction("DetailsU", "BlogPosts", new { Slug = Slug });
        }
        
        [Authorize(Roles = "Admin, Moderator")]
        public ActionResult DeleteComment(int id,string Slug)
        {
            Comment Comment = db.Comments.Find(id);
            db.Comments.Remove(Comment);
            db.SaveChanges();
            
            return RedirectToAction("DetailsU", "BlogPosts", new { Slug = Slug });
        }

        public ActionResult DeletePhoto(string MediaUrl,int id)
        {
            string fullPath = Request.MapPath(MediaUrl);
            FileInfo file = new FileInfo(fullPath);

            BlogPost blogPost = db.BlogPost.Find(id);

            if (file.Exists)
            {
                file.Delete();
                blogPost.MediaURL = null;
                db.BlogPost.Attach(blogPost);
                db.Entry(blogPost).Property("MediaURL").IsModified = true;
                db.SaveChanges();
            }
            return RedirectToAction("Delete", "BlogPosts", new {id = id });
        }

        protected override void Dispose(bool disposing)

        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
