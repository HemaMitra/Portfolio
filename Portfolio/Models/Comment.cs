﻿namespace Portfolio.Models
{   
    using System;
    using System.Collections.Generic;

    public class Comment
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public string AuthorId { get; set; }
        public string Body { get; set; }
        public System.DateTimeOffset Created { get; set; }
        public Nullable<System.DateTimeOffset> Updated { get; set; }
        //public System.DateTimeOffset? Updated { get; set; } same as above statement
        public string UpdatedBy { get; set; }
        //public bool display { get; set; }

        public virtual ApplicationUser Author { get; set; }
        public virtual BlogPost Post { get; set; }
    }
}