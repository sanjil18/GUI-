using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gui_end
{
    public class Seats
    {
        [Key] 
        public int SeatId { get; set; }

        [ForeignKey("DbConnect")]
        public int StudentIdFORSMS { get; set; }  

        public int seatsNo { get; set; }
        public string TimeLimit { get; set; } 

       
        public DbConnect DbConnect { get; set; }
    }
}
