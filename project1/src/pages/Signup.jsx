import React, { useState } from 'react';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer'; // Import Footer component correctly
import './Login.css'; // Correct path for Login.css


const SignUp = () => {
    // State to store the form values
    const [regNo, setRegNo] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validate passwords
      if (password1 !== password2) {
        alert('Both passwords do not match. Please try again.');
      } else {
        alert('Sign-up successful! Press OK to continue...');
        window.location.href = 'sign in.html';  // Redirect to the sign-in page
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
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
            <br /><br />
            
            <button type="submit">Sign Up</button>
          </form>
        </div>
  
        <Footer />
      </div>
    );
  };
  
  export default SignUp;