// /server/controllers/auth.controller.js

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Helper to generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '7d', // Token expires in 30 days
    });
};

// @route POST /api/auth/register
const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = await User.create({
            email,
            password: hashedPassword,
        });

        // Generate token and send back
        res.status(201).json({
            message: 'User registered successfully',
            token: generateToken(user._id),
            userId: user._id,
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error during registration', error });
    }
};

// @route POST /api/auth/login
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Must explicitly select password as we set select: false in model
        const user = await User.findOne({ email }).select('+password'); 

        if (user && (await bcrypt.compare(password, user.password))) {
            // Success: return token
            res.json({
                message: 'Login successful',
                token: generateToken(user._id),
                userId: user._id,
            });
        } else {
            // Failure
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error during login', error });
    }
};

// @route POST /api/auth/logout
const logout = async (req, res) => {
    try {
        res.json({
            message: 'Logout successful'
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error during logout', error });
    }
};

export {
    register,
    login,
    logout
};