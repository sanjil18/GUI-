import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div>
      <p className='p1'><Link to="/home">Home</Link></p>
      <p className='p1'><Link to="/book-seat">Book A Seat</Link></p>
      <p className='p1'><Link to="/profile">Profile</Link></p>
    </div>
  );
}

export default Navigation;
