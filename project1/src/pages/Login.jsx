import React, { useState } from 'react';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer'; // Correct path for Footer component
import './Login.css'; // Correct path for Login.css
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for better redirection

const Login = () => {
  // Managing input state for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // To store error message
  const navigate = useNavigate(); // For redirecting after successful login

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
        navigate('/home'); // Use React Router's navigate for redirection
      } else {
        setErrorMessage(data.error || 'Invalid credentials.'); // Set error message from backend
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-page">
     
      <div className="login-container">
        <h3 className="login-title">Login Page</h3>
        
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
          </div>
          
          <button className="btn" type="submit">Log in</button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error if any */}

        <p >
          Don't have an account?   
          <Link to="/sign-up">
            Sign Up
          </Link> 
        </p>
      </div>
      
    </div>
  );
};

export default Login;
