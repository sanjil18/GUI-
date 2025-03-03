import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className='nav1'>
      <p className='p12'><Link to="/home">Home</Link></p>
      <p className='p12'><Link to="/book-seat">Book A Seat</Link></p>
      <p className='p12'><Link to="/profile">Profile</Link></p>
    </div>
  );
}

export default Navigation;
