using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Gui_end
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    
    public partial class MainWindow : Window
    {
        SignUpDbConnect _db = new SignUpDbConnect();
        public MainWindow()
        {
            InitializeComponent();
        }
        private void Header_Loaded(object sender, RoutedEventArgs e)
        {

        }



        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            // Retrieve input from the user
            string regNoInput = RegNoInput.Text;           // LoginRegNoInput is a TextBox
            string passwordInput = PasswordInput.Password; // LoginPasswordInput is a PasswordBox

            // Query the database for a user with the given registration number
            var user = _db.Student.FirstOrDefault(u => u.RegNo1 == regNoInput);

            if (user == null)
            {
                // User not found
                MessageBox.Show("Registration number not found. Please sign up.");
            }
            else if (user.Password != passwordInput)
            {
                // Password does not match
                MessageBox.Show("Invalid password. Please try again.");
            }
            else if(passwordInput==null||RegNoInput==null)
                {
                MessageBox.Show("Invalid Login Please Try Again ");
            }
            else
            {
                MessageBox.Show($"You are Sucessfullly Logged in Welcome Back {user.RegNo1} ");
                // Login successful, navigate to the homepage
                HomePage homePage = new HomePage(user);
                homePage.Show();

                // Close the login window (optional)
                this.Close();
            }
        }



        private void SignUpbutton(object sender, RoutedEventArgs e)
        {
            SignUp signUp = new SignUp();
            signUp.Show();
            Close();
        }

        private void RegNoInput_TextChanged(object sender, TextChangedEventArgs e)
        {

        }
    }
}

