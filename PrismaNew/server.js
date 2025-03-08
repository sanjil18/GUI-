const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables
const cors = require('cors');
const app = express();
app.use(cors()); 
const PORT = process.env.PORT || 5000;

// MySQL Database connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'seat_booking',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});

app.use(express.json());

// Sign Up Endpoint
app.post('/signup', async (req, res) => {
  const { regNo, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO Users (regNo, password) VALUES (?, ?)';
    db.query(query, [regNo, hashedPassword], (error, results) => {
      if (error) {
        console.error('Signup error:', error);
        return res.status(400).json({ error: 'Registration failed. Please try again.' });
      }
      res.status(201).json({ message: 'Account created successfully!' });
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(400).json({ error: 'Registration failed. Please try again.' });
  }
});

// Login Endpoint
app.post('/login', async (req, res) => {
  const { regNo, password } = req.body;

  try {
    const query = 'SELECT * FROM Users WHERE regNo = ?';
    db.query(query, [regNo], async (error, results) => {
      if (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: 'An error occurred. Please try again.' });
      }
      const user = results[0];

      if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({ message: 'Login successful!', user });
      } else {
        res.status(401).json({ error: 'Invalid credentials.' });
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'An error occurred. Please try again.' });
  }
});

// Book a Seat Endpoint
app.post('/book-seat', async (req, res) => {
    const { studentId, seatNo, timeLimit } = req.body;
  
    // Format the time if necessary (pad with seconds)
    const formattedTime = timeLimit.length === 5 ? `${timeLimit}:00` : timeLimit;
  
    try {
      const query = 'INSERT INTO Seats (seatsNo, TimeLimit, StudentIdFORSMS) VALUES (?, ?, ?)';
      db.query(query, [seatNo, formattedTime, studentId], (error, results) => {
        if (error) {
          console.error('Booking error:', error);
          return res.status(400).json({ error: 'Failed to book seat. Please try again.' });
        }
        res.status(201).json({ message: 'Seat booked successfully!' });
      });
    } catch (error) {
      console.error('Booking error:', error);
      res.status(400).json({ error: 'Failed to book seat. Please try again.' });
    }
  });
  

// Get All Booked Seats Endpoint
app.get('/booked-seats', (req, res) => {
  const query = 'SELECT * FROM Seats';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Fetch seats error:', error);
      return res.status(500).json({ error: 'Failed to fetch seats.' });
    }
    res.status(200).json(results);
  });
});

// Delete a Seat Endpoint
// Delete a Seat Endpoint
app.delete('/delete-seat/:id', (req, res) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(400).json({ error: 'Seat ID is required.' });
    }
  
    // Check if the seat exists
    const checkQuery = 'SELECT * FROM Seats WHERE seatsNo = ?';
    db.query(checkQuery, [id], (error, results) => {
      if (error) {
        console.error('Check seat existence error:', error);
        return res.status(500).json({ error: 'Failed to check seat.' });
      }
  
      if (results.length === 0) {
        return res.status(404).json({ error: 'Seat not found.' });
      }
  
      // Proceed with deletion if the seat exists
      const query = 'DELETE FROM Seats WHERE seatsNo = ?';
      db.query(query, [id], (error, results) => {
        if (error) {
          console.error('Delete seat error:', error);
          return res.status(500).json({ error: 'Failed to delete seat.' });
        }
        res.status(200).json({ message: 'Seat deleted successfully!' });
      });
    });
  });
  // Update Seat Booking
  app.put('/update-seat/:id', (req, res) => {
    const { id } = req.params;
    const { timeLimit } = req.body;
    
    const query = 'UPDATE Seats SET TimeLimit = ? WHERE seatsNo = ?';
    db.query(query, [timeLimit, id], (error) => {
      if (error) {
        return res.status(500).json({ error: 'Update failed' });
      }
      res.status(200).json({ message: 'Seat updated successfully!' });
    });
  });
  

  

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
