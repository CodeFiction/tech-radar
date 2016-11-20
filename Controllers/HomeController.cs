using Microsoft.AspNetCore.Mvc;

namespace Codefiction.TechRadar.Controllers
{
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        public HomeController()
        {
        }

        [HttpGet]
        public bool Working()
        {
            return true;
        }
    }
}
