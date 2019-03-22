using System;

namespace invoice_api.Models
{
    public class Invoice
    {
        public int Id { get; set; } 
        public int UserId { get; set; }
        public User User { get; set; }
        public int DriverId { get; set; }
        public Driver Driver { get; set; } 
        public int BusinessId { get; set; }
        public Business Business { get; set; } 
        public int InvoiceNumber { get; set; }
        public DateTime Date { get; set; }
        public string Shipper { get; set; }
        public string Consignee { get; set; }
        public DateTime DateShipped {get; set; }
        public int ShippersNumbers { get; set; }
        public string Description_Commodity { get; set; }
        public DateTime Pickup_CheckIn { get; set; }
        public DateTime Pickup_CheckOut { get; set; }
        public DateTime Dropoff_CheckIn { get; set; }
        public DateTime Dropoff_CheckOut {get; set; }
        public int Weight_Quantity { get; set; }
        public int Rate { get; set; }
        public int Charges { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}