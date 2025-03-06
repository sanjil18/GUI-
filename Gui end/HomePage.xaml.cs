using System;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Threading;
using System.Collections.ObjectModel;

namespace Gui_end
{
    public partial class HomePage : Window
    {
        private readonly SignUpDbConnect _db = new SignUpDbConnect();
        public DbConnect Student { get; set; }
        private readonly DispatcherTimer _timer;
        public ObservableCollection<Seats> SeatsCollection { get; set; }


        public HomePage(DbConnect user)
        {
            InitializeComponent();
            Student = user;
            LoadData();

            // Initialize and start the timer
            _timer = new DispatcherTimer();
            _timer.Interval = TimeSpan.FromMinutes(1); // Check every 1 minute
            _timer.Tick += CheckExpiredSeats;
            _timer.Start();
        }

        private void LoadData()
        {
            SeatsCollection = new ObservableCollection<Seats>(_db.Seats.ToList());
            SeatDetailsGrid.ItemsSource = SeatsCollection;
        }

        private void CheckExpiredSeats(object sender, EventArgs e)
        {
            try
            {
                var now = DateTime.Now.TimeOfDay; // Get current time in HH:mm format

                // First, retrieve all seats
                var allSeats = _db.Seats.ToList();

                // Filter expired seats by parsing TimeLimit separately
                var expiredSeats = allSeats.Where(s =>
                    TimeSpan.TryParse(s.TimeLimit, out TimeSpan seatTime) && seatTime <= now
                ).ToList();

                if (expiredSeats.Any())
                {
                    _db.Seats.RemoveRange(expiredSeats);
                    _db.SaveChanges();
                    LoadData(); // Refresh DataGrid
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error checking expired seats: " + ex.Message);
            }
        }

        

        private void SeatDetailsGrid_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            // No need to implement anything here for now
        }

        private void BookSeat(object sender, RoutedEventArgs e)
        {
            BookSeat bookSeat = new BookSeat(Student);
            bookSeat.ShowDialog(); // Ensure window is closed before continuing
            LoadData(); // Refresh DataGrid after booking
        }

        private void Delete(object sender, RoutedEventArgs e)
        {
            if (SeatDetailsGrid.SelectedItem is Seats selectedSeat)
            {
                _db.Seats.Remove(selectedSeat);
                _db.SaveChanges();
                _db.ChangeTracker.DetectChanges();

                LoadData(); // Refresh DataGrid
            }

        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Preview preview = new Preview();
            preview.Show();
            this.Close();
        }
    }

}

