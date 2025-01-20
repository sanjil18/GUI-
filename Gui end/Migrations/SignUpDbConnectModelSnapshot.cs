﻿// <auto-generated />
using System;
using Gui_end;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Gui_end.Migrations
{
    [DbContext(typeof(SignUpDbConnect))]
    partial class SignUpDbConnectModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "9.0.1");

            modelBuilder.Entity("Gui_end.DbConnect", b =>
                {
                    b.Property<int>("seatNo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("RegNo1")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("time")
                        .HasColumnType("TEXT");

                    b.HasKey("seatNo");

                    b.ToTable("Student");
                });
#pragma warning restore 612, 618
        }
    }
}
