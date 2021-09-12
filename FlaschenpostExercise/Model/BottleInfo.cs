using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlaschenpostExercise.Model
{
    public class BottleInfo
    {
        public int Id { get; set; }
        public string BrandName { get; set; }
        public string Name { get; set; }
        public string DescriptionText { get; set; }
        public List<BottleArticle> Articles { get; set; }
    }
}
