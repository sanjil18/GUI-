const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const bcrypt = require('bcryptjs');// For password hashing
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Sign Up Endpoint
app.post('/signup', async (req, res) => {
    const { regNo, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.DbConnect.create({
            data: {
                RegNo1: regNo,
                Password: hashedPassword,
            },
        });

        res.status(201).json({ message: 'Account created successfully!', user: newUser });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(400).json({ error: 'Registration failed. Please try again.' });
    }
});

// Login Endpoint
app.post('/login', async (req, res) => {
    const { regNo, password } = req.body;

    try {
        const user = await prisma.dbConnect.findUnique({
            where: { RegNo1: regNo },
        });

        if (user && (await bcrypt.compare(password, user.Password))) {
            res.status(200).json({ message: 'Login successful!', user });
        } else {
            res.status(401).json({ error: 'Invalid credentials.' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'An error occurred. Please try again.' });
    }
});

// Book a Seat Endpoint
app.post('/book-seat', async (req, res) => {
    const { studentId, seatNo, timeLimit } = req.body;

    try {
        const newSeat = await prisma.seats.create({
            data: {
                seatsNo: seatNo,
                TimeLimit: timeLimit,
                StudentIdFORSMS: studentId,
            },
        });

        res.status(201).json({ message: 'Seat booked successfully!', seat: newSeat });
    } catch (error) {
        console.error('Booking error:', error);
        res.status(400).json({ error: 'Failed to book seat. Please try again.' });
    }
});

// Get All Booked Seats Endpoint
app.get('/booked-seats', async (req, res) => {
    try {
        const seats = await prisma.seats.findMany();
        res.status(200).json(seats);
    } catch (error) {
        console.error('Fetch seats error:', error);
        res.status(500).json({ error: 'Failed to fetch seats.' });
    }
});

// Delete a Seat Endpoint
app.delete('/delete-seat/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.seats.delete({
            where: { SeatId: parseInt(id) },
        });

        res.status(200).json({ message: 'Seat deleted successfully!' });
    } catch (error) {
        console.error('Delete seat error:', error);
        res.status(500).json({ error: 'Failed to delete seat.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
