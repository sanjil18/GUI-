using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Text;
using System.Threading.Tasks;

namespace Gui_end
{
    public class SignUpClass
    {
        public int Id { get; set; } // Primary key
        public string RegNo { get; set; } // Corrected property naming
        public String Password1 { get; set; }
        public String Password2 { get; set; }
    }

}
