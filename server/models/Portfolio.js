import  mongoose from 'mongoose';

// Define the structure for skills categories
const skillCategorySchema = new mongoose.Schema({
    title: String,
    skills: [String]
}, { _id: false });

// Define the structure for experience
const experienceSchema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    period: String,
    description: String,
    achievements: [String]
}, { _id: false });

// Define the structure for projects
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    tech: [String],
    github: String,
    live: String,
    image: String
}, { _id: false });

const PortfolioSchema = new mongoose.Schema({
    // CRITICAL: Link to User or Default ID
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    // --- Core Content Fields ---
    name: { type: String, default: 'New User' },
    email: { type: String, default: '' },
    github: { type: String, default: 'https://github.com' },
    linkedin: { type: String, default: 'https://linkedin.com' },
    address: { type: String, default: 'Your Location' },
    title: { type: String, default: 'Full Stack Developer' },
    summary: { type: String, default: 'Welcome to your portfolio!' },
    technologiesWorkWith:{type: [String],default:''},
    description: { type: String, default: 'I\'m a passionate developer...' },

    // --- Skills as array of categories ---
    skills: [skillCategorySchema],

    // --- Experience array ---
    experience: [experienceSchema],

    // --- Projects with featured and other ---
    projects: {
        featured: [projectSchema],
        other: [projectSchema]
    },

    lastUpdated: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.model('Portfolio', PortfolioSchema);