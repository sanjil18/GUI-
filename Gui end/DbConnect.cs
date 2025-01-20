using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gui_end
{
    public class DbConnect
    {
        
        public string RegNo1 { get; set; }
        public string Password { get; set; }
        [Key]
        public int seatNo //primary key
        { get; set; }
        public DateTime time { get; set; }
    }
}
