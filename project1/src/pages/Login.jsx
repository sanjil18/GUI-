import React, { useState } from 'react';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer'; // Import Footer component correctly
import './Login.css'; // Correct path for Login.css
import { Link } from 'react-router-dom';

const Login = () => {
  // Managing input state for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ regNo: username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Login successful!');
        window.location.href = '/home';
      } else {
        alert(data.error || 'Invalid credentials.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Header1 />
      <div className="div1">
        <div className="div2">
          <h3 style={{ textAlign: 'center' }}>Login Page</h3>  {/* Corrected inline style */}
          
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
              <br></br>
              <br></br>
            </div>
            
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                
              />
              <br></br>
              <br></br>
            </div>
            
            <Link to="/home"><button className='btn' type="submit">Log in</button> </Link>
          </form>

          <p>
            Don't have an account?   
        
          <Link to="/sign-up">
                Sign Up
                </Link> 
                </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default Login;
