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
    /// Interaction logic for HomePage.xaml
    /// </summary>
    /// 
   
    public partial class HomePage : Window
    {
        SignUpDbConnect _db = new SignUpDbConnect();
        private void LoadData()
        {
            SeatDetailsGrid.ItemsSource = _db.Student.ToList();
        }
        public HomePage()
        {
            InitializeComponent();
            LoadData();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            BookSeat bookSeat = new BookSeat();
            bookSeat.Show();
        }
    }
}
