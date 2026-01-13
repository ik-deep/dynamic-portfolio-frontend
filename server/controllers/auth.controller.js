// /server/controllers/auth.controller.js

import User from '../models/User.js';
import Portfolio from '../models/Portfolio.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Default portfolio data for new users
const defaultPortfolioData = {
    name: "New User",
    email: "",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    address: "Your Location",
    title: "Full Stack Developer",
    summary: "Welcome to your portfolio! Edit this content using the Custom Form to personalize your portfolio.",
    description: "I'm a passionate developer focused on creating amazing web experiences. Update this section to tell your story and showcase your skills.",
    technologiesWorkWith: ['JavaScript (ES6+)', 'TailwindCSS', 'React', 'MongoDB', 'Express', 'Angular', 'Node.js', 'MySQL'],
    skills: [
        {
        title: 'Frontend',
        skills: ['React', 'JavaScript', 'Angular.js', 'Tailwind CSS', 'HTML/CSS', 'Redux Toolkit', 'Bootstrap', 'MUI']
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'REST APIs', 'JWT Authentication']
    },
    {
        title: 'Programming Languages',
        skills: ['Java (Core)', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3']
    },
    {
        title: 'Tools & Others',
        skills: ['Git/GitHub', 'Docker', 'Postman', 'Figma', 'VS Code', 'Agile/Scrum']
    },
    {
        title: 'Soft Skills',
        skills: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Leadership']
    }
],
    experience: [
        {
            title: 'Your Job Title',
            company: 'Company Name',
            location: 'Location',
            period: 'Start - End Date',
            description: 'Add your work experience here. Describe your role and responsibilities.',
            achievements: [
                'Add your key achievements',
                'Highlight your impact',
                'Showcase your skills'
            ]
        }
    ],
    projects: {
        featured: [
            {
                title: 'Your Featured Project',
                description: 'Describe your amazing project here. What technologies did you use? What problems did it solve?',
                tech: ['React', 'Node.js', 'MongoDB'],
                github: 'https://github.com',
                live: 'https://example.com',
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
            }
        ],
        other: [
            {
                title: 'Side Project',
                description: 'Another project you worked on',
                tech: ['JavaScript', 'CSS'],
                image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop'
            }
        ]
    }
};

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

        // Create default portfolio for new user
        const portfolioData = {
            ...defaultPortfolioData,
            userId: user._id,
            email: email
        };
        
       const portfolio =   await Portfolio.create(portfolioData);
    
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