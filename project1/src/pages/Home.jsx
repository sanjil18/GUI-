import React, { useState } from 'react';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer'; // Import Footer component correctly
import './Home.css'; // Correct path for Login.css



const Home = () => {
    return (
      <div>
        <Header1 /> {/* Header component outside the main content */}
  
        <div className="grp1">
          <p className="hp1">
            <a href="Home.html">Home</a>
          </p>
          <p className="hp1">
            <a href="book a seat.html">Book a Seat</a>
          </p>
          <p className="hp1">
            <a href="profile.html">Profile</a>
          </p>
        </div>
  
        <div className="grp2">
          <p className="hp1" style={{ textAlign: 'center' }}>
            Booked Seats up to
          </p>
        </div>
  
        <Footer /> {/* Footer component outside the main content */}
      </div>
    );
  };
  
  export default Home;