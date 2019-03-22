using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using invoice_api.Models;
using Microsoft.EntityFrameworkCore;

namespace invoice_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoicesController : ControllerBase
    {

        private DataContext _context;

        public InvoicesController(DataContext context)
        {
            _context = context;
        }

        //GET:   api/invoices
        [HttpGet]
        public ActionResult<IEnumerable<Invoice>> Get()
        {
            var invoices = _context.Invoices
                .Include(i => i.User)
                .Include(i => i.Driver)
                .Include(i => i.Business)
                .ToList();
            
            return invoices;

        }

        // GET:     api/invoices/n
        [HttpGet("{id}")]
        public ActionResult<Invoice> Get(int id)
        {
            return _context.Invoices
            .FirstOrDefault(inv => inv.Id == id);

        }

        //POST:   api/invoices
        [HttpPost]
        public void Post([FromBody] Invoice newInvoice)
        {
            // Set Dates
            newInvoice.CreatedAt = DateTime.Now;
            newInvoice.UpdatedAt = DateTime.Now;

            //Execute insert
            _context.Invoices.Add(newInvoice);
            _context.SaveChanges();

        }

        //Put :    api/invoices/n
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Invoice updatedInvoice)
        {
            var entity = _context.Invoices.FirstOrDefault(inv => inv.Id == id);

            if (entity != null)
            {
                // Update each field
                entity.UserId = updatedInvoice.UserId;
                entity.DriverId = updatedInvoice.DriverId;
                entity.BusinessId = updatedInvoice.BusinessId;
                entity.InvoiceNumber = updatedInvoice.InvoiceNumber;
                entity.Date = updatedInvoice.Date;
                entity.Shipper = updatedInvoice.Shipper;
                entity.Consignee = updatedInvoice.Consignee;
                entity.DateShipped = updatedInvoice.DateShipped;
                entity.ShippersNumbers = updatedInvoice.ShippersNumbers;
                entity.Description_Commodity = updatedInvoice.Description_Commodity;
                entity.Pickup_CheckIn = updatedInvoice.Pickup_CheckIn;
                entity.Pickup_CheckOut = updatedInvoice.Pickup_CheckOut;
                entity.Dropoff_CheckIn = updatedInvoice.Dropoff_CheckIn;
                entity.Dropoff_CheckOut = updatedInvoice.Dropoff_CheckOut;
                entity.Weight_Quantity = updatedInvoice.Weight_Quantity;
                entity.Rate = updatedInvoice.Rate;
                entity.Charges = updatedInvoice.Charges;
                entity.CreatedAt = updatedInvoice.CreatedAt;
                entity.UpdatedAt = DateTime.Now;

                // Execute and save the changes in the database
                _context.Invoices.Update(entity);
                _context.SaveChanges();
            }
        }

        // DELETE:  api/invoices/n
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var entity = _context.Invoices.FirstOrDefault(inv => inv.Id == id);

            if (entity != null)
            {
                _context.Invoices.Remove(entity);
                _context.SaveChanges();
            }
        }
    }

}