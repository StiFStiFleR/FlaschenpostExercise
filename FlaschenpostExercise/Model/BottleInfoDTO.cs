using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlaschenpostExercise.Model
{
    public class BottleInfoDTO
    {
        public string Name { get; set; }
        public string Image { get; set; }
        public string ShortDescription { get; set; }
        public double Price { get; set; }

        public BottleInfoDTO(string name, string image, string shortDescription, double price)
        {
            Name = name;
            Image = image;
            ShortDescription = shortDescription;
            Price = price;
        }
    }
}
