using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gui_end
{
    public class Seats
    {
        [Key] // Primary Key
        public int SeatId { get; set; }

        [ForeignKey("DbConnect")] // Foreign Key linking to the DbConnect (Student) table
        public int StudentIdFORSMS { get; set; }  // Foreign Key

        public int seatsNo { get; set; }
        public string TimeLimit { get; set; } // Change HourOfDay to string or appropriate type

        // Navigation Property to DbConnect (Student)
        public DbConnect DbConnect { get; set; }
    }
}
