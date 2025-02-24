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
        public DbConnect Student {  get; set; }
        public Seats Seats { get; set; }
       
        private void LoadData()
        {
            SeatDetailsGrid.ItemsSource = _db.Seats.ToList();
        }
        public HomePage(DbConnect user)
        {
            InitializeComponent();
            Student = user;
            LoadData();
        }

        private void Bookseat(object sender, RoutedEventArgs e)
        {
            BookSeat bookSeat = new BookSeat(Student);
            bookSeat.Show();
        }

       

        private void Update(object sender, RoutedEventArgs e)
        {
            if (SeatDetailsGrid.SelectedItem is Seats s)
            {

            }
        }

        private void Delete(object sender, RoutedEventArgs e)
        {

        }

        private void SeatDetailsGrid_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
           

        }
    }
}
