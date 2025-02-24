﻿// <auto-generated />
using Gui_end;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Gui_end.Migrations
{
    [DbContext(typeof(SignUpDbConnect))]
    [Migration("20250223144932_InitialCreate7")]
    partial class InitialCreate7
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "9.0.1");

            modelBuilder.Entity("Gui_end.DbConnect", b =>
                {
                    b.Property<int>("StudentIdFORSMS")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("RegNo1")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("StudentIdFORSMS");

                    b.ToTable("Student");
                });

            modelBuilder.Entity("Gui_end.Seats", b =>
                {
                    b.Property<int>("SeatId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("StudentIdFORSMS")
                        .HasColumnType("INTEGER");

                    b.Property<string>("TimeLimit")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("seatsNo")
                        .HasColumnType("INTEGER");

                    b.HasKey("SeatId");

                    b.HasIndex("StudentIdFORSMS")
                        .IsUnique();

                    b.ToTable("Seats");
                });

            modelBuilder.Entity("Gui_end.Seats", b =>
                {
                    b.HasOne("Gui_end.DbConnect", "DbConnect")
                        .WithOne("Seats")
                        .HasForeignKey("Gui_end.Seats", "StudentIdFORSMS")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("DbConnect");
                });

            modelBuilder.Entity("Gui_end.DbConnect", b =>
                {
                    b.Navigation("Seats")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
