using FlaschenpostExercise.Model;
using FlaschenpostExercise.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlaschenpostExercise.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BottleController : ControllerBase
    {
        private readonly IBottleService _bottleService;

        public BottleController(IBottleService bottleService)
        {
            _bottleService = bottleService;
        }

        [HttpGet("bottles")]
        [HttpGet("bottles/orderby={order}/{filter?}")]
        public async Task<IActionResult> GetBottles(string order, bool? filter)
        {
            try
            {
                var allBottleInfos = _bottleService.GetAllBottlesInfo() ?? throw new NullReferenceException("Stay calm! Our store is empty now! But  we are already ordering new stuffs!");
                var allBottleInfoDTOs = filter.GetValueOrDefault() ?
                    _bottleService.GetFiltredBottlesInfo(allBottleInfos, 2d) : _bottleService.GetFiltredBottlesInfo(allBottleInfos, 0);
                switch (order)
                {
                    case "asc":
                        return new JsonResult(_bottleService.GetOrderedBottlesInfo(allBottleInfoDTOs, OrderEnum.ASC));
                    case "desc":
                        return new JsonResult(_bottleService.GetOrderedBottlesInfo(allBottleInfoDTOs, OrderEnum.DESC));
                    default:
                        return new JsonResult(_bottleService.GetOrderedBottlesInfo(allBottleInfoDTOs, OrderEnum.Default));
                }
            }
            catch (NullReferenceException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (Exception)
            {
                return BadRequest(new { message = "Looks like we have some temporary problems... Try again after few seconds!" });
            }  
        }
    }
}
