import React, { useState } from 'react';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer'; // Import Footer component correctly
import './Login.css'; // Correct path for Login.css
import { Link } from 'react-router-dom';


const SignUp = () => {
    // State to store the form values
    const [regNo, setRegNo] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (password1 !== password2) {
        alert('Both passwords do not match. Please try again.');
        return;
      }
      try {
        const response = await fetch('http://localhost:5000/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ regNo, password: password1 }),
        });
        const data = await response.json();
        if (response.ok) {
          alert('Account created successfully!');
          window.location.href = '/login';
        } else {
          alert(data.error || 'Registration failed. Please try again.');
        }
      } catch (error) {
        alert('An error occurred. Please try again.');
      }
    };
  
    return (
      <div>
        <Header1 />
        
        <div className="div1">
          <h3 style={{ textAlign: 'center' }}>Sign Up Page</h3>
          
          <form onSubmit={handleSubmit}>
            <label>Your Reg No:</label>
            <input
              type="text"
              name="Userid"
              placeholder='Enter the Reg No'
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              required
            />
            <br /><br />
            
            <label>Input Password:</label>
            <input
              type="password"
              id="password1"
              name="Password1"
              placeholder='Enter the password'
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required
            />
            <br /><br />
            
            <label>Confirm Password:</label>
            <input
              type="password"
              id="password2"
              name="Password2"
              placeholder='Enter the password again '
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
            <br /><br />
            <Link to="/login">
      
            <button className='btn' type="submit">Sign Up</button> </Link>
          </form>
        </div>
       <br></br>
       <br></br>
       <br></br>
        <Footer />
      </div>
    );
  };
  
  export default SignUp;