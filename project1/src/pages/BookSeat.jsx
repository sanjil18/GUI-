import React, { useState } from 'react';
import Header1 from '../Components/Header1';  // Assuming you have a Header component
import Footer from '../Components/Footer';  // Assuming you have a Footer component
import './Login.css' ;// Assuming you have the SignIn CSS file for styling
import './BookSeat.css';

const SeatBooking = () => {
  const [seatNo, setSeatNo] = useState('');
  const [time, setTime] = useState('');

  const handleSeatChange = (e) => {
    setSeatNo(e.target.value); 
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to process the booking information
    alert(`Seat ${seatNo} booked for ${time} hours`);
  };

  return (
    <div>
      <Header1 /> {/* Header component outside the main content */}
      
      <div className='div1'>
        <h3 style={{ textAlign: 'center' }}>Seat Booking</h3>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label>Seat NO (1-150):</label>
            <input
              type="number"
              name="Seat no"
              value={seatNo}
              onChange={handleSeatChange}
              required
            />
          </div>
          <div>
            <label>Time in hours:</label>
            <input
              type="time"
              name="Time"
              value={time}
              onChange={handleTimeChange}
              required
            />
          </div>
          <button type="submit">Book</button>
          
        </form>
      </div>

      <Footer /> {/* Footer component outside the main content */}
    </div>
  );
};

export default SeatBooking;
