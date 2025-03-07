import React, { useState, useEffect } from 'react';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [seats, setSeats] = useState([]);

  // Fetch booked seats from the backend
  useEffect(() => {
    const fetchBookedSeats = async () => {
      try {
        const response = await fetch('http://localhost:5000/booked-seats');
        if (!response.ok) {
          throw new Error('Failed to fetch booked seats');
        }
        const data = await response.json();
        setSeats(data);
      } catch (error) {
        console.error('Error fetching booked seats:', error);
      }
    };

    fetchBookedSeats();
  }, []);

  return (
    <div>
      <Header1 />
      <Navigation />

      <div className="grp2">
        <div className="btngp">
          <Link to="book-seat">
            <button className="btn1" type="button">
              Book a Seat
            </button>
          </Link>
          <button className="btn1" type="button">
            Delete
          </button>
          
        </div>

        <p className="hp1" style={{ textAlign: 'center' }}>
          Booked Seats up to
        </p>

        {/* Display booked seats */}
        <div className="booked-seats">
         
          {seats.length > 0 ? (
            <ul>
              {seats.map((seat) => (
                <li key={seat.SeatId}>
                  Seat Number: {seat.seatsNo}, Time Limit: {seat.TimeLimit} hours
                </li>
              ))}
            </ul>
          ) : (
            <p>No seats booked yet.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;