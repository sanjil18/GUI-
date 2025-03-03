import React from 'react';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer'; // Import Footer component correctly
import Navigation from '../Components/Navigation'; // Import Footer component correctly
import './Home.css'; // Correct path for Login.css
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <Header1 /> 
        {/* Header component outside the main content */}
        <Navigation/>
        
        <div className="grp2">
          {/* Corrected the typo: Changed <diV> to <div> */}
          <div className="btngp">
            <Link to='book-seat'>
              <button className='btn1' type="submit">Book a Seat</button>
            </Link>
            <button className='btn1' type="submit">Delete</button> 
            <button className='btn1' type="submit">Update</button> 
          </div>
          <p className="hp1" style={{ textAlign: 'center' }}>
            Booked Seats up to
          </p>
        </div>
  
        <Footer /> {/* Footer component outside the main content */}
      </div>
    );
};

export default Home;
