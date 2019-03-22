using System;

namespace invoice_api.Models
{
    public class Driver
    {
        public int Id { get; set; }
        public string Name { get; set; } 
        public string Address { get; set; }
        public int Number { get; set; }
        public string Email { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
       
    
    }
}