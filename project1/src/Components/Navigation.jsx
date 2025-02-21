import React from 'react'
import './Navigation.css'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
        <p  className='p1'> <Link to="./pages/Home.jsx'">Home</Link> </p>
        <p className='p1'> Book A Seat</p>
        <p className='p1'>Profile</p>
    </div>
  )
}

export default Navigation