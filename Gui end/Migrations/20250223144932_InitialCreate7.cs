using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gui_end.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "seatNo",
                table: "Student");

            migrationBuilder.DropColumn(
                name: "time",
                table: "Student");

            migrationBuilder.CreateTable(
                name: "Seats",
                columns: table => new
                {
                    SeatId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    StudentIdFORSMS = table.Column<int>(type: "INTEGER", nullable: false),
                    seatsNo = table.Column<int>(type: "INTEGER", nullable: false),
                    TimeLimit = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Seats", x => x.SeatId);
                    table.ForeignKey(
                        name: "FK_Seats_Student_StudentIdFORSMS",
                        column: x => x.StudentIdFORSMS,
                        principalTable: "Student",
                        principalColumn: "StudentIdFORSMS",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Seats_StudentIdFORSMS",
                table: "Seats",
                column: "StudentIdFORSMS",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Seats");

            migrationBuilder.AddColumn<int>(
                name: "seatNo",
                table: "Student",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "time",
                table: "Student",
                type: "TEXT",
                nullable: true);
        }
    }
}
