import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import clc from "cli-color";
import  insertDefaultPortfolio  from './utils/seedDefaultData.js';

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database and Seed Default Data
connectDB().then(() => {
    // Crucial step: Ensure the default data is available
    insertDefaultPortfolio(); 
});

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Adjust origin as needed
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