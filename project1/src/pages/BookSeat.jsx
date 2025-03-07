import React, { useState } from 'react';
import Header1 from '../Components/Header1';  // Assuming you have a Header component
import Footer from '../Components/Footer';  // Assuming you have a Footer component
import './Login.css' ;// Assuming you have the SignIn CSS file for styling
import './BookSeat.css';
import { Link } from 'react-router-dom';

const SeatBooking = () => {
  const [seatNo, setSeatNo] = useState('');
  const [time, setTime] = useState('');

  const handleSeatChange = (e) => {
    setSeatNo(e.target.value); 
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/book-seat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId: 1, seatNo, timeLimit: time }), // Replace 1 with the logged-in user's ID
      });
      const data = await response.json();
      if (response.ok) {
        alert('Seat booked successfully!');
        window.location.href = '/home';
      } else {
        alert(data.error || 'Failed to book seat. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
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
          <br></br>
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
          <br></br>
        
         <diV className="btngp">
         <Link to='/home' > <button className='btn1' type="submit">Book</button> </Link>
         <Link to='/home' > <button className='btn1' type="submit">Cancel</button> </Link>
         </diV>
        </form>
      </div>
      <br></br>
      <br></br>

      <Footer /> {/* Footer component outside the main content */}
    </div>
  );
};

export default SeatBooking;