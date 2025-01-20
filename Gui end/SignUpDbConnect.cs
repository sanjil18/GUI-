using Microsoft.EntityFrameworkCore;


namespace Gui_end
{
    public class SignUpDbConnect :DbContext
    {
        public DbSet<DbConnect> Student { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=C:\Users\sanji\OneDrive\Desktop\Database std managment\stdDB.db");
        }
    }
}
