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
        public DbConnect Student { get;set; }
        public BookSeat(DbConnect user)
        {
            InitializeComponent();
            Student = user;
        }

        private void BookSeatUP(object sender, RoutedEventArgs e)
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

                



                

                _db.Student.Update(Student);

                _db.SaveChanges();
                MessageBox.Show("Seat Booked Sucessfully  ");
                DialogResult = true;



            }
        }

        private void Cancel(object sender, RoutedEventArgs e)
        {
            HomePage homePage = new HomePage(Student);
            homePage.Show();
            this.Close();
        }
    }
}
