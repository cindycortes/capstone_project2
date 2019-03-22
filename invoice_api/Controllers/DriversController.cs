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
    public class DriversController : ControllerBase
    {
        // Declare the UserContext
        private DataContext _context;

        public DriversController(DataContext context)
        {
            _context = context;
        }
        
        // GET api/users
        [HttpGet]
        public ActionResult<IEnumerable<Driver>> Get()
        {
            return _context.Drivers;
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public ActionResult<Driver> Get(int id)
        {
            return _context.Drivers
                // Find the first user that meets this condition
                .FirstOrDefault(driver => driver.Id == id);
        }

        // POST api/users
        [HttpPost]
        public void Post([FromBody] Driver newDriver)
        {
            // Set Dates
            newDriver.CreatedAt = DateTime.Now;
            newDriver.UpdatedAt = DateTime.Now;
            
            // Execute insert
            _context.Drivers.Add(newDriver);
            _context.SaveChanges();

        }

        // PUT api/users/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Driver updatedDriver)
        {
            var entity = _context.Drivers.FirstOrDefault(driver => driver.Id == id);

            // If the user can be found
            if (entity != null)
            {
                // Update each field
                entity.Name = updatedDriver.Name;
                entity.Address = updatedDriver.Address;
                entity.Number = updatedDriver.Number;
                entity.UpdatedAt = DateTime.Now;
                
                // Execute and save the changes in the database
                _context.Drivers.Update(entity);
                _context.SaveChanges();
            }
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var entity = _context.Drivers.FirstOrDefault(driver => driver.Id == id);

            if (entity != null)
            {
                _context.Drivers.Remove(entity);
                _context.SaveChanges();
            }
        }
    }
}