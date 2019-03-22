using System;

namespace invoice_api.Models
{
    public class Business 
    {
        public int Id { get; set; }
        public string BusinessName { get; set; } 
        public string BusinessAddress { get; set; }
        public int BusinessNumber { get; set; }
        public int BusinessFax { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

    
    }
}