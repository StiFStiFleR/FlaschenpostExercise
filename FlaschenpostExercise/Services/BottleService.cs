using FlaschenpostExercise.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;

namespace FlaschenpostExercise.Services
{
    public interface IBottleService
    {
        IEnumerable<BottleInfo> GetAllBottlesInfo();
        IEnumerable<BottleInfoDTO> GetOrderedBottlesInfo(IEnumerable<BottleInfoDTO> bottles, OrderEnum order);
        IEnumerable<BottleInfoDTO> GetFiltredBottlesInfo(IEnumerable<BottleInfo> bottles, double value);
    }
    public class BottleService : IBottleService
    {
        /// <summary>
        /// Get all collection of BottleInfo from JSON by direct URL
        /// </summary>
        /// <returns>Collection of BottleInfo</returns>
        public IEnumerable<BottleInfo> GetAllBottlesInfo()
        {
            using (WebClient wc = new WebClient())
            {
                var json = wc.DownloadString("https://flapotest.blob.core.windows.net/test/ProductData.json");

                IEnumerable<BottleInfo> list = JsonConvert.DeserializeObject<IEnumerable<BottleInfo>>(json);
                return list;
            }
        }

        /// <summary>
        /// Filtering collection by price per liter
        /// </summary>
        /// <param name="bottles">Enumarable collection of filtering objects</param>
        /// <param name="value">Price value</param>
        /// <returns>Filtered collection of BottleInfo objects which price per liter is greater than setted value</returns>
        public IEnumerable<BottleInfoDTO> GetFiltredBottlesInfo(IEnumerable<BottleInfo> bottles, double value)
        {
            var dtos = new List<BottleInfoDTO>();
            foreach (var bottle in bottles)
            {
                foreach (var item in bottle.Articles.Where(f => double.Parse(f.PricePerUnitText.Substring(1).Replace(" €/Liter)", "")) > value))
                {
                    dtos.Add(new BottleInfoDTO(bottle.Name, item.Image, item.ShortDescription, item.Price));
                }
            }
            return dtos;
        }

        /// <summary>
        /// Ordering incoming collection of BottleInfoDTO
        /// </summary>
        /// <param name="bottles">Enumarable collection of sorting objects</param>
        /// <param name="order">Ordering direction</param>
        /// <returns>Orded collection of BottleInfoDTO by direction</returns>
        IEnumerable<BottleInfoDTO> IBottleService.GetOrderedBottlesInfo(IEnumerable<BottleInfoDTO> bottles, OrderEnum order)
        {
            if (bottles == null || order == OrderEnum.Default)
            {
                return bottles;
            }
            return order == OrderEnum.ASC ? bottles.OrderBy(f => f.Price) : bottles.OrderByDescending(f => f.Price);
        }
    }
}
