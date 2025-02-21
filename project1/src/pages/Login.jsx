import React, { useState } from 'react';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer'; // Import Footer component correctly
import './Login.css'; // Correct path for Login.css

const Login = () => {
  // Managing input state for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, using `username` and `password`
    console.log('Username:', username);
    console.log('Password:', password);
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

            <button type="submit">Log in</button>
          </form>

          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
