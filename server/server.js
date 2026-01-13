import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import clc from "cli-color";

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Adjust origin as needed
app.use(express.json()); // Body parser for JSON
app.use(express.urlencoded({ extended: true }));

// Route Imports
import authRoutes from './routes/auth.routes.js';
import portfolioRoutes from './routes/portfolio.routes.js';

// Route Mappings
app.use('/api/auth', authRoutes);
app.use('/api/portfolio', portfolioRoutes);

// Simple Health Check
app.get('/', (req, res) => {
    res.status(200).send('Portfolio Backend API is running!');
});

// Start Server
app.listen(PORT, () => {
     console.log(clc.yellowBright.underline.bold(`server is runing on port:${PORT}`));
});