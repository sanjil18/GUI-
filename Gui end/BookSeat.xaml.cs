using System;
using System.Linq;
using System.Windows;
using System.Windows.Threading;
using Microsoft.EntityFrameworkCore;

namespace Gui_end
{
    public partial class BookSeat : Window
    {
        private readonly SignUpDbConnect _db = new SignUpDbConnect();
        public DbConnect Student { get; set; }
        public Seats Seats { get; set; }
        private DispatcherTimer _timer; // Remove readonly

        public BookSeat(DbConnect user)
        {
            InitializeComponent();
            Student = user;
            LoadData(); // Load seat details when the window opens
            StartTimer(); // Start automatic seat expiration check
        }

        private void LoadData()
        {
            try
            {
                // Ensure database is initialized
                if (_db.Seats == null)
                {
                    MessageBox.Show("Database context is not initialized properly.");
                    return;
                }

                // Load seat details for the logged-in student
                Seats = _db.Seats.AsNoTracking().FirstOrDefault(s => s.StudentIdFORSMS == Student.StudentIdFORSMS);

                if (Seats != null)
                {
                    SeatNumberInput.Text = Seats.seatsNo.ToString();
                    TimeLimitInput.Text = Seats.TimeLimit;
                }
                else
                {
                    SeatNumberInput.Text = "";
                    TimeLimitInput.Text = "";
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error loading seat data: " + ex.Message);
            }
        }

        private void BookSeatUP(object sender, RoutedEventArgs e)
        {
            try
            {
                if (!int.TryParse(SeatNumberInput.Text, out int seatNo) || seatNo < 1 || seatNo > 200)
                {
                    MessageBox.Show("Invalid Seat Number. Please enter a number between 1 and 200.");
                    return;
                }

                if (!TimeSpan.TryParseExact(TimeLimitInput.Text, "hh\\:mm", null, out TimeSpan selectedTime))
                {
                    MessageBox.Show("Invalid time format! Please enter time as HH:mm (e.g., 22:00)");
                    return;
                }

                // Check if the student already has a booked seat
                Seats existingSeat = _db.Seats.FirstOrDefault(s => s.StudentIdFORSMS == Student.StudentIdFORSMS);

                if (existingSeat == null)
                {
                    // Create a new seat booking
                    Seats newSeat = new Seats
                    {
                        seatsNo = seatNo,
                        TimeLimit = selectedTime.ToString(@"hh\:mm"),
                        StudentIdFORSMS = Student.StudentIdFORSMS
                    };

                    _db.Seats.Add(newSeat);
                }
                else
                {
                    // Update existing seat booking
                    existingSeat.seatsNo = seatNo;
                    existingSeat.TimeLimit = selectedTime.ToString(@"hh\:mm");
                    _db.Seats.Update(existingSeat);
                }

                _db.SaveChanges();
                MessageBox.Show("Seat Booked Successfully!");
                LoadData(); // Refresh UI
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error while booking seat: " + ex.Message);
            }

        }

        private void Cancel(object sender, RoutedEventArgs e)
        {
            HomePage homePage = new HomePage(Student);
            homePage.Show();
            Close();
        }

        private void StartTimer()
        {
            _timer = new DispatcherTimer(); // Remove readonly assignment issue
            _timer.Interval = TimeSpan.FromMinutes(1); // Check every minute
            _timer.Tick += CheckAndRemoveExpiredSeats;
            _timer.Start();
        }

        private void CheckAndRemoveExpiredSeats(object sender, EventArgs e)
        {
            try
            {
                var currentTime = DateTime.Now.TimeOfDay;

                // Instead of LINQ with out parameter, filter separately
                var expiredSeats = _db.Seats.ToList()
                    .Where(s => TimeSpan.TryParse(s.TimeLimit, out TimeSpan seatTime) && seatTime <= currentTime)
                    .ToList();

                if (expiredSeats.Any())
                {
                    _db.Seats.RemoveRange(expiredSeats);
                    _db.SaveChanges();
                    MessageBox.Show("Expired seats have been removed.");
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error while removing expired seats: " + ex.Message);
            }
        }
    }
}
