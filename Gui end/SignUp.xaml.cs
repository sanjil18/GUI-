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
    /// Interaction logic for SignUp.xaml
    /// </summary>
    public partial class SignUp : Window
    {
        SignUpDbConnect _db = new SignUpDbConnect();
        public SignUp()
        {

            InitializeComponent();

        }

        private void SignUpButton(object sender, RoutedEventArgs e)
        {
            // Assuming SignupPasswordInput is a PasswordBox and SignupConfirmPasswordInput is another PasswordBox
            if (SignupPasswordInput.Password != SignupConfirmPasswordInput.Password)
            {
                MessageBox.Show("Both Passwords Not Matched ");
            }
            else
            {
               
                DbConnect newUser = new DbConnect();

                
                newUser.Password = SignupPasswordInput.Password; 
                newUser.RegNo1 = SignupRegNoInput.Text;   
                
                _db.Student.Add(newUser);

                _db.SaveChanges();
                MessageBox.Show("Account Created Sucessfully ");
                MainWindow mainWindow = new MainWindow();
                mainWindow.Show();
                Close();
            }
        }




    }
}

