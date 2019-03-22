using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using invoice_api.Models;

namespace invoice_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusinessController : ControllerBase
    {
        private DataContext _context;
        
        public BusinessController(DataContext context)
        {
            _context = context;
        }
        
        // GET api/business
        [HttpGet]
        public ActionResult<IEnumerable<Business>> Get()
        {
            return _context.Businesses;
        }

        // GET api/business/5
        [HttpGet("{id}")]
        public ActionResult<Business> Get(int id)
        {
            return _context.Businesses
                // Find the first one that meets this condition 
                .FirstOrDefault(busns => busns.Id == id);
        }

        // POST api/business
        [HttpPost]
        public void Post([FromBody] Business newBusiness)
        {
            // Set Dates
            newBusiness.CreatedAt = DateTime.Now;
            newBusiness.UpdatedAt = DateTime.Now;
            
            // Execute insert
            _context.Businesses.Add(newBusiness);
            _context.SaveChanges();
        }

        // PUT api/business/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Business updatedBusiness)
        {
            var entity = _context.Businesses.FirstOrDefault(busns => busns.Id == id);

            if (entity != null)
            {
                // Update each field
                entity.BusinessName = updatedBusiness.BusinessName;
                entity.BusinessAddress = updatedBusiness.BusinessAddress;
                entity.BusinessNumber = updatedBusiness.BusinessNumber;
                entity.BusinessFax = updatedBusiness.BusinessFax;        
                
                // Execute and save the changes in the database
                _context.Businesses.Update(entity);
                _context.SaveChanges();
            }
        }

        // DELETE api/business/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var entity = _context.Businesses.FirstOrDefault(busns => busns.Id == id);

            if (entity != null)
            {
                _context.Businesses.Remove(entity);
                _context.SaveChanges();
            }
        }
    }
}