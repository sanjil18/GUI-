using Microsoft.EntityFrameworkCore;

namespace Gui_end
{
    public class SignUpDbConnect : DbContext
    {
        public DbSet<DbConnect> Student  { get; set; }
        public DbSet<Seats> Seats { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=C:\Users\sanji\OneDrive\Desktop\Projects 24th\Github\GUI-\Database std managment\stdManagement.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure One-to-One Relationship
            modelBuilder.Entity<DbConnect>()
                .HasOne(s => s.Seats)  // A student has one seat
                .WithOne(s => s.DbConnect)  // A seat belongs to one student
                .HasForeignKey<Seats>(s => s.StudentIdFORSMS)  // Foreign Key in Seats
                .OnDelete(DeleteBehavior.Cascade);  // Cascade delete: If a student is deleted, their seat is also deleted
        }
    }
}
