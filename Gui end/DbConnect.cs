using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gui_end
{
    public class DbConnect
    {
        [Key] // Primary Key
        public int StudentIdFORSMS { get; set; }

        public string RegNo1 { get; set; }
        public string Password { get; set; }

        // One-to-One Relationship with Seats
        public Seats Seats { get; set; }  // Navigation property for the seat
    }
}
