using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Gui_end
{
    /// <summary>
    /// Interaction logic for BookSeat.xaml
    /// </summary>
    public partial class BookSeat : Window
    {
        SignUpDbConnect _db = new SignUpDbConnect();
        public BookSeat()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {   
            int seatNOconvert= Convert.ToInt32(SeatNumberInput.Text);
            DateTime hours = Convert.ToDateTime(TimeLimitInput.Text);
            if (seatNOconvert < 0 || seatNOconvert > 200)
            {   
                DialogResult=false;
                MessageBox.Show("Invalid Seat No ");
            }
            else
            {
                DbConnect Seatbooking = new DbConnect();



                Seatbooking.seatNo = Convert.ToInt32(SeatNumberInput.Text);
                Seatbooking.time = Convert.ToDateTime(TimeLimitInput.Text);

                _db.Student.Add(Seatbooking);

                _db.SaveChanges();
                MessageBox.Show("Seat Booked Sucessfully  ");
                DialogResult = true;



            }
        }
    }
}
