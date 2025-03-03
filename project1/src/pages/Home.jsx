import React, { useState } from 'react';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer'; // Import Footer component correctly
import Navigation from '../Components/Navigation'; // Import Footer component correctly
import './Home.css'; // Correct path for Login.css



const Home = () => {
    return (
      <div>
        <Header1 /> 
        {/* Header component outside the main content */}
        <Navigation/>
        
  
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